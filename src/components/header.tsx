
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, Search, User, ShoppingCart, Heart, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { Badge } from "./ui/badge";
import { useAuth } from "@/context/auth-context";

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
  { title: "BRIDAL", href: "/bridal" },
  { title: "OFFER", href: "/offer" },
  { title: "CONTACT", href: "/contact" },
];

const iconNavItems = [
    { href: "/track-order", icon: <Truck className="h-5 w-5" />, label: "Track Order" },
    { href: "/login", icon: <User className="h-5 w-5" />, label: "Login" },
    { href: "/wishlist", icon: <Heart className="h-5 w-5" />, label: "Wishlist" },
];


const MegaMenu = ({ menu }: { menu: typeof servicesMenu | typeof shopMenu }) => (
  <div className="absolute left-0 top-full hidden w-full bg-white shadow-lg group-hover:block">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-4 gap-x-8 px-4 py-8">
        {menu.columns.map((column) => (
          <div key={column.title} className="text-left">
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
  const pathname = usePathname();
  const { cart, isMounted: isCartMounted } = useCart();
  const { isAuthenticated, isMounted: isAuthMounted } = useAuth();
  
  const isMounted = isCartMounted && isAuthMounted;

  const isLinkActive = (href: string) => {
    if (href === '/') {
        return pathname === '/';
    }
    const baseHref = href.split('#')[0];
    return pathname.startsWith(baseHref);
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const updatedIconNavItems = isMounted ? iconNavItems.map(item => {
    if (isAuthenticated && item.href === '/login') {
        return { href: '/profile', icon: <User className="h-5 w-5" />, label: 'Profile' };
    }
    return item;
  }) : iconNavItems;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl">
        {/* Top Layer */}
        <div className="flex h-16 items-center">
            <Link href="/" className="flex items-center font-headline text-3xl font-bold text-primary lg:mr-8">
              Mahi's
            </Link>

            <div className="flex-1 px-4 hidden lg:flex">
              <form className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search for services & products..."
                  className="w-full rounded-md border-primary/30 h-10 pr-10"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0 h-10 w-10 text-muted-foreground hover:text-primary"
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>

            <div className="flex items-center justify-end gap-4 ml-auto">
              <div className="hidden lg:flex items-center gap-4">
                {updatedIconNavItems.map((item) => (
                    <Link key={item.label} href={item.href} aria-label={item.label} className={cn("text-gray-700 hover:text-primary", isLinkActive(item.href) && 'text-primary')}>
                        {item.icon}
                    </Link>
                ))}
                  <Link href="/cart" aria-label="Cart" className={cn("relative text-gray-700 hover:text-primary", isLinkActive('/cart') && 'text-primary')}>
                      <ShoppingCart className={cn("h-5 w-5", isLinkActive('/cart') && 'text-primary')} />
                      {isMounted && cartItemCount > 0 && (
                          <Badge variant="destructive" className="absolute -top-2 -right-3 h-5 w-5 justify-center rounded-full p-0">{cartItemCount}</Badge>
                      )}
                  </Link>
              </div>

              <Button asChild>
                  <Link href="/#booking">Book Appointment</Link>
              </Button>

              <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open navigation menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto p-0">
                      <SheetHeader className="p-4 border-b">
                        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                        <SheetClose asChild>
                        <Link href="/" className="self-start font-headline text-2xl font-bold text-primary">
                            Mahi's
                        </Link>
                        </SheetClose>
                      </SheetHeader>
                    <div className="flex flex-col p-4">
                        
                        <div className="flex justify-between border-b pb-4 my-4">
                            {updatedIconNavItems.map((item) => (
                                <SheetClose asChild key={item.label}>
                                    <Link href={item.href} className={cn("flex flex-col items-center gap-1 text-xs font-medium text-gray-700 hover:text-primary", isLinkActive(item.href) && 'text-primary')}>
                                        {item.icon}
                                        {item.label}
                                    </Link>
                                </SheetClose>
                            ))}
                            <SheetClose asChild>
                                <Link href="/cart" className={cn("relative flex flex-col items-center gap-1 text-xs font-medium text-gray-700 hover:text-primary", isLinkActive('/cart') && 'text-primary')}>
                                    <ShoppingCart className="h-5 w-5" />
                                    Cart
                                    {isMounted && cartItemCount > 0 && (
                                        <Badge variant="destructive" className="absolute -top-2 -right-3 h-5 w-5 justify-center rounded-full p-0">{cartItemCount}</Badge>
                                    )}
                                </Link>
                            </SheetClose>
                        </div>

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

                        {otherMenus.map(menu => (
                            <SheetClose asChild key={menu.title}>
                                <Link href={menu.href} className="block py-2 text-lg font-medium">{menu.title}</Link>
                            </SheetClose>
                        ))}
                        </div>
                    </div>
                    </SheetContent>
                </Sheet>
              </div>
            </div>
        </div>

        {/* Bottom Layer */}
        <div className="hidden lg:flex h-12 items-center justify-center">
            <nav className="flex items-center space-x-8">
            {[servicesMenu, shopMenu].map((menu) => (
                <div key={menu.title} className="group relative">
                <Link href={menu.href} className={cn("flex items-center gap-1 text-sm font-semibold tracking-wider text-gray-700 transition-colors hover:text-primary", isLinkActive(menu.href) && "text-primary")}>
                    {menu.title}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                <MegaMenu menu={menu} />
                </div>
            ))}
            {otherMenus.map((menu) => (
                <Link key={menu.title} href={menu.href} className={cn("text-sm font-semibold tracking-wider text-gray-700 transition-colors hover:text-primary", isLinkActive(menu.href) && "text-primary")}>
                {menu.title}
                </Link>
            ))}
            </nav>
        </div>
      </div>
    </header>
  );
}
