import React from "react";

const vetsData = [
  {
    id: 1,
    name: "Dr. Sarah Williams",
    specialty: "Small Animals Specialist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Dr. John Smith",
    specialty: "Surgery & Emergency",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Emily Clark",
    specialty: "Nutrition & Diet",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    specialty: "Dermatology & Grooming",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const ExpertVets = () => {
  return (
    <section className="py-12 px-4 sm:px-10 bg-[#ece7df]">
      <h2 className="text-3xl sm:text-4xl text-amber-950 font-bold text-center mb-8">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {vetsData.map((vet) => (
          <div
            key={vet.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6 hover:shadow-2xl transition-shadow"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-amber-900 text-xl">{vet.name}</h3>
            <p className="text-amber-950">{vet.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertVets;
