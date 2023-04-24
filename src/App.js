import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Intro from "./pages/Intro";
import { useLayoutEffect } from "react";
import News from "./pages/News/News";
import SubNews from "./pages/SubNews/SubNews";
import Products from "./components/Products/Products";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import { Provider } from "react-redux";
import store from "./store/store";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Payment from "./components/Payment/Payment";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dangky" element={<Signup />} />
          <Route path="/dangnhap" element={<Login />} />
          <Route path="/sanpham" element={<Products />} />
          <Route path="/chitietsanpham" element={<ProductDetail />} />
          <Route path="/giohang" element={<ShoppingCart />} />
          <Route path="/thanhtoan" element={<Payment />} />

          <Route path="/gioithieu" element={<Intro />} />
          {/* <Route path="/tintuc" element={<News />}>
          <Route path="subnews" element={<SubNews />} />
        </Route> */}
          <Route path="/tintuc" element={<SubNews />} />
          <Route path="/lienhe" element={<Contact />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Wrapper>
    </Provider>
  );
}

// <div className="container-fluid">
//   <div className="row">
//     <div className="col-2 bg-dark min-height-100vh">
//       <Sidebar />
//     </div>
//     <main className="col-10">
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/customers" element={<Customers />} />
//       </Routes>
//     </main>
//   </div>
// </div>
