import React from 'react'
import productsf1 from '/home/naveen/ecommerce/src/Image/products/f1.jpg';
import productsf2 from '/home/naveen/ecommerce/src/Image/products/f2.jpg';
import productsf3 from '/home/naveen/ecommerce/src/Image/products/f3.jpg';
const CartDetails = () => {
  return (
    <>
        <section className="cart section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Qunatity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href=""><i class="far fa-times-circle"></i></a></td>
                    <td><img src={productsf1} alt="" /></td>
                    <td>Cartoon Astronaut T-Shirts</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1" name="" id="" /></td>
                    <td>$118.19</td>
                </tr>
                <tr>
                    <td><a href=""><i class="far fa-times-circle"></i></a></td>
                    <td><img src={productsf2} alt="" /></td>
                    <td>Cartoon Astronaut T-Shirts</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1" name="" id="" /></td>
                    <td>$118.19</td>
                </tr>
                <tr>
                    <td><a href=""><i class="far fa-times-circle"></i></a></td>
                    <td><img src={productsf3} alt="" /></td>
                    <td>Cartoon Astronaut T-Shirts</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1" name="" id="" /></td>
                    <td>$118.19</td>
                </tr>
            </tbody>
        </table>
    </section>
    </>
  )
}
export default CartDetails; 
