import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import './Payment.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { userSelector } from '../../store/features/userSlice';
// import "./selection"

const validationSchema = z
    .object({
        fullname: z.string().min(1, { message: "Name is required" }),
        // email: z.string().min(1, { message: "Email is required" }).email({
        //     message: "Must be a valid email",
        // }),
        // phonenumber: z.string(),
        phonenumber: z.string(),//.transform(data => Number(data))
        // phonenumber: z.number().min(1, { message: "Name is required" }),

        address: z.string().min(1, { message: "Name is required" }),
    })
    ;


const Payment = () => {
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
        setValue
    } = useForm({
        resolver: zodResolver(validationSchema),
    });

    useEffect(() => {
        setValue("fullname", Name);
        setValue("phonenumber", Phone_number);
        setValue("address", Address);

    }, [])


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
                    // dispatch(editDataUser(data));
                    // navigate("/sanpham");
                }
            })
            .catch((err) => {
                console.log("err", err)
            });

    }






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
                                    // value={Name}
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
                                    // value={Phone_number}
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
                                    // value={Address}
                                    />
                                    <label>Địa chỉ</label>
                                </div>
                                {errors.address && (
                                    <p className="textDanger">
                                        {errors.address?.message}
                                    </p>
                                )}
                            </div>







                        </div>


                        <button className="submit-btn" type="submit">
                            Thanh toán
                        </button>


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