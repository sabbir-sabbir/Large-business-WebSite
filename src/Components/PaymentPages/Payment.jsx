import React, {useState} from 'react'

const Payment = () => {

    const [cartItem, setCartItem] = useState([
        {
            id: 1,
            img: "djmini.png",
            titile: "The 90s with Dj Neptune",
            date: "Dec 12 2022",
            time: "9:00 PM ",
            location: "Quilox Club",
            price: "₦45,000.00",
            quantity: "1"
        },
        {
            id: 1,
            img: "djmini.png",
            titile: "The 90s with Dj Neptune",
            date: "Dec 12 2022",
            time: "9:00 PM ",
            loction: "Quilox Club",
            price: "₦45,000.00",
            quantity: "1"
        }
    ])
  return (
   <section className="flex flex-col lg:flex-row gap-6 border w-[80%] mx-auto mt-20">
    {/* Left side */}
    <div className='flex-1 p-6'>
      <h2 className="text-xl font-semibold text-[#969DAA]">Your Card</h2>
      {cartItem.map((item)=> (
         <div key={id} className="flex  items-center gap-4 mb-6 p-4 border-b-1 ">
            <img className='w-24 h-24 rounded-lg ' src={item.img} alt="" />

            <div className='flex-1 '>
                <h3>{item.titile}</h3>

                <div className='mt-4'>
                    <div className='flex gap-3 items-center'>
                        <div className='flex items-center gap-2 '>
                            <img className='w-4 h-4' src="Calendar.png" alt="" />
                            <p className='text-sm  text-gray-600 '>{item.date}</p>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <img className='w-4 h-4' src="Mark.png" alt="" />
                            <p className='text-sm  text-gray-600 '>{item.location}</p>
                        </div>
                    </div>

                    <div className=''>
                        <img className='w-4 h-4'  src="Clock.png" alt="" />
                        <p className='text-sm  text-gray-600 '>{item.time}</p>
                  
                    </div>
                </div>
               
            </div>

         </div>

      ))}
    </div>

    {/* Right side */}
    <div></div>
   </section>
  )
}

export default Payment