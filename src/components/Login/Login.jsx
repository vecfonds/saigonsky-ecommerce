import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import '../Signup/Signup.css'
// import logo from './../assets/img/logo.png'
// import { createNotification } from './../utils/Notification'
// import { loginSuccess } from './../redux/userSlice'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z
    .object({
        name: z.string().min(1, { message: "Name is required" }),
        password: z
            .string()
            .min(6, { message: "Password must be atleast 6 characters" }),
    })
    ;





function Login() {

    const navigate = useNavigate();

    const [hiddenPwd, setHiddenPwd] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validationSchema),
    });

    const onSubmit = (data) => console.log(data);


    const handleLogin = (e) => {
        // e.preventDefault()
        // const data = {
        //     username,
        //     password,
        // }
        // fetch('https://doctor-apt-service.herokuapp.com/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     // mode: "cors",
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => {
        //         console.log(res)
        //         return res.json()
        //     })
        //     .then((data) => {
        //         if (data?.message === 'Fail') {
        //             createNotification('error', 'Sai thông tin tài khoản hoặc mật khẩu')
        //             return
        //         }
        //         // TODO: put to redux
        //         console.log(data)
        //         if (data?.status === 401) {
        //             createNotification('error', 'Sai thông tin tài khoản hoặc mật khẩu')
        //             return
        //         }
        //         createNotification('success', 'Đăng nhập thành công')
        //         localStorage.setItem('accessToken', JSON.stringify(data?.accessToken))
        //         localStorage.setItem('refreshToken', JSON.stringify(data?.refreshToken))
        //         dispatch(loginSuccess())
        //         navigate('/')
        //     })
        //     .catch((err) => {
        //         createNotification('error', 'Đăng nhập thất bại')
        //     })
    }

    return (
        <div className="login-container">
            <div className="backgr">
                <div className="container">
                    <div className="container_left active-left">
                        <div className="image1"></div>
                    </div>
                    <div className="container_right">
                        {/* <div className="logo">
                            <img src={""} alt="" />
                        </div> */}


                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-inner">
                                <div className="welcome">
                                    <h1 className="text">Đăng nhập</h1>
                                </div>

                                <div className="form-groupS">
                                    <div className="form-group">
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            id="name"
                                            placeholder=" "
                                            {...register("name")}
                                        />
                                        <label>UserName</label>
                                    </div>
                                    {errors.name && (
                                        <p className="textDanger">
                                            {errors.name?.message}
                                        </p>
                                    )}
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
                                            <label>Password</label>
                                            <div className="eye" onClick={() => setHiddenPwd(!hiddenPwd)}>
                                                <i className={hiddenPwd ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                            </div>
                                        </div>

                                    </div>
                                    {errors.password && (
                                        <p className="textDanger">
                                            {errors.password?.message}
                                        </p>
                                    )}
                                </div>



                                {/* <div className="form-group">
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        id="username2"
                                        placeholder=" "
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <label>UserName</label>
                                </div>



                                <div className="form-group2">
                                    <div className="pass-box">
                                        <input placeholder=" " value={pwd} onChange={(e) => setPwd(e.target.value)} type={hiddenPwd ? "text" : "password"} id="password" name="password" required minLength={8} maxLength={20} />
                                        <label>Password</label>
                                        <div className="eye" onClick={() => setHiddenPwd(!hiddenPwd)}>
                                            <i className={hiddenPwd ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="remember">
                                    <div>
                                        <input type="checkbox" /> <span>Remember me</span>
                                    </div>
                                    <div className="forgot-off">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                </div> */}
                            </div>

                            <button className="submit-btn" type="submit">
                                Đăng nhập
                            </button>
                            <div className="line">
                            </div>

                            <div className="navigator">
                                Chưa có tài khoản? <Link to="/dangky">Đăng ký</Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
