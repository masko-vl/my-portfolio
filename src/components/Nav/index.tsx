import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Switch,
  Link,
  Button,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import CustomSwitch from "../../assets/CustomSwitch";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="w-full bg-transparent px-0 flex items-center justify-between"
    >
      <NavbarBrand className="pz-0">
        <h1 className="text-2xl font-inter">
          <b>LADA </b>MASKO.
        </h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link href="/">
            <h3 className="text-2xl font-normal">HOME</h3>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/skills">
            <h3 className="text-2xl">SKILLS</h3>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects">
            <h3 className="text-2xl">PROJECTS</h3>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu className="z-100 mt-8 flex flex-col justify-center items-start font-barlow">
        <NavbarMenuItem key={`home`} className="w-full">
          <Button
            href="/"
            as={Link}
            color="danger"
            variant="flat"
            fullWidth={true}
            className="h-28"
          >
            <h3 className="text-3xl font-semibold">HOME</h3>
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem key={`skills`} className="w-full">
          <Button
            href="/skills"
            as={Link}
            color="danger"
            variant="flat"
            fullWidth={true}
            className="h-28"
          >
            <h3 className="text-3xl font-semibold">SKILLS</h3>
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem key="projects" className="w-full">
          <Button
            href="/projects"
            as={Link}
            color="danger"
            variant="flat"
            fullWidth={true}
            className="h-28"
          >
            <h3 className="text-3xl font-semibold">PROJECTS</h3>
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-1/2">
          <CustomSwitch
            defaultSelected
            value={theme}
            onChange={(e) => {
              setTheme(e.target.checked ? "light" : "dark");
            }}
          />
          {/* <Switch
            defaultSelected
            size="md"
            value={theme}
            onChange={(e) => {
              setTheme(e.target.checked ? "light" : "dark");
            }}
          >
            Dark mode
          </Switch> */}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
