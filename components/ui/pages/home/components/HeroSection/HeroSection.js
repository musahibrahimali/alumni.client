import React, { createRef, useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Event } from "../../../../../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
    //creating the ref
    const customSlider = createRef();
    const [bg1, setBg1] = useState(true);
    const [bg2, setBg2] = useState(false);
    const [bg3, setBg3] = useState(false);

    // change background
    const handleBg1 = () => {
        setBg1(true);
        setBg2(false);
        setBg3(false);
    }

    const handleBg2 = () => {
        setBg1(false);
        setBg2(true);
        setBg3(false);
    }

    const handleBg3 = () => {
        setBg1(false);
        setBg2(false);
        setBg3(true);
    }

    // next item in slider
    const next = () => {
        customSlider.current.slickNext();
    }
    // previous item in slider
    const previous = () => {
        customSlider.current.slickPrev();
    }

    // slider settings
    const settings = {
        dots: false,
        lazyLoad: true,
        autoplay: true,
        swipeToSlide: true,
        infinite: true,
        pauseOnHover: true,
        arrows: false,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const events = [
        <Event key={1} />,
        <Event key={2} />,
        <Event key={3} />
    ];

    return (
        <>
            <div className={
                bg1 ?
                    "bg-home-bg-1 pb-52 flex justify-between items-center bg-cover bg-no-repeat bg-center h-full w-full pt-8 px-8" :
                    bg2 ?
                        "bg-home-bg-2 pb-52 flex justify-between items-center bg-cover bg-no-repeat bg-center h-full w-full pt-8 px-8" :
                        bg3 ? "bg-home-bg-3 pb-52 flex justify-between items-center bg-cover bg-no-repeat bg-center h-full w-full pt-8 px-8" : ""
            }>
                <div className="bg-gray-400 bg-opacity-30 px-8 py-4 flex flex-col justify-between items-start">
                    <h1 className="text-xl md:text-8xl text-white font-extrabold capitalize">
                        We are proud
                    </h1>
                    <div className="flex flex-row items-center mt-6 mb-6">
                        <h2 className="text-white font-medium mx-2 text-xl md:text-4xl">
                            students of
                        </h2>
                        <h2 className="text-yellow-300 mx-2 font-medium text-xl md:text-4xl">
                            Kwame Tech
                        </h2>
                    </div>
                    <p className="text-white font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        <br />
                        Atque debitis doloribus eaque expedita impedit magni
                        <br />
                        maiores maxime neque obcaecati, omnis optio quasi
                    </p>
                    <div className="flex flex-wrap items-center mt-12">
                        <p className="bg-blue-500 px-8 mx-4 py-4 cursor-pointer text-white capitalize font-bold
                                    hover:bg-white hover:text-black tracking-wider text-lg md:text-xl">
                            our mission
                        </p>
                        <p className="hover:bg-blue-500 px-8 mx-4 py-4 cursor-pointer hover:text-white capitalize font-bold bg-white text-black tracking-wider text-lg md:text-xl">
                            our story
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div
                        onClick={handleBg1}
                        className={
                            bg1 ?
                                "h-6 w-6 mt-4 cursor-pointer bg-blue-500 border-2 border-gray-200 rounded-full" :
                                "h-6 w-6 mt-4 cursor-pointer bg-white border-2 border-blue-500 rounded-full"
                        }
                    >
                    </div>
                    <div
                        onClick={handleBg2}
                        className={
                            bg2 ?
                                "h-6 w-6 mt-4 cursor-pointer bg-blue-500 border-2 border-gray-200 rounded-full" :
                                "h-6 w-6 mt-4 cursor-pointer bg-white border-2 border-blue-500 rounded-full"
                        }
                    > </div>
                    <div
                        onClick={handleBg3}
                        className={
                            bg3 ?
                                "h-6 w-6 mt-4 cursor-pointer bg-blue-500 border-2 border-gray-200 rounded-full" :
                                "h-6 w-6 mt-4 cursor-pointer bg-white border-2 border-blue-500 rounded-full"
                        }
                    > </div>
                </div>
            </div>

            <div className="relative bg-blue-800 md:-mt-44 h-full mx-16 shadow-md rounded-md mb-4
                            md:flex flex-col justify-between">

                <Slider {...settings} ref={customSlider}>
                    {events}
                </Slider>

                <div className="absolute -top-8 right-10">
                    <div className="bg-white shadow-md px-8 py-2">
                        <h1 className="text-gray-800 font-bold capitalize text-xl md:text-2xl">
                            upcoming events
                        </h1>
                    </div>
                </div>

                <div className="absolute z-10 bottom-0 right-4 flex flex-col justify-center items-center">
                    <button
                        onClick={() => previous()}
                        className="bg-blue-600 px-2 py-2 my-1 flex justify-center items-center
                                    hover:bg-gray-200">
                        <ArrowBackIos fontSize="large" className="text-gray-100 hover:text-black" />
                    </button>

                    <button
                        onClick={() => next()}
                        className="bg-blue-600 px-2 py-2 my-1 flex justify-center items-center
                                    hover:bg-gray-200">
                        <ArrowForwardIos fontSize="large" className="text-gray-100 hover:text-black" />
                    </button>
                </div>
            </div>

        </>
    );
}

export default HeroSection;