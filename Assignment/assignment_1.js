const express = require('express');
const app = express();
const PORT = 2000;

app.use(express.json());

let products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, quantity: 10 },
  { id: 2, name: 'Headphones', category: 'Electronics', price: 149.99, quantity: 25 },
  { id: 3, name: 'Running Shoes', category: 'Footwear', price: 89.99, quantity: 15 }
];

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/products/category/:category', (req, res) => {
  const { category } = req.params;
  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return res.status(404).json({ message: `No products found in category '${category}'` });
  }

  res.status(200).json(filteredProducts);
});


app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: `Product with ID ${productId} not found` });
  }

  res.status(200).json(product);
});

app.post('/products', (req, res) => {
  const { name, category, price, quantity } = req.body;

  if (!name || !category || price == null || quantity == null) {
    return res.status(400).json({ message: 'All fields (name, category, price, quantity) are required' });
  }

  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
    name,
    category,
    price: Number(price),
    quantity: Number(quantity)
  };

  products.push(newProduct);
  res.status(201).json({ message: 'Product added successfully', product: newProduct });
});

app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: `Product with ID ${productId} not found` });
  }

  const { name, category, price, quantity } = req.body;

  products[productIndex] = {
    ...products[productIndex],
    ...(name && { name }),
    ...(category && { category }),
    ...(price != null && { price: Number(price) }),
    ...(quantity != null && { quantity: Number(quantity) })
  };

  res.status(200).json({
    message: 'Product updated successfully',
    product: products[productIndex]
  });
});

app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: `Product with ID ${productId} not found` });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];
  res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
});

// Start Server
app.listen(2000, () => {
  console.log(`Server running on http://localhost:2000`);
});