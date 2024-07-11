import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const ProductForm = ({ productPlaceholder, onSubmit, onClose }) => {
  const [product, setProduct] = useState(productPlaceholder);
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [fieldName]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Stack spacing={2}>
          <Typography variant="h5">Product Form</Typography>
          <Stack spacing={6}>
            <TextField
              required
              name="name"
              label="Product Name"
              variant="outlined"
              value={product.name}
              onChange={handleChange}
            />
            <TextField
              required
              name="price"
              type="number"
              label="Price"
              variant="outlined"
              value={product.price}
              onChange={handleChange}
            />
            <TextField
              required
              name="quantity"
              type="number"
              label="Quantity"
              variant="outlined"
              value={product.quantity}
              onChange={handleChange}
            />
            <TextField
              name="image"
              type="url"
              label="Image URL"
              variant="outlined"
              onChange={handleChange}
            />
            <Box display="flex" gap={2} justifyContent="flex-end">
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </form>
  );
};
