import React from "react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserButton } from "../auth/user-button";
import NavLinks from "./nav-links";
import HamMenu from "./ham-menu";

type Props = {};

const DashNavbar = (props: Props) => {
  return (
    <header className="flex h-14 items-center gap-4 border-b  px-4 lg:min-h-[80px] lg:px-6">
      <HamMenu />
      <div className="w-full flex-1">
        {/* <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form> */}
      </div>
      <UserButton />
    </header>
  );
};

export default DashNavbar;
