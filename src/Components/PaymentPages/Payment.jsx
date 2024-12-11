import React, { useState } from "react";

const Payment = () => {
  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      img: "djmini.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      time: "9:00 PM ",
      location: "Quilox Club",
      originalPrice: 45000.0,
      price: 45000.0,
      quantity: 1,
    },
    {
      id: 2,
      img: "boat.png",
      title: "Boat Party with DJ Neptune",
      date: "Dec 15 2022",
      time: "8:00 PM ",
      location: "Victoria Island",
      originalPrice: 60000.0,
      price: 60000.0,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, increment) => {
    setCartItem((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + increment, 1),
              price: Math.max(item.quantity + increment, 1) * item.originalPrice,
            }
          : item
      )
    );
  };

  return (
    <section className="flex flex-col lg:flex-row gap-6 border w-[80%] mx-auto mt-20">
      {/* Left side */}
      <div className="flex-1 p-6">
        <h2 className="text-xl font-semibold text-[#969DAA]">Your Cart</h2>
        {cartItem.map((item) => (
          <div key={item.id} className="flex items-center gap-4 mb-6 p-4 border-b">
            <img className="w-24 h-24 rounded-lg" src={item.img} alt="" />

            <div className="flex-1">
              <h3>{item.title}</h3>

              <div className="mt-4">
                <div className="flex gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src="Calendar.png" alt="" />
                    <p className="text-sm text-gray-600">{item.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src="Mark.png" alt="" />
                    <p className="text-sm text-gray-600">{item.location}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <img className="w-4 h-4" src="Clock.png" alt="" />
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
              </div>

              {/* Quantity Control Section */}
              <div className="flex items-center gap-4 mt-4 bg-gray-200 rounded w-24 justify-center">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 py-1 hover:bg-gray-600"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 py-1 hover:bg-gray-600"
                >
                  +
                </button>
              </div>
              <p className="mt-2 font-bold text-lg">
                ₦{item.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right side */}
      <div></div>
    </section>
  );
};

export default Payment;
