import { createContext, useReducer } from "react";
const CartContenxt = createContext({
    items : [],
    addItem : (item)=> {},
    removeItem : (id)=> {}
});

export function cartReducer(state, action){
   if(action.type == 'ADD_ITEM'){
       let updatedItems = [...state.items]
      const existingItemIndx = state.items.findIndex((item)=> item.id === action.item.id);
      if(existingItemIndx > -1){ 
        const existingItem = state.items[existingItemIndx];
         let updatedItem = {
            ...existingItem,
            quantity : existingItem.quantity + 1
         }
         updatedItems[existingItemIndx] = updatedItem;
      }else{
         updatedItems.push({...action.item,quantity : 1});
      }
      return {...state,items : updatedItems}
   }
   if(action.type == 'REMOVE_ITEM'){
     const existingItemIndx = state.items.findIndex((item)=> item.id === action.id);
      const updatedItems = [...state.items];
     let existingCartItem = state.items[existingItemIndx];
     if(existingCartItem.quantity === 1){
        updatedItems.splice(existingItemIndx,1);
     }
     else{
        const updatedItem = {
            ...existingCartItem,
            quantity : existingCartItem.quantity-1
        }
        updatedItems[existingItemIndx] = updatedItem;
     }
     return{...state, items : updatedItems}
   }
}

export  function CartContextProvider({children}){
    const [cart , dispatchCartAction] = useReducer(cartReducer,{items : []});
   function addItem(item){
       dispatchCartAction({type : 'ADD_ITEM',item})
    }
    function removeItem(id){
        dispatchCartAction({type : 'REMOVE_ITEM', id})
    }
    const cartContenxt = {
        items : cart.items,
       addItem, 
       removeItem
    }

    console.log('check item', cartContenxt.items);
    
    return(
        <CartContenxt.Provider value={cartContenxt}>{children}</CartContenxt.Provider>
    )
}
export default CartContenxt;