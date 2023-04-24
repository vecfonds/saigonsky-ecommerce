import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import './Payment.css'
import { useDispatch } from 'react-redux';
import axios from "axios";
// import "./selection"

const validationSchema = z
    .object({
        name: z.string().min(1, { message: "Name is required" }),
        password: z
            .string()
            .min(6, { message: "Password must be atleast 6 characters" }),
    })
    ;

const Payment = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(validationSchema),
    });

    const onSubmit = (data) => {
        // dispatch(loginUser(data));
        console.log(data);
    }

    useEffect(() => {
        var Parameter = {
            url: './data.json',//Đường dẫn đến file chứa dữ liệu hoặc api do backend cung cấp
            method: 'GET', //do backend cung cấp 
            responseType: 'application/json', //kiểu Dữ liệu trả về do backend cung cấp
        }
        //gọi ajax = axios => nó trả về cho chúng ta là một promise
        var promise = axios(Parameter);
        //Xử lý khi request thành công
        promise.then(function (result) {
            console.log(result.data)
        });

    }, []);





    return (
        <div id='payment'>
            <div className="payment-main">
                <div className="payment-main-left">
                    <div className="headeri">THÔNG TIN THANH TOÁN</div>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-inner">
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



                            <div className="form-groupS">
                                <div className="form-group">
                                    <input
                                        autoComplete="off"
                                        type="tel"
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



                            <div className="container">
                                <div className="row justify-content-md-center p-2">
                                    <div className="col-md-auto">
                                        <select className="form-select form-select-sm mb-3" id="city" aria-label=".form-select-sm">
                                            <option value="" selected>Chọn tỉnh thành</option>
                                        </select>

                                        <select className="form-select form-select-sm mb-3" id="district" aria-label=".form-select-sm">
                                            <option value="" selected>Chọn quận huyện</option>
                                        </select>

                                        <select className="form-select form-select-sm" id="ward" aria-label=".form-select-sm">
                                            <option value="" selected>Chọn phường xã</option>
                                        </select>
                                    </div>
                                </div>
                            </div>



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

                <div className="payment-main-line">
                </div>

                <div className="payment-main-right">

                    cc
                </div>
            </div>
        </div>
    )
}

export default Payment