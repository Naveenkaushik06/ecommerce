import React from "react";
import productsf1 from "/home/naveen/ecommerce/src/Image/products/f1.jpg";
import productsf2 from "/home/naveen/ecommerce/src/Image/products/f2.jpg";
import productsf3 from "/home/naveen/ecommerce/src/Image/products/f3.jpg";
import productsf4 from "/home/naveen/ecommerce/src/Image/products/f4.jpg";

const SProductDetails = () => {
  return (
    <>
      <section className="prodetails section-p1">
        <div className="single-pro-image">
          <img src={productsf1} width="100%" id="MainImg" alt="" />
          <div className="small-img-group">
            <div className="small-img-col">
              <img
                src={productsf1}
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src={productsf2}
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src={productsf3}
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src={productsf4}
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>Men's Fashion T Shirt</h4>
          <h2>$139.00</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button className="normal">Add To Cart</button>
          <h4>Product Details</h4>
          <span>
            The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz.
            per sq. yd. fabric constructed from 100% cotton, this classNameic
            fit preshrunk jersey knit provides unmatched comfort with each wear.
            Featuring a taped neck and shoulder, and a seamless double-needle
            collar, and available in a range of colors, it offers it all in the
            ultimate head-turning package.
          </span>
        </div>
      </section>
    </>
  );
};
export default SProductDetails;
