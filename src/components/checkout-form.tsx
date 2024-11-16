"use client";

import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import Image from "next/image";
import { Input } from "~/components/ui/input";
import { PhoneInput } from "~/components/ui/phone-input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  paymentMethod: z.enum(["e-money", "cash"]),
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
});

export default function Component() {
  const [paymentMethod, setPaymentMethod] = useState("e-money");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "e-money",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen bg-[#F1F1F1] px-6 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-[1110px]">
        <Button
          variant="ghost"
          className="mb-6 px-0 text-[15px] font-medium text-black/50 hover:text-black"
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>

        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          <Card className="rounded-lg bg-white p-6 md:p-12">
            <h1 className="mb-8 text-[28px] font-bold tracking-[1px]">
              CHECKOUT
            </h1>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-12"
              >
                <div>
                  <h2 className="mb-4 text-[13px] font-bold tracking-[1px] text-[#D87D4A]">
                    BILLING DETAILS
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[12px] font-bold">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Alexei Ward"
                              {...field}
                              className="rounded-lg border-gray-300 focus:border-[#D87D4A] focus:ring-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[12px] font-bold">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="alexei@mail.com"
                              type="email"
                              {...field}
                              className="rounded-lg border-gray-300 focus:border-[#D87D4A] focus:ring-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[12px] font-bold">
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <PhoneInput
                              placeholder="+1 202-555-0136"
                              {...field}
                              defaultCountry="US"
                              className="rounded-lg border-gray-300 focus:border-[#D87D4A] focus:ring-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-[13px] font-bold tracking-[1px] text-[#D87D4A]">
                    SHIPPING INFO
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="text-[12px] font-bold">
                            Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="1137 Williams Avenue"
                              {...field}
                              className="rounded-lg border-gray-300 focus:border-[#D87D4A] focus:ring-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[12px] font-bold">
                            ZIP Code
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="10001"
                              {...field}
                              className="rounded-lg border-gray-300 focus:border-[#D87D4A] focus:ring-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[12px] font-bold">
                            City
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="New York"
                              {...field}
                              className="rounded-lg border-gray-300 focus:border-[#D87D4A] focus:ring-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[12px] font-bold">
                            Country
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="United States"
                              {...field}
                              className="rounded-lg border-gray-300 focus:border-[#D87D4A] focus:ring-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-[13px] font-bold tracking-[1px] text-[#D87D4A]">
                    PAYMENT DETAILS
                  </h2>
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-[12px] font-bold">
                          Payment Method
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={(value) => {
                              field.onChange(value);
                              setPaymentMethod(value);
                            }}
                            defaultValue={field.value}
                            className="grid gap-4"
                          >
                            <FormItem className="flex items-center space-x-3 rounded-lg border border-gray-300 p-4">
                              <FormControl>
                                <RadioGroupItem
                                  value="e-money"
                                  className="border-[#D87D4A] text-[#D87D4A]"
                                />
                              </FormControl>
                              <FormLabel className="font-bold">
                                e-Money
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 rounded-lg border border-gray-300 p-4">
                              <FormControl>
                                <RadioGroupItem
                                  value="cash"
                                  className="border-[#D87D4A] text-[#D87D4A]"
                                />
                              </FormControl>
                              <FormLabel className="font-bold">
                                Cash on Delivery
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {paymentMethod === "e-money" && (
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="eMoneyNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[12px] font-bold">
                              e-Money Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="238521993"
                                {...field}
                                className="rounded-lg border-gray-300 focus:border-[#D87D4A] focus:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="eMoneyPin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[12px] font-bold">
                              e-Money PIN
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="6891"
                                type="password"
                                {...field}
                                className="rounded-lg border-gray-300 focus:border-[#D87D4A] focus:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </div>
              </form>
            </Form>
          </Card>

          <Card className="h-fit rounded-lg bg-white p-6 md:p-8">
            <h2 className="mb-8 text-[18px] font-bold tracking-[1px]">
              SUMMARY
            </h2>
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-lg bg-[#F1F1F1]">
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
                    <div className="h-16 w-16 overflow-hidden rounded-lg bg-[#F1F1F1]">
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
                    <div className="h-16 w-16 overflow-hidden rounded-lg bg-[#F1F1F1]">
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
                <div className="flex justify-between">
                  <span className="uppercase text-black/50">TOTAL</span>
                  <span className="text-lg font-bold">$ 5,396</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase text-black/50">SHIPPING</span>
                  <span className="text-lg font-bold">$ 50</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase text-black/50">
                    VAT (INCLUDED)
                  </span>
                  <span className="text-lg font-bold">$ 1,079</span>
                </div>
                <div className="flex justify-between pt-6">
                  <span className="uppercase text-black/50">GRAND TOTAL</span>
                  <span className="text-lg font-bold text-[#D87D4A]">
                    $ 5,446
                  </span>
                </div>
              </div>

              <Button
                className="w-full bg-[#D87D4A] text-[13px] font-bold tracking-[1px] text-white hover:bg-[#FBAF85]"
                type="submit"
              >
                CONTINUE & PAY
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
