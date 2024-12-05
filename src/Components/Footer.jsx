import React from 'react';
import {Button} from '@nextui-org/react'

const footerData = {
  socialIcons: [
    "facebook.png",
    "Instagram.png",
    "youtube.png",
    "Twitter.png",
    "linkedin.png",
    "tiktok.png",
  ],

  sections: [
    {
      title: "Menu",
      menus: [
        { items: ["Home", "Eat", "Drink", "Events", "Club"] },
        { items: ["Blogs", "Careers", "Contact", "FAQs"] },
      ],
    },
    {
      title: "Utility pages",
      menus: [
        {
          items: [
            "Start here",
            "Pay with crypto",
            "Style guide",
            "Password Protected",
            "404 not found",
          ],
        },
      ],
    },
  ],

  PartnertsSection: {
    image: "partner.png",
    title: "Become a Partner",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere."
  },
  logo: "logo.png",
  copyRight: `© ${new Date().getFullYear()} All rights reserved by SABBIR RAHMAN`,
};

// Define MenuSection as a React component
const MenuSection = ({ title, menus }) => {
  return (
    <div>
      <p className="text-semibold text-2xl border-b mb-5 py-3">{title}</p>
      <div className="flex gap-12 text-xl">
        {menus.map((menuItem, i) => (
          <ul key={i}>
            {menuItem.items.map((item, idx) => (
              <li className="mb-4" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const { socialIcons, sections, PartnertsSection, logo, copyRight } = footerData;

  return (
    <footer className="p-10">
      {/* Parent div */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left side div */}
        <div className='col-span-1'>
          <img className="w-fit mb-4" src={logo} alt="Logo" />
          <p className="text-sm mb-5">{copyRight}</p>
          <div className="flex space-x-4">
            {socialIcons.map((sicon, index) => (
              <a href="#" key={index}>
                <img className="w-4 h-4" src={sicon} alt={`Icon ${index}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Right side div */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 ms-auto  col-span-3">
          {sections.map((section, index) => (
            <MenuSection
              key={index}
              title={section.title}
              menus={section.menus}
            />
          ))}
          
        <div className='w-full bg-[#f5faff] p-5'>
            <img className='bg-blue-500 w-12 h-12 rounded-lg' src={PartnertsSection.image} alt="" />
            <h3 className='text-3xl text-[#26395c] font-bold'>{PartnertsSection.title}</h3>
            <p className='text-md text-gray-400 mb-5'>{PartnertsSection.desc}</p>
            <Button color="primary" className='w-full' size="xl">Join now</Button>
        </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
