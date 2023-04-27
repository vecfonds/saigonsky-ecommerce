import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../App.css";
import "./Header.css"
// import MobileHeader from "./MobileHeader";






import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SavingsSharpIcon from '@mui/icons-material/SavingsSharp';
import GTranslateSharpIcon from '@mui/icons-material/GTranslateSharp';
import CategoryIcon from '@mui/icons-material/Category';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {
    Link as RouterLink,
    Route,
    Routes,
    MemoryRouter,
    useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/features/userSlice";
import { clearData } from "../../store/features/userSlice";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyIcon from '@mui/icons-material/Key';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HistoryIcon from '@mui/icons-material/History';
import StoreIcon from '@mui/icons-material/Store';
import LoginIcon from '@mui/icons-material/Login';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';

function Header() {
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    }

    const navLinkClass = ({ isActive }) => {
        return isActive ? "nav-link activated" : "nav-link";
    };

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

    useEffect(() => {
        let topnav = document.querySelector('.topnav');
        if (pathname !== '/' && pathname !== '/gioithieu') {
            topnav?.classList.add('noscroll');
            document.body.classList.add('bgwhite')
        }
        else {
            topnav?.classList.remove('noscroll');
            document.body.classList.remove('bgwhite')

        }
    }, [pathname]);


    useEffect(() => {
        const listener = document.addEventListener("scroll", () => {
            let topnav = document.querySelector('.topnav');
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                topnav?.classList.add('scrolled');

            } else {
                topnav?.classList.remove('scrolled');
            }
        })
        return () => {
            document.removeEventListener("scroll", listener);
        }
    }, []);

    // useEffect(() => {
    //     window.onscroll = function () { scrollFunction() };

    //     function scrollFunction() {
    //         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //             document.getElementById("topnav").style.background = "linear-gradient(to right, var(--primary-colorBlue1), var(--primary-colorBlue2), var(--primary-colorBlue1))";
    //             // document.getElementById("topnav").style.transition = "0.4";
    //         } else {
    //             document.getElementById("topnav").style.background = "rgba(0, 0, 0, 0.0)";
    //             // document.getElementById("topnav").style.transition = "0.4";

    //         }
    //     }
    // }, []);



    function MobileHeader() {
        return (
            <List
                sx={{ width: '100%', bgcolor: 'var(--main-2)', height: "100vh" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader"
                        sx={{ height: "60px", paddingLeft: '60px', bgcolor: 'var(--main-2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <h1 className="logo">
                            SaiGon Sky
                        </h1>
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleChecked}
                    //  component="a" href='/'
                    component={RouterLink} to='/'

                >
                    <ListItemIcon>
                        <HomeSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="TRANG CHỦ" />
                </ListItemButton>

                <ListItemButton onClick={handleChecked}
                    component={RouterLink} to='/gioithieu'
                >
                    <ListItemIcon>
                        <StoreIcon />
                    </ListItemIcon>
                    <ListItemText primary="GIỚI THIỆU" />
                </ListItemButton>

                <ListItemButton onClick={handleChecked}
                    component={RouterLink} to='/sanpham'
                >
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="SẢN PHẨM" />
                </ListItemButton>

                <ListItemButton onClick={handleChecked}
                    component={RouterLink} to='/tintuc'
                >
                    <ListItemIcon>
                        <NewspaperIcon />
                    </ListItemIcon>
                    <ListItemText primary="TIN TỨC" />
                </ListItemButton>


                <ListItemButton onClick={handleChecked}
                    component={RouterLink} to='/lienhe'
                >
                    <ListItemIcon>
                        <ContactMailIcon />
                    </ListItemIcon>
                    <ListItemText primary="LIÊN HỆ" />
                </ListItemButton>


                <ListItemButton onClick={handleChecked}
                    component={RouterLink} to='/giohang'
                >
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="GIỎ HÀNG" />
                </ListItemButton>

                {
                    Name && <>
                        <ListItemButton onClick={handleChecked}
                            component={RouterLink} to='/taikhoan'
                        >
                            <ListItemIcon>
                                <ManageAccountsIcon />
                            </ListItemIcon>
                            <ListItemText primary="THÔNG TIN TÀI KHOẢN" />
                        </ListItemButton>

                        <ListItemButton onClick={handleChecked}
                            component={RouterLink} to='/lichsudonhang'
                        >
                            <ListItemIcon>
                                <HistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="LỊCH SỬ ĐƠN HÀNG" />
                        </ListItemButton>

                        <ListItemButton onClick={handleChecked}
                            component={RouterLink} to='/danhsachyeuthich'
                        >
                            <ListItemIcon>
                                <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemText primary="DANH SÁCH YÊU THíCH" />
                        </ListItemButton>

                        <ListItemButton onClick={handleChecked}
                            component={RouterLink} to='/thaydoimatkhau'
                        >
                            <ListItemIcon>
                                <KeyIcon />
                            </ListItemIcon>
                            <ListItemText primary="THAY ĐỔI MẬT KHẨU" />
                        </ListItemButton>


                        <ListItemButton onClick={() => {
                            handleChecked();
                            dispatch(clearData());
                        }}
                            component={RouterLink} to='/dangnhap'
                        >
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="ĐĂNG XUẤT" />
                        </ListItemButton>

                    </> ||
                    <>
                        <ListItemButton onClick={handleChecked}
                            component={RouterLink} to='/dangnhap'
                        >
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary="ĐĂNG NHẬP" />
                        </ListItemButton>

                        <ListItemButton onClick={handleChecked}
                            component={RouterLink} to='/dangky'
                        >
                            <ListItemIcon>
                                <SensorOccupiedIcon />
                            </ListItemIcon>
                            <ListItemText primary="ĐĂNG KÝ" />
                        </ListItemButton>
                    </>
                }

            </List>
        );
    }

    return (
        <div className="topnav" id="topnav">
            <input type="checkbox" hidden name="" id="nav__input" checked={checked} readOnly />

            <div className="trans">
                <Link to='/'>
                    <img src="/assets/images/logo-white-removebg-preview.png" alt="logo" />
                </Link>
            </div>

            <nav className="main-nav">
                <NavLink to="/" className={navLinkClass}>
                    Trang Chủ
                </NavLink>
                <NavLink to="/gioithieu" className={navLinkClass}>
                    Giới Thiệu
                </NavLink>
                <NavLink to="/sanpham" className={navLinkClass}>
                    Sản Phẩm
                </NavLink>
                <NavLink to="/tintuc" className={navLinkClass}>
                    Tin Tức
                </NavLink>
                <NavLink to="/lienhe" className={navLinkClass}>
                    Liên Hệ
                </NavLink>
                {/* <a href="#" className="active">Home</a>
                <a href="#">Products</a>
                <a href="#">Category</a>
                <a href="#">Contact</a> */}
            </nav>

            <div className="login">
                {/* <!-- <a href="">Log in</a>
                    <a href="">Sign up</a> --> */}
                <div className="btn-log"><Link to='/giohang'><LocalMallOutlinedIcon />Giỏ hàng</Link></div>
                <div className="btn-log btn-taikhoan"><Link><AccountCircleSharpIcon />{Name.split(" ").reverse().slice(0, 2).reverse().join(" ") || Name || "Tài khoản"}
                    <ul className='taikhoan'>
                        {
                            Name && <>
                                <li><Link to='/taikhoan'>Thông tin tài khoản</Link></li>
                                <li><Link to='/lichsudonhang'>Lịch sử đơn hàng</Link></li>
                                <li><Link to='/danhsachyeuthich'>Danh sách yêu thích</Link></li>
                                <li><Link to='/thaydoimatkhau'>Thay Đổi Mật Khẩu</Link></li>
                                <li><Link to='/dangnhap' onClick={() => dispatch(clearData())}>Đăng xuất</Link></li>
                            </> ||
                            <><li><Link to='/dangnhap'>Đăng nhập</Link></li>
                                <li><Link to='/dangky'>Đăng ký</Link></li>
                            </>
                        }
                        {/* <li><Link to='/dangnhap'>Đăng nhập</Link></li>
                        <li><Link to='/dangky'>Đăng ký</Link></li>
                        <li><Link to='/taikhoan'>Thông tin tài khoản</Link></li>
                        <li><Link to='/lichsudonhang'>Lịch sử đơn hàng</Link></li>
                        <li><Link to='/thaydoimatkhau'>Thay Đổi Mật Khẩu</Link></li> */}

                    </ul>
                </Link></div>
                {/* <div className="btn-log"><Link to='/dangnhap'><AccountCircleSharpIcon /></Link></div>
                <div className="btn-log"><Link to='/giohang'><LocalMallOutlinedIcon /></Link></div> */}
                {/* <AccountCircleSharpIcon />
                <LocalMallOutlinedIcon /> */}
            </div>

            <div className="nav__btn">
                <div className="frame">
                    <div className="center">
                        <input type="checkbox" id="ham" checked={checked} onClick={handleChecked} readOnly />
                        <label htmlFor="ham" className="hamburger">
                            <div className="ham1"></div>
                            <div className="ham2"></div>
                            <div className="ham3"></div>
                        </label>
                    </div>
                </div>
            </div>


            <label htmlFor="nav__input" className="nav__overlay" onClick={handleChecked}></label>

            <div className="nav__mobile">
                <MobileHeader />
            </div>
        </div >
    );
}

export default Header;
