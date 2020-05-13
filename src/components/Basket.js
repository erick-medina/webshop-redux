import React from "react";

export function Basket(props) {
    const {cartItems} = props
    return (
        <div>
            {cartItems.length === 0 ? "Basket is empty" :
            <h2>You have {cartItems.length} products in the basket</h2>
            }
        </div>
    )
}
