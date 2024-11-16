import { BestGearComponent } from "~/components/best-gear";
import { FeaturesSection } from "~/components/features-section";
import { Gallery } from "~/components/gallery";
import { HydrateClient } from "~/trpc/server";
import ProductDetails from "~/components/product-details";
import ProductRecommendations from "~/components/product-recommendations";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  return (
    <HydrateClient>
      <div className="mx-auto max-w-7xl">
        <ProductDetails productId={id} />
        <FeaturesSection />
        <Gallery productId={id} />
        <ProductRecommendations />
        <BestGearComponent />
      </div>
    </HydrateClient>
  );
}
