"use client";

import { Menu, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black">
      <header className="mx-auto flex h-20 w-full max-w-7xl shrink-0 items-center border-b border-gray-800 bg-black px-6 text-white md:px-12">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-white">
            <nav className="grid gap-2 py-6">
              <Link
                href="/"
                className="flex w-full items-center py-2 text-lg font-medium hover:text-gray-300"
                prefetch={false}
              >
                HOME
              </Link>
              <Link
                href="/headphones"
                className="flex w-full items-center py-2 text-lg font-medium hover:text-gray-300"
                prefetch={false}
              >
                HEADPHONES
              </Link>
              <Link
                href="/speakers"
                className="flex w-full items-center py-2 text-lg font-medium hover:text-gray-300"
                prefetch={false}
              >
                SPEAKERS
              </Link>
              <Link
                href="/earphones"
                className="flex w-full items-center py-2 text-lg font-medium hover:text-gray-300"
                prefetch={false}
              >
                EARPHONES
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 justify-center lg:justify-start">
          <Link href="/" className="text-2xl font-bold" prefetch={false}>
            audiophile
          </Link>
        </div>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 transform gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-gray-300"
            prefetch={false}
          >
            HOME
          </Link>
          <Link
            href="/headphones"
            className="text-sm font-medium transition-colors hover:text-gray-300"
            prefetch={false}
          >
            HEADPHONES
          </Link>
          <Link
            href="/speakers"
            className="text-sm font-medium transition-colors hover:text-gray-300"
            prefetch={false}
          >
            SPEAKERS
          </Link>
          <Link
            href="/earphones"
            className="text-sm font-medium transition-colors hover:text-gray-300"
            prefetch={false}
          >
            EARPHONES
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="ml-auto text-white">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Open cart</span>
        </Button>
      </header>
    </div>
  );
}
