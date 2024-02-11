import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {anglo, air_products, aeci, mondi, natref, omnia, safripol, sappi, sasol} from '../../assets'
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles";

export default class Customers extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 0
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
            <div className="mainContainer mx-10 px-10">
                <Slider {...settings}>
                    <div className="container">
                        <img src={anglo}  alt="mpact" className="md:w-[220px] w-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={air_products} alt="Deloitte" className="md:w-[220px] w-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={aeci} alt="rbh" className="md:w-[220px] w-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={mondi} alt="pwc" className="md:w-[220px] w-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={natref} alt="spar" className="md:w-[220px] w-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={omnia} alt="ISS" className="md:w-[220px] w-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={safripol} alt="ISS" className="md:w-[220px] w-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={sappi} alt="ISS" className="md:w-[220px] w-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={sasol} alt="ISS" className="md:w-[220px] w-[150px]"/>
                    </div>
                </Slider>
            </div>

            </>
        );
    }
}