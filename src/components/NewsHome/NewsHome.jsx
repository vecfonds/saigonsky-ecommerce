import React from 'react';
import { motion } from "framer-motion"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './NewsHome.css'
import { Link } from 'react-router-dom';

const NewsHome = () => {
    const offscreen = { y: "1.5rem", opacity: 0 };
    const onscreen = {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            type: "spring",
            // delay: 0.5
        }
    }

    const slides = [
        {
            img: "/assets/images/news/1.jpg"
        },
        {
            img: "/assets/images/news/2.jpg"
        },
        {
            img: "/assets/images/news/3.jpg"
        },


        {
            img: "/assets/images/news/1.jpg"
        },
        {
            img: "/assets/images/news/2.jpg"
        },
        {
            img: "/assets/images/news/3.jpg"
        },

    ];

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     // {
        //     //     breakpoint: 768,
        //     //     settings: {
        //     //         slidesToShow: 2,
        //     //         slidesToScroll: 2,
        //     //         initialSlide: 2
        //     //     }
        //     // },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                    // infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true

                }
            }
        ]
    };

    return (
        <div className="newshome">
            <motion.div
                initial={offscreen}
                whileInView={onscreen}
                viewport={{ once: true }}

            >
                <div className="headeri">TIN TỨC</div>
            </motion.div>

            <motion.div
                initial={{ position: "relative", opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 2,
                        type: "spring",
                        delay: 1
                    }
                }}
                viewport={{ once: true }}
            >

                <Slider {...settings}>
                    {slides.map((slide, index) => {
                        return (
                            <Link to='/tintuc' key={index}>
                                {/* <ProductCard imgSrc={slide.img} /> */}
                                {/* <img src={slide.img} alt={`slide${index}`} height={400} /> */}
                                <Card sx={{ maxWidth: 430, margin: "0 auto" }} className="setting-mobile-card">
                                    <CardMedia
                                        component="img"
                                        height="255"
                                        // width="430"
                                        image={slide.img}
                                        alt={`slide${index}`}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            KHÁM PHÁ 4 HỌA TIẾT ĐANG THỐNG LĨNH HÈ 2023
                                        </Typography>
                                        {/* <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography> */}
                                    </CardContent>
                                    {/* <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                                </Card>
                            </Link>
                        );
                    })}
                </Slider>
            </motion.div>
        </div>
    )
}

export default NewsHome