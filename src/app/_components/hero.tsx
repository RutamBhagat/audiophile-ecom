import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[#181818]">
      <section className="relative mx-auto w-full max-w-7xl">
        <div className="absolute inset-0">
          <Image
            src="/assets/home/desktop/image-header.jpg"
            alt="XX99 MARK II HEADPHONES"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid gap-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-12 lg:py-40">
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
              <p className="text-sm tracking-[0.5em] text-gray-200">
                NEW PRODUCT
              </p>
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                XX99 MARK II HEADPHONES
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl lg:mx-0">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-none bg-[#D87D4A] px-8 text-sm font-medium text-white transition-colors hover:bg-[#fbaf85]"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
