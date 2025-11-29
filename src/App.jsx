import { BrowserRouter, Route, Routes } from "react-router";
import "./assets/styles/App.css";
import Header from "./components/layout/Header";
import Hero from "./components/pages/Hero";
import Products from "./components/pages/Products";
import Categories from "./components/pages/Categories";
import Best from "./components/pages/Best";
import Explore from "./components/pages/Explore";
import Arrival from "./components/pages/Arrival";
import Services from "./components/pages/Services";
import Footer from "./components/layout/Footer";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import HeaderWithAccount from "./components/layout/HeaderWithAccount";
import Wishlist from "./components/pages/Wishlist";
import Cart from "./components/pages/Cart";
import CheckOut from "./components/pages/CheckOut";
import Account from "./components/pages/Account";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ProductDetails from "./components/pages/ProductDetails";
import HeaderWithContact from "./components/layout/HeaderWithContact";
import HeaderWithAbout from "./components/layout/HeaderWithAbout";
import NotFound from "./components/pages/NotFound";







function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<MainPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HeaderWithAccount" element={<HeaderWithAccount />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/About" element={<About />} />
        <Route path="/HeaderWithAbout" element={<HeaderWithAbout />} />
        <Route path="/HeaderWithContact" element={<HeaderWithContact />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
function MainPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Categories />
      <Best />
      <Explore />
      <Arrival />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
