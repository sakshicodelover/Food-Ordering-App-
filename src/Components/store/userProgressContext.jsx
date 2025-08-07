import { createContext, useReducer, useState } from "react";
const UserPorgressContext = createContext({
    progress : '', // cart , checkout
    showCart : ()=>{},
    hideCart : ()=>{},
    showCheckout : ()=>{},
    hideCheckout : ()=>{}
})

export function UserPorgressContextProvider({children}){
     const [userProgress , setUserProgress] = useState('');
     function showCart(){
        setUserProgress('cart');
     }
     function hideCart(){
          console.log('check console hide cart');
         setUserProgress('');
     }
     function showCheckout(){
        setUserProgress('checkout');
     }
     function hideCheckout(){
        setUserProgress('');
     }
     const userProgressCtx = {
        progress : userProgress,
        showCart,
        showCheckout,
        hideCart,
        hideCheckout
     }
     console.log('check progress state', userProgressCtx.progress);
    return(<UserPorgressContext.Provider value={userProgressCtx}>{children}</UserPorgressContext.Provider>)

} 

export default UserPorgressContext;