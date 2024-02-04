import React from 'react'
import features_f1 from '/home/naveen/ecommerce/src/Image/features/f1.png'
import features_f2 from '/home/naveen/ecommerce/src/Image/features/f2.png'
import features_f3 from '/home/naveen/ecommerce/src/Image/features/f3.png'
import features_f4 from '/home/naveen/ecommerce/src/Image/features/f4.png'
import features_f5 from '/home/naveen/ecommerce/src/Image/features/f5.png'
import features_f6 from '/home/naveen/ecommerce/src/Image/features/f6.png'

const Feature = () => {
  return (
    <>
        <section className="feature section-p1">
        <div className="fe-box">
            <img src={features_f1} alt="" />
            <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
            <img src={features_f2} alt="" />
            <h6>Online Order</h6>
        </div>
        <div className="fe-box">
            <img src={features_f3} alt="" />
            <h6>Save Money</h6>
        </div>
        <div className="fe-box">
            <img src={features_f4} alt="" />
            <h6>Promotions</h6>
        </div>
        <div className="fe-box">
            <img src={features_f5} alt="" />
            <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
            <img src={features_f6} alt="" />
            <h6>F24/7 Support</h6>
        </div>
    </section>
    </>
  )
}
export default Feature;
