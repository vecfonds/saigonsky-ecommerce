import React from 'react'
import './Products.css'

const Products = () => {
    return (
        <main>
            <div className="left">
                <div className="category">
                    <h2 className="category--title" id="category">Category</h2>
                    <div className="category--list">
                        <div className="list-group">
                            <a href="#" className="list-group-item">Quần áo nam</a>
                            <a href="#" className="list-group-item">Quần áo nữ</a>
                            <a href="#" className="list-group-item">Phụ kiện nữ</a>
                            <a href="#" className="list-group-item">Phụ kiện nam</a>
                            <a href="#" className="list-group-item">Giày dép</a>
                        </div>
                    </div>
                </div>

                <div className="top-product">
                    <h2 className="top-product--title">Top Products</h2>
                    <div className="top-product--list">
                        <div className="list-group ">
                            <a href="#" className="list-group-item">Áo khoác nam</a>
                            <a href="#" className="list-group-item">Áo sơ mi nam</a>
                            <a href="#" className="list-group-item">Mắt kính</a>
                            <a href="#" className="list-group-item">khăn len</a>
                            <a href="#" className="list-group-item">Áo kaki nam</a>
                            <a href="#" className="list-group-item">Túi xách</a>
                        </div>
                    </div>
                </div>


            </div>
            <div className="products">
                <h2 className="products--title">
                    Top Products
                </h2>

                <div className="product--details">
                    <div className="product-card">
                        <div className="product-card-img">
                            <img src="./image/a1.jpg" alt="item"/>
                        </div>
                        <div className="product-card-detail">
                            <p className="price">Giá: 500.000 VND</p>
                            <div className="btn"><a href="#">Buy Now</a></div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-card-img">
                            <img src="./image/a2.jpg" alt="item"/>
                        </div>
                        <div className="product-card-detail">
                            <p className="price">Giá: 600.000 VND</p>
                            <div className="btn"><a href="#">Buy Now</a></div>
                        </div>

                    </div>
                    <div className="product-card">
                        <div className="product-card-img">
                            <img src="./image/a3.jpg" alt="item"/>
                        </div>
                        <div className="product-card-detail">
                            <p className="price">Giá: 150.000 VND</p>
                            <div className="btn"><a href="#">Buy Now</a></div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-card-img">
                            <img src="./image/a4.jpg" alt="item"/>
                        </div>
                        <div className="product-card-detail">
                            <p className="price">Giá: 400.000 VND</p>
                            <div className="btn"><a href="#">Buy Now</a></div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-card-img">
                            <img src="./image/a5.jpg" alt="item"/>
                        </div>
                        <div className="product-card-detail">
                            <p className="price">Giá: 500.000 VND</p>
                            <div className="btn"><a href="#">Buy Now</a></div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-card-img">
                            <img src="./image/a6.jpg" alt="item"/>
                        </div>
                        <div className="product-card-detail">
                            <p className="price">Giá: 2.000.000 VND</p>
                            <div className="btn"><a href="#">Buy Now</a></div>
                        </div>
                    </div>


                </div>

            </div>

            <div className="right">
                <h2>Banner Area</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, corrupti! Ut, eius! Delectus
                    voluptates, saepe quae aliquid repellat, pariatur ratione aspernatur obcaecati, velit soluta
                    repellendus
                    ipsam expedita incidunt reiciendis? Dolore.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores qui quaerat numquam aut
                    odio repudiandae nam quod debitis quo saepe perspiciatis eaque, recusandae aperiam ipsa illo nihil
                    nostrum eos!</p>
            </div>

            <div className="products--pagination">
                <ul>
                    <li>
                        <a href="#" className="page-link">
                            <i className="fas fa-angle-double-left"></i>
                        </a>
                    </li>
                    <li><a href="#" className="page-link ">1</a></li>
                    <li className="active"><a href="#" className="page-link ">2</a></li>
                    <li><a href="#" className="page-link ">3</a></li>
                    <li><a href="#" className="page-link ">4</a></li>
                    <li><a href="#" className="page-link ">5</a></li>
                    <li>
                        <a href="#" className="page-link">
                            <i className="fas fa-angle-double-right"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Products