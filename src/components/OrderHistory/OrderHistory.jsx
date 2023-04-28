import React, { useEffect } from 'react'
import './OrderHistory.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/features/userSlice';
import axios from 'axios';
import { shoppingCartSelector } from '../../store/features/shoppingCartSlice';

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

const OrderHistory = () => {
    const {
        Address,
        Birthday,
        Email,
        Gender,
        Id,
        Is_active,
        Name,
        Password,
        Phone_number,
        Role,
    } = useSelector(userSelector);

    const navLinkClass = ({ isActive }) => {
        return isActive ? "list-group-item activated" : "list-group-item";
    };

    useEffect(() => {

        console.log("ccid", Id)
        axios
            .get(
                "http://localhost/LTW_BE-dev/Controllers/GetBill.php",
                {
                    customerID: Id
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                // res.data = JSON.parse(res.data);
                console.log("GetBill.php", res.data);

                // const result = JSON.parse(res.data);
                // console.log(result);
                // setMessage(res.data.message);
                if (res.data.isSuccess === true) {
                    // console.log("ok", res.data.isSuccess);
                    // navigate("/dangnhap");
                    console.log("res.data.", res.data.data);
                    // dispatch(loadDataProducts(res.data.data));

                }
            })
            .catch((err) => {
                console.log("err", err);
            });

    }, [Id])

    const {
        dataShoppingCart
    } = useSelector(shoppingCartSelector);

    return (
        <div id='order-history'>
            <div className="headeri">Xin chào {Name}</div>
            <div className="personal-information">
                <div className="personal-information-left">
                    <div className="category--list">
                        <div className="list-group">
                            <NavLink to="/taikhoan" className={navLinkClass}>
                                Thông tin tài khoản
                            </NavLink>
                            <NavLink to='/lichsudonhang' className={navLinkClass}>
                                Lịch sử đơn hàng
                            </NavLink>
                            <NavLink to='/danhsachyeuthich' className={navLinkClass}>
                                Danh sách yêu thích
                            </NavLink>
                            <NavLink to='/thaydoimatkhau' className={navLinkClass}>
                                Thay đổi mật khẩu
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="personal-information-right">
                    <div className="bill">
                        <div className='mobile-shoppingcart'>
                            <div className='mobile-shoppingcart-center'>
                                {dataShoppingCart.map((product) => (
                                    <div className='product-cart-shopping'>
                                        <div className="product-cart-shopping-img">
                                            <img src={`${product.data.image.filter(i => i.Main === 1)[0]?.Content}`} alt="" />
                                        </div>
                                        <div className="product-cart-shopping-detail">
                                            <h2 className="title">{product.data.Name}</h2>
                                            <div className='subtitle'>
                                                <p className="brand-name"><strong>Thương hiệu:</strong> {product.data.Album}</p>
                                                {/* <p className="product-code"><strong>Mã SP:  </strong> {product.data.Id}</p> */}

                                                <p><strong>Phiên bản:</strong> {product.size} / {product.color}</p>
                                            </div>

                                            <div className="quantity-cart">
                                                <div className="quantity-input">


                                                    <input className="quantity-input" type="text" value={product.quantity} readOnly />

                                                </div>

                                            </div>
                                            <div className='footer-card'>
                                                <p className="price">{VND.format(product.data.Price * product.quantity)}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bill-day">
                            Ngày đặt hàng: 17/3/2023
                        </div>


                        <div className="total-money">
                            <p>
                                <span className="total-money-title">Tổng tiền</span>
                                <span className="price total-money-main">{VND.format(3900000)}</span>
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderHistory