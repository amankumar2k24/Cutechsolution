import React from 'react';
import Slider from 'react-slick';
import MaterialTailwind from '@material-tailwind/react';
const { Typography } = MaterialTailwind;
import { Link } from 'react-router-dom';

const Banner = () => {
    const slideImages = [
        {
            url: '/img/home/homeBanner1.png',
            heading: 'Tech Care Beyond Borders: Expert <span> Remote Maintenance Services </span>',
            link: '/remote-technical-support-services',
        },
        {
            url: '/img/home/homeBanner.png',
            heading: 'From glitches to grand solutions, find it all with <span>Cutech Solutions</span>',
            para:
                'CUTECH Solutions: Your expert in tailored network, security, and backup services for enhanced business security.',
            link: '/contact-us',
        },
        {
            url: '/img/home/homeBanner2.png',
            heading: 'Your Virtual Bodyguard: Computer <span> Cyber Security at Its Best </span>',
            link: '/cyber-security-service',
        },
        {
            url: '/img/home/homeBanner3.png',
            heading: 'Harnessing the Power of the Cloud: <span> Tailored Management Solutions for Success </span>',
            link: '/cloud-managed-services',
        },
        {
            url: '/img/home/homeBanner4.png',
            heading: 'Ignite Your Online Presence: Strategic Solutions from <span> Digital Marketing Experts </span>',
            link: '/digital-marketing-company',
        },
    ];

    const renderTextWithBold = (text) => {
        return text.split('<span>').map((part, index) => {
            if (index === 0) {
                return part;
            }
            const [boldText, rest] = part.split('</span>');
            return (
                <React.Fragment key={index}>
                    <span className="text-transparent bg-custom-gradient bg-clip-text">{boldText}</span>
                    {rest}
                </React.Fragment>
            );
        });
    };

    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };

    return (
        <div className="">
            <Slider {...settings}>
                {slideImages.map((item, index) => (
                    <div key={index} className="relative -top-[50px] h-[320px] sm:h-full">
                        <img
                            src={item.url}
                            className="top-[600px] w-full h-full object-cover"
                            alt="imgBanner"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center">
                            <div className="w-10/12 text-center mt-10 md:w-4/4">
                                <Typography
                                    variant="lead"
                                    className="mb-4 capitalize !text-white front block text-[18px] sm:text-[25px] lg:text-lapHeaderText font-semibold font-rubik leading-[18px] sm:leading-[29px] lg:leading-[53px]"
                                >
                                    {renderTextWithBold(item.heading)}
                                </Typography>
                                {item.para && (
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="block mb-6 opacity-80 !text-white font-krub text-mobHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody leading-[18px] sm:leading-[24px]"
                                    >
                                        {item.para}
                                    </Typography>
                                )}

                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-0 text-[14px] sm:text-[16px] md:text-[20px] opacity-80 w-5/5 flex justify-center items-center"
                                >
                                    <button
                                        type="submit"
                                        className=" relative text-start text-[12px] sm:text-[14px] bg-custom-gradient px-4 sm:px-8 py-2 sm:py-3 text-black font-rubik font-medium mt-4"
                                    >
                                        <Link to={`${item?.link}`} className="w-full font-krub text-center block">
                                            Explore
                                        </Link>
                                    </button>
                                </Typography>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
