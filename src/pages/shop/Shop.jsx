import React from "react";
import { PRODUCTS } from "../../assets/products";
import { Product } from "./Product";
import "../../css/Shop.css";

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Nitz ShopEase</h1>
            </div>

            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
}
