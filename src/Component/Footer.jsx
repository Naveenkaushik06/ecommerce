import React from 'react'
import imglogo from '/home/naveen/ecommerce/src/Image/logo.png'
import payapp from '/home/naveen/ecommerce/src/Image/pay/app.jpg'
import payplay from '/home/naveen/ecommerce/src/Image/pay/play.jpg'
import paypay from '/home/naveen/ecommerce/src/Image/pay/pay.png'

const Footer = () => {
  return (
    <>
        <footer className="section-p1">
        <div className="col">
            {/* <img className="logo" src={imglogo} alt="" /> */}
            <p className="logo1">Patnafashion Trend</p>
            <h4>Contact</h4>
            <p><strong>Address: </strong> 34 Anisabad Road, Street 2, Patna</p>
            <p><strong>Phone: </strong> (+91) 73 6803 5821</p>
            <p><strong>Hours: </strong> 10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
        <div className="col">
            <h4>About</h4>
            <a href="#">About us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>
        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src={payapp} alt="" />
                <img src={payplay} alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src={paypay} alt="" />
        </div>
        <div className="copyright">
            <p>© 2023 Patnafashion Trend. All Rights Reserved | Terms and Conditions</p>
        </div>
        </footer>
    </>
  )
}
export default Footer;