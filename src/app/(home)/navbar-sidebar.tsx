import React from "react";
import { NavbarProps } from "./navbar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

type Props = {
  items: NavbarProps[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function NavbarSidebar({ items, open, onOpenChange }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-2xl font-medium" onClick={() => onOpenChange(false)}>
              {item.children}
            </Link>
          ))}
          <div className="border-t pt-6 mt-6">
            <Link onClick={() => onOpenChange(false)} href='/login' className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-2xl font-medium">Log in</Link>
            <Link onClick={() => onOpenChange(false)} href='/sign-up' className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-2xl font-medium">Sign up</Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
