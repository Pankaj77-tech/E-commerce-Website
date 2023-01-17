import { Route, Routes, useNavigate, createSearchParams } from "react-router-dom"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"
import { Product } from "./pages/product"
import { Products } from "./pages/products"
import { Navbar } from "./Components/Navbar"



function App() {
  const navigate = useNavigate()
  // const onSearch = (searchQuery) => {
  //   navigate(`/?${createSearchParams({ q: searchQuery })}`)
  // }
  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }
  // const cartItemCount = 5
  return (
    <>
      <Navbar onSearch={onSearch} cartItemCount={5} />
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
