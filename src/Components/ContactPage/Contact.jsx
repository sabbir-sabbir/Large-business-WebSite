import React from 'react'

const Contact = () => {
  return (
    <section>
        <div className='lg:w-[70%] mx-auto '>
            {/* left side */}
            <div className='lg:w-1/2 w-full mb-8 text-center lg:text-start'>
            <h2>Contact US</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc, quisque ultricies netus elit massa aliquam quis cras. Enim leo, in massa sapien facilisi netu.</p>
            <div>
                <p><img src="phone.png" alt="icon" /> <span>(840) 371 - 2514</span> </p>
                <p><img src="email.png" alt="icon" /> <span>chills@chillsbay.com</span> </p>

            </div>

            </div>
            {/* right side */}
            <div></div>

        </div>
    </section>
  )
}

export default Contact