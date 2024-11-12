import { HydrateClient, api } from "~/trpc/server";

import Hero from "./_components/hero";
import { LatestPost } from "~/app/_components/post";
import Link from "next/link";
import ProductsCarousel from "./_components/products-carousel";
import { auth } from "~/server/auth";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <Hero />
      <ProductsCarousel />
    </HydrateClient>
  );
}
