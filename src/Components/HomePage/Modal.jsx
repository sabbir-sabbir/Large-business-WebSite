import React, { useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Input} from '@nextui-org/react'
import {  UserIcon } from "@heroicons/react/24/outline";

const MyModal = () => {
 const [isOPen, setIsOpen]  = useState(false);  

 const HandleClose = ()=> {
    setIsOpen(false)
 };
 const HandleOpen = ()=> {
    setIsOpen(true)
    
 };

  return (
    <section   >
        <div className='flex flex-wrap gap-3 '>
            
            <Button variant='flat' onPress={HandleOpen}    >
            <UserIcon className='text-gray-500 w-4 h-4'/>
                Account
            </Button>
        </div>
       <Modal isOpen={isOPen} backdrop='blur' onClose={ HandleClose} size='3xl' placement='top' >
        <ModalContent>
            <ModalBody className=' px-0 py-0  '>
                <div className='flex flex-col md:flex-row w-full h-full  overflow-y-auto  '>
                    {/* Left side */}
                  <div className='bg-[url("singup.png")]  bg-cover bg-no-repeat bg-center flex flex-col text-zinc-700 w-full md:w-1/3 p-8'>
                  <h3 className=' text-lg  md:text-4xl  font-bold mb-5 text-start mt-10'>Sign Up</h3>
                  <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus ullamcorper hendrerit quis purus pellentesque. Ac sagittis, convallis non tincidunt interdum eu nullam aliquam maecenas. Enim sed tortor morbi ut suspendisse. </p>
                  </div>

                  {/* Right side */}
                  <div className=' w-full  md:w-2/3 md:py-3 md:px-12 bg-white'>
                  <div>
                    <img className='w-fit mx-auto' src="logo.png" alt="logo here" />
                    <h2 className=' text-2xl font-bold text-[#26395c] p-2'>Sign up and get exploring!</h2>
                    <p className=' text-sm md:text-md p-2'>Already have an account?   <a className='text-blue-500' href="">Sign In </a></p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <button className='flex items-center justify-center w-full px-4 py-2 border border-blue-600 rounded-md hover:bg-gray-100 '>
                        <img className='w-6 h-6 mr-2' src="google.png" alt="" />
                        Sign up with Google
                    </button>
                    <button className='flex items-center justify-center w-full px-4 py-2 border border-blue-600 rounded-md hover:bg-gray-100 '>
                        <img className='w-6 h-6 mr-2' src="fb.png" alt="" />
                        Sign up with Facebook
                    </button>
                    <button className='flex items-center justify-center w-full px-4 py-2 border border-blue-600 rounded-md hover:bg-gray-100 '>
                        <img className='w-6 h-6 mr-2' src="appletag.png" alt="" />
                        Sign up with Apple
                    </button>
                  </div>
                  {/* Devider */}
                  <div className='flex items-center my-6 text-center text-gray-500 '>
                    <div className='flex-grow border-t border-gray-300'></div>
                    <span className='px-3 text-gray-600 '>or continue with</span>
                    <div className='flex-grow border-t border-gray-300' ></div>
                 </div>

                 {/* form */}
                 <form className='mt-1 p-2'>
                    <div className='mb-2'>
                        <Input type='email' label='Email' placeholder='Write your name...'  labelPlacement='outside'     />
                    </div>
                    <div className='mb-2 mt-4' >
                        <Input type='password' label='Password' placeholder='Write your password...'  labelPlacement='outside'     />
                    </div>
                    <button className='w-full bg-blue-500 text-white py-3 rounded-md '>Sign Up</button>
                    <p className='text-sm mt-2 text-center'>
                    By creating an account, you agree to our  <a className='text-blue-500 ' href="">Terms & Conditions</a>  and <a className='text-blue-500' href=""> Privacy Policy.</a>
                    </p>
                 </form>
                       
                  </div>
                </div>
            </ModalBody>
        </ModalContent>
       </Modal>
    </section>
  )
};

export default MyModal