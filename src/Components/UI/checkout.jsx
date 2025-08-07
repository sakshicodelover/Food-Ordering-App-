import { useContext } from "react";
import { currencyFormatter } from "../../util/formatter";
import Button from "./button";
import Input from "./Input";
import Modal from "./Modal";
import UserPorgressContext from "../store/userProgressContext";
import CartContenxt from "../store/cartContext";

export default function Checkout(){
     const userProgressCtx = useContext(UserPorgressContext);
      let cartCntx = useContext(CartContenxt);
     const cartTotalPrice = cartCntx.items.reduce((totalPrice,item)=>
        totalPrice + item.quantity * item.price,0)
     function handleClose(){
        userProgressCtx.hideCart();
     }    
     return(<Modal open={userProgressCtx.progress == 'checkout'}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount : {currencyFormatter.format(cartTotalPrice)}</p>
            <Input lable='Full Name' type='text' id='full-name'></Input>
            <Input label='Email Address' type='Email' id='email'></Input>
            <Input label='Street' type='text' id='street'></Input>
            <div className="control-row">
               <Input label='Postal Code' type='text' id='postal-code'></Input>
               <Input label='City' type='text' id='city'></Input>
            </div>
            <p className="modal-actions">
                <Button textOnly onClick={handleClose}>Close</Button>
                 <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>)
}