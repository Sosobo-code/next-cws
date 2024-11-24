import React from 'react';
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import Image from "next/image"
import {cn} from "@/lib/utils"

const wrapColors = [
  {name: "Deep Blue", price: 50, image: "/assets/deep-blue.webp", ringColor: "ring-blue-900"},
  {name: "Sky Blue", price: 65, image: "/assets/sky-blue.webp", ringColor: "ring-blue-400"},
  {name: "Royal Purple", price: 60, image: "/assets/royal-purple.webp", ringColor: "ring-purple-700"},
  {name: "Sunset Orange", price: 50, image: "/assets/sunset-orange.webp", ringColor: "ring-orange-500"},
  {name: "Fiery Red", price: 60, image: "/assets/fiery-red.webp", ringColor: "ring-red-600"},
  {name: "Electric Blue", price: 60, image: "/assets/electric-blue.jpg", ringColor: "ring-blue-500"},
]

const WrapsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <header className="pb-6 md:pb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold pb-2">Wrap Colours</h1>
          <p className="text-muted-foreground">Choose your Wrap.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wrapColors.map((color, index) => (
            <Card
              key={index}
              className={cn(
                "overflow-hidden transition-all duration-300",
                "hover:ring-2",
                color.ringColor
              )}
            >
              <CardContent className="p-0">
                <Image
                  src={color.image}
                  alt={color.name}
                  width={300}
                  height={200}
                  className="w-full h-72 object-cover"
                />
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4">
                <h3 className="text-lg font-semibold">{color.name}</h3>
                <p className="text-muted-foreground">${color.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
};

export default WrapsPage;