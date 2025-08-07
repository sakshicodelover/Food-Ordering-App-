import { useContext } from 'react';
import Logo from '../assets/logo.jpg';
import CartContenxt from './store/cartContext';
import Button from './UI/button';
import UserPorgressContext from './store/userProgressContext';
export default function Header() {
     const cartCntx = useContext(CartContenxt);
     const userProgressCntx = useContext(UserPorgressContext);
     let totalCartItems = cartCntx.items.reduce((totalNumberOfItems,item)=>{
        return totalNumberOfItems + item.quantity
     },0)
     function handleShowCart(){
      userProgressCntx.showCart();  
     }
    return (
        <header id="main-header">
            <div id="title">
                <img src={Logo} alt='A resturant'></img>
                <h1></h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}