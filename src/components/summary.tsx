import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import Image from "next/image";

export default function Summary() {
  return (
    <Card className="h-fit rounded-none bg-white p-6 md:p-8">
      <h2 className="mb-8 text-[18px] font-bold tracking-[1px]">SUMMARY</h2>
      <div className="space-y-6">
        <div className="space-y-6">
          {/* Product items */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-none bg-[#F1F1F1]">
                <Image
                  src="/placeholder.svg"
                  alt="XX99 MK II"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold">XX99 MK II</p>
                <p className="text-black/50">$ 2,999</p>
              </div>
            </div>
            <span className="text-black/50">x1</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-none bg-[#F1F1F1]">
                <Image
                  src="/placeholder.svg"
                  alt="XX59"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold">XX59</p>
                <p className="text-black/50">$ 899</p>
              </div>
            </div>
            <span className="text-black/50">x2</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-none bg-[#F1F1F1]">
                <Image
                  src="/placeholder.svg"
                  alt="YX1"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold">YX1</p>
                <p className="text-black/50">$ 599</p>
              </div>
            </div>
            <span className="text-black/50">x1</span>
          </div>
        </div>

        <div className="space-y-2">
          {/* Price summary */}
          <div className="flex justify-between">
            <span className="uppercase text-black/50">TOTAL</span>
            <span className="text-lg font-bold">$ 5,396</span>
          </div>
          <div className="flex justify-between">
            <span className="uppercase text-black/50">SHIPPING</span>
            <span className="text-lg font-bold">$ 50</span>
          </div>
          <div className="flex justify-between">
            <span className="uppercase text-black/50">VAT (INCLUDED)</span>
            <span className="text-lg font-bold">$ 1,079</span>
          </div>
          <div className="flex justify-between pt-6">
            <span className="uppercase text-black/50">GRAND TOTAL</span>
            <span className="text-lg font-bold text-[#D87D4A]">$ 5,446</span>
          </div>
        </div>

        <Button
          className="w-full rounded-none bg-[#D87D4A] text-[13px] font-bold tracking-[1px] text-white hover:bg-[#FBAF85]"
          type="submit"
        >
          CONTINUE & PAY
        </Button>
      </div>
    </Card>
  );
}
