import React from "react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea, Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Contact = () => {
  const Items = [
    {
      img: "influencer.png",
      heading: "Become an Influencer",
      desc: "Join a company thats passionate about design and technology",
      link: "chills@chillsbay.com",
    },
    {
      img: "helppng.png",
      heading: "Need Help?",
      desc: "Questions about using  Market? Our support team is here to help.",
      link: "chills@chillsbay.com",
    },
    {
      img: "refund.png",
      heading: "Become an Influencer",
      desc: "Join a company thats passionate about design and technology",
      link: "chills@chillsbay.com",
    },
  ];

  return (
    <section>
      <div className="lg:w-[70%] mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-8 gap-5">
          {/* left side */}
          <div className="lg:w-1/2 w-full mb-8 text-center lg:text-start mr-5">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-12 ">
              Contact US
            </h2>
            <p className="w-[50%] md:w-full text-gray-600 mx-auto lg:mx-0 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc,
              quisque ultricies netus elit massa aliquam quis cras. Enim leo, in
              massa sapien facilisi netu.
            </p>
            <div className="text-gray-800 mt-5 w-[40%]  mx-auto md:mx-0">
              <p className="flex  gap-3 font-semibold ">
                <img className="w-6 h-5" src="phone.png" alt="icon" />{" "}
                <span>(840) 371 - 2514</span>{" "}
              </p>
              <p className="flex gap-3 font-semibold">
                <img className="w-6 h-5" src="email.png" alt="icon" />{" "}
                <span>chills@chillsbay.com</span>{" "}
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="md:w-1/2 w-full bg-white p-6 rounded-2xl shadow-xl">
            <form className="space-y-8">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  label="FirstName"
                  labelPlacement="outside"
                  type="text"
                  placeholder="FirstName"
                />

                <Input
                  label="LastName"
                  labelPlacement="outside"
                  type="text"
                  placeholder="LastName"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  label="Email Address"
                  labelPlacement="outside"
                  type="text"
                  placeholder="Email"
                />

                <Input
                  label="Phone"
                  labelPlacement="outside"
                  type="number"
                  placeholder="phone"
                />
              </div>

              <div className="!mt-10  ">
                <Select
                  items="Select"
                  label="Subject"
                  placeholder="Select an option"
                  labelPlacement="outside"
                >
                  <SelectItem>Hotel for Relax</SelectItem>
                  <SelectItem>Favrite party</SelectItem>
                  <SelectItem>Traditional Food</SelectItem>
                </Select>
              </div>

              <div>
                <Textarea isRequired label="Message" labelPlacement="outside" />
                <Button className="w-full mb-4 mt-5" color="primary">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
        {/* Card section */}
        <div className="mt-24 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {Items.map((item, i) => (
              <div className="text-center justify-center items-center " key={i}>
                <img
                  src={item.img}
                  alt="icon"
                  className="h-20 w-20 object-cover rounded mb-3 mx-auto"
                />
                <h3 className="text-xl font-semibold  text-gray-800  mb-2">
                  {item.heading}
                </h3>
                <p className="text-sm font-semibold  text-gray-400  mb-2">
                  {item.desc}
                </p>
                <a
                  className="text-blue-500 text-sm hover:underline font-light"
                  href={item.link}
                >
                  {item.link}
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Accordio section */}
        <div  className='p-24'>
            <div>
                <h3 className=' text-[#26395C] text-center font-semibold text-xl md:text-3xl'>Frequently Asked Questions</h3>
                <p className=' text-center text-sm mb-12 mt-5 mx-auto w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nunc, purus est sem volutpat at at. Ultricies erat leo risus, eget venenatis tristique morbi.</p>
            </div>
            <div>
            <Accordion variant="splitted"  defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Do you offer refunds for purchased products?">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="How does Chillsbay work?">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Can I pay with Crypto on Chillsbay.com? ">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="How can I become a Chillsbay Host?">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
            </AccordionItem>
          </Accordion>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
