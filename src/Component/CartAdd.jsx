import React from "react";

const CartAdd = () => {
  return (
    <>
      <section className="cart-add section-p1">
        <div className="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>
        <div className="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$ 335</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$ 335</strong>
              </td>
            </tr>
          </table>
          <button className="normal">Proceed to checkout</button>
        </div>
      </section>
    </>
  );
};
export default CartAdd;
