import React from 'react'

const ImgSection = () => {
const MyCards = [
    {
        imgSrc: "eat&drink.png",
        title: "Eat & Drinks"
    },
    {
        imgSrc: "events.png",
        title: "Events"
    },
    {
        imgSrc: "club2.png",
        title: "Club"
    },
    {
        imgSrc: "todo.png",
        title: "Things to do"
    },
]


  return (
    <section>
        <h1 className='text-center text-[#26395C] text-xl lg:text-6xl font-bold p-2 mt-10 mb-8'>What are you in the mood for?</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-5 container mx-auto p-1'>
            {MyCards.map((card, i)=> ( 
              
              <div key={i} className='flex flex-col  items-center overflow-hidden'>
                <img className=' w-[85%] lg:w-full h-[300px] lg:h-[500px]   ' src={card.imgSrc} alt="" />
                <div>
                    <h2 className='text-[#26395C] font-semibold text-xl '>{card.title}</h2>
                </div>

              </div>
            ))}

        </div>
    </section>
  )
}

export default ImgSection