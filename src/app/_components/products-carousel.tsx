import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductsCarousel() {
  return (
    <section className="mx-auto max-w-7xl bg-white py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-[#F1F1F1] p-8 text-center">
            <div className="relative mb-8 h-40">
              <Image
                src="/placeholder.svg"
                alt="Headphones"
                fill
                className="object-contain"
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
            <div className="relative mb-8 h-40">
              <Image
                src="/placeholder.svg"
                alt="Speakers"
                fill
                className="object-contain"
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
            <div className="relative mb-8 h-40">
              <Image
                src="/placeholder.svg"
                alt="Earphones"
                fill
                className="object-contain"
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
