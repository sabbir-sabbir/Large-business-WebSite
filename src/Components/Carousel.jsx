import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Button } from '@nextui-org/react';

const Carousel = () => {
  const CarouselData = [
    {
      id: 1,
      img: "wizkitbig.png",
      heading: "Wizkid made in Lagos tour.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 2,
      img: "wizkitbig.png",
      heading: "Me as a web developer.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 3,
      img: "wizkitbig.png",
      heading: "Me as a programmer.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ];

  const TagData = [
    { id: 1, image: "Calendar.png", title: "Dec 12 2024" },
    { id: 2, image: "Mark.png", title: "TBS Lagos" },
    { id: 3, image: "Clock.png", title: "9:00 PM" },
    { id: 4, image: "Tag.png", title: "N20,000" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = CarouselData[currentIndex];

  const HandlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? CarouselData.length - 1 : prev - 1
    );
  };

  const HandleNext = () => {
    setCurrentIndex((prev) =>
      prev === CarouselData.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section>
      <h1 className="text-center text-2xl lg:text-5xl text-[#26395c] mt-24 mb-12 font-semibold">
        See How People are Chilling On Chillsbay
      </h1>
      <div className="relative w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between ml-12">
          {/* Left Arrow */}
          <button
            onClick={HandlePrev}
            aria-label="Previous Slide"
            className="absolute left-8 transform -translate-x-3 flex items-center justify-center text-black rounded-md w-6 h-16"
          >
            <SlArrowLeft className="text-[25px]" />
          </button>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center gap-5 w-full px-8">
            {/* Left Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold text-[#25395c] lg:ms-5 lg:text-3xl text-center lg:text-start">
                Upcoming events this weekend
              </h3>
              <img
                className="object-cover w-[90%] h-auto mx-auto"
                src={currentSlide.img}
                alt="Carousel Image"
              />
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <h2 className="text-xl lg:text-3xl font-bold lg:w-[50%] leading-tight text-[#26395C]">
                {currentSlide.heading}
              </h2>
              <p className="text-gray-600 lg:w-[70%] text-xl">
                {currentSlide.desc}
              </p>
              <div className="grid grid-cols-2 lg:w-[60%] gap-4">
                {TagData.map((data) => (
                  <div key={data.id} className="flex items-center mt-5 mb-5">
                    <img src={data.image} alt={data.title} />
                    <p className="ms-2 text-lg font-semibold">{data.title}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button color="primary" variant="bordered" size="lg">
                  Add to cart
                </Button>
                <Button color="primary" size="lg">
                  Book now
                </Button>
              </div>
              <div className="flex gap-4 mt-5">
                <p>Connect with us on:</p>
                <div className="flex gap-3">
                  <img src="Twitter.png" alt="Twitter" />
                  <img src="Instagram.png" alt="Instagram" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={HandleNext}
            aria-label="Next Slide"
            className="absolute right-8 transform -translate-x-3 flex items-center justify-center text-black rounded-md w-6 h-16"
          >
            <SlArrowRight className="text-[25px]" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-3 mt-3">
          {CarouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-zinc-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
