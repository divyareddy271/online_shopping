import React from "react";
import CartItem from "./cartitem"
const Cart =(props) =>{
    const {products } =props
    return (
        <div className="cart">
            {products.map((products) => {
                return (
                    <CartItem
                        products={products}
                        key={products.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        ondecreaseQuantity={props.ondecreaseQuantity}
                        Ondelete={props.Ondelete}
                    />
                )
    
            })
            }
        </div>
    );
} 

export default Cart;