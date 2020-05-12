import React, {useState, useEffect} from "react";

export function ProductsList() {
    const [products, setProducts] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('http://localhost:8000/products');
        const response = await data.json();
        console.log(response);

        setProducts(response);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // const {id, title, sku, availableSizes, price} = products;

    return (
        <div>
            {products.map(product => (
                <div>
                    <h3 key={product.id}>{product.title}</h3>
                </div>
            ))}
            <div>
                <h1></h1>
            </div>
        </div>
    )
}