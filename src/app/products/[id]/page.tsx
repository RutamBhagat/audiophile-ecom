import { BestGearComponent } from "~/components/best-gear";
import { FeaturesSection } from "~/components/features-section";
import { Gallery } from "~/components/gallery";
import { HydrateClient } from "~/trpc/server";
import ProductDetails from "~/components/product-details";
import ProductRecommendations from "~/components/product-recommendations";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <HydrateClient>
      <div className="mx-auto max-w-7xl">
        <ProductDetails productId={params.id} />
        <FeaturesSection />
        <Gallery productId={params.id} />
        <ProductRecommendations />
        <BestGearComponent />
      </div>
    </HydrateClient>
  );
}
