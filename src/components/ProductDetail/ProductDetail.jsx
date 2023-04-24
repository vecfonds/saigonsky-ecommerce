import React, { useState } from 'react'
import './ProductDetail.css'
import ImageGallery from 'react-image-gallery';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Card, CardMedia } from '@mui/material';

const images = [
    {
        original: '/assets/images/products/1.jpg',
        thumbnail: '/assets/images/products/1.jpg',

    },
    {
        original: '/assets/images/products/2.jpg',
        thumbnail: '/assets/images/products/2.jpg',

    },
    {
        original: '/assets/images/products/3.jpg',
        thumbnail: '/assets/images/products/3.jpg',

    },
];


function createData(name, describe) {
    return { name, describe };
}

function createDataSize(name, sizeS_02, sizeM_04, sizeL_06, sizeXL_08, size2XL_10, size3XL_12) {
    return { name, sizeS_02, sizeM_04, sizeL_06, sizeXL_08, size2XL_10, size3XL_12 };
}

const sizes = [
    createDataSize("VAI (cm)", 35, 36, 37, 38, 39, 40),
    createDataSize("NGỰC (cm)", 82, 86, 90, 94, 98, 102),
    createDataSize("EO (cm)", 66, 70, 75, 80, 84, 88),
    createDataSize("MÔNG (cm)", 86, 90, 94, 98, 102, 106),
    createDataSize("CÂN NẶNG (kg)", 45 - 50, 51 - 55, 56 - 60, 61 - 64, 65 - 68, 69 - 70),
    createDataSize("CHIỀU CAO (cm)", 150 - 160, 155 - 160, 155 - 160, 160 - 165, 160 - 165, 160 - 165),

]

