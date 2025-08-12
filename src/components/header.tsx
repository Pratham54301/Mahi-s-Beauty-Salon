"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const servicesMenu = {
  title: "SERVICES",
  href: "/#services",
  columns: [
    {
      title: "Skin",
      items: ["Body Care", "Facials", "Clean up"],
    },
    {
      title: "Hair",
      items: ["Haircut", "Colors", "Texture", "Hair Spa", "Hair Style"],
    },
    {
      title: "Makeup",
      items: ["Party Makeup", "Bridal Makeup", "Special Occasion", "Makeup"],
    },
    {
      title: "Hand & Feet",
      items: ["Manicure", "Pedicure", "Nails", "Gel Polish", "Extensions"],
    },
  ],
};

const shopMenu = {
  title: "SHOP",
  href: "/shop",
  columns: [
    {
      title: "Hair",
      items: ["Hair Oil", "Hair Serum", "Hair Shampoo", "Hair Conditioner", "Hair Cream and Masks", "Hair Treatment & Styling", "Hair Kits"],
    },
    {
      title: "Skin",
      items: ["Face Care", "Moisturizers", "Facewash & Cleansers", "Exfoliants", "Toners", "Sunscreen", "Facial Kit", "Skin Serum", "Hand & Foot Care"],
    },
    {
      title: "Make Up",
      items: ["Foundation & Compact", "Eye Makeup", "Eyeliner", "Mascara", "Lips", "Nail Polish", "MakeUp Serum", "Bridal Cosmetics"],
    },
    {
      title: "Brands",
      items: ["Beauty Garage", "Bombay Shaving Company", "Brillare", "Christine Valmy", "De Fabulous", "Dermalogica", "Lakme", "Lakme Salon", "Explore All"],
    },
  ],
};

const otherMenus = [
  { title: "BRIDAL", href: "/#bridal" },
  { title: "RUNWAY REWARDS", href: "/#runway-rewards" },
  { title: "OFFER", href: "/offer" },
  { title: "FRANCHISE", href: "/#franchise" },
  { title: "SALON LOCATOR", href: "/#salon-locator" },
  { title: "CONTACT", href: "/#contact" },
  { title: "CONTENT HUB", href: "/#content-hub" },
];

const MegaMenu = ({ menu }: { menu: typeof servicesMenu | typeof shopMenu }) => (
    <div className="dropdown-menu absolute left-0 top-full hidden w-full bg-white shadow-lg group-hover:block">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-4 gap-x-8 py-8">
                {menu.columns.map((column) => (
                    <div key={column.title} className="dropdown-column">
                        <h3 className="mb-4 text-lg font-bold text-primary">{column.title}</h3>
                        <ul className="space-y-3">
                            {column.items.map((item) => (
                                <li key={item}>
                                    <Link href={menu.href} className="text-sm text-gray-700 hover:text-primary">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-headline text-primary">
          Mahi's
        </Link>
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <div className="group relative">
             <Link href={servicesMenu.href} className="flex items-center gap-1 text-gray-800 hover:text-primary">
              {servicesMenu.title} <ChevronDown className="h-4 w-4" />
            </Link>
            <MegaMenu menu={servicesMenu} />
          </div>
          <div className="group relative">
            <Link href={shopMenu.href} className="flex items-center gap-1 text-gray-800 hover:text-primary">
              {shopMenu.title} <ChevronDown className="h-4 w-4" />
            </Link>
            <MegaMenu menu={shopMenu} />
          </div>
          {otherMenus.map((item) => (
            <div key={item.title} className="group relative">
              <Link href={item.href} className="text-gray-800 hover:text-primary">
                  {item.title}
              </Link>
            </div>
          ))}
        </nav>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
              <div className="flex flex-col p-4">
                <SheetClose asChild>
                  <Link href="/" className="text-2xl font-bold font-headline text-primary mb-4 self-start">
                    Mahi's
                  </Link>
                </SheetClose>

                <div className="flex flex-col space-y-2">
                  <Collapsible>
                    <CollapsibleTrigger className="flex justify-between items-center w-full py-2 text-lg font-medium">
                       <SheetClose asChild>
                         <Link href={servicesMenu.href}>{servicesMenu.title}</Link>
                       </SheetClose>
                       <ChevronDown className="h-5 w-5" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 pt-2 space-y-2">
                      {servicesMenu.columns.map(col => (
                         <Collapsible key={col.title}>
                           <CollapsibleTrigger className="flex justify-between items-center w-full font-semibold py-2">
                            {col.title} <ChevronDown className="h-4 w-4" />
                           </CollapsibleTrigger>
                           <CollapsibleContent className="pl-4 py-2 space-y-2 font-normal">
                            {col.items.map(item => <SheetClose asChild key={item}><Link href={servicesMenu.href} className="block py-1">{item}</Link></SheetClose>)}
                           </CollapsibleContent>
                         </Collapsible>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible>
                    <CollapsibleTrigger className="flex justify-between items-center w-full py-2 text-lg font-medium">
                      <SheetClose asChild>
                        <Link href={shopMenu.href}>{shopMenu.title}</Link>
                      </SheetClose>
                      <ChevronDown className="h-5 w-5" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 pt-2 space-y-2">
                       {shopMenu.columns.map(col => (
                         <Collapsible key={col.title}>
                           <CollapsibleTrigger className="flex justify-between items-center w-full font-semibold py-2">
                            {col.title} <ChevronDown className="h-4 w-4" />
                           </CollapsibleTrigger>
                           <CollapsibleContent className="pl-4 py-2 space-y-2 font-normal">
                            {col.items.map(item => <SheetClose asChild key={item}><Link href={shopMenu.href} className="block py-1">{item}</Link></SheetClose>)}
                           </CollapsibleContent>
                         </Collapsible>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  {otherMenus.map((item) =>(
                      <SheetClose asChild key={item.title}>
                        <Link href={item.href} className="py-2 text-lg font-medium">
                          {item.title}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
