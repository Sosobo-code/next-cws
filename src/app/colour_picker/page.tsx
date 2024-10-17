"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const wrapColors = [
  { name: "Deep Blue", image: "/assets/deep-blue.webp" },
  { name: "Sky Blue", image: "/assets/sky-blue.webp" },
  { name: "Royal Purple", image: "/assets/royal-purple.webp" },
  { name: "Sunset Orange", image: "/assets/sunset-orange.webp" },
  { name: "Fiery Red", image: "/assets/fiery-red.webp" },
  { name: "Electric Blue", image: "/assets/electric-blue.jpg" },
]

const carModels = [
  { name: "view1", image: "/assets/carcolors/default/bmw.png" },
  { name: "view2", image: "/assets/carcolors/default/frontview.png" },
  { name: "view3", image: "/assets/carcolors/default/sideview.png" },
]

const ColorPickerPage = () => {
  const [selectedColor, setSelectedColor] = useState(wrapColors[0])
  const [currentCarIndex, setCurrentCarIndex] = useState(0)

  const nextCar = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex + 1) % carModels.length)
  }

  const prevCar = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex - 1 + carModels.length) % carModels.length)
  }

  return (
    <div className="h-[80vh] flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col overflow-hidden">
        <h1 className="text-4xl font-bold mb-8 text-center">Colour Picker</h1>
        <div className="flex-grow flex flex-col lg:flex-row gap-8 overflow-hidden">
          <div className="lg:w-1/2 flex flex-col overflow-hidden">
            <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto p-1">
              {wrapColors.map((color) => (
                <Card
                  key={color.name}
                  className={`cursor-pointer transition-all ${
                    selectedColor.name === color.name
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  <CardContent className="p-2 md:p-4">
                    <div className="relative aspect-square rounded-md overflow-hidden">
                      <Image
                        src={color.image}
                        alt={color.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-center mt-2 text-sm md:text-base">{color.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col overflow-hidden">
            <div className="flex-grow relative">
              <Image
                src={carModels[currentCarIndex].image}
                alt={carModels[currentCarIndex].name}
                fill
                className="object-contain"
              />
              {/*// TODO: redo this later with a proper overlay, once we have the actual images*/}
              <div
                className="absolute inset-0 opacity-50"
                style={{ backgroundColor: selectedColor.name.toLowerCase().replace(" ", "") }}
              ></div>
              <Button variant="outline" size="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2" onClick={prevCar}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={nextCar}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-center mt-4">Selected: {selectedColor.name} on {carModels[currentCarIndex].name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPickerPage;