import React from "react";
const Tiles = ({title, image, text}) => {
    return (
        <>
            <section>
                <h2> {title} </h2>
            </section>
            <section>  <p> {text}</p></section>
            <section><img src={image} alt=""/></section>

        </>
    );
}
export default Tiles;