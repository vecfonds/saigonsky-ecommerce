import React, { useEffect } from 'react';
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
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadDataProducts, productsSelector } from '../../store/features/productsSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Rating, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { favoriteSelector } from '../../store/features/FavoriteSlice';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});


const NewProducts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {
        dataFavorite
    } = useSelector(favoriteSelector);

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

    useEffect(() => {
        axios
            .get(
                "http://localhost/LTW_BE-dev/Controllers/ShowProduct.php",

                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                // res.data = JSON.parse(res.data);
                console.log("ffsdff", res.data);

                // const result = JSON.parse(res.data);
                // console.log(result);
                // setMessage(res.data.message);
                if (res.data.isSuccess === true) {
                    // console.log("ok", res.data.isSuccess);
                    // navigate("/dangnhap");
                    console.log("res.data.", res.data.data);
                    dispatch(loadDataProducts(res.data.data));

                }
            })
            .catch((err) => {
                console.log("err", err);
            });

    }, [])

    const {
        data
    } = useSelector(productsSelector);


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
                    {data.slice(-8).map(product =>
                        <div className="product-card">
                            <Link to={`/sanpham/${product.Id}`} state={{ id: product.Id }} className="product-card-img">

                                <img src="/assets/images/products/1.jpg" alt="item" />
                                {/* <Rating
                                    // name="size-large"
                                    value={5}
                                    precision={0.1}
                                    readOnly
                                    sx={{ position: "absolute", right: "5px", top: "5px" }}
                                /> */}


                                <StyledRating
                                    // name="customized-color"
                                    defaultValue={0}
                                    value={dataFavorite.filter(item => item === product.Id).length}
                                    readOnly
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={1}
                                    icon={<FavoriteIcon fontSize="inherit" />}
                                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    sx={{ position: "absolute", right: "10px", top: "10px", fontSize: "large" }}
                                    max={1}
                                    size="inherit"
                                    name="size-large"
                                />
                                <div className="product-card-body">
                                    <Link to={`/sanpham/${product.Id}`} state={{ id: product.Id }} className="btn">MUA NGAY</Link>
                                </div>
                            </Link>

                            {/* <div className="product-card-detail">
                                <Link to={`${product.Id}`} state={{ id: product.Id }} className="name">{product.Name}</Link>
                                <p className="price">Giá: {product.Price}₫</p>
                            </div> */}
                        </div>)}
                </Slider>
            </motion.div>

        </div>
    )
}

export default NewProducts


// {slides.map((slide, index) => {
//     return (
//         <div key={index}>
//             {/* <ProductCard imgSrc={slide.img} /> */}
//             {/* <img src={slide.img} alt={`slide${index}`} height={400} /> */}
//             <Card sx={{ maxWidth: 345, margin: "0 auto", objectFit: "cover" }}>
//                 <CardMedia
//                     component="img"
//                     height="450"
//                     // width="345"
//                     image={slide.img}
//                     alt={`slide${index}`}
//                 />
//             </Card>
//         </div>
//     );
// })}