import Link from "next/link";
import ResponsiveImage from "./responsive-image";

export default function ProductCategories() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto space-y-8 px-6 md:space-y-10 md:px-8 lg:px-12">
        {/* ZX9 Speaker */}
        <div className="relative flex min-h-[600px] items-center overflow-hidden rounded-lg bg-[#D87D4A] md:min-h-[720px]">
          <div className="absolute inset-0 h-full w-full">
            <ResponsiveImage
              basePath="/assets/home"
              imageName="image-speaker-zx9.png"
              alt="ZX9 SPEAKER"
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative z-10 space-y-6 p-8 text-center md:p-12 lg:ml-auto lg:w-1/2 lg:text-left">
            <h2 className="text-4xl font-bold tracking-wider text-white md:text-5xl lg:text-6xl">
              ZX9 SPEAKER
            </h2>
            <p className="mx-auto max-w-[350px] text-gray-100 lg:mx-0">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center bg-black px-8 text-sm font-bold text-white transition-colors hover:bg-gray-900"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* ZX7 Speaker */}
        <div className="relative flex min-h-[320px] items-center overflow-hidden rounded-lg bg-[#f1f1f1]">
          <div className="absolute inset-0 h-full w-full">
            <ResponsiveImage
              basePath="/assets/home"
              imageName="image-speaker-zx7.jpg"
              alt="ZX7 SPEAKER"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative z-10 space-y-6 p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-wider text-black md:text-4xl">
              ZX7 SPEAKER
            </h2>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center border border-black bg-transparent px-8 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* YX1 Earphones */}
        <div className="relative flex min-h-[320px] items-center overflow-hidden rounded-lg bg-[#f1f1f1]">
          <div className="absolute inset-0 h-full w-full">
            <ResponsiveImage
              basePath="/assets/home"
              imageName="image-earphones-yx1.jpg"
              alt="YX1 EARPHONES"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative z-10 space-y-6 p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-wider text-black md:text-4xl">
              YX1 EARPHONES
            </h2>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center border border-black bg-transparent px-8 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
