import React, { useContext } from 'react';
import './CartItem.css';
import  formatCurrency  from '../../utils/formatCurrency.js'; 
import propTypes from 'prop-types';
import { BsCartDashFill } from "react-icons/bs";
import { AppContext } from '../../context/AppContext.js';


function CartItem({data}) {

  const { cartItems,setCartItems } = useContext(AppContext);
  const {id, name, price, imageUrl } = data;
  
  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id  !== id );
    setCartItems(updatedItems);

  }

  return (
    <section className="cart-item">
        <img
            src={imageUrl}
            alt="image do produto"
            className="cart-item-image"
        />

        <div className="cart-item-content">
          <h3 className="cart-item-title">{name}</h3>
          <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

          <button
            type="button"
            className="button_remove-item"
            onClick={handleRemoveItem}
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