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
  cn,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import CustomSwitch from "../../assets/CustomSwitch";
import { HTMLMotionProps } from "framer-motion";
import { IoMdMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
export type MotionProps = HTMLMotionProps<"div">;
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = React.useState(theme === "light");

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="w-full bg-transparent px-0 flex items-center justify-between"
      disableAnimation={false}
    >
      <NavbarBrand className="pz-0">
        <h1 className="text-2xl font-inter">
          <b>LADA </b>MASKO.
        </h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link href="/" color="foreground">
            <h3 className="text-2xl font-normal">HOME</h3>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/skills" color="foreground">
            <h3 className="text-2xl">SKILLS</h3>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects" color="foreground">
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
        <NavbarMenuItem className="w-full flex justify-center absolute bottom-10 left-2">
          {/* <CustomSwitch
            defaultSelected
            value={theme}
            onChange={(e) => {
              setTheme(e.target.checked ? "light" : "dark");
            }}
          /> */}
          <Switch
            defaultSelected
            size="md"
            isSelected={isSelected}
            onValueChange={(e) => {
              setTheme(e ? "light" : "dark");
              setIsSelected(e);
            }}
            startContent={<IoIosSunny />}
            endContent={<IoMdMoon />}
            classNames={{
              base: "cursor-pointer p-4",
              wrapper:
                "p-0 h-4 overflow-visible bg-danger-100 group-data-[selected=true]:bg-danger-100 group-data-[selected=true]:text-danger-900",
              thumb: cn(
                "w-6 h-6 border-2 shadow-lg bg-danger-600",
                "border-danger-700 group-data-[hover=true]:border-danger-100",
                "group-data-[selected=true]:ml-6 ",
                "group-data-[pressed=true]:w-7",
                "group-data-[selected]:group-data-[pressed]:ml-4"
              ),
            }}
          />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
