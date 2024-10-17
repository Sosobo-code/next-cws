import React from 'react';
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import Image from "next/image"

const wrapColors = [
  {name: "Red Wrap", price: 50, image: "/placeholder.svg?height=200&width=300"},
  {name: "Aqua", price: 65, image: "/placeholder.svg?height=200&width=300"},
  {name: "Quartz White", price: 60, image: "/placeholder.svg?height=200&width=300"},
  {name: "Blue", price: 50, image: "/placeholder.svg?height=200&width=300"},
  {name: "Purple", price: 60, image: "/placeholder.svg?height=200&width=300"},
  {name: "Deep Green", price: 60, image: "/placeholder.svg?height=200&width=300"},
]

const WrapsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <header className="pb-6 md:pb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold pb-2">Wraps Colours</h1>
          <p className="text-muted-foreground">Choose your Wrap.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wrapColors.map((color, index) => (
            <Card key={index} className="overflow-hidden hover:ring-2 transition-shadow duration-300">
              <CardContent className="p-0">
                <Image
                  src={color.image}
                  alt={color.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4">
                <h3 className="text-lg font-semibold">{color.name}</h3>
                <p className="text-muted-foreground">$ {color.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
};

export default WrapsPage;