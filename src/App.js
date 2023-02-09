
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div className="App">
       {/*<Home/>*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/create" element={<AddProduct />}/>
            <Route path="/edit" element={<EditProduct />}/>


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
