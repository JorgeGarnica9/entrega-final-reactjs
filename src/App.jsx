import "./App.css";
import NavBar from "./assets/components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./assets/components/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./assets/components/ItemDetailsContainer/ItemDetailsContainer";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailsContainer/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
