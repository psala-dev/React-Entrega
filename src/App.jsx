import { ItemDetailContainer } from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {  
  return (
    <>
      <div>
        <CartProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/productos" element={<ItemListContainer/>} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path="/productos/:categoria" element={<ItemListContainer/>} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutForm />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>       
      </div>
    </>
  );
}

export default App;
