import React, { useState } from "react";
import { NavLink} from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import MyModal from "./HomePage/Modal";
const value = true

const MyNavbar = () => {

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const menuItems = [
    "Eat & Drinks",
    "Club",
    "Things to do",
    "Shoping",
    "Account",
    "Contact",
  ];
  return (
    <section>
      {/* for small/mobile screen */}
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setisMenuOpen}

        maxWidth="2xl"
      >
        <NavbarContent className="sm:hidden " justify="start">
          <NavbarMenuToggle
            aria-level={isMenuOpen ? "Close menu" : "Open Menu"}
          ></NavbarMenuToggle>
        </NavbarContent>
        {/* for mobile screen */}
        <NavbarContent className="sm:hidden pr-3">
          <NavbarBrand>
            <img className="w-44 " src="logo.png" alt="" />
          </NavbarBrand>
        </NavbarContent>
        {/* for large screen */}
        <NavbarContent className="hidden sm:flex gap-4 w-full  justify-center ">
          <NavbarBrand>
            <NavLink to="/"> <img className="w-44 " src="logo.png" alt="" /></NavLink>
           
          </NavbarBrand>
          <NavbarItem>
            <NavLink to="drink"  className="text-black">Eat & Drinks</NavLink>
          </NavbarItem>
          <NavbarItem>
           <NavLink to="/club">  Club <sup className=" text-[10px] ">+Hot</sup>
           {""}</NavLink>
            
         
          </NavbarItem>

          {/* Dropdown menu */}
          <NavbarItem>
          <Dropdown>
              <DropdownTrigger>
                <Button variant="none">
                  Thing to do{" "}
                  <ChevronDownIcon className="text-blue-500 w-4 h-4" />{" "}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Example with disabled actions"
                disabledKeys={["edit", "delete"]}
              >
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem>
            <NavLink to="/card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </NavLink>
          </NavbarItem>

          <NavbarItem>
            { value === true ? <MyModal/> : <DropDownMenu/> }
          </NavbarItem>

          <NavbarItem>
            <Button color="primary">Contact now</Button>
          </NavbarItem>
        </NavbarContent>

        <div className='lg:hidden'>
        <NavbarContent className="w-full" justify="end">
          <NavbarItem className="hidden lg:flex"> </NavbarItem>
          <NavbarItem>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className='bg-[#f5faff]'>
          {menuItems.map((item, i) => (
            <NavbarMenuItem key={i}>
              <Link className="w-full text-black capitalized ">{item}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        </div>
        
      </Navbar>
    </section>
  );
};

export default MyNavbar;
