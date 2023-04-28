import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Intro from "./pages/Intro";
import { useLayoutEffect } from "react";
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
import PersonalInfomation from "./components/PersonalInfomation/PersonalInfomation";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import FavoritesList from "./components/FavoritesList/FavoritesList";

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
          <Route path="/sanpham/:productId" element={<ProductDetail />} />
          <Route path="/giohang" element={<ShoppingCart />} />
          <Route path="/thanhtoan" element={<Payment />} />
          <Route path="/taikhoan" element={<PersonalInfomation />} />
          <Route path="/thaydoimatkhau" element={<ChangePassword />} />
          <Route path="/lichsudonhang" element={<OrderHistory />} />
          <Route path="/gioithieu" element={<Intro />} />
          <Route path="/danhsachyeuthich" element={<FavoritesList />} />
          <Route path="/tintuc" element={<SubNews />} />
          <Route path="/lienhe" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Wrapper>
    </Provider>
  );
}
