import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
// import women_banner from "./Components/Assets/banner_women.png";
// import men_banner from "./Components/Assets/banner_mens.png";
// import kid_banner from "./Components/Assets/banner_kids.png";
import LoginSignup from "./Pages/LoginSignup";
import Contact from './contact';
import About from './about';


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mens" element={<ShopCategory  category="men" />} />
          <Route path="/womens" element={<ShopCategory  category="women" />} />
          <Route path="/kids" element={<ShopCategory  category="kid" />} />
          <Route path="/accessoires" element={<ShopCategory  category="accessoire" />} />
          <Route path="/decoration" element={<ShopCategory  category="decoration" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
