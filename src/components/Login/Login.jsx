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
import {
  loginUser,
  authenticationSelector,
  clearState,
} from '../../store/features/authenticationSlice';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

const validationSchema = z
  .object({
    phonenumber: z.string().min(10, { message: "Số điện thoại phải ít nhất 10 chữ số" }),

    password: z
      .string()
      .min(6, { message: "Mật khẩu phải ít nhất 6 chữ số" }),
  })
  ;





function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [hiddenPwd, setHiddenPwd] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(validationSchema),
  });


  // const { isFetching, isSuccess, isError, message } = useSelector(
  //   authenticationSelector
  // );


  // useEffect(() => {
  //   return () => {
  //     dispatch(clearState());
  //   };
  // }, []);

  // useEffect(() => {
  //   if (isError) {
  //     setTimeout(() => dispatch(clearState()), 5000);
  //     reset();
  //   }

  //   if (isSuccess) {
  //     dispatch(clearState());
  //     navigate('/');
  //     reset();
  //   }
  // }, [isError, isSuccess]);


  // const onSubmit = (data) => {
  //   // console.log(data);
  //   dispatch(loginUser(data));
  // }

  // const onSubmit = (data) => {
  //   // console.log(data)
  //   axios
  //     .post(
  //       "http://localhost/LTW_BE-SignUp_API/Controllers/LoginController.php",
  //       {
  //         phone_number: data.phonenumber,
  //         password: data.password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       // console.log("đúng");
  //       if (res.data['IsLogin'] === "false" || res?.status === 401) {
  //         // createNotification("error", "Sai thông tin tài khoản hoặc mật khẩu");
  //         alert("Sai thông tin tài khoản hoặc mật khẩu");
  //         return;
  //       }
  //       // localStorage.setItem("accessToken", JSON.stringify(data?.accessToken));
  //       // localStorage.setItem(
  //       //   "refreshToken",
  //       //   JSON.stringify(data?.refreshToken)
  //       // );
  //       // dispatch(loginSuccess());
  //       // navigate("/");
  //     })
  //     .catch((err) => {
  //       // createNotification('error', 'Đăng nhập thất bại')
  //       // console.log("sai");

  //     });

  //   // };

  const [message, setMessage] = useState("");


  const onSubmit = (data) => {
    axios
      .post(
        "http://localhost/LTW_BE-SignUp_API/Controllers/LoginController.php",
        {
          phone_number: data.phonenumber,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("ffsdff", res.data);
        setMessage(res.data.message);
        if (res.data.isSuccess === true) {
          console.log("ok", res.data.isSuccess);
          // dispatch(getUserInfo(phonenumber));
          navigate("/sanpham");
        }
      })
      .catch((err) => {
        console.log("err", err)
      });

    // return dispatch(loginUser(data));
  };


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
                      // autoComplete="off"
                      type="number"
                      name="phonenumber"
                      placeholder=" "
                      {...register("phonenumber")}
                    />
                    <label>Số điện thoại</label>
                  </div>
                  {errors.phonenumber && (
                    <p className="textDanger">
                      {errors.phonenumber?.message}
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
                      <label>Mật khẩu</label>
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

              {message &&
                <p className="textDanger" style={{ textAlign: "center" }}>
                  {message}
                </p>}

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
