import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch, useSelector } from 'react-redux';
import { editDataUser, userSelector } from '../../store/features/userSlice';
import axios from 'axios';
import './ChangePassword.css'

const validationSchema = z
    .object({
        oldPassword: z
            .string()
            .min(6, { message: "Password must be atleast 6 characters" }),
        password: z
            .string()
            .min(6, { message: "Password must be atleast 6 characters" }),
        confirmPassword: z
            .string()
            .min(1, { message: "Confirm Password is required" }),
    }).refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Password don't match",
    });


const ChangePassword = () => {
    const [hiddenOldPwd, setHiddenOldPwd] = useState(false);
    const [hiddenPwd, setHiddenPwd] = useState(false);
    const [hiddenConfirmPwd, setHiddenConfirmPwd] = useState(false);

    // const navigate = useNavigate();
    const dispatch = useDispatch();

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


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        getValues
    } = useForm({
        resolver: zodResolver(validationSchema),
    });

    useEffect(() => {
        setValue("fullname", Name);
        setValue("phonenumber", Phone_number);
        setValue("address", Address);

    }, [])


    const [checkOldPassword, setCheckOldPassword] = useState(false);


    const [message, setMessage] = useState("");


    const onSubmit = (data) => {
        // console.log(typeof (data.phonenumber));
        // try {
        //     const validatedForm = validationSchema.parse(data);
        //     console.log(validatedForm);
        // } catch (err) {
        //     console.log(err);
        // }

        axios
            .post(
                "http://localhost/LTW_BE-dev/Controllers/ChangePassword.php",
                {
                    phoneNumber: Phone_number,
                    oldPassword: data.oldPassword,
                    newPassword: data.password
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                // res.data = JSON.parse(res.data);
                // console.log("ffsdff", res.data);

                // const result = JSON.parse(res.data);
                // console.log(result);

                setMessage(res.data.message);
                // setMessage(res.data.message);
                if (res.data.isSuccess === true) {
                    console.log("ok", res.data.isSuccess);
                    // navigate("/dangnhap");
                }
            })
            .catch((err) => {
                console.log("err", err);
            });


    }


    // const onSubmit = (data) => {

    //     console.log("Password", Password);
    //     console.log("oldPassword", data.oldPassword);
    //     console.log("password", data.password);


    //     if (Password !== data.password) {
    //         setCheckOldPassword(true);
    //     }
    //     else {
    //         setCheckOldPassword(false);

    //         console.log(data);

    //         axios
    //             .put(
    //                 "http://localhost/LTW_BE-dev/Controllers/ChangePassword.php",
    //                 {
    //                     phoneNumber: Phone_number,
    //                     oldPassword: data.oldPassword,
    //                     newPassword: data.password
    //                 },
    //                 {
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                 }
    //             )
    //             .then((res) => {
    //                 console.log("ffsdff", res.data);
    //                 if (res.data.isSuccess === true) {
    //                     // console.log("ok", res.data.isSuccess);
    //                     //   navigate("/sanpham");
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.log("err", err)
    //             });

    //     }
    //     // const configData = {
    //     //     id: Id,
    //     //     isActive: Is_active,
    //     //     name: data.fullname,
    //     //     phoneNumber: data.phonenumber,
    //     //     email: Email,
    //     //     gender: Gender,
    //     //     role: Role,
    //     //     address: data.address,
    //     //     birthday: Birthday
    //     // }

    //     // dispatch(editUser(configData));


    //     // axios
    //     //     .post(
    //     //         "http://localhost/LTW_BE-dev/Controllers/EditCustomerController.php",
    //     //         configData,
    //     //         {
    //     //             headers: {
    //     //                 "Content-Type": "application/json",
    //     //             },
    //     //         }
    //     //     )
    //     //     .then((res) => {
    //     //         console.log("ffsdff", res.data);
    //     //         if (res.data.isSuccess === true) {
    //     //             console.log("dispatch");
    //     //             dispatch(editDataUser(data));
    //     //             // navigate("/sanpham");
    //     //         }
    //     //     })
    //     //     .catch((err) => {
    //     //         console.log("err", err)
    //     //     });

    // }

    const navLinkClass = ({ isActive }) => {
        return isActive ? "list-group-item activated" : "list-group-item";
    };


    return (
        <div id='change-password'>
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
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-inner">


                            <div className="form-groupP">
                                <div className="form-group2">
                                    <div className="pass-box">
                                        <input placeholder=" "
                                            type={hiddenOldPwd ? "text" : "password"}
                                            id="oldPassword"
                                            name="oldPassword"

                                            {...register("oldPassword")}
                                        />
                                        <label>Mật khẩu</label>
                                        <div className="eye" onClick={() => setHiddenOldPwd(!hiddenOldPwd)}>
                                            <i className={hiddenOldPwd ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                        </div>
                                    </div>

                                </div>
                                {
                                    // checkOldPassword && (<p className="textDanger">
                                    //     {"Mật khẩu không chính xác"}
                                    // </p>) ||
                                    errors.password && (
                                        <p className="textDanger">
                                            {errors.password?.message}
                                        </p>
                                    )

                                }

                            </div>



                            <div className="form-groupP">


                                <div className="form-group2">
                                    <div className="pass-box">
                                        <input placeholder=" "
                                            type={hiddenPwd ? "text" : "password"}
                                            id="password"
                                            name="password"

                                            {...register("password")}
                                        />
                                        <label>Mật khẩu</label>
                                        <div className="eye" onClick={() => setHiddenPwd(!hiddenPwd)}>
                                            <i className={hiddenPwd ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                        </div>
                                    </div>

                                </div>
                                {
                                    // checkOldPassword && (<p className="textDanger">
                                    //     {"Mật khẩu không chính xác"}
                                    // </p>) ||
                                    errors.password && (
                                        <p className="textDanger">
                                            {errors.password?.message}
                                        </p>
                                    )

                                }

                            </div>



                            {/* <div className="form-group2">
                                    <div className="pass-box">
                                        <input placeholder=" " value={confirm} onChange={(e) => setConfirm(e.target.value)} type="password" id="confirm_password" name="confirm_password" required minLength={8} maxLength={20} />
                                        <label>Confirm Password</label>
                                        <div className="eye" onClick={() => setHiddenConfirmPwd(!hiddenConfirmPwd)}>
                                            <i className={hiddenConfirmPwd ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                        </div>
                                    </div>
                                </div> */}

                            <div className="form-groupP">


                                <div className="form-group2">
                                    <div className="pass-box">
                                        <input placeholder=" "
                                            type={hiddenConfirmPwd ? "text" : "password"}
                                            id="confirmPassword"
                                            name="confirmPassword"

                                            {...register("confirmPassword")}
                                        />
                                        <label>Xác nhận mật khẩu</label>
                                        <div className="eye" onClick={() => setHiddenConfirmPwd(!hiddenConfirmPwd)}>
                                            <i className={hiddenConfirmPwd ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                        </div>
                                    </div>

                                </div>
                                {errors.confirmPassword && (
                                    <p className="textDanger">
                                        {errors.confirmPassword?.message}
                                    </p>
                                )}
                            </div>


                            {message &&
                                <p className="textDanger" style={{ textAlign: "center" }}>
                                    {message}
                                </p>}



                        </div>


                        <button className="submit-btn" type="submit">
                            Lưu
                        </button>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword