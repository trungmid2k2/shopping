import logo from "./logo.svg";
// import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./layout/Main";
import { Route, Routes } from "react-router-dom";
import Introduce from "./components/introduce/Introduce";
import DescriptionProduct from "./components/description/DescriptionProduct";
import Cart from "./components/cart/Cart";
import AllProduct from "./components/products/AllProduct";

function App() {
  return (
    <>
      <div className="bg-[#001d2b] text-white h-[100%]">
        <Header></Header>
      </div>

      <Routes>
        <Route path="" element={<Main />} />
        <Route path={`/products/:id`} element={<DescriptionProduct />} />
        {/* <Route path="/blog-mefi/contact" element={<Contact />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/allproduct" element={<AllProduct />} />
      </Routes>

      <div className="bg-[#001d2b] text-white">
        <Footer />
      </div>
    </>
  );
}

export default App;
