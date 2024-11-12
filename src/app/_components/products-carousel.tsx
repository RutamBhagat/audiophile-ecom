import Link from "next/link";
import React from "react";
import ResponsiveImage from "./responsive-image";

export default function ProductsCarousel() {
  return (
    <section className="mx-auto max-w-7xl bg-white py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-[#F1F1F1] p-8 text-center">
            <div className="relative mb-8 h-80">
              <ResponsiveImage
                className="object-cover"
                basePath="/assets/shared"
                imageName="image-category-thumbnail-headphones.png"
                alt="Headphones"
              />
            </div>
            <h2 className="mb-4 text-lg font-bold">HEADPHONES</h2>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-bold text-black hover:text-[#D87D4A]"
            >
              SHOP
              <span className="ml-2 text-[#D87D4A]">→</span>
            </Link>
          </div>
          <div className="bg-[#F1F1F1] p-8 text-center">
            <div className="relative mb-8 h-80">
              <ResponsiveImage
                className="object-cover"
                basePath="/assets/shared"
                imageName="image-category-thumbnail-speakers.png"
                alt="Speakers"
              />
            </div>
            <h2 className="mb-4 text-lg font-bold">SPEAKERS</h2>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-bold text-black hover:text-[#D87D4A]"
            >
              SHOP
              <span className="ml-2 text-[#D87D4A]">→</span>
            </Link>
          </div>
          <div className="bg-[#F1F1F1] p-8 text-center">
            <div className="relative mb-8 h-80">
              <ResponsiveImage
                className="object-cover"
                basePath="/assets/shared"
                imageName="image-category-thumbnail-earphones.png"
                alt="Earphones"
              />
            </div>
            <h2 className="mb-4 text-lg font-bold">EARPHONES</h2>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-bold text-black hover:text-[#D87D4A]"
            >
              SHOP
              <span className="ml-2 text-[#D87D4A]">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
