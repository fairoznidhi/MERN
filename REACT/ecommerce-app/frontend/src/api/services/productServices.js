import { http } from "../../common/http";

export const getProducts = async () => {
  const res = await http.get("/api/products");
  return res.data;
};

export const addProduct = (product) => http.post("/api/products", product);
export const updateProduct = (productId,product) => http.put(`/api/products/${productId}`, product);
