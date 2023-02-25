import React from 'react'
import './Introduce.css'
import { motion } from "framer-motion"
import { Hidden } from '@mui/material'
import { display } from '@mui/system'
import { Link } from 'react-router-dom'


const Introduce = ({ seeMore }) => {
    const offscreen = { y: "1.5rem", opacity: 0 };
    const onscreen = {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            type: "spring",
            delay: 1
        }
    }

    return (
        <div id="introducei">
            <div className="introducei">
                <motion.div
                    className="contenti"
                    initial={{ left: "-20rem", opacity: 0 }}
                    whileInView={{ left: "0rem", opacity: 1 }}
                    transition={{
                        duration: 3,
                        type: "spring",
                    }}
                    viewport={{ once: true }}

                >


                    <motion.div
                        initial={offscreen}
                        whileInView={onscreen}
                        viewport={{ once: true }}

                    >
                        <div className="headeri">GIỚI THIỆU</div>
                    </motion.div>
                    <div>
                        Được thành lập từ năm 2022, SaiGon Sky là nhà cung cấp các giải pháp toàn diện về nội thất phòng tắm và thiết bị an ninh cao cấp hàng đầu tại Việt Nam với hơn 10 thương hiệu nổi tiếng toàn thế giới, trải dài từ đẳng cấp siêu sang (Jörger) đến phân khúc 5 sao (Brizo, Delta, Axent, Bagnodesign, Bette, Innoci, Aliseo…). Đa phong cách, đa thương hiệu, đa phân khúc – luôn có nhiều hơn một giải pháp tối ưu cho từng sự lựa chọn riêng biệt tại SaiGon Sky.                    </div>


                    {seeMore &&
                        <motion.div
                            initial={offscreen}
                            whileInView={onscreen}
                            viewport={{ once: true }}

                        >

                            <Link to='/gioithieu' className="button_about_us">
                                Xem thêm
                            </Link>

                            {/* <button className="button_about_us">
                            Xem thêm
                        </button> */}
                        </motion.div>}


                </motion.div>

                <motion.div
                    className='introducei_img'
                    initial={{ right: "-20rem", opacity: 0 }}
                    whileInView={{ right: "0rem", opacity: 1 }}
                    transition={{
                        duration: 3,
                        type: "spring",
                    }}
                    viewport={{ once: true }}
                >
                    <img src="/assets/images/logo-white-removebg-preview.png" alt="Logo" />
                </motion.div>
            </div>
        </div>
    )
}

// const Introduce = () => {
//     return (
//         <div id="introducei">
//             <div className="introducei">
//                 {/* <div className="contenti"> */}
//                 <motion.div
//                     className="contenti"
//                     // className='introducei_content'
//                     initial={{ left: "-20rem" }}
//                     whileInView={{ left: "0rem" }}
//                     transition={{
//                         duration: 3,
//                         type: "spring",
//                     }}




//                 // style={{ position: 'relative', left: "-25rem" }}
//                 // animate={{ left: "0rem" }}
//                 // transition={{
//                 //     duration: 3,
//                 //     type: "spring",
//                 // }}

//                 >
//                     <div className="headeri">GIỚI THIỆU</div>
//                     <div>
//                         Được thành lập từ năm 2010, Uu Viet Solutions là nhà cung cấp các giải pháp toàn diện về nội thất phòng tắm và thiết bị an ninh cao cấp hàng đầu tại Việt Nam với hơn 10 thương hiệu nổi tiếng toàn thế giới, trải dài từ đẳng cấp siêu sang (Jörger) đến phân khúc 5 sao (Brizo, Delta, Axent, Bagnodesign, Bette, Innoci, Aliseo…). Đa phong cách, đa thương hiệu, đa phân khúc – luôn có nhiều hơn một giải pháp tối ưu cho từng sự lựa chọn riêng biệt tại Uu Viet Solutions.
//                     </div>
//                     <button className="button_about_us">
//                         Xem thêm
//                     </button>
//                 </motion.div>
//                 {/* </div> */}

//                 <div>
//                     <motion.div
//                         className='introducei_img'
//                     // style={{ position: 'relative' }}
//                     // initial={{ right: "-20rem" }}
//                     // whileInView={{ right: "0rem" }}
//                     // transition={{
//                     //     duration: 3,
//                     //     type: "spring",
//                     // }}

//                     // style={{ position: 'relative', left: "25rem" }}
//                     // animate={{ left: "0rem" }}
//                     // transition={{
//                     //     duration: 3,
//                     //     type: "spring",
//                     // }}

//                     >
//                         <img src="/assets/images/LOGO.jpg" alt="Logo" />
//                     </motion.div>
//                 </div>
//             </div>
//         </div >
//     )
// }

export default Introduce