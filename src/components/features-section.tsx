"use client";

export function FeaturesSection() {
  const boxItems = [
    { quantity: "1x", item: "Headphone Unit" },
    { quantity: "2x", item: "Replacement Earcups" },
    { quantity: "1x", item: "User Manual" },
    { quantity: "1x", item: "3.5mm 5m Audio Cable" },
    { quantity: "1x", item: "Travel Bag" },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">FEATURES</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you&apos;re taking a business call or just in
              your own personal space, the auto on/off and pause features ensure
              that you&apos;ll never miss a beat.
            </p>
            <p>
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-3xl font-bold tracking-tight">IN THE BOX</h2>
          <ul className="space-y-4">
            {boxItems.map((item, index) => (
              <li key={index} className="flex items-center gap-6">
                <span className="font-medium text-orange-500">
                  {item.quantity}
                </span>
                <span className="text-gray-600">{item.item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
