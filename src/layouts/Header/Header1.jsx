import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header1.css'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';





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


const Header = () => {
    const { pathname } = useLocation();

    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    }


    const navLinkClass = ({ isActive }) => {
        return isActive ? "nav-link activated" : "nav-link";
    };

    function MobileHeader() {
        const [open, setOpen] = React.useState(false);

        const handleClick = () => {
            setOpen(!open);
        };

        return (
            <List
                sx={{ width: '100%', bgcolor: 'var(--main-2)', height: "100vh" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader"
                        sx={{ height: "50px", paddingLeft: '60px', bgcolor: 'var(--main-2)' }}
                    >
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
                    <ListItemText primary="GIỚI THIỆU" />
                </ListItemButton>

                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="DỰ ÁN" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleChecked} sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
                
                <ListItemButton
                    onClick={handleChecked}
                    component={RouterLink} to='/sanpham'
                >
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="SẢN PHẨM">SẢN PHẨM</ListItemText>
                </ListItemButton>

                <ListItemButton
                    onClick={handleChecked}
                >
                    <ListItemIcon>
                        <BrandingWatermarkIcon />
                    </ListItemIcon>
                    <ListItemText primary="THƯƠNG HIỆU" />
                </ListItemButton>

                <ListItemButton
                    onClick={handleChecked}
                >
                    <ListItemIcon>
                        <SavingsSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="BROCHURE" />
                </ListItemButton>

                <ListItemButton
                    onClick={handleChecked}
                >
                    <ListItemIcon>
                        <NewspaperIcon />
                    </ListItemIcon>
                    <ListItemText primary="TIN TỨC" />
                </ListItemButton>

                <ListItemButton
                    onClick={handleChecked}
                >
                    <ListItemIcon>
                        <ViewInArIcon />
                    </ListItemIcon>
                    <ListItemText primary="3D-FILE" />
                </ListItemButton>

                <ListItemButton
                    onClick={handleChecked}
                >
                    <ListItemIcon>
                        <GTranslateSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="TIẾNG VIỆT" />
                </ListItemButton>

            </List>
        );
    }


    return (
        <header>
            <h1 className="logo">
                SaiGon Sky
            </h1>
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

            <input type="checkbox" hidden name="" id="nav__input" checked={checked} readOnly />

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

            {/* Mobile */}

            {/* <label className="mobile-menu" for="nav-mobile-input">
                <DehazeIcon />
            </label>

            <input type="checkbox" className="nav_input" hidden name="nav-mobile-input" id="nav-mobile-input" />

            <label className="nav__overlay" for="nav-mobile-input"></label>

            <div className="mobile-nav">
                <div className="mobile-nav__header">
                    <h1 className="mobile-nav__logo">
                        SaiGon Sky

                    </h1>
                    <label for="nav-mobile-input"><i className="fas fa-times fa-2x"></i></label>
                </div>
                <nav className="mobile-nav__link">

                    <a href="#" className="mobile-nav__link-item">Home</a>
                    <a href="#" className="mobile-nav__link-item">Products</a>
                    <a href="#" className="mobile-nav__link-item">Category</a>
                    <a href="#" className="mobile-nav__link-item">Contact</a>

                </nav>
            </div> */}

            <div className="login">
                {/* <!-- <a href="">Log in</a>
                    <a href="">Sign up</a> --> */}
                <div className="btn-log"><Link to='/giohang'><LocalMallOutlinedIcon />Giỏ hàng</Link></div>
                <div className="btn-log btn-taikhoan"><Link><AccountCircleSharpIcon />Tài khoản
                    <ul className='taikhoan'>
                        <li><Link to='/dangnhap'>Đăng nhập</Link></li>
                        <li><Link to='/dangky'>Đăng ký</Link></li>
                    </ul>
                </Link></div>
                {/* <div className="btn-log"><Link to='/dangnhap'><AccountCircleSharpIcon /></Link></div>
                <div className="btn-log"><Link to='/giohang'><LocalMallOutlinedIcon /></Link></div> */}
                {/* <AccountCircleSharpIcon />
                <LocalMallOutlinedIcon /> */}
            </div>




        </header>)
}

export default Header