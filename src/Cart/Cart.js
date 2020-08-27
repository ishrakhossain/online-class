import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const toalPrice = cart.reduce((total,sub) => total + sub.price, 0) 
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Subject Added: {cart.length}</h5>
            <h5>Total Price: {toalPrice}</h5>
        </div>
    );
};

export default Cart;