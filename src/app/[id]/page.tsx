import { BestGearComponent } from "~/components/best-gear";
import { FeaturesSection } from "~/components/features-section";
import { HeadphonesGallery } from "~/components/headphones-gallery";
import ProductDetails from "~/components/product-details";
import ProductRecommendations from "~/components/product-recommendations";
import React from "react";

export default function page() {
  return (
    <div className="mx-auto max-w-7xl">
      <ProductDetails />
      <FeaturesSection />
      <HeadphonesGallery />
      <ProductRecommendations />
      <BestGearComponent />
    </div>
  );
}
