'use client'

import Image from "next/image"
import { Card, CardContent } from "~/components/ui/card"

export function HeadphonesGallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="https://dummyimage.com/720x400"
              alt="Person wearing headphones against geometric pattern"
              width={720}
              height={400}
              className="w-full h-auto object-cover aspect-[16/9]"
            />
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="https://dummyimage.com/720x400"
              alt="Close-up of black headphones"
              width={720}
              height={400}
              className="w-full h-auto object-cover aspect-[16/9]"
            />
          </CardContent>
        </Card>
        <Card className="overflow-hidden md:col-span-2">
          <CardContent className="p-0">
            <Image
              src="https://dummyimage.com/1440x400"
              alt="Workspace with headphones and phone"
              width={1440}
              height={400}
              className="w-full h-auto object-cover aspect-[21/9]"
            />
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Premium Audio Experience</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our collection of high-quality headphones designed for audiophiles and music enthusiasts. 
          Immerse yourself in crystal-clear sound and exceptional comfort.
        </p>
      </div>
    </div>
  )
}