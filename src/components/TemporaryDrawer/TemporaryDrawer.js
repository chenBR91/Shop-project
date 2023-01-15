import React, { useContext } from "react";
import ".././Product/product.css";

import Drawer from "@mui/material/Drawer";
import DrawerContext from "../../DrawerContext";
import ProductsContext from "../../ProductsContext";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
// import AddCart from "../Carts/AddCart";

import { Button } from "@mui/material";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

function TemporaryDrawer() {
  const { cartOpen, onClose } = useContext(DrawerContext);
  const { listProductInCart } = useContext(ProductsContext);

  const calculatePricePerProduct = (price, amount) => {
    return price * amount;
  };

  const MediaCard = (product) => {
    return (
      <Card sx={{ width: 300 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <div className="product-image">
          <img src={product.image} alt={product.image} />
        </div>
        <div className="info-price">
          <span>Quantity: {product.amount}</span>
          <span>
            Price: ${calculatePricePerProduct(product.price, product.amount)}
          </span>
        </div>
        <div className="btn-delete">
          <Button variant="outlined" startIcon={<AiOutlineDelete />}>
            Delete
          </Button>
        </div>
        {/* <AddCart situation={"decrement"} id={product.id} style={{bgColor: 'rgb(190, 000, 107)', width: '45%'}}>Delete</AddCart> */}
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
          <Button onClick={onClose} size="medium" endIcon={<IoMdClose />}>Close</Button>
          {productsInCart()}
          <div className="buy">
            <Button
              className="btn-buy"
              variant="contained"
              endIcon={<MdOutlinePayment />}
            >
              Buy now
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
// MdOutlinePayment
