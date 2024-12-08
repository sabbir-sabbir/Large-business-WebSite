import React from 'react'
import {Autocomplete, AutocompleteItem, Button} from "@nextui-org/react";
import {TimeInput} from "@nextui-org/react";

import {DatePicker} from "@nextui-org/react";

const FindPlace = () => {
  return (
    <>
    <section>
    <div className='bg-[#fbfcff] w-full h-auto lg:w-[85%] lg:h-[130px] py-10 px-8 lg:ms-8 rounded-xl'>
           <div className='grid grid-cols-1  lg:grid-cols-6 gap-8'>
            <div className='w-[150px]'>
            <Autocomplete labelPlacement="outside" label="Location" placeholder="Location" className='w-[100%] '>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
                <AutocompleteItem value="Me as a Programmer" className='text-black'>Me as a Programmer</AutocompleteItem>
             </Autocomplete>
            </div>
            <div className='w-[150px]'>
            <DatePicker labelPlacement="outside" className="max-w-[284px]" label="Birth date" />
            </div>
            <div  className='w-[150px]'>
            <TimeInput labelPlacement="outside" isRequired label="Event Time" />
            </div>
            <div  className='w-[150px]'>
            <Autocomplete labelPlacement="outside" label="Cuisine" placeholder="Chinease Food" className='max-w-[500px]'>
                <AutocompleteItem value="Italian Pasta" className='text-black'>Italian Pasta</AutocompleteItem>
                <AutocompleteItem value="France pagate" className='text-black'>France pagate</AutocompleteItem>
                <AutocompleteItem value="Belgium Chocolate " className='text-black'>Belgium Chocolate</AutocompleteItem>
                <AutocompleteItem value="Japanese Sushi" className='text-black'>Japanese Sushi</AutocompleteItem>
                <AutocompleteItem value="Italian Pizza" className='text-black'>Italian Pizza</AutocompleteItem>
                <AutocompleteItem value="Bangali Sweets" className='text-black'>Bangali Sweets</AutocompleteItem>
             </Autocomplete>
            </div>
            <div  className='w-[150px]'>
            <Autocomplete labelPlacement="outside" label="People" placeholder="2" className='w-[100%] rounded-md'>
                <AutocompleteItem value="3" className='text-black'>3</AutocompleteItem>
                <AutocompleteItem value="4" className='text-black'>4</AutocompleteItem>
                <AutocompleteItem value="5" className='text-black'>5</AutocompleteItem>
                <AutocompleteItem value="6" className='text-black'>6</AutocompleteItem>
                <AutocompleteItem value="7" className='text-black'>7</AutocompleteItem>
                <AutocompleteItem value="8" className='text-black'>8</AutocompleteItem>
             </Autocomplete>
            </div>
            <div  className='w-[150px]'>
                <Button color='primary' className='w-full p-6 mt-5 rounded-md'>Search</Button>
            </div>
         
           </div>
        </div>
    </section>
    </>
  )
}

export default FindPlace