const rows = [
    createData('Chất liệu', 'vải tổng hợp cao cấp'),
    createData('Kiểu dáng', 'áo thiết kế dáng peplum, tay bồng , tone màu trắng trơn'),
    createData('Sản phẩm thuộc dòng sản phẩm', 'NEM NEW'),
    createData('Thông tin người mẫu', 'mặc sản phẩm size 2'),
    createData('Sản phẩm kết hợp', 'quần Q20522'),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'var(--main-3) ',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


const ProductDetail = () => {

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
            img: "/assets/images/products/1.jpg"
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




    const [quantity, setQuantity] = useState(1);

    const [size, setSize] = useState(4);

    const [color, setColor] = useState("Vàng");



    function handleChange(e) {
        var value = e.target.value.replace(/[^0-9]/, '');
        value = (value === '' ? 1 : value);
        value = parseInt(value);

        setQuantity(value);
    }

    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    }


    return (
        <div className='productdetail'>
            <input type="checkbox" hidden name="" id="instruction-popup" checked={checked} readOnly />

            {checked &&
                <TableContainer component={Paper}
                    style={{
                        padding: '2rem 1rem 1rem',
                        zIndex: '10001',
                    }}
                    className='table-instruction'
                >
                    <HighlightOffIcon
                        style={{ position: 'absolute', right: '5', top: '5' }}
                        onClick={handleChecked}
                    />
                    <div className="headeri">HƯỚNG DẪN CHỌN SIZE</div>

                    <Table sx={{ minWidth: 350 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><strong>SIZE</strong></TableCell>
                                <TableCell align="center"><strong>S - 02</strong></TableCell>
                                <TableCell align="center"><strong>M - 04</strong></TableCell>
                                <TableCell align="center"><strong>L - 06</strong></TableCell>
                                <TableCell align="center"><strong>XL - 08</strong></TableCell>
                                <TableCell align="center"><strong>2XL - 10</strong></TableCell>
                                <TableCell align="center"><strong>3XL - 12</strong></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sizes.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        <strong>{row.name}</strong>
                                    </TableCell>
                                    <TableCell align="center">{row.sizeS_02}</TableCell>
                                    <TableCell align="center">{row.sizeM_04}</TableCell>
                                    <TableCell align="center">{row.sizeL_06}</TableCell>
                                    <TableCell align="center">{row.sizeXL_08}</TableCell>
                                    <TableCell align="center">{row.size2XL_10}</TableCell>
                                    <TableCell align="center">{row.size3XL_12}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            <label htmlFor="instruction-popup" className="instruction__overlay" onClick={handleChecked}></label>

            <div className='productdetail-main'>
                <div className="productdetail-left">
                    {/* <div className="productdetail-left-img">
                    <img src="/assets/images/products/2.jpg" alt="" />
                </div> */}

                    <ImageGallery items={images}
                        thumbnailPosition="left"
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showNav={false}
                        fullscreen
                    />

                </div>

                <div className="productdetail-right">
                    <motion.div
                        initial={offscreen}
                        whileInView={onscreen}
                        viewport={{ once: true }}
                    >
                        <h2 className="title">ÁO KÝ GIẢ AK19642</h2>
                    </motion.div>
                    <div className='subtitle'>
                        <p className="brand-name"><strong>Thương hiệu:</strong> NEM</p>
                        <p className="product-code"><strong>Mã SP:</strong> 196421312312160401</p>
                    </div>

                    <p className="price">1,199,000₫</p>

                    <div className="size">
                        <p><strong>Kích thước:</strong> Size {size}</p>

                        <div className='select-size'>
                            <div className={size === 4 && "size-checked"} onClick={() => setSize(4)}>Size 4
                                <img src="/assets/images/checked.jpg" alt="" className="img-checked" />
                            </div>
                            <div className={size === 6 && "size-checked"} onClick={() => setSize(6)}>Size 6
                                <img src="/assets/images/checked.jpg" alt="" className="img-checked" />

                            </div>
                            <div className={size === 8 && "size-checked"} onClick={() => setSize(8)}>Size 8
                                <img src="/assets/images/checked.jpg" alt="" className="img-checked" />

                            </div>

                        </div>
                        {/* <div className="select-swap">

                        <div data-value="Size 4" className="n-sd swatch-element size-4 ">
                            <input className="variant-0 input-product" id="swatch-0-size-4" type="radio" name="option1" value="Size 4" checked="" />

                            <label for="swatch-0-size-4" className="">
                                Size 4
                                <img className="crossed-out" src="//theme.hstatic.net/200000182297/1000887316/14/soldout.png?v=556" />
                                <img className="img-check" src="//theme.hstatic.net/200000182297/1000887316/14/select-pro1.png?v=556" />
                            </label>

                        </div>







                        <div data-value="Size 6" className="n-sd swatch-element size-6 ">
                            <input className="variant-0 input-product" id="swatch-0-size-6" type="radio" name="option1" value="Size 6" />

                            <label for="swatch-0-size-6" className="sd">
                                Size 6
                                <img className="crossed-out" src="//theme.hstatic.net/200000182297/1000887316/14/soldout.png?v=556" />
                                <img className="img-check" src="//theme.hstatic.net/200000182297/1000887316/14/select-pro1.png?v=556" />
                            </label>

                        </div>







                        <div data-value="Size 8" className="n-sd swatch-element size-8 ">
                            <input className="variant-0 input-product" id="swatch-0-size-8" type="radio" name="option1" value="Size 8" />

                            <label for="swatch-0-size-8">
                                Size 8
                                <img className="crossed-out" src="//theme.hstatic.net/200000182297/1000887316/14/soldout.png?v=556" />
                                <img className="img-check" src="//theme.hstatic.net/200000182297/1000887316/14/select-pro1.png?v=556" />
                            </label>

                        </div>


                    </div> */}

                    </div>


                    <div className="color">

                        <p><strong>Màu sắc:</strong> {color}</p>
                        <div className='select-color'>
                            <div className={color === "Vàng" && "color-checked"} onClick={() => setColor("Vàng")}>Vàng
                                <img src="/assets/images/checked.jpg" alt="" className="img-checked" />
                            </div>
                            <div className={color === "Trắng" && "color-checked"} onClick={() => setColor("Trắng")}>Trắng
                                <img src="/assets/images/checked.jpg" alt="" className="img-checked" />
                            </div>
                            <div className={color === "Hồng" && "color-checked"} onClick={() => setColor("Hồng")}>Hồng
                                <img src="/assets/images/checked.jpg" alt="" className="img-checked" />
                            </div>
                            <div className={color === "Đen" && "color-checked"} onClick={() => setColor("Đen")}>Đen
                                <img src="/assets/images/checked.jpg" alt="" className="img-checked" />
                            </div>
                        </div>
                    </div>

                    <div className="instruction-size" onClick={handleChecked}>HƯỚNG DẪN CHỌN SIZE</div>

                    <div className="quantity">
                        <p><strong>Số lượng</strong></p>
                        <div className="quantity-input">
                            <ArrowBackIosIcon fontSize='small' onClick={() => setQuantity(curr => curr > 1 ? curr - 1 : 1)} sx={{ cursor: "pointer" }} />
                            <input className="quantity-input" type="text" value={quantity} onChange={(e) => handleChange(e)} />
                            <ArrowForwardIosIcon fontSize='small' onClick={() => setQuantity(curr => curr + 1)} sx={{ cursor: "pointer" }} />
                        </div>
                    </div>

                    {/* <div className="btn">THÊM VÀO GIỎ HÀNG</div> */}
                    <Link to='/giohang' className="btn">THÊM VÀO GIỎ HÀNG</Link>
                    <div className="btn">MUA NGAY</div>

                    <TableContainer component={Paper}>
                        <Table >
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <strong>{row.name}</strong>
                                        </TableCell>
                                        <TableCell align="left">{row.describe}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            <div className='line'></div>

            <div className='similar-product'>
                <motion.div
                    initial={offscreen}
                    whileInView={onscreen}
                    viewport={{ once: true }}
                >
                    <div className="headeri">SẢN PHẨM TƯƠNG TỰ</div>
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
                    <Slider {...settings}
                        className='similar-product-slider'
                    >
                        {slides.map((slide, index) => {
                            return (
                                <div key={index}>
                                    <div className="product-card">
                                        <Link to='/chitietsanpham' className="product-card-img">
                                            <img src={slide.img} alt={`slide${index}`} />
                                            <div className="product-card-body">
                                                <Link to='/chitietsanpham' className="btn">MUA NGAY</Link>
                                            </div>
                                        </Link>
                                        <div className="product-card-detail">
                                            <Link to='/chitietsanpham' className="name">Đầm hồng</Link>
                                            <p className="price">Giá: 600.000₫</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>

                    {/* <div className="product--details">
                        <div className="product-card">
                            <Link to='/chitietsanpham' className="product-card-img">
                                <img src="/assets/images/products/2.jpg" alt="item" />
                                <div className="product-card-body">
                                    <Link to='/chitietsanpham' className="btn">MUA NGAY</Link>
                                </div>
                            </Link>
                            <div className="product-card-detail">
                                <Link to='/chitietsanpham' className="name">Đầm hồng</Link>
                                <p className="price">Giá: 600.000₫</p>
                            </div>
                        </div>

                        <div className="product-card">
                            <Link to='/chitietsanpham' className="product-card-img">
                                <img src="/assets/images/products/2.jpg" alt="item" />
                                <div className="product-card-body">
                                    <Link to='/chitietsanpham' className="btn">MUA NGAY</Link>
                                </div>
                            </Link>
                            <div className="product-card-detail">
                                <Link to='/chitietsanpham' className="name">Đầm hồng</Link>
                                <p className="price">Giá: 600.000₫</p>
                            </div>
                        </div>

                        <div className="product-card">
                            <Link to='/chitietsanpham' className="product-card-img">
                                <img src="/assets/images/products/2.jpg" alt="item" />
                                <div className="product-card-body">
                                    <Link to='/chitietsanpham' className="btn">MUA NGAY</Link>
                                </div>
                            </Link>
                            <div className="product-card-detail">
                                <Link to='/chitietsanpham' className="name">Đầm hồng</Link>
                                <p className="price">Giá: 600.000₫</p>
                            </div>
                        </div>

                        <div className="product-card">
                            <Link to='/chitietsanpham' className="product-card-img">
                                <img src="/assets/images/products/2.jpg" alt="item" />
                                <div className="product-card-body">
                                    <Link to='/chitietsanpham' className="btn">MUA NGAY</Link>
                                </div>
                            </Link>
                            <div className="product-card-detail">
                                <Link to='/chitietsanpham' className="name">Đầm hồng</Link>
                                <p className="price">Giá: 600.000₫</p>
                            </div>
                        </div>
                    </div> */}

                </motion.div>
            </div>

        </div>
    )
}

export default ProductDetail