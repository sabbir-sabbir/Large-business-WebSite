import React from 'react'
import {Button} from '@nextui-org/react'

const ClubHero = () => {
  return (
    <>
 <section className='bg-[url("clubmask.png")] w-full h-[70vh] bg-no-repeat bg-top  md:bg-cover overflow-hidden mx-auto'>
     <div className='flex flex-col justify-start items-center lg:items-start  lg:py-[160px] p-3 pt-6 w-[45%] ml-12 mx-start'>
     <div className='bg-[#00000099]/60 container w-full max-w-[330px] md:max-w-[600px]  rounded-lg p-[12px]  md:py-[10px] px-16'>
     <h1 className='text-xl lg:text-[2xl] font-bold pb-3.5 lg:pb-6 text-[#F5FAFF] '>Our top pick for the week!</h1>
     <p className='text-lg w-[80%] font-bold text-[#F5FAFF]'>Amaarae & Tems on June 3rd </p>
     <div className='flex justify-end items-center'>
     <Button color='primary'  >Book A Section Now</Button>
     </div>
     </div>
     </div>

    </section>
    </>
  )
}

export default ClubHero