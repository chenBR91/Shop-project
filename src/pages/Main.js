import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import TemporaryDrawer from "../components/TemporaryDrawer/TemporaryDrawer";
import About from "./About/About";
import QueryUrl from "./Further/QueryUrl";
import Home from "./Home/Home";
import ProductDetail from "./ProductDetail/ProductDetail";
import DrawerContext from ".././DrawerContext";

function Main() {
  const [cartOpen, setCartOpen] = useState(false);

  const onClose = () => {
    setCartOpen(!cartOpen);
  };

  const drawerValue = {
    cartOpen,
    setCartOpen,
    onClose,
  };

  return (
    <div>
      <DrawerContext.Provider value={drawerValue}>
        <TemporaryDrawer />
        <Nav />
      </DrawerContext.Provider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/query" element={<QueryUrl />} />
      </Routes>
    </div>
  );
}

export default Main;
