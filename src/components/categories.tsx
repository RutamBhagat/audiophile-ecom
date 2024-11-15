import { Card, CardContent } from "~/components/ui/card";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Headphones Category */}
      <Card className="border-0 shadow-none">
        <CardContent className="relative space-y-4 p-0 pb-6 text-center">
          <div className="rounded-lg bg-[#F1F1F1] p-6">
            <Image
              src="https://dummyimage.com/250x250"
              alt="Headphones category"
              width={250}
              height={250}
              className="mx-auto -mt-14 w-36"
            />
          </div>
          <h3 className="text-xl font-bold">HEADPHONES</h3>
          <Link
            href="/shop/headphones"
            className="inline-flex items-center font-bold text-black hover:text-[#D87D4A]"
          >
            SHOP
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </CardContent>
      </Card>

      {/* Speakers Category */}
      <Card className="border-0 shadow-none">
        <CardContent className="relative space-y-4 p-0 pb-6 text-center">
          <div className="rounded-lg bg-[#F1F1F1] p-6">
            <Image
              src="https://dummyimage.com/250x250"
              alt="Speakers category"
              width={250}
              height={250}
              className="mx-auto -mt-14 w-36"
            />
          </div>
          <h3 className="text-xl font-bold">SPEAKERS</h3>
          <Link
            href="/shop/speakers"
            className="inline-flex items-center font-bold text-black hover:text-[#D87D4A]"
          >
            SHOP
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </CardContent>
      </Card>

      {/* Earphones Category */}
      <Card className="border-0 shadow-none">
        <CardContent className="relative space-y-4 p-0 pb-6 text-center">
          <div className="rounded-lg bg-[#F1F1F1] p-6">
            <Image
              src="https://dummyimage.com/250x250"
              alt="Earphones category"
              width={250}
              height={250}
              className="mx-auto -mt-14 w-36"
            />
          </div>
          <h3 className="text-xl font-bold">EARPHONES</h3>
          <Link
            href="/shop/earphones"
            className="inline-flex items-center font-bold text-black hover:text-[#D87D4A]"
          >
            SHOP
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
