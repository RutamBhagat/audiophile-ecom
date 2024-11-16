import { Card, CardContent } from "~/components/ui/card";

import { Button } from "~/components/ui/button";
import ProductsCarousel from "./products-carousel";
import ResponsiveImage from "~/components/responsive-image";

export default function ProductRecommendations() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="space-y-12">
        <div className="space-y-16">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            YOU MAY ALSO LIKE
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* XX99 MARK I */}
            <Card className="border-0 shadow-none">
              <CardContent className="space-y-8 p-0 text-center">
                <div className="rounded-lg bg-[#F1F1F1] p-6">
                  <ResponsiveImage
                    basePath="/assets/product-xx99-mark-one-headphones"
                    imageName="image-category-page-preview.jpg"
                    alt="XX99 MARK I"
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold">XX99 MARK I</h3>
                <Button
                  variant="secondary"
                  className="rounded-none bg-[#D87D4A] text-white transition-colors hover:bg-[#FBAF85]"
                >
                  SEE PRODUCT
                </Button>
              </CardContent>
            </Card>

            {/* XX59 */}
            <Card className="border-0 shadow-none">
              <CardContent className="space-y-8 p-0 text-center">
                <div className="rounded-lg bg-[#F1F1F1] p-6">
                  <ResponsiveImage
                    basePath="/assets/product-xx59-headphones"
                    imageName="image-category-page-preview.jpg"
                    alt="XX59"
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold">XX59</h3>
                <Button
                  variant="secondary"
                  className="rounded-none bg-[#D87D4A] text-white transition-colors hover:bg-[#FBAF85]"
                >
                  SEE PRODUCT
                </Button>
              </CardContent>
            </Card>

            {/* ZX9 SPEAKER */}
            <Card className="border-0 shadow-none">
              <CardContent className="space-y-8 p-0 text-center">
                <div className="rounded-lg bg-[#F1F1F1] p-6">
                  <ResponsiveImage
                    basePath="/assets/product-zx9-speaker"
                    imageName="image-category-page-preview.jpg"
                    alt="ZX9 SPEAKER"
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold">ZX9 SPEAKER</h3>
                <Button
                  variant="secondary"
                  className="rounded-none bg-[#D87D4A] text-white transition-colors hover:bg-[#FBAF85]"
                >
                  SEE PRODUCT
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Categories Section */}
        <ProductsCarousel />
      </section>
    </div>
  );
}
