import { BestGearComponent } from "~/components/best-gear";
import ProductRecommendations from "~/components/product-recommendations";
import React from "react";

export default function page() {
  return (
    <>
      <ProductRecommendations />
      <BestGearComponent />
    </>
  );
}
