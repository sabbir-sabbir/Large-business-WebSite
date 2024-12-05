import React from "react";
import {Autocomplete, AutocompleteItem, Button} from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="bg-[url('hero1.png')] w-full h-[80vh] bg-no-repeat bg-cover  mt-4 overflow-hidden">
      <div className="container w-[80%] mx-auto">
        <h1 className=" text-xl lg:text-5xl w-full lg:w-[60%] font-bold py-3 lg:py-10 px-10 mt-[8px] lg:mt-[30px] text-white leading-tight">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>
        <div className='bg-[#fbfcff] w-full h-auto lg:w-[750px] lg:h-[130px] py-10 px-10 lg:ms-10 rounded-xl'>
           <div className='grid grid-cols-1  lg:grid-cols-4 gap-4'>
            <div>
            <Autocomplete labelPlacement="outside" label="Location" placeholder="Oshodi" className='w-[100%]'>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
             </Autocomplete>
            </div>
            <div>
            <Autocomplete labelPlacement="outside" label="Location" placeholder="Oshodi" className='w-[100%]'>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
             </Autocomplete>
            </div>
            <div>
            <Autocomplete labelPlacement="outside" label="Location" placeholder="Oshodi" className='w-[100%]'>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
             </Autocomplete>
            </div>
            <div>
                <Button color='primary' className='w-full p-6 mt-5'>Search</Button>
            </div>
         
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
