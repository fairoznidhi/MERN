import { Badge, Box, Drawer, IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ShoppingCartIcon } from '../../common/icons'
import { CartContext } from '../../contexts'
import { CartItemList } from './CartItemList'

export const Cart = () => {
  const {cart}=useContext(CartContext);
  const [openCart,setOpenCart]=useState(false);
  return (
    <>
    <IconButton size="large" color="inherit" onClick={()=>{setOpenCart(true)}}>
      <Badge badgeContent={cart.reduce((acc,item)=>acc+item.quantity,0)} color="error">
        < ShoppingCartIcon />
      </Badge>
    </IconButton>
    <Drawer anchor='right' open={openCart} onClose={()=>{setOpenCart(false)}}>
      <Box sx={{display:'flex', width:400, mt:'80px', }}>
        <CartItemList/>
      </Box>
    </Drawer>
    </>
  )
}
