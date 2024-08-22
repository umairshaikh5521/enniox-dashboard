import React from "react";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "../ui/badge";

type Props = {};

const NavLinks = (props: Props) => {
  return (
    <>
      <Link
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-foreground hover:text-foreground"
      >
        <Home className="h-5 w-5" />
        Dashboard
      </Link>

      <Link
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Package className="h-5 w-5" />
        Instant Quote
      </Link>
      <Link
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl  px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <ShoppingCart className="h-5 w-5" />
        Orders
        {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge> */}
      </Link>

      {/* <Link
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Users className="h-5 w-5" />
        Customers
      </Link>
      <Link
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <LineChart className="h-5 w-5" />
        Analytics
      </Link> */}
    </>
  );
};

export default NavLinks;
