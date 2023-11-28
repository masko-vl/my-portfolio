import React from "react";
import {
  Switch,
  useSwitch,
  VisuallyHidden,
  SwitchProps,
} from "@nextui-org/react";
import { IoMdMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";

const CustomSwitch = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-gradient-to-r light:from-red-950 light:to-red-300  dark:from-purple-950 dark:to-red-300",
            ],
          })}
        >
          {isSelected ? <IoIosSunny /> : <IoMdMoon />}
        </div>
      </Component>
    </div>
  );
};

export default CustomSwitch;
