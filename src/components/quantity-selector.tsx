"use client";

import { Minus, Plus } from "lucide-react";

import { Button } from "~/components/ui/button";
import { useState } from "react";

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex h-12 items-center bg-secondary">
      <Button
        variant="ghost"
        size="icon"
        onClick={decrementQuantity}
        className="h-full rounded-none"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-12 text-center font-bold">{quantity}</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={incrementQuantity}
        className="h-full rounded-none"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
