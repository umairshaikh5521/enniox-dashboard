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
import logo from "@/public/images/logo.png";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import NavLinks from "./nav-links";

type Props = {};

const DashSidebar = (props: Props) => {
  return (
    <div className="hidden border-r  md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center px-4 lg:h-[80px] lg:px-6 border-b">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src={logo} alt="Logo" className="w-[150px] " />
          </Link>
          {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button> */}
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 space-y-2 text-sm font-medium lg:px-4">
            <NavLinks />
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Instant Quotation</CardTitle>
              <CardDescription>
                Get instant pricing, lead times, and DFM feedback for custom
                manufacturing
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Get Instant Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
