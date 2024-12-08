import React from 'react'

const Galary = () => {
    const galary = [
        {
           id: 1,
           img: "1.1.png" 
        },
        {
         id: 2,
           img: "1.2.png" 
        },
        {
         id: 3,
           img: "1.3.png" 
        },
        {
         id: 4,
           img: "1.4.png" 
        },
        {
         id: 5,
           img: "1.5.png" 
        },
        {
         id: 6,
           img: "1.6.png" 
        }
    ];
  return (
    <section className='border-t-1 border-b-1 mt-10 p-5'>
        <div className='container mx-auto mt-10 mb-10'>
            <h1 className='text-[#26395c] text-3xl font-semibold text-center lg:text-start'>See what people are experiencing with <span className='text-[#0e8bff]'>Chillsbay</span></h1>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0'>
              {galary.map((image, id)=> (
                     <div className='mt-5' key={id}>
                        <img className='w-full object-cover h-full' src={image.img} alt="" />
                     </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Galary