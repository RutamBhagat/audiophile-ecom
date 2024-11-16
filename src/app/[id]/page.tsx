import { BestGearComponent } from "~/components/best-gear";
import { FeaturesSection } from "~/components/features-section";
import { HeadphonesGallery } from "~/components/headphones-gallery";
import { HydrateClient } from "~/trpc/server";
import ProductDetails from "~/components/product-details";
import ProductRecommendations from "~/components/product-recommendations";
import React from "react";

export default function page() {
  return (
    <HydrateClient>
      <div className="mx-auto max-w-7xl">
        <ProductDetails />
        <FeaturesSection />
        <HeadphonesGallery />
        <ProductRecommendations />
        <BestGearComponent />
      </div>
    </HydrateClient>
  );
}
