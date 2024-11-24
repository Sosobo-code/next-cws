"use client"

import {useState} from "react"
import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {ChevronLeft, ChevronRight} from "lucide-react"
import Image from "next/image"

const wrapColors = [
  {
    name: "Deep Blue",
    images: {
      wrap: "/assets/deep-blue.webp",
      view1: "/assets/carcolors/deepblue/bmw_deep_blue.png",
      view2: "/assets/carcolors/deepblue/front_view_deep_blue.png",
      view3: "/assets/carcolors/deepblue/side_view_deep_blue.png"
    }
  },
  {
    name: "Sky Blue",
    images: {
      wrap: "/assets/sky-blue.webp",
      view1: "/assets/carcolors/skyblue/bmw_sky_blue.png",
      view2: "/assets/carcolors/skyblue/front_view_sky_blue.png",
      view3: "/assets/carcolors/skyblue/side_view_sky_blue.png"
    }
  },
  {
    name: "Royal Purple",
    images: {
      wrap: "/assets/royal-purple.webp",
      view1: "/assets/carcolors/royalpurple/bmw_royal_purple.png",
      view2: "/assets/carcolors/royalpurple/front_view_royal_purple.png",
      view3: "/assets/carcolors/royalpurple/side_view_royal_purple.png"
    }
  },
  {
    name: "Sunset Orange",
    images: {
      wrap: "/assets/sunset-orange.webp",
      view1: "/assets/carcolors/sunsetorange/bmw_sunset_orange.png",
      view2: "/assets/carcolors/sunsetorange/front_view_sunset_orange.png",
      view3: "/assets/carcolors/sunsetorange/side_view_sunset_orange.png"
    }
  },
  {
    name: "Fiery Red",
    images: {
      wrap: "/assets/fiery-red.webp",
      view1: "/assets/carcolors/fieryred/bmw_fiery_red.png",
      view2: "/assets/carcolors/fieryred/front_view_fiery_red.png",
      view3: "/assets/carcolors/fieryred/side_view_fiery_red.png"
    }
  },
  {
    name: "Electric Blue",
    images: {
      wrap: "/assets/electric-blue.jpg",
      view1: "/assets/carcolors/electricblue/bmw_electric_blue.png",
      view2: "/assets/carcolors/electricblue/front_view_electric_blue.png",
      view3: "/assets/carcolors/electricblue/side_view_electric_blue.png"
    }
  },
]

type ImageKeys = 'wrap' | 'view1' | 'view2' | 'view3';

const carModels = [
  {name: "view1", image: "/assets/carcolors/default/bmw.png"},
  {name: "view2", image: "/assets/carcolors/default/frontview.png"},
  {name: "view3", image: "/assets/carcolors/default/sideview.png"},
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
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-6 flex-grow flex flex-col">
        <h1 className="text-3xl font-bold mb-6 text-center">Colour Picker</h1>
        <div className="flex-grow flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2 flex flex-col order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto p-1">
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
                  <CardContent className="p-2">
                    <div className="relative aspect-square rounded-md overflow-hidden">
                      <Image
                        src={color.images.wrap}
                        alt={color.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-center mt-2 text-sm">{color.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col order-1 lg:order-2">
            <div className="relative aspect-video w-full max-w-2xl mx-auto mb-4">
              <Image
                src={selectedColor.images[carModels[currentCarIndex].name as ImageKeys]}
                alt={carModels[currentCarIndex].name}
                fill
                className="object-contain"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hidden lg:flex"
                onClick={prevCar}
              >
                <ChevronLeft className="h-4 w-4"/>
                <span className="sr-only">Previous view</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hidden lg:flex"
                onClick={nextCar}
              >
                <ChevronRight className="h-4 w-4"/>
                <span className="sr-only">Next view</span>
              </Button>
            </div>
            <p className="text-center mb-4">
              {selectedColor.name}
            </p>
            <div className="flex justify-center gap-4 mt-4 lg:hidden">
              <Button variant="outline" size="icon" onClick={prevCar}>
                <ChevronLeft className="h-4 w-4"/>
                <span className="sr-only">Previous view</span>
              </Button>
              <Button variant="outline" size="icon" onClick={nextCar}>
                <ChevronRight className="h-4 w-4"/>
                <span className="sr-only">Next view</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPickerPage;