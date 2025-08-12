"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const servicesMenu = {
  title: "SERVICES",
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
  { title: "BRIDAL", href: "/bridal" },
  { title: "RUNWAY REWARDS", href: "/runway-rewards" },
  { title: "OFFER", href: "/offer" },
  { title: "FRANCHISE", dropdown: ["Option 1", "Option 2"] },
  { title: "SALON LOCATOR", href: "/salon-locator" },
  { title: "CONTACT", dropdown: ["Contact Us", "Feedback"] },
  { title: "CONTENT HUB", href: "/content-hub" },
];

const MegaMenu = ({ menu }: { menu: typeof servicesMenu }) => (
  <div className="dropdown-menu absolute top-full left-0 w-full bg-white shadow-lg p-8 hidden group-hover:block transition-all duration-300">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-4 gap-8">
        {menu.columns.map((column) => (
          <div key={column.title} className="dropdown-column">
            <h3 className="font-bold text-primary mb-4 text-lg">{column.title}</h3>
            <ul className="space-y-3">
              {column.items.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-700 hover:text-primary transition-colors">
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

const SimpleDropdown = ({ items }: { items: string[] }) => (
  <div className="dropdown-menu absolute top-full left-0 w-48 bg-white shadow-lg py-2 hidden group-hover:block transition-all duration-300 rounded-md">
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item}>
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            {item}
          </Link>
        </li>
      ))}
    </ul>
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
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              {servicesMenu.title} <ChevronDown className="h-4 w-4" />
            </button>
            <MegaMenu menu={servicesMenu} />
          </div>
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              {shopMenu.title} <ChevronDown className="h-4 w-4" />
            </button>
            <MegaMenu menu={shopMenu} />
          </div>
          {otherMenus.map((item) => (
            <div key={item.title} className={cn("group relative", item.href && " ")}>
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.title}
                </Link>
              ) : (
                <>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    {item.title} <ChevronDown className="h-4 w-4" />
                  </button>
                  {item.dropdown && <SimpleDropdown items={item.dropdown} />}
                </>
              )}
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 p-4">
                <SheetClose asChild>
                  <Link href="/" className="text-2xl font-bold font-headline text-primary mb-4">
                    Mahi's
                  </Link>
                </SheetClose>

                <Collapsible>
                  <CollapsibleTrigger className="flex justify-between items-center w-full text-lg font-medium">
                    {servicesMenu.title} <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 pt-2 space-y-2">
                    {servicesMenu.columns.map(col => (
                       <Collapsible key={col.title}>
                         <CollapsibleTrigger className="flex justify-between items-center w-full font-semibold">
                          {col.title} <ChevronDown className="h-4 w-4" />
                         </CollapsibleTrigger>
                         <CollapsibleContent className="pl-4 py-2 space-y-2">
                          {col.items.map(item => <SheetClose asChild key={item}><Link href="#" className="block">{item}</Link></SheetClose>)}
                         </CollapsibleContent>
                       </Collapsible>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible>
                  <CollapsibleTrigger className="flex justify-between items-center w-full text-lg font-medium">
                    {shopMenu.title} <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 pt-2 space-y-2">
                     {shopMenu.columns.map(col => (
                       <Collapsible key={col.title}>
                         <CollapsibleTrigger className="flex justify-between items-center w-full font-semibold">
                          {col.title} <ChevronDown className="h-4 w-4" />
                         </CollapsibleTrigger>
                         <CollapsibleContent className="pl-4 py-2 space-y-2">
                          {col.items.map(item => <SheetClose asChild key={item}><Link href="#" className="block">{item}</Link></SheetClose>)}
                         </CollapsibleContent>
                       </Collapsible>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {otherMenus.map((item) =>
                  item.href ? (
                    <SheetClose asChild key={item.title}>
                      <Link href={item.href} className="text-lg font-medium">
                        {item.title}
                      </Link>
                    </SheetClose>
                  ) : (
                    <Collapsible key={item.title}>
                      <CollapsibleTrigger className="flex justify-between items-center w-full text-lg font-medium">
                        {item.title} <ChevronDown className="h-5 w-5" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 pt-2 space-y-2">
                        {item.dropdown?.map(subItem => (
                          <SheetClose asChild key={subItem}>
                            <Link href="#" className="block">{subItem}</Link>
                          </SheetClose>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
