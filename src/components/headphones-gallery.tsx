"use client";

import { Card, CardContent } from "~/components/ui/card";

import ResponsiveImage from "~/components/responsive-image";

export function HeadphonesGallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <ResponsiveImage
                basePath="/assets/product-xx99-mark-two-headphones"
                imageName="image-gallery-1.jpg"
                alt="Person wearing headphones against geometric pattern"
                className="aspect-[16/9] h-auto w-full object-cover"
              />
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <ResponsiveImage
                basePath="/assets/product-xx99-mark-two-headphones"
                imageName="image-gallery-2.jpg"
                alt="Close-up of black headphones"
                className="aspect-[16/9] h-auto w-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
        <Card className="h-full overflow-hidden">
          <CardContent className="h-full p-0">
            <ResponsiveImage
              basePath="/assets/product-xx99-mark-two-headphones"
              imageName="image-gallery-3.jpg"
              alt="Workspace with headphones and phone"
              className="h-full w-full object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}