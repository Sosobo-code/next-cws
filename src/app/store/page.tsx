import React from 'react';
import {Car, Palette, Wrench} from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <header className="pb-6 md:pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Wraps</h1>
        </header>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Choose Your Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-6 w-6"/>
                Color Wraps
              </CardTitle>
              <CardDescription>Explore our range of vibrant color wraps</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Transform your vehicle with our high-quality color wraps. Choose from a wide spectrum of colors and
                finishes.</p>
            </CardContent>
            <CardFooter>
              <Link href="/store/wraps" className={buttonVariants({ className: "w-full" })}>View Colours</Link>
            </CardFooter>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-6 w-6"/>
                Accessories
              </CardTitle>
              <CardDescription>Enhance your wrap with our accessories</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Complement your wrap with our selection of accessories. From trim kits to decals, we&apos;ve got you
                covered.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Browse Accessories</Button>
            </CardFooter>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-6 w-6"/>
                Services
              </CardTitle>
              <CardDescription>Professional installation and maintenance</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our expert team offers top-notch installation services and ongoing maintenance to keep your wrap
                looking fresh.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Our Services</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Page;