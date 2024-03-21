import React, { useState } from 'react'

import pkg from '@material-tailwind/react';
const {Accordion, AccordionHeader, AccordionBody} = pkg;

const FaqContact = ({ data }) => {

    const [open, setOpen] = useState(null);

    const handleOpen = (index) => {
        setOpen(open === index ? null : index);
    };



    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className={`${id === open ? "" : "-rotate-90"} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }



    return (
        <section className='flex mt-10 pt-5 justify-center lg:justify-between px-4 sm:px-16 items-center flex-wrap lg:gap-0 lg:flex-nowrap py-4 lg:py-20 mb-10 bg-lightWhite max-w-[1920px] mx-auto'>

            <div className='w-full lg:w-1/2 text-black mt-10 px-4 sm:px-4  ' >

                <div className='mb-8'>
                    <p className="text-lapContactBody w-[100px] mb-4 font-rubik bg-white/10 border-l-4 pl-2 border-yellow-500 ">
                        FAQ
                    </p>
                    <h2 className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-semibold leading-[23px] sm:leading-[30.81px]">
                        Frequently Asked Questions
                    </h2>
                </div>

                {data?.slice(0, 3).map((item, index) => {
                    return (
                        <Accordion
                            key={index}
                            open={open === index}
                            icon={<Icon id={index} open={open} />}
                            onClick={() => handleOpen(index)}
                            className={` ${(open === index && index !== data.length - 1) ? "" : (index === data.length - 1) ? "" : "mb-4"} mb-4 rounded-lg border border-blue-gray-100 px-4`}
                        >
                            <AccordionHeader className={` ${open === index ? "text-textBlack font-bold" : "h-[80px]"} text-[14px] sm:text-[16px] lg:text-lapTitle3 border-none outline-none`}>
                                {item.doubt}
                            </AccordionHeader>
                            <AccordionBody className={`${open !== index ? "hidden" : "block"}  pt-0 text-[12px] sm:text-[15px] lg:text-lapBody2 font-normal`}>
                                {item.solution}
                            </AccordionBody>
                        </Accordion>
                    )
                })}
            </div>

            <div className='w-full lg:w-[476px] h-[389px] lg:h-[429px]  relative flex justify-center items-center'>
                <div className='bg-darkBlue px-6 py-2 md:p-12 text-white absolute lg:w-[400px] lg:top-[15%] lg:-left-[20%]'>
                    <div className='mb-8 flex flex-col '>
                        <p className="text-lapContactBody w-[100px] mb-4 font-rubik bg-white/10 border-l-4 pl-2 border-yellow-500 ">
                            Let's Talk
                        </p>
                        <h3 className=" text-mobContactTitle sm:text-tabContactTitle lg:text-lapContactTitle font-rubik font-semibold leading-[23px] sm:leading-[30.81px] w-[200px] md:w-auto">
                            You need any help? get free consultation
                        </h3>
                        <div className='flex items-center flex-row gap-2 pt-8'>
                            <a className='w-[47px] h-[47wpx]' href=' tel:+447424352181'>
                                <img loading="lazy" src='../../img/navbar/navLogo3.svg' className='object-cover w-full' />
                            </a>
                            <div className='text-mobContactBody sm:text-lapContactBody'>
                                <p>Have Any Questions</p>
                                <a href='tel:+447424352181'>+44 7424 352181</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img loading="lazy" alt='faqImg' src='img/Contact/FAQImg.png' className='w-full h-full object-cover' /> */}0
            </div>
        </section>
    )
}

export default FaqContact