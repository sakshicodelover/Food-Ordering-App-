import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./Components/store/cartContext";
function App() {
return (
    <CartContextProvider>
      <Header></Header>
      <Meals></Meals>
    </CartContextProvider>
  );
}

export default App;
