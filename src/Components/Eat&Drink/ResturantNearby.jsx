import React, {useState, useEffect} from 'react'
import {Button} from "@nextui-org/react"


const ResturantNearby = () => {

    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch("mydata.json")
        .then((res)=> {
            return  res.json()
        })
        .then((jsonData)=> {
            setData(jsonData)
        })

    } , [])

  return (
  <>
   <section className='bg-[#f5faff] p-10'>

    <div className='w-[80%] mx-auto'>
       
        <div className='flex justify-between items-center '>
         <h2 className='font-bold text-2xl md:text-4xl mb-4 mt-4 text-[#26395C]'>Resturants NearBy</h2>
         <Button variant='outline' className='text-xl text-[#0e8bff]'>See more</Button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
            {data.map((allData)=> (

                <div key={allData.id}>
                    <img className=' transform hover:scale-110 transition duration-300 ease-in-out  w-[250px] object-cover rounded-lg mb-3' src={allData.img} alt="" />
                    <h2 className=' text-[#26395C] font-semibold text-sm md:text-lg mb-2 '>{allData.title}</h2>
                    <p className='text-sm text-[#26395C]'>{allData.desc}</p>
                    <Button color='primary' className='mt-12'>Reserve Now</Button>
                </div>
            ))}

        </div>
    </div>
   </section>
  </>
  )
}

export default ResturantNearby