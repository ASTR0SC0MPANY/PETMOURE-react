import React from 'react';
import './CartItem.css';
//import  formatCurrency  from '../../utils/formatCurrency.js'; 
import propTypes from 'prop-types';
import { BsCartDashFill } from "react-icons/bs";


function CartItem({data}) {

  const { urlimage, descricao, price } = data;
  

  return (
    <section className="cart-item">
        <img
            src={urlimage}
            alt="image do produto"
            className="cart-item-image"
        />

        <div className="cart-item-content">
          <h3 className="cart-item-title">{descricao}</h3>
          <h3 className="cart-item-price">{price}</h3>

          <button
            type="button"
            className="button_remove-item"
          ><BsCartDashFill />
          </button>

        </div>

    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
