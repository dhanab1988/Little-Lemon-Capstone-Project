import React from "react";
import Nav from "./components/Nav";
import Main from "./Main";
import Footer from "./components/Footer";
import "./App.css";
import "./TestimonialsSection.js";
<<<<<<< HEAD

import { CartProvider } from "./context/CartContext.js";


=======
>>>>>>> 3db03a05d377ec2e74dfc3a79ac79a6915178bb5
function App() {
  return (
    <CartProvider>
         <Nav />
         <Main />
        <Footer />
    </CartProvider>
  );
}

export default App;
