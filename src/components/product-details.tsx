import { Button } from "~/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { QuantitySelector } from "./quantity-selector";
import ResponsiveImage from "./responsive-image";

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="#"
        className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Go Back
      </Link>

      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-none bg-[#F1F1F1]">
          <ResponsiveImage
            basePath="/assets/product-xx99-mark-two-headphones"
            imageName="image-product.jpg"
            alt="XX99 Mark II Headphones"
            className="h-auto w-full object-contain p-12"
            priority
          />
        </div>

        <div className="flex h-full flex-col justify-center space-y-6">
          <div className="space-y-4">
            <p className="text-sm tracking-[0.5em] text-primary">NEW PRODUCT</p>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              XX99 MARK II HEADPHONES
            </h1>
          </div>

          <p className="leading-relaxed text-muted-foreground">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>

          <div className="text-3xl font-bold">$ 2,999</div>

          <div className="flex gap-4">
            <QuantitySelector />
            <Button
              size="lg"
              className="rounded-none bg-[#D87D4A] px-8 text-white transition-colors hover:bg-[#FBAF85]"
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
