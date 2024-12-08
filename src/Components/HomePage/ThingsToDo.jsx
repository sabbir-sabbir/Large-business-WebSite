import React from 'react'

const ThingsToDo = () => {
    const ThingCard = [
        {
            imgSrc: "light.png",
            title: "Sight Seeing"
        },
        {
            imgSrc: "volleyball.png",
            title: "Volley Ball Game"
        },
        {
            imgSrc: "wizkit.png",
            title: "Wizkid Show"
        },
        {
            imgSrc: "wizkit.png",
            title: "Wizkid Show"
        },
        {
            imgSrc: "light.png",
            title: "Sight Seeing"
        },
        {
            imgSrc: "volleyball.png",
            title: "Volley Ball Game"
        },
        {
            imgSrc: "wizkit.png",
            title: "Wizkid Show"
        },
        {
            imgSrc: "wizkit.png",
            title: "Wizkid Show"
        },
    ]
  return (
    <section className='bg-[#f5faff] p-5'>
        <div className='container mx-auto'>
        <h1 className='text-center lg:text-start text-[#26395C] text-xl lg:text-3xl font-bold p-2 mt-10 mb-8'>Top things to do in Lagos</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-10  mx-auto p-4 gap-4'>
            {ThingCard.map((card, i)=> ( 
              
              <div key={i} className='flex flex-col  items-center overflow-hidden'>
                <img className=' w-[300px]  lg:w-full ' src={card.imgSrc} alt="" />
                <div>
                    <h2 className='text-[#26395C] font-semibold text-xl '>{card.title}</h2>
                </div>

              </div>
            ))}

        </div>
        </div>
 
    </section>
  )
}

export default ThingsToDo