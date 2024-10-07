const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register a new user
exports.register = async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    let user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) return res.status(400).json({ message: 'User already exists with that email or username' });

    user = new User({ name, username, email, password });
    await user.save();

    const token = generateToken(user._id);
    const userData = {
      name: user.name,
      username: user.username,
      token
    };
    
    res.status(201).json(userData);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};



// Login user (with either email or username)
exports.login = async (req, res) => {
  const { emailOrUsername, password } = req.body;

  try {
    // Allow login with either email or username
    const user = await User.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Prepare the response data
    const userData = {
      name: user.name, // Assuming User model has a 'name' field
      username: user.username,
      token: generateToken(user._id)
    };

    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
