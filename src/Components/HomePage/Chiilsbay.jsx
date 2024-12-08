import React from 'react'

const Chiilsbay = () => {
  //


const CardInfo = [
  {
    logo: "use1.png",
    title: "Your  entire  trip in one checkout!",
    desc: "Add multiple experiences to your cart and checkout on one click."
  },

  {
    logo: "use2.png",
    title: "Pay with Crypto on the go",
    desc: "Enjoy the freedom of universal payments for a seamless marketplace experience"
  },
  
  {
    logo: "use3.png",
    title: " Free Cancellation and ticket transfer",
    desc: "Resell your tickets or cancel your reservations at zero cost 24 hours before."
  }
];

  return (
    <section>
      <h1 className='text-center text-[#26395c] lg:text-5xl lg:font-semibold font-bold text-2xl mt-16 mb-10'>Why Use Chillsbay?</h1>
      <div className='container bg-[#189eff0f] grid grid-cols-1 lg:grid-cols-3 mx-auto mt-10 mb-10 p-12 rounded-2xl shadow-xl'>
        {CardInfo.map((item, i)=> (
         <div className='mt-10' key={i}>
          <img className='w-fit mx-auto' src={item.logo} alt="" />
          <div className='w-[70%] mx-auto text-center'>
            <h3 className='text-3xl font-semibold mt-2 mb-3 '>{item.title}</h3>
            <p className='text-lg'>{item.desc}</p>
          </div>
         </div>

        ))}

      </div>
    </section>
  )
}

export default Chiilsbay