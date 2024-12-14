import React from 'react';
import { Button } from '@nextui-org/react';

const ClubResturants = () => {
  const Data = [
    {
      id: 1,
      img: 'quilox.png',
      title: 'Quilox',
      desc: '2 Musa YarAdua, Lagos Nigeria',
      day: 'Mondays-Friday',
      time: '8pm-3am',
    },
    {
      id: 2,
      img: 'sliver.png',
      title: 'Silver Fox',
      desc: '2 Musa YarAdua, Lagos Nigeria',
      day: 'Mondays-Friday',
      time: '8pm-3am',
    },
    {
      id: 3,
      img: 'nitro.png',
      title: 'Nitro Night Club',
      desc: '2 Musa YarAdua, Lagos Nigeria',
      day: 'Mondays-Friday',
      time: '8pm-3am',
    },
    {
      id: 4,
      img: 'vegas.png',
      title: 'Club Vegas',
      desc: '2 Musa YarAdua, Lagos Nigeria',
      day: 'Mondays-Friday',
      time: '8pm-3am',
    },
  ];

  return (
    <>
      <section className="bg-black p-10">
        <div className="w-[80%] mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-white text-2xl md:text-4xl mb-4 mt-4">
            Popular Night Clubs
            </h2>
            <Button variant="outline" className="text-xl text-white">
              See More
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {Data.map((allData) => (
              <div key={allData.id} className="bg-black p-4 rounded-lg">
                <img
                  className="transform hover:scale-110 transition duration-300 ease-in-out w-full h-[200px] object-cover rounded-lg mb-3"
                  src={allData.img}
                  alt={allData.title}
                />
                <h2 className="text-[#f5faff] font-semibold text-sm md:text-lg mb-2">
                  {allData.title}
                </h2>
                <p className="text-sm text-[#f5faff] mb-1">{allData.desc}</p>
                <p className="text-sm text-[#f5faff]">
                  {allData.day} - {allData.time}
                </p>
                <Button color="primary" className="mt-4">
                  Reserve Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClubResturants;
