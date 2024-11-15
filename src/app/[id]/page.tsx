import { BestGearComponent } from "~/components/best-gear";
import ProductDetails from "~/components/product-details";
import ProductRecommendations from "~/components/product-recommendations";
import React from "react";

export default function page() {
  return (
    <>
      <ProductDetails />
      <ProductRecommendations />
      <BestGearComponent />
    </>
  );
}
