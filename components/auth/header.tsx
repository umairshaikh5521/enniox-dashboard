import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/images/logo.png";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Image src={logo} alt="Logo" className="w-[200px]  mb-2" />
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
