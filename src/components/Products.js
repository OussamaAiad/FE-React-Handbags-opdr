import React from 'react';
import bag1 from "../assets/bag_1.png";

const Products = ({name, bag, description , price}) => {
    return (
        <>
            <article>
                <span>{name} </span>
                <img src={bag} alt="bag"/>
                <p >{description}</p>
                <h4>{price}</h4>
            </article>
        </>
    );
};

export default Products;