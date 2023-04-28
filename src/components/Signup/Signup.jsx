import React, { useState } from 'react'
import './Signup.css'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = (text) => toast.success(text, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
        fontSize: "16px"
    }
});

const notifyError = (text) => toast.error(text, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
        fontSize: "16px"
    }
});

const validationSchema = z
    .object({
        fullname: z.string().min(1, { message: "Name is required" }),
        // email: z.string().min(1, { message: "Email is required" }).email({
        //     message: "Must be a valid email",
        // }),
        // phonenumber: z.string(),
        phonenumber: z.string().min(1, { message: "Phone number is required" }),//.transform(data => Number(data))
        // phonenumber: z.number().min(1, { message: "Name is required" }),

        address: z.string().min(1, { message: "Address is required" }),
        password: z
            .string()
            .min(6, { message: "Password must be atleast 6 characters" }),
        confirmPassword: z
            .string()
            .min(1, { message: "Confirm Password is required" }),
        terms: z.literal(true, {
            errorMap: () => ({ message: "You must accept Terms and Conditions" }),
        }),
    }).refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Password don't match",
    });
// .superRefine(({ confirmPassword, password }, ctx) => {
//     if (confirmPassword !== password) {
//       ctx.addIssue({
//         code: "custom",
//         message: "The passwords did not match"
//       });
//     }
//   });

const Signup = () => {
    const navigate = useNavigate();

    const [hiddenPwd, setHiddenPwd] = useState(false);
    const [hiddenConfirmPwd, setHiddenConfirmPwd] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validationSchema),
    });

    const [message, setMessage] = useState("");


    const onSubmit = (data) => {
        // console.log(typeof (data.phonenumber));
        // try {
        //     const validatedForm = validationSchema.parse(data);
        //     console.log(validatedForm);
        // } catch (err) {
        //     console.log(err);
        // }

        console.log(data)

        axios
            .post(
                "http://localhost/LTW_BE-dev/Controllers/SignUpController.php",
                {
                    name: data.fullname,
                    phoneNumber: data.phonenumber,
                    address: data.address,
                    password: data.password
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                // res.data = JSON.parse(res.data);
                console.log("ffsdff", res.data);

                // const result = JSON.parse(res.data);
                // console.log(result);

                setMessage(res.data.message);
                // setMessage(res.data.message);
                if (res.data.isSuccess === true) {
                    // console.log("ok", res.data.isSuccess);

                    notifySuccess(res.data.message);
                    // navigate("/dangnhap");
                    setTimeout(() => { navigate("/dangnhap"); }, 2000)
                }
                else {
                    notifyError(res.data.message);
                }
            })
            .catch((err) => {
                console.log("err", err);
            });


    }

    // const handleSubmit = () => {



    //     function ValidateEmail(mail) {
    //         // if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //         //   return (true)
    //         // }
    //         // return (false)

    //         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    //     }
    // }

    return (
        <div className="login-container">

            <div className="backgr">
                <ToastContainer />
                <div className="container">
                    <div className="container_left active-left">
                        <div className="image1"></div>
                    </div>
                    <div className="container_right">
                        <div className="logo">
                            {/* <img src={"/assets/images/logo-white-removebg-preview.png"} alt="" /> */}
                        </div>


                        {/* <form action="/" className="form" method="post" onSubmit={() => handleSubmit()}> */}
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-inner">
                                <div className="welcome">
                                    <h1 className="text">Đăng ký</h1>
                                </div>

                                {/* <div className="form-group">
                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required />
                                <label>UserName</label>
                            </div> */}

                                {/* <div className="form-group">
                                    <input placeholder=" "
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        name="email"
                                        required
                                    />
                                    <label>Email</label>
                                </div> */}


                                <div className="form-groupS">
                                    <div className="form-group">
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            id="fullname"
                                            placeholder=" "
                                            {...register("fullname")}
                                        />
                                        <label>Họ và tên</label>
                                    </div>
                                    {errors.fullname && (
                                        <p className="textDanger">
                                            {errors.fullname?.message}
                                        </p>
                                    )}
                                </div>


                                {/* <div className="form-groupS">
                                    <div className="form-group">
                                        <input
                                            autoComplete="off"
                                            type="email"
                                            name="email"
                                            placeholder=" "
                                            {...register("email")}
                                        />
                                        <label>Email</label>
                                    </div>
                                    {errors.email && (
                                        <p className="textDanger">
                                            {errors.email?.message}
                                        </p>
                                    )}
                                </div> */}

                                {/* <div className="form-group">
                                    <input placeholder=" " value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" name="phonenumber" required />
                                    <label>Phone number</label>
                                </div> */}

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
                                {/* 
                                <div className="form-group">
                                    <input placeholder=" " value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="address" required />
                                    <label>Address</label>
                                </div> */}


                                <div className="form-groupS">
                                    <div className="form-group">
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="address"
                                            placeholder=" "
                                            {...register("address")}
                                        />
                                        <label>Địa chỉ</label>
                                    </div>
                                    {errors.address && (
                                        <p className="textDanger">
                                            {errors.address?.message}
                                        </p>
                                    )}
                                </div>


                                {/* <div className="form-group">
                                    <input placeholder=" " value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" name="birthday" required />
                                    <label>Birthday</label>
                                </div> */}

                                {/* <div className="form-groupS">
                                    <div className="form-group">
                                        <input
                                            autoComplete="off"
                                            type="date"
                                            name="birthday"
                                            placeholder=" "
                                            {...register("birthday")}
                                        />
                                        <label>Ngày sinh</label>
                                    </div>
                                    {errors.birthday && (
                                        <p className="textDanger">
                                            {errors.birthday?.message}
                                        </p>
                                    )}
                                </div> */}


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


                                <div className="remember">
                                    <div>
                                        <input type="checkbox"
                                            name="terms"
                                            {...register("terms")}
                                        /> <span>Đồng ý với điều khoản và chính sách bảo mật của chúng tôi</span>
                                    </div>

                                    {errors.terms && (
                                        <p className="textDanger">
                                            {errors.terms?.message}
                                        </p>
                                    )}

                                </div>

                            </div>




                            <button className="submit-btn" type="submit">Gửi</button>

                            <div className="line">
                            </div>
                            <div className="navigator">
                                Chưa có tài khoản? <Link to="/dangnhap">Đăng nhập</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default Signup;