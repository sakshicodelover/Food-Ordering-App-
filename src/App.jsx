import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./Components/store/cartContext";
import {UserPorgressContextProvider}from "./Components/store/userProgressContext";
import Cart from "./Components/UI/Cart";
import Checkout from "./Components/UI/checkout";
//import Cart from "./Components/UI/Cart";
function App() {
return (
    <UserPorgressContextProvider>
    <CartContextProvider>
      <Header></Header>
      <Meals></Meals>
      <Cart></Cart>
      <Checkout></Checkout>
    </CartContextProvider>
    </UserPorgressContextProvider>
  );
}

export default App;
