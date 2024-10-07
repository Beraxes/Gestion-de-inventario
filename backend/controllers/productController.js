const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id });
    res.json(products);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  const { name, description, quantity, price, category } = req.body;

  if (!name || !description || !quantity || !price || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const product = new Product({
      name,
      description,
      quantity,
      price,
      category,
      user: req.user.id,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await Product.deleteOne({ _id: product._id }); // Use deleteOne instead of remove
    res.json({ message: 'Product removed' });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};


// Update a product
exports.updateProduct = async (req, res) => {
  const { name, description, quantity, price, category } = req.body;

  if (!name && !description && !quantity && !price && !category) {
    return res.status(400).json({ message: 'At least one field is required' });
  }

  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.quantity = quantity || product.quantity;
    product.price = price || product.price;
    product.category = category || product.category;

    await product.save();
    res.json(product);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};
