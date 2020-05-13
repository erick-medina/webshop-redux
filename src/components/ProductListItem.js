import React from "react";
import util from './../util';

function ProductListItem(props) {

    return (
        <div>
            {props.products.map(product =>
                <div>
                    <a href={`#${product.id}`} onClick={(e) => props.handleAddToCart(e, product)}>
                        <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                    </a>
                    <p>{product.title}</p>
                    <p>{util.formatCurrency(product.price)}</p>
                    <button onClick={(e) => props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            )}
        </div>
    )
}

export default ProductListItem;