import React from 'react'
import './OrderHistory.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/features/userSlice';

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

                </div>
            </div>
        </div>
    )
}

export default OrderHistory