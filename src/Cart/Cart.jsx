import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../components/CartItem/CartItem';
import { AppContext } from '../context/AppContext';

function Cart() {

  const {cartItems } = useContext(AppContext);
{/*codigo q o chatgpt me deu pra fazer o carrinho funcionar,pq o do video n deu certo */}
  return (
    <section className="cart">
      <div className="cart-items">
        {cartItems && cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="cart-resume">
        Resumo do Carrinho
      </div>
    </section>
  );


  {/*o do*/}
{/* 
  return (
    <section className="cart">
      <div className="cart-items">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
      </div>

      <div className="cart-resume">
        Resumo do Carrinho
      </div>
    </section>
  );
  */}
}

export default Cart;