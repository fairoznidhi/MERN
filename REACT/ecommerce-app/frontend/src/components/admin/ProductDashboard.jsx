import { Box, Button, Drawer, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useProducts, useProductSearch } from "../../api/hooks";
import { ProductForm } from "./ProductForm";
import { SearchContext } from "../../contexts";

const productPlaceholder = {
  id: "",
  name: "",
  price: 0,
  quantity: 0,
  image: "",
  categories: [],
};

export const ProductDashboard = () => {
  const { isLoading, products, addOrUpdateProduct, refreshProducts } =
    useProducts();
  const [openForm, setOpenForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(productPlaceholder);
  const { searchValue } = useContext(SearchContext);
  const { results = [] } = useProductSearch(searchValue);
  const getFormattedRows = () =>
    results.length > 0
      ? results.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          categories: product.categories,
          quantity: product.quantity,
          data: product,
        }))
      : products.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          categories: product.categories,
          quantity: product.quantity,
          data: product,
        }));
  const onCloseForm = () => setOpenForm(false);
  const onAddProduct = (product) => {
    if (product.price < 10) {
      alert("Price can not be less than 10$.");
      return;
    }
    addOrUpdateProduct(product).then(() => {
      onCloseForm();
      refreshProducts();
    });
  };
  return (
    <Box sx={{ minHeight: 400, width: "100%", py: 2 }}>
      <Box sx={{ pb: 2 }}>
        <Button variant="contained" onClick={() => setOpenForm(true)}>
          {" "}
          Add Product{" "}
        </Button>
      </Box>
      <DataGrid
        columns={[
          {
            field: "id",
            headerName: "ID",
            width: 90,
          },
          {
            field: "name",
            headerName: "Product Name",
            flex: 1,
            minWidth: 150,
          },
          {
            field: "quantity",
            headerAlign: "center",
            align: "center",
            headerName: "Quantity",
            minWidth: 150,
          },
          {
            field: "price",
            headerAlign: "right",
            headerName: "Price ($)",
            align: "right",
            width: 150,
            renderCell: ({ row }) => (
              <Typography
                variant="body1"
                style={{
                  display: "flex",
                  justifyContent: "flex-end", // align content to the right
                  alignItems: "center", // vertically center content
                  height: "100%", // ensure full height of the cell
                }}
              >
                <Box>{`$${row.price}`}</Box>
              </Typography>
            ),
          },
          {
            field: "vendor",
            headerAlign: "center",
            align: "center",
            headerName: "Quantity",
            minWidth: 150,
          },
          {
            field: "categories",
            headerAlign: "center",
            headerName: "Categories",
            minWidth: 250,
            // renderCell: ({row})=>{
            //     return <Box sx={{maxWidth:250, display: 'flex', gap:0.5, alignItems: 'center'}}>{
            //         row.categories.map(category=> (<Chip key={category} label={category} variant='outlined'/>))
            //         }</Box>

            // },
          },
          {
            field: "actions",
            renderCell: ({ row }) => (
              <Box>
                <Button
                  onClick={() => {
                    setSelectedProduct(row.data);
                    setOpenForm(true);
                  }}
                >
                  Edit
                </Button>
              </Box>
            ),
          },
        ]}
        loading={isLoading}
        rows={getFormattedRows()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
      <Drawer anchor="right" open={openForm} onClose={onCloseForm}>
        <Box sx={{ width: 600, px: 2, py: 2 }}>
          <ProductForm
            productPlaceholder={selectedProduct}
            onSubmit={onAddProduct}
            onClose={onCloseForm}
          />
        </Box>
      </Drawer>
    </Box>
  );
};
