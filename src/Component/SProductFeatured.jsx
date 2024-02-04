import React from "react";
import productsn1 from "/home/naveen/ecommerce/src/Image/products/n1.jpg";
import productsn2 from "/home/naveen/ecommerce/src/Image/products/n2.jpg";
import productsn3 from "/home/naveen/ecommerce/src/Image/products/n3.jpg";
import productsn4 from "/home/naveen/ecommerce/src/Image/products/n4.jpg";

const SProductFeatured = () => {
  return (
    <>
      <section className="product1 section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          <div className="pro">
            <img src={productsn1} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fa-solid fa-cart-shopping cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={productsn2} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fa-solid fa-cart-shopping cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={productsn3} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fa-solid fa-cart-shopping cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={productsn4} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fa-solid fa-cart-shopping cart"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default SProductFeatured;
