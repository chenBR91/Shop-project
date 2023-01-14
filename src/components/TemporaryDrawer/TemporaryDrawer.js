import React, { useContext } from "react";
import '.././Product/product.css';

import Drawer from "@mui/material/Drawer";
import DrawerContext from "../../DrawerContext";
import ProductsContext from "../../ProductsContext";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AddCart from "../Carts/AddCart";




function TemporaryDrawer() {
  const { cartOpen, onClose } = useContext(DrawerContext);
  const { listProductInCart } = useContext(ProductsContext);

  const MediaCard = (product) => {
    return (
      <Card sx={{ width: 300 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <div className="product-image">
            <img src={product.image} alt={product.image} />
        </div>
        <p>Price: {product.price} $ </p>
        <p>Quantity: {product.amount}</p>
        <AddCart situation={"decrement"} id={product.id} style={{bgColor: 'rgb(190, 000, 107)', width: '45%'}}>Delete</AddCart>

      </Card>
    );
  };

  const productsInCart = () => {
    return listProductInCart.map((productInCart, index) => (
      <div key={index} style={{ border: "1px solid red" }}>
        {MediaCard(productInCart)}
      </div>
    ));
  };

  return (
    <div>
      <Drawer variant="temporary" open={cartOpen} anchor={"right"}>
        <div>
          <button onClick={onClose}>Close</button>
          {productsInCart()}
        </div>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
