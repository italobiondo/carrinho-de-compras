import React from "react";
import propTypes from "prop-types";

import formatCurrency from "../../utils/formatCurrency";
import { MdAddShoppingCart } from "react-icons/md";
import "./ProductCard.css";

function ProductCard({ data }) {

	const {title,thumbnail,price} = data;

	return(
		<section className="product-card">
			<img 
				src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
				alt="product" 
				className="card__image" 
			/>
			<div className="card__infos">
				<h2 className="card__price">{formatCurrency(price,"BRL")}</h2>
				<h2 className="card__title">{title}</h2>
			</div>

			<button type="button" className="button__add-cart">
				<MdAddShoppingCart />
			</button>
            
		</section>
	);
}

export default ProductCard;

ProductCard.propTypes = {
	data: propTypes.shape({})
}.isRequired;
