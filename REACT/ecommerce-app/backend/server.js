const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Amr kora change

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));//amr kora change

// In-memory array to store products
let products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    quantity:10,
    price: 1500,
    image: 'gaming_laptop.webp',
    categories: ['Laptops', 'Gaming'],
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    quantity:10,
    price: 50,
    image: 'wireless_mouse.jpg',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    quantity:10,
    price: 100,
    image: 'mechanical_keyboard.jpg',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 4,
    name: 'External Hard Drive',
    quantity:10,
    price: 120,
    image: 'externa_harddrive.jpg',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 5,
    name: 'Graphics Card',
    quantity:10,
    price: 500,
    image: 'graphics_card.webp',
    categories: ['Components', 'Gaming'],
  },
  {
    id: 6,
    name: 'Portable SSD',
    quantity:10,
    price: 200,
    image: 'portable_ssd.jpg',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 7,
    name: 'Gaming Monitor',
    quantity:10,
    price: 300,
    image: 'gaming_monitor.jpg',
    categories: ['Monitors', 'Gaming'],
  },
  {
    id: 8,
    name: 'All-in-One Printer',
    quantity:10,
    price: 150,
    image: 'allinone_printer.jpg',
    categories: ['Peripherals', 'Printers'],
  },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get a product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// Create a new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    vendor: req.body.vendor,
    category: req.body.category,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update an existing product
app.put('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  product.name = req.body.name || product.name;
  product.quantity = req.body.quantity || product.quantity;
  product.price = req.body.price || product.price;
  product.vendor = req.body.vendor || product.vendor;
  product.category = req.body.category || product.category;

  res.json(product);
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );
  if (productIndex === -1)
    return res.status(404).json({ message: 'Product not found' });

  const deletedProduct = products.splice(productIndex, 1);
  res.json(deletedProduct);
});

// Search products by name
app.get('/api/search', (req, res) => {
  const { name, categories } = req.query;
  let results = products;

  if (name) {
    results = results.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (categories) {
    results = results.filter((product) =>
      product.categories.some((cat) => cat.toLowerCase().includes(categories.toLowerCase()))
    );
  }

  res.json(results);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
