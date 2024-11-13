import { HydrateClient, api } from "~/trpc/server";

import { BestGearComponent } from "~/components/best-gear";
import Hero from "../components/hero";
import ProductCategories from "../components/product-categories";
import ProductsCarousel from "../components/products-carousel";
import { auth } from "~/server/auth";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <Hero />
      <div className="mx-auto max-w-7xl">
        <ProductsCarousel />
        <ProductCategories />
        <BestGearComponent />
      </div>
    </HydrateClient>
  );
}
