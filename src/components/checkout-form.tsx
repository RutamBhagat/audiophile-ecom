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
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <Button
          variant="ghost"
          className="mb-8 text-gray-500 hover:text-gray-700"
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="bg-white p-6 md:p-8">
              <h1 className="mb-8 text-3xl font-bold">CHECKOUT</h1>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="mb-4 text-sm font-bold uppercase text-[#D87D4A]">
                      Billing Details
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Alexei Ward" {...field} />
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
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="alexei@mail.com"
                                type="email"
                                {...field}
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
                          <FormItem className="md:col-span-2">
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <PhoneInput
                                placeholder="+1 202-555-0136"
                                {...field}
                                defaultCountry="US"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-4 text-sm font-bold uppercase text-[#D87D4A]">
                      Shipping Info
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="1137 Williams Avenue"
                                {...field}
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
                            <FormLabel>ZIP Code</FormLabel>
                            <FormControl>
                              <Input placeholder="10001" {...field} />
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
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="New York" {...field} />
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
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <Input placeholder="United States" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-4 text-sm font-bold uppercase text-[#D87D4A]">
                      Payment Details
                    </h2>
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Payment Method</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={(value) => {
                                field.onChange(value);
                                setPaymentMethod(value);
                              }}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="e-money" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  e-Money
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="cash" />
                                </FormControl>
                                <FormLabel className="font-normal">
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
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="eMoneyNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>e-Money Number</FormLabel>
                              <FormControl>
                                <Input placeholder="238521993" {...field} />
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
                              <FormLabel>e-Money PIN</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="6891"
                                  type="password"
                                  {...field}
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
          </div>

          <div>
            <Card className="bg-white p-6 md:p-8">
              <h2 className="mb-6 text-lg font-bold">SUMMARY</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-lg bg-gray-100" />
                    <div>
                      <p className="font-bold">XX99 MK II</p>
                      <p className="text-gray-500">$ 2,999</p>
                    </div>
                  </div>
                  <span>x1</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">TOTAL</span>
                    <span className="font-bold">$ 5,396</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">SHIPPING</span>
                    <span className="font-bold">$ 50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">VAT (INCLUDED)</span>
                    <span className="font-bold">$ 1,079</span>
                  </div>
                  <div className="flex justify-between pt-4">
                    <span className="text-gray-500">GRAND TOTAL</span>
                    <span className="font-bold text-[#D87D4A]">$ 5,446</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#D87D4A] hover:bg-[#FBAF85]"
                  type="submit"
                >
                  CONTINUE & PAY
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
