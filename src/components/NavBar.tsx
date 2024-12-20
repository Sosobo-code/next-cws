"use client"

import Link from "next/link"
import {Home, Menu, Palette, ShoppingBag} from "lucide-react"
import {Button} from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {ThemeToggle} from "@/components/ui/ThemeToggle";
import NavBarMobile from "@/components/NavBarMobile";
import {cn} from "@/lib/utils";
import Image from 'next/image';

export default function NavBar() {
  const {theme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <nav className="sticky top-0 border-b bg-background z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/logo.svg" alt="Logo" width={150} height={40} />
          </Link>
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Home className="mr-2 h-4 w-4"/>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <ShoppingBag className="mr-2 h-4 w-4"/>
                    Store
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                        <li className="row-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            className={`flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md ${theme === 'dark' ? 'animate-gradient' : 'light-mode-animate-gradient'}`}
                            href="/wraps"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Wrap Colours
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              View the catalogue of wrap colours.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <Link href="/wraps">
                        <ListItem title="Shop">
                          View the store.
                        </ListItem>
                      </Link>
                      <Link href="/about">
                        <ListItem title="About Us">
                          Explore what we do, and why we do it.
                        </ListItem>
                      </Link>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/colour_picker" passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Palette className="mr-2 h-4 w-4"/>
                      Colour Picker
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:flex items-center justify-center">
            <Link href="#">Contact Us</Link>
          </Button>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6"/>
          </button>
        </div>
      </div>
      <NavBarMobile isMobileMenuOpen={isMobileMenuOpen} />
      <div className="fixed bottom-4 right-4">
        <ThemeToggle/>
      </div>
    </nav>
  )
}
export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"