import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getProducts } from "./apis/productSlice"

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
