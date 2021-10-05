import React from 'react';

const Cart = (props) => {
    console.log(props);
    const { cart } = props;
    let total = 0;
    for (const course of cart) {
        total = total + course.price;
    }
    const shipping = total > 0 ? 15 : 0;
    const tex = (total + shipping) * .10;
    const grandTotal = total + shipping + tex;
    return (
        <div>
            <h2>Add to card : {props.cart.length}</h2>
            <h3>Price: {total.toFixed(2)}</h3>
            <h3>Shipping: {shipping.toFixed(2)}</h3>
            <h3>Tex: {tex.toFixed(2)}</h3>
            <h3>Grand Total: {grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;