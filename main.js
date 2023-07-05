const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/products', (req, res) => {
  const { query } = req;

  let filteredProducts = data;
  if (query.stock) {
    const isStock = query.stock === 'true';
    filteredProducts = filteredProducts.filter(
      (product) => product.productStock === isStock
    );
  }

  if (query.minPrice && query.maxPrice) {
    const minPrice = parseFloat(query.minPrice);
    const maxPrice = parseFloat(query.maxPrice);
    filteredProducts = filteredProducts.filter((product) => {
      const price = parseFloat(product.productPrice);
      return price >= minPrice && price <= maxPrice;
    });
  }

  res.json(filteredProducts);
});

app.get('/products/search', (req, res) => {
  const { query } = req;
  const productName = query.productName.toLowerCase();
  const matchingProducts = data.filter((product) =>
    product.productName.toLowerCase().includes(productName)
  );

  res.json(matchingProducts);
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = data.find((product) => product.productId === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
