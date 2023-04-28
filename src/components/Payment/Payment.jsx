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
import { FormControl, MenuItem, Select } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteShoppingCart, setQuantityProduct, shoppingCartSelector } from '../../store/features/shoppingCartSlice';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

const notify = (text) => toast.success(text, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});



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




    const [method, setMethod] = useState("Phương thức thanh toán");

    const {
        dataShoppingCart
    } = useSelector(shoppingCartSelector);

    console.log("dataShoppingCart", dataShoppingCart);

    const onSubmit = (data) => {
        const configData = {
            method,
            note: data.address,
            customerID: Id,
            product: dataShoppingCart.map(product => {
                return {
                    id: product.data.Id,
                    count: product.quantity,
                    size: product.size,
                    color: product.color,
                    rate: 1
                }
            })
        }

        console.log("configData", configData)

        // const configData = {
        //     method: "Offline",
        //     note: null,
        //     customerID: "fbb9e56e-cd26-42aa-a07d-5b3cb3e88815",
        //     product: [
        //         {
        //             id: "219971e4-a0c4-4699-bbed-5ce8ba211175",
        //             count: 1,
        //             size: "2",
        //             color: "pink",
        //             rate: 2
        //         },
        //         {
        //             id: "420f1322-8d35-4290-b909-6b1f7abc739f",
        //             count: 2,
        //             size: "3",
        //             color: "yellow",
        //             rate: 4
        //         }
        //     ]
        // }

        // dispatch(editUser(configData));
        console.log(data);


        axios
            .post(
                "http://localhost/LTW_BE-dev/Controllers/CreateBill.php",
                configData,
            )
            .then((res) => {
                console.log("CreateBill.php", res.data);
                setMessage(res.data.message);
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
    const [message, setMessage] = useState("");


    return (
        <div id='payment'>
            <div className="payment-main">
                <ToastContainer />

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
                                    <label>Địa chỉ giao hàng</label>
                                </div>
                                {errors.address && (
                                    <p className="textDanger">
                                        {errors.address?.message}
                                    </p>
                                )}
                            </div>







                        </div>
                        <div className="form-sort">
                            {/* <p>Sản phẩm:</p> */}
                            <FormControl sx={{
                                m: 1, width: "100%", padding: 0, margin: 0,
                                borderColor: "var(--main-3)!important",
                                height: "48.8px"
                            }}
                                className='form-select'
                            >
                                <Select
                                    sx={{
                                        height: 48.4, padding: 0, margin: 0,
                                        borderColor: "var(--main-3)!important",
                                    }}
                                    value={method}
                                    // onChange={handleChangeProduct}
                                    onChange={(e) => {
                                        setMethod(e.target.value);
                                    }}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value={"Phương thức thanh toán"}>
                                        <em>Phương thức thanh toán</em>
                                    </MenuItem>
                                    <MenuItem value={"Tiền mặt"}>Tiền mặt</MenuItem>
                                    <MenuItem value={"Momo"}>Momo</MenuItem>
                                    <MenuItem value={"ZaloPay"}>ZaloPay</MenuItem>

                                </Select>
                            </FormControl>
                        </div>


                        {message &&
                            <p className="textDanger" style={{ textAlign: "center" }}>
                                {message}
                            </p>}



                        <button className="submit-btn" type="submit">
                            Thanh toán
                        </button>


                    </form>
                </div>

                <div className="payment-main-line">
                </div>

                <div className="payment-main-right">
                    <div className='mobile-shoppingcart'>
                        <div className='mobile-shoppingcart-center'>
                            {dataShoppingCart.map((product) => (
                                <div className='product-cart-shopping'>
                                    <div className="product-cart-shopping-img">
                                        <img src={`${product.data.image.filter(i => i.Main === 1)[0]?.Content}`} alt="" />
                                    </div>
                                    <div className="product-cart-shopping-detail">
                                        <h2 className="title">{product.data.Name}</h2>
                                        <div className='subtitle'>
                                            <p className="brand-name"><strong>Thương hiệu:</strong> {product.data.Album}</p>
                                            {/* <p className="product-code"><strong>Mã SP:  </strong> {product.data.Id}</p> */}

                                            <p><strong>Phiên bản:</strong> {product.size} / {product.color}</p>
                                        </div>

                                        <div className="quantity-cart">
                                            <div className="quantity-input">


                                                <input className="quantity-input" type="text" value={product.quantity} readOnly />

                                            </div>

                                        </div>
                                        <div className='footer-card'>
                                            <p className="price">{VND.format(product.data.Price * product.quantity)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment