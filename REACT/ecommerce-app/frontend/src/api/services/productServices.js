import { http } from "../../common/http";

export const getProducts = async () => {
  const res = await http.get("/api/products");
  return res.data;
};

export const addProduct = (product) => http.post("/api/products", product);
export const updateProduct = (productId,product) => http.put(`/api/products/${productId}`, product);

export const searchProducts = async (name) => {
  const res = await http.get(`/api/search`, { params: { name } });
  return res.data;
};

export const filterProducts = async (categories) => {
  const res = await http.get(`/api/search`, { params: { categories } });
  return res.data;
};
