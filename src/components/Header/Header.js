import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Menu, MenuItem } from '@mui/material';
import { HiOutlineShoppingCart } from "react-icons/hi";
import Badge from '@mui/material/Badge';
import ProductsContext from '../../ProductsContext';
import DrawerContext from '../../DrawerContext';


function Header() {

  const { counterItemInCart } = useContext(ProductsContext)
  const { onClose } = useContext( DrawerContext )

  // const UserMenu = () => {
  //   const [auth, setAuth] = React.useState(true);
  //   const [anchorEl, setAnchorEl] = React.useState(null);

  //   const handleChange = (event) => {
  //     setAuth(event.target.checked);
  //   };

  //   const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   };

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  //   return(
  //     <Menu
  //       id="menu-appbar"
  //       anchorEl={anchorEl}
  //       anchorOrigin={{
  //         vertical: 'top',
  //         horizontal: 'right',
  //       }}
  //       keepMounted
  //       transformOrigin={{
  //         vertical: 'top',
  //         horizontal: 'right',
  //       }}
  //       open={Boolean(anchorEl)}
  //       onClose={handleClose}
  //     >
  //       <MenuItem onClick={handleClose}>Profile</MenuItem>
  //       <MenuItem onClick={handleClose}>My account</MenuItem>
  //     </Menu>
  //   )
  // }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Virtual Shop
            <Link to="/" className='menu-link' style={{ marginLeft: '10px' }}>Products</Link>
            <Link to="/about" className='menu-link'>About</Link>
            <Link to="/query" className='menu-link'>Query</Link>
          </Typography>

          <p>
            <Badge badgeContent={counterItemInCart} color="success" sx={{padding: '5px'}}>
              <HiOutlineShoppingCart/>
            </Badge>
          </p>
          <Button color="inherit" onClick={onClose}>Cart</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header