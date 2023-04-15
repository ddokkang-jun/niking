import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Component/NavigationBar";
import Home from "./Pages/Home.js";
import Cart from "./Pages/Cart.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductAllData } from "./Store/productSlice";
import ProductAll from './Pages/ProductAll';
import ProductsDetails from './Pages/ProductsDetails';

function App() {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.product.productAllData);

  // json-server --watch db.json --port 5000
  useEffect(() => {
    const getData = async () => {
      let url = "http://localhost:5000/products";
      let response = await fetch(url);
      let data = await response.json();
      // console.log(data);
      dispatch(setProductAllData(data));
    };
    getData();
  }, []);

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/productAll/:firstValue' element={<ProductAll data={data} />} />    
        <Route path='/productAll/:firstValue/:secondValue' element={<ProductAll data={data} />} />
        <Route path='/productsdetails/' element={<ProductsDetails data={data} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<div>404없는페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;

// npm install react-bootstrap bootstrap
// npm install react-router-dom@6
// npm install @reduxjs/toolkit react-redux