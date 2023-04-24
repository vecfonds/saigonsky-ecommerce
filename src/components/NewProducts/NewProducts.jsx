import React from 'react';
import { motion } from "framer-motion"

import Slider from "react-slick";
import ProductCard from "./product";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewProducts.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewProducts = () => {
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
            img: "/assets/images/products/1.jpg"
        },
        {
            img: "/assets/images/products/2.jpg"
        },
        {
            img: "/assets/images/products/3.jpg"
        },
        {
            img: "/assets/images/products/4.jpg"
        },

        {
            img: "/assets/images/products/1.jpg"
        },
        {
            img: "/assets/images/products/2.jpg"
        },
        {
            img: "/assets/images/products/3.jpg"
        },
        {
            img: "/assets/images/products/4.jpg"
        },
    ];

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             initialSlide: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,

                    // infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true

                }
            }
        ]
    };

    return (
        <div className="new_products">
            <motion.div
                initial={offscreen}
                whileInView={onscreen}
                viewport={{ once: true }}

            >
                <div className="headeri">SẢN PHẨM MỚI</div>

            </motion.div>

            <motion.div
                initial={{ y: "1.5rem", opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 2,
                        type: "spring",
                        delay: 0.5
                    }
                }
                }
                viewport={{ once: true }}

            >
                <div className='sub-tilte'>Đón đầu xu hướng, định hình phong cách</div>
            </motion.div>


            <motion.div
                initial={{ position: "relative", opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 2,
                        type: "spring",
                        delay: 1.5
                    }
                }}
                viewport={{ once: true }}
            >
                <Slider {...settings}>
                    {slides.map((slide, index) => {
                        return (
                            <div key={index}>
                                {/* <ProductCard imgSrc={slide.img} /> */}
                                {/* <img src={slide.img} alt={`slide${index}`} height={400} /> */}
                                <Card sx={{ maxWidth: 345, margin: "0 auto", objectFit: "cover" }}>
                                    <CardMedia
                                        component="img"
                                        height="450"
                                        // width="345"
                                        image={slide.img}
                                        alt={`slide${index}`}
                                    />
                                    {/* <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
                                </Card>
                            </div>
                        );
                    })}
                </Slider>
            </motion.div>

        </div>
    )
}

export default NewProducts