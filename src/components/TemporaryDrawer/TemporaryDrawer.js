import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import DrawerContext from "../../DrawerContext";

function TemporaryDrawer() {
  const { cartOpen, onClose } = useContext(DrawerContext);

  return (
    <div>
      <Drawer variant="temporary" open={cartOpen} anchor={"right"}>
        <div style={{ width: "350px" }}>
        <button onClick={onClose}>
          Close 
        </button>
        </div>
        
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
