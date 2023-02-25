import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="conn-social">
                <div className="conn-text">Get connected with us on social networks:</div>
                <div className="wrapper">
                    <a className="icon facebook">
                        <i className="fab fa-facebook-f"></i>
                        <span className="tooltip">Facebook</span>
                    </a>
                    <a className="icon github">
                        <i className="fab fa-github"></i>
                        <span className="tooltip">Github</span>
                    </a>
                    <a className="icon twitter">
                        <i className="fab fa-twitter"></i>
                        <span className="tooltip">Twitter</span>
                    </a>
                    <a className="icon instagram">
                        <i className="fab fa-instagram"></i>
                        <span className="tooltip">Instagram</span>
                    </a>
                    <a className="icon youtube">
                        <i className="fab fa-youtube"></i>
                        <span className="tooltip">Youtube</span>
                    </a>
                </div>
            </div>
            <hr />
            <div className="footer-main">
                <div className="footer-component">
                    <h6 className="">
                        <i className="fas fa-star-and-crescent"></i>&nbsp;&nbsp;&nbsp;SAIGON SKY CO., LTD
                    </h6>
                    <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit.
                    </p>
                </div>

                <div className="footer-component">
                    <h6 className="">Products</h6>
                    <p>
                        <a href="#!" className="text-reset">Angular</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">React</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Vue</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Laravel</a>
                    </p>
                </div>

                <div className="footer-component">
                    <h6 className="">Useful links</h6>
                    <p>
                        <a href="#!" className="text-reset">Pricing</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Settings</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Orders</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Help</a>
                    </p>
                </div>

                <div className="footer-component">
                    <h6 className="">Contact</h6>
                    <p>
                        <i className="fas fa-home me-3"></i>&nbsp;&nbsp;&nbsp;Tầng 08,Tòa nhà Pearl Plaza, số 561A Điện Biên Phủ,
                        Phường 25, Quận Bình Thạnh, Thành Phố Hồ Chí Minh
                    </p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>&nbsp;&nbsp;&nbsp;info@saigonsky.com.vn
                    </p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>&nbsp;&nbsp;&nbsp;thaonguyen@saigonsky.com.vn
                    </p>
                    <p><i className="fas fa-phone me-3"></i>&nbsp;&nbsp;&nbsp;+ 84 988 571 839</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;





// <section className="d-flex justify-content-center justify-content-lg-between p-5 border-bottom">
//                 <div className="me-5 d-none d-lg-block">
//                     <span>Get connected with us on social networks:</span>
//                 </div>

//                 <div className="wrapper">
//                     <a className="icon facebook">
//                         <i className="fab fa-facebook-f"></i>
//                         <span className="tooltip">Facebook</span>
//                     </a>
//                     <a className="icon github">
//                         <i className="fab fa-github"></i>
//                         <span className="tooltip">Github</span>
//                     </a>
//                     <a className="icon twitter">
//                         <i className="fab fa-twitter"></i>
//                         <span className="tooltip">Twitter</span>
//                     </a>
//                     <a className="icon instagram">
//                         <i className="fab fa-instagram"></i>
//                         <span className="tooltip">Instagram</span>
//                     </a>
//                     <a className="icon youtube">
//                         <i className="fab fa-youtube"></i>
//                         <span className="tooltip">Youtube</span>
//                     </a>
//                 </div>

//             </section>













{/* <div>
            

<hr />
<section className="conn-social">               
    <div classNameName="conn-text">Get connected with us on social networks:</div>
    <div className="wrapper">
        <a className="icon facebook">
            <i className="fab fa-facebook-f"></i>
            <span className="tooltip">Facebook</span>
        </a>
        <a className="icon github">
            <i className="fab fa-github"></i>
            <span className="tooltip">Github</span>
        </a>
        <a className="icon twitter">
            <i className="fab fa-twitter"></i>
            <span className="tooltip">Twitter</span>
        </a>
        <a className="icon instagram">
            <i className="fab fa-instagram"></i>
            <span className="tooltip">Instagram</span>
        </a>
        <a className="icon youtube">
            <i className="fab fa-youtube"></i>
            <span className="tooltip">Youtube</span>
        </a>
    </div>

</section>

<section className="footer">
    <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-star-and-crescent"></i>&nbsp;&nbsp;&nbsp;SAIGON SKY CO., LTD
                </h6>
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Laravel</a>
                </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Help</a>
                </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                </h6>
                <p><i className="fas fa-home me-3"></i> Tầng 08,Tòa nhà Pearl Plaza, số 561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành Phố Hồ Chí Minh</p>
                <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@saigonsky.com.vn
                </p>
                <p>
                    <i className="fas fa-envelope me-3"></i>
                    thaonguyen@saigonsky.com.vn
                </p>
                <p><i className="fas fa-phone me-3"></i> + 84 988 571 839</p>
            </div>
        </div>
    </div>
</section>
</div> */}