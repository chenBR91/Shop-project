import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AiOutlineSearch } from "react-icons/ai";
import InputAdornment from '@mui/material/InputAdornment';

function SearchProduct() {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: 'flex', alignItems: 'flex-end'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Search..." variant="standard" />
    </Box>
  );
}

export default SearchProduct;


// sx={{ display: 'flex', alignItems: 'flex-end' }}