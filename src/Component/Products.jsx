import React from 'react'
import productsf1 from '/home/naveen/ecommerce/src/Image/products/f1.jpg'
import productsf2 from '/home/naveen/ecommerce/src/Image/products/f2.jpg'
import productsf3 from '/home/naveen/ecommerce/src/Image/products/f3.jpg'
import productsf4 from '/home/naveen/ecommerce/src/Image/products/f4.jpg'
import productsf5 from '/home/naveen/ecommerce/src/Image/products/f5.jpg'
import productsf6 from '/home/naveen/ecommerce/src/Image/products/f6.jpg'
import productsf7 from '/home/naveen/ecommerce/src/Image/products/f7.jpg'
import productsf8 from '/home/naveen/ecommerce/src/Image/products/f8.jpg'
import productsn1 from '/home/naveen/ecommerce/src/Image/products/n1.jpg'
import productsn2 from '/home/naveen/ecommerce/src/Image/products/n2.jpg'
import productsn3 from '/home/naveen/ecommerce/src/Image/products/n3.jpg'
import productsn4 from '/home/naveen/ecommerce/src/Image/products/n4.jpg'
import productsn5 from '/home/naveen/ecommerce/src/Image/products/n5.jpg'
import productsn6 from '/home/naveen/ecommerce/src/Image/products/n6.jpg'
import productsn7 from '/home/naveen/ecommerce/src/Image/products/n7.jpg'
import productsn8 from '/home/naveen/ecommerce/src/Image/products/n8.jpg'
import SProduct from './SProduct'

const Products =() => {
    const SProductCalled = (event) => {
        event.preventDefault();
        // alert("i am clicked")
        // onclick="window.location.href='sproduct.html'" 
        window.location.href="http://localhost:3000/shop/sproduct"
        
        
    }
  return (
    <>
        <section className="product1 section-p1">
        
        <div className="pro-container">
            <div className="pro" onClick={SProductCalled}>
                <img src={productsf1} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src={productsf2} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src={productsf3} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src={productsf4} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src={productsf5} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src={productsf6} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src={productsf7} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src={productsf8} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
        
             {/* upside image + downside image  */}

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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src={productsn5} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src={productsn6} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src={productsn7} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src={productsn8} alt="" />
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
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
        </div>
    </section>
    </>
  )
}
export default Products;