import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch, useSelector } from 'react-redux';
import { editDataUser, userSelector } from '../../store/features/userSlice';
import axios from 'axios';
import { addDataFavorite, deleteDataFavorite, favoriteSelector } from '../../store/features/FavoriteSlice';
import { productsSelector } from '../../store/features/productsSlice';

import { Rating, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './FavoritesList.css'

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const FavoritesList = () => {

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        dataFavorite
    } = useSelector(favoriteSelector);

    const {
        data
    } = useSelector(productsSelector);

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




    const onSubmit = (data) => {
        const configData = {
            id: Id,
            isActive: Is_active,
            name: data.fullname,
            phoneNumber: data.phonenumber,
            email: Email,
            gender: Gender,
            role: Role,
            address: data.address,
            birthday: Birthday
        }

        // dispatch(editUser(configData));
        console.log(data);


        axios
            .post(
                "http://localhost/LTW_BE-dev/Controllers/EditCustomerController.php",
                configData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                console.log("ffsdff", res.data);
                if (res.data.isSuccess === true) {
                    console.log("dispatch");
                    dispatch(editDataUser(data));
                    // navigate("/sanpham");
                }
            })
            .catch((err) => {
                console.log("err", err)
            });

    }

    const navLinkClass = ({ isActive }) => {
        return isActive ? "list-group-item activated" : "list-group-item";
    };

    function handleClickFavorite(props) {
        // e.preventDefault();
        console.log("e.id", props)
        if (dataFavorite.filter(item => item === props).length) {
            dispatch(deleteDataFavorite(props));
        }
        else {
            dispatch(addDataFavorite(props));

        }
    }

    return (
        <div id='favorites-list'>
            {/* <div className="hello">
                <h1>Xin chào</h1>
                <h1>Tiến Dũng</h1>
            </div> */}

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
                    <div className="product--details">
                        {/* {data.filter(item => dataFavorite.filter(i => i === item.Id).length).map(product => */}

                        {data.filter(item => dataFavorite.includes(item.Id)).map(product =>
                            <div className="product-card" style={{ position: "relative" }}>
                                <StyledRating
                                    // name="customized-color"
                                    defaultValue={0}
                                    value={dataFavorite.filter(item => item === product.Id).length}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClickFavorite(product.Id);
                                    }}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={1}
                                    icon={<FavoriteIcon fontSize="inherit" />}
                                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    max={1}
                                    size="inherit"
                                    name="size-large"
                                    sx={{ position: "absolute", right: "10px", top: "10px", fontSize: "large", zIndex: 1000 }}

                                />
                                <Link to={`/sanpham/${product.Id}`} state={{ id: product.Id }} className="product-card-img">

                                    <img src={`${product.image.filter(i => i.Main === 1)[0]?.Content}`} alt="item" />


                                    {/* <Rating
                // name="size-large"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                precision={0.1}
                readOnly
                sx={{ position: "absolute", right: "5px", top: "5px" }}
            /> */}
                                    <div className="product-card-body">
                                        <Link to={`/sanpham/${product.Id}`} state={{ id: product.Id }} className="btn">MUA NGAY</Link>
                                    </div>
                                </Link>

                                <div className="product-card-detail">
                                    <Link to={`/sanpham/${product.Id}`} state={{ id: product.Id }} className="name">{product.Name}</Link>
                                    <p className="price">Giá: {product.Price}₫</p>
                                </div>
                            </div>)}




                        {/* {data.map(product =>
    <div className="product-card">
        <Link to='/chitietsanpham' className="product-card-img">
            <img src="/assets/images/products/1.jpg" alt="item" />
            <Rating
                // name="size-large"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                precision={0.1}
                readOnly
                sx={{ position: "absolute", right: "5px", top: "5px" }}
            />
            <div className="product-card-body">
                <Link to='/chitietsanpham' className="btn">MUA NGAY</Link>
            </div>
        </Link>
        <div className="product-card-detail">
            <Link to='/chitietsanpham' className="name">{product.Name}</Link>
            <p className="price">Giá: {product.Price}₫</p>
        </div>
    </div>)} */}



                    </div >
                </div>
            </div>
        </div>
    )
}

export default FavoritesList