import React from 'react'

const Contact = () => {
  return (
    <section>
        <div className='lg:w-[70%] mx-auto '>
            {/* left side */}
            <div className='lg:w-1/2 w-full mb-8 text-center lg:text-start'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4 mt-12 '>Contact US</h2>
            <p className='w-[50%] text-gray-600 mx-auto lg:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc, quisque ultricies netus elit massa aliquam quis cras. Enim leo, in massa sapien facilisi netu.</p>
            <div className='text-gray-800 mt-5'>
                <p className='flex  gap-3 font-semibold'><img className='w-6 h-5' src="phone.png" alt="icon" /> <span>(840) 371 - 2514</span> </p>
                <p className='flex gap-3 font-semibold'><img className='w-6 h-5' src="email.png" alt="icon" /> <span>chills@chillsbay.com</span> </p>

            </div>

            </div>
            {/* right side */}
            <div></div>

        </div>
    </section>
  )
}

export default Contact