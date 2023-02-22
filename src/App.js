import { Route, Routes, useNavigate, createSearchParams } from "react-router-dom"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"
import { Product } from "./pages/product"
import { Products } from "./pages/products"
import { Navbar } from "./Components/Navbar"
import { useCart } from "./Components/context/cart"




function App() {
  const navigate = useNavigate()
  const { cartItemCount } = useCart()
  const onSearch = (searchQuery) => {
    console.log("in search")
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }
  // const cartItemCount = 5
  return (
    <>
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
