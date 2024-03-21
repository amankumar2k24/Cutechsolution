import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { socialIcon } from '../data/dataSet'

const Navbar = () => {
    const [hide, setHide] = useState(false)
    const { pathname } = useLocation()
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null)

    const handleLinkClick = () => {
        setMenuOpen(false);
    };




    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false)
            }
        }
        document.addEventListener("click", handleOutsideClick)
        return (() => document.removeEventListener("click", handleOutsideClick))
    }, [menuOpen])

    return (
        <>
            {/* navbar  */}
            <nav role="navigation" aria-label="Main" className='max-w-[1920px] relative bg-darkBlue mx-auto px-4 mmd:px-20 text-white'>
                <div className='sm:px-10 font-krub flex flex-row justify-between items-center py-4 '>
                    {/* leftSide  */}
                    <div className='LeftSide w-[191px] h-[47px]'>
                        <Link to="/">

                            <img loading="lazy" src='../../img/navbar/logo.svg' className='object-cover w-full' />
                        </Link>
                    </div>
                    {/* RighSide  */}
                    <div className='RightSide flex-row gap-8 whitespace-nowrap hidden mmd:flex'>
                        <div className='flex items-center justify-center flex-row gap-2'>
                            <div className='w-[47px] h-[47px]'>
                                <img loading="lazy" src='../../img/navbar/navLogo1.svg' className='object-cover w-full' />
                            </div>
                            <div className='text-mobContactBody sm:text-lapContactBody'>
                                <p>Mon - Sun 24/7</p>
                                
                            </div>
                        </div>
                        <div className='flex items-center justify-center flex-row gap-2'>
                            <a className='sm:w-[47px] h-[47px]' href='mailto:info@cutechsolutions.co.uk' target='_blank'>
                                <img loading="lazy" src='../../img/navbar/navLogo2.svg' className='object-cover w-full' />
                            </a>
                            <div className='text-mobContactBody sm:text-lapContactBody'>
                                <p>Email</p>
                                <a href='mailto:info@cutechsolutions.co.uk' target='_blank'>info@cutechsolutions.co.uk</a>
                            </div>
                        </div>
                        <div className='flex items-center justify-center flex-row gap-2'>
                            <a className='w-[47px] h-[47px]' href=' tel:+447424352181'>
                                <img loading="lazy" src='../../img/navbar/navLogo3.svg' className='object-cover w-full' />
                            </a>
                            <div className='text-mobContactBody sm:text-lapContactBody'>
                                <p>Call us</p>
                                <a href='tel:+447424352181'>+44 7424 352181</a>
                            </div>
                        </div>

                    </div>
                    {/* dropdown */}

                    {/* hamburger  */}
                    <div className='block mmd:hidden'
                        onClick={() => setHide(!hide)}
                    >
                        {hide ? (
                            <img loading="lazy" src='../../img/navbar/hamburgerCancel.svg' alt='logoImg' className='w-[35px] sm:w-[45px] h-[30px] sm:h-[40px] object-cover cursor-pointer' />
                        )
                            : (
                                <img loading="lazy" src='../../img/navbar/hamburgerIcon.svg' className='object-cover w-[35px] sm:w-[45px] h-[30px] sm:h-[40px] cursor-pointer' />
                            )
                        }
                    </div>
                </div>


                {/* //mobile screen  */}
                <div className={`box flex flex-col mmd:hidden absolute z-40 ${hide ? "py-10 sm:py-20 top-[80px] sm:top-[68px] z-20" : "-py-0 -top-[32rem] z-20"} left-0 bg-lightWhite w-full transition-all duration-300 ease-in-out rounded-br-[20px] rounded-bl-[20px]`} >
                    <div className='flex flex-row flex-center w-full'>

                        <ul className={`flex flex-col w-1/2 justify-end items-end gap-8 font-semibold text-[14px] sm:text-[18px]`}>
                            {[{ route: "Home", path: '/' }, { route: "About", path: '/about-us' }, { route: "Blog", path: '/blog' }, { route: "Services", path: '/services' }, { route: "Contact", path: '/contact-us' }].map((item, index) => {
                                return (
                                    <li key={index} className={`hover:text-darkYellow w-[50px] text-center ${pathname === item.path ? "text-darkYellow" : "text-textBlack"}`} onClick={() => setHide(false)}><Link to={item.path}>{item.route}</Link></li>
                                )
                            })}

                        </ul>
                        <div className='flex flex-col items-center justify-center gap-8 sm:gap-12 w-1/2'>
                            {socialIcon.map((item, index) => <span className='hover:-translate-y-1 transition-all duration-240 px-0.5 ease-out' key={index}>{item.icon}</span>)}
                        </div>
                    </div>

                    <div className='w-full flex mt-5 pr-10 justify-center items-center'>
                    <Link to="/contact-us">
                        <img loading="lazy" src='../../img/navbar/header.svg' className='object-cover cursor-pointer w-[100px]' />
                        </Link>
                    </div>
                    <div>{""}</div>
                </div>

            </nav>

            {/* //Header  */}
            <header role='menu' className='max-w-[1920px] z-50 mx-auto px-20 text-white hidden mmd:block bg-darkBlue border-gray-700 border-t '>
                <div className='sm:px-16 font-krub flex flex-row justify-between'>
                    <div >
                        <div className='h-full flex'>
                            <ul className='flex flex-row text-mobContactBody gap-4 xxl:text-lapContactBody justify-center items-center h-full'>
                                {
                                    [{ route: "Home", path: '/' }, { route: "About", path: '/about-us' }, { route: "Blog", path: '/blog' },].map((item, index) => {
                                        return (
                                            <NavLink key={index} className={`h-full`} to={item.path}>
                                                <li className={`headerBottomBorder ${pathname === item.path && "headerBottomActive"} h-full flex items-center px-6 transition-all duration-300 ease-in-out`}>
                                                    {item.route}
                                                </li>
                                            </NavLink>

                                        )
                                    })
                                }
                                <Link to="/services" className={`${pathname === '/services' && "headerBottomActive"} relative headerBottomBorder`}>
                                    <div className='cursor-pointer group transition-all duration-300 py-[19.5px] inline-flex items-center' onMouseEnter={() => setMenuOpen(true)} >
                                        {/* <Link to='/services'> */}
                                        <li className={`h-full flex items-center px-6 transition-all duration-300 ease-in-out`}>
                                            Service
                                        </li>
                                        {/* </Link> */}
                                        <span>
                                            <img src='../../img/navbar/DropDownArrow.png' className=' mt-[2px]' alt='dropDown' />
                                        </span>
                                    </div>

                                    {menuOpen && (
                                        <>
                                            <div ref={menuRef} className='w-6 h-6 rotate-45 z-20 -bottom-[30px] translate-x-10 bg-white absolute' onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}></div>
                                            <ul className=' absolute group-hover:top-[100px] top-[73px] -left-[93px] w-[280px] justify-center transition-all duration-500 rounded-[16px] bg-lightWhite text-textBlack flex flex-col gap-[16px] z-20 px-7 py-8' onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
                                                <li className="text-[12px] font-normal font-krub">Our Services</li>
                                                <div className='flex gap-4 items-center'>
                                                    <img src="../../img/home/whatWeDo1.png" alt="" className="w-[20px] h-[21px] object-cover" />
                                                    <Link onClick={handleLinkClick} className='text-darkBlack text-[14px] font-medium font-krub leading-[24px] transition-all duration-300 ease-in-out hover:translate-x-2' to="/remote-technical-support-services ">Remote Technical Support Services</Link>
                                                </div>
                                                <div className='flex gap-4 items-center'>
                                                    <img src="../../img/home/whatWeDo2.png" alt="" className="w-[20px] h-[21px] object-cover" />
                                                    <Link onClick={handleLinkClick} className='text-darkBlack text-[14px] font-medium font-krub leading-[24px] transition-all duration-300 ease-in-out hover:translate-x-2' to="/cyber-security-service ">Cyber Security Service </Link>
                                                </div>
                                                <div className="flex gap-4 items-center">
                                                    <img src="../../img/home/whatWeDo3.png" alt="" className="w-[20px] h-[21px] object-cover" />
                                                    <Link onClick={handleLinkClick} className='text-darkBlack text-[14px] font-medium font-krub leading-[24px] transition-all duration-300 ease-in-out hover:translate-x-2 z-20' to="/cloud-managed-services ">Cloud Managed Services</Link>
                                                </div>
                                                <div className="flex gap-4 items-center">
                                                    <img src="../../img/home/whatWeDo4.png" alt="" className="w-[20px] h-[21px] object-cover" />
                                                    <Link onClick={handleLinkClick} className='text-darkBlack text-[14px] font-medium font-krub leading-[24px] transition-all duration-300 ease-in-out hover:translate-x-2 z-20' to="/digital-marketing-company ">Digital Marketing Company</Link>
                                                </div>
                                            </ul>

                                        </>
                                    )}
                                </Link>

                                <Link to='/contact-us ' className='py-[19.5] h-full'>
                                    <li className={`headerBottomBorder h-full ${pathname === '/contact' && "headerBottomActive"} h-full flex items-center px-6  transition-all duration-300 ease-in-out`}>
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-row justify-center items-center gap-2'>
                            {socialIcon.map((item, index) => <span className='hover:-translate-y-1 transition-all duration-240 px-0.5 ease-out' key={index}>{item.icon}</span>)}
                            <div>
                                 <Link to="/contact-us">
                                <img loading="lazy" src='../../img/navbar/header.svg' className='object-cover cursor-pointer w-full' />
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar