import { useContext } from 'react';
import Logo from '../assets/logo.jpg';
import CartContenxt from './store/cartContext';
import Button from './UI/button';
export default function Header() {
     const cartCntx = useContext(CartContenxt);
     let totalCartItems = cartCntx.items.reduce((totalNumberOfItems,item)=>{
        return totalNumberOfItems + item.quantity
     },0)
    return (
        <header id="main-header">
            <div id="title">
                <img src={Logo} alt='A resturant'></img>
                <h1></h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}