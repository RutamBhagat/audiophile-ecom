import CheckoutForm from "~/components/checkout-form";
import { HydrateClient } from "~/trpc/server";
import React from "react";

export default function page() {
  return (
    <HydrateClient>
      <CheckoutForm />
    </HydrateClient>
  );
}
