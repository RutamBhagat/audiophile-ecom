"use client";

import { Card, CardContent } from "~/components/ui/card";

import Image from "next/image";

export function BestGearComponent() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
            GEAR
          </h2>
          <p className="leading-relaxed text-gray-500">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <Card className="overflow-hidden rounded-none">
            <CardContent className="p-0">
              <div className="relative aspect-[1.1/1] w-full">
                <Image
                  src="https://astrix1234.github.io/Audiophile-ecommerce-website/static/media/image-best-gear.4d4a28e9e7c9ab158dd8.jpg"
                  alt="Person wearing headphones against geometric background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
