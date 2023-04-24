import React, { useState } from 'react'
import './ShoppingCart.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';



const ShoppingCart = () => {
    const [quantity, setQuantity] = useState(1);


    function handleChange(e) {
        var value = e.target.value.replace(/[^0-9]/, '');
        value = (value === '' ? 1 : value);
        value = parseInt(value);

        setQuantity(value);
    }

    function createProduct(product, price, size, color, quantity, total_money) {
        return { product, price, size, color, quantity, total_money };
    }


    const products = [
        createProduct(
            <div className='product-cart-shopping'>
                <div className="product-cart-shopping-img">
                    <img src="/assets/images/products/1.jpg" alt="" />
                </div>
                <div className="product-cart-shopping-detail">
                    <h2 className="title">ÁO KÝ GIẢ AK19642</h2>
                    <div className='subtitle'>
                        <p className="brand-name"><strong>Thương hiệu:</strong> NEM</p>
                        <p className="product-code"><strong>Mã SP:  </strong> 196421312312160401</p>

                        <p><strong>Phiên bản:</strong> Size 8 / Trắng</p>
                    </div>
                </div>
            </div>,
            <div className="price">1,199,000₫</div>,
            <div className="size">
                X
            </div>
            ,
            <div className="color">
                Vàng
            </div>
            ,
            <div className="quantity-cart">
                <div className="quantity-input">

                    <ArrowBackIosIcon fontSize='small' onClick={() => setQuantity(curr => curr > 1 ? curr - 1 : 1)} sx={{ cursor: "pointer" }} />

                    <input className="quantity-input" type="text" value={quantity} onChange={(e) => handleChange(e)} />

                    <ArrowForwardIosIcon fontSize='small' onClick={() => setQuantity(curr => curr + 1)} sx={{ cursor: "pointer" }} />

                </div>


            </div>



            ,
            <div className="price">1,199,000₫</div>
        ),

        createProduct(
            <div className='product-cart-shopping'>
                <div className="product-cart-shopping-img">
                    <img src="/assets/images/products/1.jpg" alt="" />
                </div>
                <div className="product-cart-shopping-detail">
                    <h2 className="title">ÁO KÝ GIẢ AK19642</h2>
                    <div className='subtitle'>
                        <p className="brand-name"><strong>Thương hiệu:</strong> NEM</p>
                        <p className="product-code"><strong>Mã SP:  </strong> 196421312312160401</p>
                        <p className='version'><strong>Phiên bản:</strong> Size 8 / Trắng</p>
                    </div>
                </div>
            </div>,
            <div className="price">1,199,000₫</div>,
            <div className="size">
                X
            </div>
            ,
            <div className="color">
                Vàng
            </div>
            ,
            <div className="quantity-cart">
                <div className="quantity-input">

                    <ArrowBackIosIcon fontSize='small' onClick={() => setQuantity(curr => curr > 1 ? curr - 1 : 1)} />

                    <input className="quantity-input" type="text" value={quantity} onChange={(e) => handleChange(e)} />

                    <ArrowForwardIosIcon fontSize='small' onClick={() => setQuantity(curr => curr + 1)} />

                </div>


            </div>



            ,
            <div className="price">1,199,000₫</div>
        ),
    ]
    return (
        <div id="shopping-cart">
            <div className="headeri">GIỎ HÀNG</div>

            <div className="shopping-cart-main">

                <TableContainer component={Paper}
                    style={{
                        padding: '2rem 1rem 1rem',
                        zIndex: '10001',
                    }}
                >
                    {/* <div className="headeri">HƯỚNG DẪN CHỌN SIZE</div> */}

                    <Table sx={{ minWidth: 350 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Sản phẩm</TableCell>
                                <TableCell align="center">Giá</TableCell>
                                {/* <TableCell align="center">Kích thước</TableCell>
                                <TableCell align="center">Màu sắc</TableCell> */}

                                <TableCell align="center">Số lượng</TableCell>
                                <TableCell align="center">Thành tiền</TableCell>
                                <TableCell align="center">Xóa</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((row) => (
                                <TableRow
                                    key={row.product}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center" >
                                        {/* sx={{ display: "flex", justifyContent: 'center' }} */}
                                        {row.product}
                                    </TableCell>
                                    <TableCell align="center">{row.price}</TableCell>
                                    {/* <TableCell align="center">{row.size}</TableCell>

                                    <TableCell align="center">{row.color}</TableCell> */}

                                    <TableCell align="center">{row.quantity}</TableCell>
                                    <TableCell align="center">{row.total_money}</TableCell>
                                    <TableCell align="center">
                                        <DeleteOutlineIcon sx={{ cursor: "pointer" }} />
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>




                <div className="product-card">
                    {/* <Link to='/chitietsanpham' className="product-card-img">
                                            <img src={slide.img} alt={`slide${index}`} />
                                            <div className="product-card-body">
                                            <Link to='/chitietsanpham' className="btn">MUA NGAY</Link>
                                            </div>
                                        </Link>
                                        <div className="product-card-detail">
                                        <Link to='/chitietsanpham' className="name">Đầm hồng</Link>
                                        <p className="price">Giá: 600.000₫</p>
                                    </div> */}
                </div>
            </div>

            <div className='line'></div>

            <div className="total-money">
                <p>
                    <span className="total-money-title">Tổng tiền</span>
                    <span className="price total-money-main">4,296,000₫</span>
                </p>

                <div className="total-money-button">
                    <Link to='/thanhtoan' className="thanhtoan">THANH TOÁN</Link>

                </div>
            </div>
        </div>
    )
}

export default ShoppingCart