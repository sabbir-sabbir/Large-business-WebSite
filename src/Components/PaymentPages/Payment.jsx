import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Payment = () => {
  const [showPaymentInfo, setShowPaymentInfo] = useState(false)
  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      img: "djmini.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      time: "9:00 PM",
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
      time: "8:00 PM",
      location: "Victoria Island",
      originalPrice: 60000.0,
      price: 60000.0,
      quantity: 1,
    },
  ]);

  // Update Quantity Function
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

  // Remove Item Function
  const removeItem = (id) => {
    setCartItem((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Add New Item Function
  const addNewItem = () => {
    const newCard = {
      id: Date.now(),
      img: "djmini.png",
      title: "The 90s With Dj Neptune",
      date: "Dec 25, 2022",
      location: "New Venue",
      time: "10:00 PM",
      originalPrice: 10000,
      price: 10000,
      quantity: 1,
    };

    setCartItem((prevItems) => [...prevItems, newCard]);
  };

  return (
    <section className="flex flex-col lg:flex-row gap-6 border w-[80%] mx-auto mt-20">
      {/* Left Side */}
      <div className="flex-1 p-6">
        <h2 className="text-xl font-semibold text-[#969DAA]">Your Cart</h2>
        {cartItem.map((item) => (
          <div key={item.id} className="flex items-center gap-4 mb-6 p-4 border-b">
            <img className="w-24 h-24 rounded-lg" src={item.img} alt={item.title} />

            <div className="flex-1">
              <h3>{item.title}</h3>

              <div className="mt-4">
                <div className="flex gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src="Calendar.png" alt="Calendar" />
                    <p className="text-sm text-gray-600">{item.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src="Mark.png" alt="Location" />
                    <p className="text-sm text-gray-600">{item.location}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <img className="w-4 h-4" src="Clock.png" alt="Clock" />
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
              </div>

              {/* Quantity Control Section */}
              <div className="flex items-center flex-row gap-4 mt-4 bg-gray-200 rounded w-24 justify-center">
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
              <p className="mt-2 font-bold text-lg">₦{item.price.toLocaleString()}</p>

              {/* Remove Card Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 mt-2"
              >
                <CiCircleRemove size={24} />
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={addNewItem}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New Card
        </button>
      </div>

      {/* Right Side */}
      <div classname='flex-1 p-6 border-1 '>
        {/* Account info */}
        <div className='mb-6 mt-5 mr-2'>
          <h3 className='text-lg font-semibold mb-2 flex gap-2 text-[#26395C]'>
          <img src="check.png" alt="" />
            Account information</h3>
          <div className='!ms-8 '>
            <p className='text-[#26395C]'>Tunde Chukwu</p>
            <p className='text-[#26395C]'>tundechukwu12@gmail.com</p>
          </div>
        </div>
          {/* Phone info */}
          <div className='mb-6 mt-5 mr-2'>
          <h3 className='text-lg font-semibold mb-2 flex gap-2'>
          <img src="check.png" alt="" />
            Phone Number</h3>
          <div className='!ms-8 '>
            <p className='text-[#26395C]'>+2341123465799</p>
          </div>
        </div>

        {/* Payment field with toggler */}
        <div>
          <h3 className='flex text-lg font-semibold mb-2 cursor-pointer  gap-2 text-[#26395C] mt-5 mr-2' onClick={()=> setShowPaymentInfo(!showPaymentInfo)}>
          <img src="check.png" alt="" />
          <span>Payment Information</span>
          <span><IoIosArrowDown /></span>
          </h3>
          {showPaymentInfo && (
            <div className='grid grid-cols-2 lg:grid-cols-2 gap-4 mt-5 mr-2'>
              <input type="number" placeholder='card number' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-red-500' />
              <input type="text" placeholder='card holder name' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-red-500' />
              <input type="date" placeholder='Exp: date' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-red-500' />
              <input type="text" placeholder='CVV' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-red-500' />
              
            </div>
          )

          }
        </div>
        
      </div>
    </section>
  );
};

export default Payment;
