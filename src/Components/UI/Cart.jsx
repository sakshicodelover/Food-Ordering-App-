import { useContext } from "react";
import Modal from "./Modal";
import { currencyFormatter } from "../../util/formatter";
import Button from "./button";
import UserPorgressContext from "../store/userProgressContext";
import cartContenxt from "../store/cartContext";
export default function Cart() {
  let cartCntx = useContext(cartContenxt);
  let userProgressCntx = useContext(UserPorgressContext);
  const cartTotalPrice = cartCntx.items.reduce((totalPrice, item) =>
    totalPrice + item.quantity * item.price, 0)
  function handleCloseCart() {
    userProgressCntx.hideCart();
  }
  function onIncrease(item) {
    cartCntx.addItem(item);
  }
  function onDecrease(id) {
    cartCntx.removeItem(id);
  }
  function handleCheckout(){
    userProgressCntx.showCheckout();
  }
  return (
    <Modal className='cart' open={userProgressCntx.progress === 'cart'}>
      <h2> Your Cart</h2>
      <ul>
        {
          cartCntx.items.map((item) => {
            return (<li key={item.id} className="cart-item">
              <p>{item.name} - {item.quantity} x {currencyFormatter.format(item.price)}</p>
              <p className="cart-item-actions">
                <button onClick={() => onDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrease(item)}>+</button>
              </p>
            </li>)
          })
        }
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>Close</Button>
        {cartCntx.items.length > 0 && <Button onClick={handleCheckout}>Go to Checkout</Button>}
      </p>
    </Modal>
  )
}