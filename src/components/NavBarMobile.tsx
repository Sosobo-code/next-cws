"use client"

import Link from "next/link"
import {Home, Palette, ShoppingBag} from "lucide-react"
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
import {useTheme} from "next-themes"
import React from "react";
import {cn} from "@/lib/utils";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
}

export default function NavBarMobile({isMobileMenuOpen}: MobileMenuProps) {
  const {theme} = useTheme();

  if (!isMobileMenuOpen) {
    return null;
  }

  // TODO: make navbar close every time a link is clicked
  return (
    <div className="md:hidden flex flex-col items-center text-center pull-down z-40">
      <NavigationMenu className="pb-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" passHref>
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
              <ul className="grid gap-3 p-6">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className={`flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md ${theme === 'dark' ? 'animate-gradient' : 'light-mode-animate-gradient'}`}
                      href="/store/wraps"
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
                <ListItem href="/store" title="Shop">
                  View the store.
                </ListItem>
                <ListItem href="/" title="Accessories">
                  View the accessories.
                </ListItem>
                <ListItem href="/services" title="Services">
                  Explore our range of services.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Palette className="mr-2 h-4 w-4"/>
                Colour Picker
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button asChild variant="outline" className="w-1/2 mb-2">
        <Link href="/">Contact Us</Link>
      </Button>
    </div>
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