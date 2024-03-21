import React, { useState } from 'react'

import pkg from '@material-tailwind/react';
const {Accordion, AccordionHeader, AccordionBody} = pkg;

const DetailBlogFAQ = () => {
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

    const renderTextWithBold = (text) => {
        return text.split('<strong>').map((part, index) => {
            if (index === 0) {
                return part;
            }
            const [boldText, rest] = part.split('</strong>');
            return (
                <React.Fragment key={index}>
                    <strong>{boldText}</strong>
                    {rest}
                </React.Fragment>
            );
        });
    };

    const dataMap = [
        {
            id: 0,
            doubt: "1. How quickly can Cutech Solutions resolve IT issues?",
            solution: "At Cutech Solutions, we understand the importance of fast resolution times. Our team is committed to addressing your IT issues promptly and efficiently, ensuring minimal disruption to your business operations. Depending on the severity of the issue, we aim to resolve most problems within a few hours."
        },
        {
            id: 1,
            doubt: "2. What types of businesses does Cutech Solutions support?",
            solution: "Cutech Solutions provides <strong> IT support services </strong> to businesses of all sizes and industries. If you're a small start-up or a large company We have the knowledge and resources to satisfy your requirements in IT."
        },
        {
            id: 2,
            doubt: "3. Is Cutech Solutions support available 24x7?",
            solution: "Yes, Cutech Solutions offers <strong> on-call 24x7 technical support </strong> to our clients. Whether it's during business hours or in the middle of the night, our team is always available to provide assistance and resolve IT issues."
        },
        {
            id: 3,
            doubt: "4. How does Cutech Solutions ensure data security and privacy?",
            solution: "At Cutech Solutions, we take data security and privacy seriously. We implement <strong> industry-leading security measures </strong> to protect your sensitive information and adhere to strict privacy protocols to ensure that your data remains safe and secure at all times."
        },
        {
            id: 4,
            doubt: "5. How can I get started with Cutech Solution's IT support services?",
            solution: "Getting started with Cutech Solutions is easy! Simply contact us to schedule a consultation with one of our IT experts. We'll work with you to assess your needs and develop a customized support plan that fits your budget and requirements."
        },
    ]

    return (
        <section className='flex justify-center lg:justify-between items-center flex-wrap gap-12 lg:gap-0 lg:flex-nowrap py-4  max-w-[1920px] mx-auto'>

            <div className='w-full text-black mt-10 pr-4 sm:px-4' >

                <div className='mb-8'>
                    <h2 className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-semibold whitespace-nowrap leading-[23px] sm:leading-[30.81px]">
                        Frequently Asked Questions (FAQs)
                    </h2>
                </div>

                {dataMap?.map((item, index) => {
                    return (
                        <Accordion
                            key={index}
                            open={open === index}
                            icon={<Icon id={index} open={open} />}
                            onClick={() => handleOpen(index)}
                            className={` ${(open === index && index !== dataMap.length - 1) ? "" : (index === dataMap.length - 1) ? "" : "mb-4"} mb-4 rounded-lg border border-blue-gray-100 px-4`}
                        >
                            <AccordionHeader className={` ${open === index ? "text-textBlack font-bold" : "h-[80px] font-bold"} font-rubik text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 border-none outline-none`}>
                                {item.doubt}
                            </AccordionHeader>
                            <AccordionBody className={`${open !== index ? "hidden" : "block"}  pt-0 text-mobBody2 font-krub sm:text-tabBody2 lg:text-lapBody2 font-medium leading-[24px]`}>
                                {renderTextWithBold(item.solution)}
                            </AccordionBody>
                        </Accordion>
                    )
                })}
            </div>

        </section>
    )
}

export default DetailBlogFAQ