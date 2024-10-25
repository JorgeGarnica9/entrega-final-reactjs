import "./App.css";
import NavBar from "./assets/components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./assets/components/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./assets/components/ItemDetailsContainer/ItemDetailsContainer";
import { CartProvider } from "./Context/CartContext";
import CartComponent from "./assets/components/CartComponent/CartComponent";
import CheckoutComponent from "./assets/components/CheckoutComponent/CheckoutComponent";
import Footer from "./assets/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailsContainer/>}/>
          <Route exact path="/cart" element={<CartComponent/>}/>
          <Route exact path="/checkout" element={<CheckoutComponent/>}/>
        </Routes>
        <Footer/>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
