import React from "react";

// Example fake data
const tipsData = [
  {
    id: 1,
    title: "Keep Pets Warm Indoors",
    description:
      "Ensure your pets have cozy bedding and warm places to rest during cold nights.",
  },
  {
    id: 2,
    title: "Protect Their Paws",
    description:
      "Use booties or paw wax to protect pets' feet from ice, snow, and salt.",
  },
  {
    id: 3,
    title: "Hydration is Key",
    description:
      "Even in winter, pets need plenty of fresh water to stay healthy.",
  },
  {
    id: 4,
    title: "Winter Nutrition",
    description:
      "Provide extra nutrients and calories if your pets are more active outdoors.",
  },
];

const WinterCareTips = () => {
  return (
    <section className="py-12 px-4 sm:px-10 bg-[#f7f7f7]">
      <h2 className="text-3xl sm:text-4xl text-amber-950 font-bold text-center mb-8">
        Winter Care Tips for Pets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tipsData.map((tip) => (
          <div
            key={tip.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-amber-900 text-xl mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinterCareTips;
