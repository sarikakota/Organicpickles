import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Nav';
import MyNavbar from './components/Navbar'; // Import your Navbar
import Login from './components/Login'; // Import Login component
import Signup from './components/Signup'; // Import Signup component
import ForgotPassword from './components/ForgotPassword';
import Home from './pages/Home';
import Cart from './components/Cart';
import Immunobooster from './pages/Immunobooster';
import ShopNow from './pages/ShopNow';
import AboutUs from './pages/AboutUs';
import KidsFriendlyPage from './pages/KidsFriendly'; // Renamed to avoid conflict
import MangoPickles from './pages/MangoPickles';
import PapadBandi from './pages/PapadBandi';
import Footer from './components/Footer';
import FooterComponent from './components/Copyrightfooter';


const App = () => {
  return (

    
    <Router>
      <MyNavbar />
      <NavigationBar />
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop-now" element={<ShopNow />} />
        <Route path="/pickles/mango" element={<MangoPickles />} />
        <Route path="/pickles/papad-bandi" element={<PapadBandi />} />
        <Route path="/pickles/kids-friendly" element={<KidsFriendlyPage />} /> {/* Use renamed component */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/immunobooster" element={<Immunobooster/>}/>
        
      </Routes>
      
     <Footer/>
     <FooterComponent/>
    </Router>
    
    
  );
};

export default App;
