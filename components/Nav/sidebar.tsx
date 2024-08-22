"use client";
import React from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import logo from "@/public/logo.svg";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Sidebar = ({ className, ...props }: Props) => {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/",
      icon: <IoHomeOutline size={20} />,
    },
    {
      name: "My Team",
      href: "/my-team",
      icon: <IoPeopleOutline size={20} />,
    },
    {
      name: "Hire Talent",
      href: "/hire-talent",
      icon: <IoIosAddCircleOutline size={20} />,
    },
    {
      name: "Search Talent",
      href: "/search-talent",
      icon: <CiSearch size={20} />,
    },
    {
      name: "Payroll",
      href: "/payroll",
      icon: <IoHomeOutline size={20} />,
    },
  ];

  return (
    <div className="pt-6 px-3 h-full bg-white min-h-screen border-r ">
      <Image src={logo} alt="logo" className="h-[30px]" />
      <nav
        className={cn(
          "flex mt-7 space-x-2 flex-col lg:space-x-0 lg:space-y-2 overflow-auto",
          className
        )}
        {...props}
      >
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "bg-transparent ",
              "justify-start text-md py-3 h-12 flex items-center gap-2"
            )}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
