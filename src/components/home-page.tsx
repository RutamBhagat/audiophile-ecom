import { Menu, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
// Importing the JSON data
import productsData from "../../data.json";

export default function Component() {
  // Find the specific products we want to feature
  const zx9Speaker = productsData.find(
    (product) => product.slug === "zx9-speaker",
  );
  const zx7Speaker = productsData.find(
    (product) => product.slug === "zx7-speaker",
  );
  const yx1Earphones = productsData.find(
    (product) => product.slug === "yx1-earphones",
  );

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-black">
        <div className="container flex h-14 items-center px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 pt-4">
                <Link
                  href="/headphones"
                  className="text-lg font-medium hover:text-orange-500"
                >
                  HEADPHONES
                </Link>
                <Link
                  href="/speakers"
                  className="text-lg font-medium hover:text-orange-500"
                >
                  SPEAKERS
                </Link>
                <Link
                  href="/earphones"
                  className="text-lg font-medium hover:text-orange-500"
                >
                  EARPHONES
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="ml-4 md:ml-0">
            <h1 className="text-xl font-bold text-white">audiophile</h1>
          </Link>
          <nav className="mx-6 hidden flex-1 justify-center md:flex">
            <Link
              href="/headphones"
              className="px-6 py-2 text-sm font-medium text-white transition-colors hover:text-orange-500"
            >
              HEADPHONES
            </Link>
            <Link
              href="/speakers"
              className="px-6 py-2 text-sm font-medium text-white transition-colors hover:text-orange-500"
            >
              SPEAKERS
            </Link>
            <Link
              href="/earphones"
              className="px-6 py-2 text-sm font-medium text-white transition-colors hover:text-orange-500"
            >
              EARPHONES
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="ml-auto text-white">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Open cart</span>
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-14">
        {/* Hero Section */}
        <section className="relative bg-black px-4 py-24 text-white md:py-32">
          <div className="container relative z-10 mx-auto grid gap-6 md:max-w-[700px]">
            <p className="text-sm uppercase tracking-[0.5em] text-zinc-400">
              NEW PRODUCT
            </p>
            <h2 className="text-4xl font-bold tracking-wider md:text-6xl">
              XX99 MARK II HEADPHONES
            </h2>
            <p className="mx-auto max-w-[350px] text-zinc-400">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-400">
                SEE PRODUCT
              </Button>
            </div>
          </div>
          <Image
            src="/assets/cart/image-xx99-mark-two-headphones.jpg"
            alt="XX99 Mark II Headphones"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
            width={1920}
            height={1080}
            priority
          />
        </section>

        {/* Categories */}
        <section className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
          <div className="group relative rounded-lg bg-zinc-100 p-6 text-center transition-transform hover:-translate-y-1">
            <div className="absolute -top-12 left-1/2 w-40 -translate-x-1/2">
              <Image
                src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                alt="Headphones"
                width={200}
                height={200}
                className="h-auto w-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-20">
              <h3 className="mb-4 text-lg font-bold">HEADPHONES</h3>
              <Link
                href="/headphones"
                className="inline-flex items-center text-sm font-bold text-black hover:text-orange-500"
              >
                SHOP
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          <div className="group relative rounded-lg bg-zinc-100 p-6 text-center transition-transform hover:-translate-y-1">
            <div className="absolute -top-12 left-1/2 w-40 -translate-x-1/2">
              <Image
                src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                alt="Speakers"
                width={200}
                height={200}
                className="h-auto w-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-20">
              <h3 className="mb-4 text-lg font-bold">SPEAKERS</h3>
              <Link
                href="/speakers"
                className="inline-flex items-center text-sm font-bold text-black hover:text-orange-500"
              >
                SHOP
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          <div className="group relative rounded-lg bg-zinc-100 p-6 text-center transition-transform hover:-translate-y-1">
            <div className="absolute -top-12 left-1/2 w-40 -translate-x-1/2">
              <Image
                src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                alt="Earphones"
                width={200}
                height={200}
                className="h-auto w-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-20">
              <h3 className="mb-4 text-lg font-bold">EARPHONES</h3>
              <Link
                href="/earphones"
                className="inline-flex items-center text-sm font-bold text-black hover:text-orange-500"
              >
                SHOP
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto space-y-8 px-4 py-12">
          {/* ZX9 Speaker */}
          {zx9Speaker && (
            <div className="relative overflow-hidden rounded-lg bg-orange-500 px-6 py-12 text-white md:px-12 md:py-24">
              <div className="relative z-10 grid gap-6 text-center md:max-w-[400px] md:text-left">
                <h2 className="text-4xl font-bold md:text-6xl">
                  {zx9Speaker.name}
                </h2>
                <p className="mx-auto md:mx-0">{zx9Speaker.description}</p>
                <div>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white bg-black text-white hover:bg-white hover:text-black"
                  >
                    <Link href={`/product/${zx9Speaker.slug}`}>
                      SEE PRODUCT
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src={zx9Speaker.image.desktop.replace("./assets", "/assets")}
                alt={zx9Speaker.name}
                className="absolute bottom-0 right-0 w-[500px] transform md:right-[-10%]"
                width={500}
                height={500}
              />
            </div>
          )}

          {/* ZX7 Speaker */}
          {zx7Speaker && (
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={zx7Speaker.image.desktop.replace("./assets", "/assets")}
                alt={zx7Speaker.name}
                className="h-[320px] w-full object-cover"
                width={1200}
                height={320}
              />
              <div className="absolute inset-0 flex items-center p-12">
                <div className="grid gap-6">
                  <h2 className="text-3xl font-bold">{zx7Speaker.name}</h2>
                  <Button
                    asChild
                    variant="outline"
                    className="w-fit border-black text-black hover:bg-black hover:text-white"
                  >
                    <Link href={`/product/${zx7Speaker.slug}`}>
                      SEE PRODUCT
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* YX1 Earphones */}
          {yx1Earphones && (
            <div className="grid gap-8 md:grid-cols-2">
              <Image
                src={yx1Earphones.image.desktop.replace("./assets", "/assets")}
                alt={yx1Earphones.name}
                className="h-[320px] rounded-lg object-cover"
                width={600}
                height={320}
              />
              <div className="flex items-center rounded-lg bg-zinc-100 p-12">
                <div className="grid gap-6">
                  <h2 className="text-3xl font-bold">{yx1Earphones.name}</h2>
                  <Button
                    asChild
                    variant="outline"
                    className="w-fit border-black text-black hover:bg-black hover:text-white"
                  >
                    <Link href={`/product/${yx1Earphones.slug}`}>
                      SEE PRODUCT
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* About Section */}
        <section className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-2 md:items-center">
          <div className="order-2 grid gap-6 md:order-1">
            <h2 className="text-3xl font-bold md:text-4xl">
              BRINGING YOU THE <span className="text-orange-500">BEST</span>{" "}
              AUDIO GEAR
            </h2>
            <p className="text-zinc-500">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="About Audiophile"
            className="order-1 h-[400px] w-full rounded-lg object-cover md:order-2"
            width={600}
            height={400}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black px-4 py-12 text-white">
        <div className="container mx-auto grid gap-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <Link href="/" className="text-xl font-bold">
              audiophile
            </Link>
            <nav className="flex flex-col gap-4 md:flex-row md:gap-8">
              <Link href="/" className="text-sm hover:text-orange-500">
                HOME
              </Link>
              <Link
                href="/headphones"
                className="text-sm hover:text-orange-500"
              >
                HEADPHONES
              </Link>
              <Link href="/speakers" className="text-sm hover:text-orange-500">
                SPEAKERS
              </Link>
              <Link href="/earphones" className="text-sm hover:text-orange-500">
                EARPHONES
              </Link>
            </nav>
          </div>
          <p className="text-zinc-400">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <p className="text-zinc-400">Copyright 2021. All Rights Reserved</p>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-orange-500">
                Facebook
              </Link>
              <Link href="#" className="text-white hover:text-orange-500">
                Twitter
              </Link>
              <Link href="#" className="text-white hover:text-orange-500">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
