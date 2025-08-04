import { useContext } from "react";
import { currencyFormatter } from "../util/formatter";
import Button from "./UI/button";
import CartContenxt from "./store/cartContext";
export default function MealItem({meal}){
     const cartCntx = useContext(CartContenxt);
    function handleAddToCart(){
        console.log('on handle add cart', meal);
        cartCntx.addItem(meal);
    }
    return(
        <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
            <div>
                 <h3>{meal.name}</h3>
                 <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                 <p className="meal-item-description">{meal.description}</p> 
                 <p className="meal-item-actions">
                    <Button onClick={handleAddToCart}>Add to Cart</Button>
                 </p>
            </div>
        </article>
        </li>
    )
}