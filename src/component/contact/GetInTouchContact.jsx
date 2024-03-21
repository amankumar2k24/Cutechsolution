import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const GetInTouchContact = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate();
    const [isloading, setLoading] = useState(false)
    const [showPopup, setShowPopup] = useState(false);

    var curr = new Date();
    // curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0, 10);
    const [contactData, setContactData] = useState({
        Email: "", Contact: "", Name: "", Message: "", AppointmentDate: date
    })

    const moveToTop = () => {
        return true
    }

    const handleSubmitToSpreadSheet = (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData();
        Object.keys(contactData).forEach((item) => {
            formData.append(item, contactData[item])
        })
        try {
            const header = {
                method: 'POST',
                mode: 'no-cors', // Set mode to 'no-cors',
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                body: formData,
            }
            fetch(`https://script.google.com/macros/s/AKfycbzG1hW0zaXKsXeLTV4V0wpGcBsDAX2xuG7gP8Nrf56G-MR0q1ekvEAwPCpDuh8cUa2dMw/exec`, header).then((res) => {
                console.log(res)
                setLoading(false)
                moveToTop()
                setShowPopup(true);
                setTimeout(() => {
                    navigate('/')
                }, 2000)
                setContactData({ Email: "", Phone: "", Name: "", CompanyName: "", AppointmentDate: "", Intreast: "", Message: "" });
            }).catch((err) => {
                console.log(err)
                setLoading(false)
            })
        } catch (err) {
            setLoading(false)
            console.log("error while form submission ", err);
        }

    }

    return (


        <section className="max-w-[1920px] mx-auto mb-20 text-white px-4 flex flex-col justify-center items-center ">

            <div className='flex justify-between items-center w-full px-8 py-10  flex-col pb-20 gap-4 bg-[#091242]'>
                <div className='flex justify-center items-center max-w-[1280px] flex-col border-b-[#4E5683] border-x-[#091242] border-t-[#091242] border-2 sm:p-4 '>
                    <div className='w-full text-center justify-center flex flex-col gap-2'>
                        <p className="text-lapContactBody block mx-auto w-[78px] bg-white/10 border-l-4 border-yellow-500 font-bold">
                            Contact
                        </p>
                        { }
                        {pathname === "/contact-us" ? (
                            <h1 className="lg:text-lapContactTitle capitalize sm:text-tabTitle text-mobTitle font-rubik font-semibold leading-[30.81px]">
                                Get in touch with us
                            </h1>
                        ) : (
                            <h2 className="lg:text-lapContactTitle capitalize sm:text-tabTitle text-mobTitle font-rubik font-semibold leading-[30.81px]">
                                Get in touch with us
                            </h2>
                        )
                        }

                        <p className="block mx-auto text-center font-rubik leading-[22.68px] max-w-[320px] sm:max-w-[430px] font-normal lg:text-lapContactBody sm:text-tabBody text-mobBody">
                        Cutech Solutions: Empowering B2B Enterprises with Next-Level IT Solutions
                        </p>
                    </div>

                    <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-center my-6'>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <a className='sm:w-[47px] h-[47px]' href='mailto:info@cutechsolutions.co.uk' target='_blank'>
                                <img loading="lazy" src="img/Contact/Message.svg" alt="" className="inline-block" />
                            </a>
                            <div className="flex flex-col text-mobBody justify-center font-krub font-medium leading-[16.2px]">
                                <p>Email </p>
                                <a href='mailto:info@cutechsolutions.co.uk' target='_blank'>info@cutechsolutions.co.uk</a>
                            </div>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <a className='w-[47px] h-[47px]' href=' tel:+447424352181'>
                                <img loading="lazy" src="img/Contact/Phone.svg" alt="" className="inline-block" />
                            </a>
                            <div className="flex flex-col text-mobBody justify-center font-krub font-medium leading-[16.2px]">
                                <p>Call Us</p>
                                <a href='tel:+447424352181'>{" "} +44 7424 352181</a>
                            </div>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <img loading="lazy"
                                src="img/Contact/Message.svg"
                                alt=""
                                className="inline-block"
                            />
                            <div className="flex flex-col text-mobBody justify-center font-krub font-medium leading-[16.2px]">
                                <p>Mon - Sun 24/7</p>
                            </div>
                        </div>
                    </div>


                    <form className="flex flex-col gap-6 mt-8 w-full  lg:mb-0 lg:px-0 sm:px-10 mb-12 pb-0 sm:pb-10 text-white" method='POST' onSubmit={handleSubmitToSpreadSheet}>


                        <div className="flex gap-6 flex-col lg:flex-row">
                            <input
                                onChange={(e) => setContactData((p) => ({ ...p, Name: e.target.value }))}
                                required
                                defaultValue={contactData.Email}

                                type="text"
                                className="bg-darkBlue w-full text-white font-normal font-rubik border-2 px-8 py-3 border-[#4E5683] "
                                placeholder="John Smith"
                            />
                            <input
                                onChange={(e) => setContactData((p) => ({ ...p, CompanyName: e.target.value }))}
                                required
                                defaultValue={contactData.CompanyName}
                                type="text"
                                className="bg-darkBlue w-full text-white font-normal font-rubik border-2 px-8 py-3 border-[#4E5683] "
                                placeholder="Company name*"
                            />
                        </div>
                        <div className="flex gap-6 flex-col lg:flex-row">
                            <input
                                onChange={(e) => setContactData((p) => ({ ...p, Contact: e.target.value }))}
                                required
                                defaultValue={contactData.Contact}
                                type="tel"
                                className="bg-darkBlue w-full text-white font-normal font-rubik border-2 px-8 py-3 border-[#4E5683]"
                                placeholder="Your Contact No.*"
                            />
                            <input
                                onChange={(e) => setContactData((p) => ({ ...p, Email: e.target.value }))}
                                required
                                defaultValue={contactData.Email}
                                type="text"
                                className="bg-darkBlue w-full text-white font-normal font-rubik border-2 px-8 py-3 border-[#4E5683]"
                                placeholder="john@gmail.com"
                            />
                        </div>
                        <div className=" flex gap-1 flex-wrap justify-between">

                            <div className="flex flex-wrap gap-2 flex-col ">
                                <p className="text-[16px]  font-semibold font-rubik mb-4">
                                    I’m interested in:
                                </p>
                                <div className='max-w-[350px] '>
                                    {
                                        ["Technical Support", "Sales Inquiry", "Digital Marketing", "Website Designing", "Other"].map((item, index) => {
                                            return (
                                                <button type='button' key={index} onClick={(e) => setContactData((p) => ({ ...p, Intreast: item }))} className={` ${contactData.Intreast === item && "bg-custom-gradient "} px-[20px]  py-[10px] border rounded-[50px] text-[16px] font-normal m-1 bg-button`}>
                                                    {item}
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div>
                                <div className="flex gap-6 flex-col max-w-[400px] mt-4 lg:mt-16 ">
                                    <select name=" level" onClick={(e) => setContactData((p) => ({ ...p, Level: e.target.value }))} className="bg-darkBlue  sm:w-[380px] w-[250px] lg:w-[329.5px]  text-white font-normal font-rubik border-2 px-8 py-3 border-[#4E5683]" id="">
                                        <option value="Level">Urgency Level</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                    <input
                                        type="date"
                                        className="bg-darkBlue w-full text-white font-normal font-rubik border-2 px-8 py-3 border-[#4E5683]"
                                        onChange={(e) => setContactData((p) => ({ ...p, AppointmentDate: e.target.value }))}
                                        required
                                        defaultValue={contactData.AppointmentDate}
                                    />
                                    <select name="" onChange={(e) => setContactData((p) => ({ ...p, LinkPlatform: e.target.value }))} className="bg-darkBlue w-full text-white font-normal font-rubik border-2 px-8 py-3 border-[#4E5683]" id="">
                                        <option value="cucumber">How Did You Hear About Us?</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="Twiteer">Twitter</option>
                                        <option value="Linkdin">Linkedin</option>
                                        <option value="Linkdin">Google</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <textarea
                                type="text"
                                className="bg-darkBlue text-white font-normal font-rubik border-2 px-8 pt-4 pb-16 border-[#4E5683]"
                                placeholder="Your Message"
                                onChange={(e) => setContactData((p) => ({ ...p, Message: e.target.value }))}
                            />
                            <div className='text-center'>
                                <button
                                    type="submit"
                                    className="text-start bg-custom-gradient px-[25px] py-[14px] text-black font-rubik font-semibold"
                                >
                                    {
                                        isloading ?
                                            <div className='flex items-center justify-center h-[14px] sm:h-[24px]'>
                                                "Loading"
                                            </div>
                                            :
                                            "Submit  Message"
                                    }
                                </button>
                            </div>

                            {showPopup &&
                                <div className="popup px-[15px] py-[8px] w-[200px] text-center">
                                    <p>You have successfully submitted the form.</p>
                                </div>
                            }

                        </div>
                    </form>

                </div>

            </div>
        </section>

    )
}

export default GetInTouchContact





