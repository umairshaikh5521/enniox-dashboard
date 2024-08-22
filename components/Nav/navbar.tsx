import React from "react";
import { UserNav } from "./user-nav";
import { UserButton } from "../auth/user-button";

type Props = {
  title: string;
};

const Navbar = ({ title }: Props) => {
  return (
    <div className="flex bg-white lg:flex-row lg:items-center lg:space-x-4 lg:space-x-6  lg:static transition-all ease-linear justify-between  py-3 pb-4 w-full mb-6 ">
      <h2 className="text-2xl font-bold">{title}</h2>

      <UserButton />
    </div>
  );
};

export default Navbar;
