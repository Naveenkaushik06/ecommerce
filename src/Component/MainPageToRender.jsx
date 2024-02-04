import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import SProduct from "./SProduct";

const MainPageToRender = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="shop" element={<Shop />}>
            <Route path="sproduct" element={<SProduct />} />
          </Route>

          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  );
};
export default MainPageToRender;
