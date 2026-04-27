const validateRegistration = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields. Please provide name, email, and password."
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format."
    });
  }

  if (password.length < 9) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 9 characters long."
    });
  }
  next();
};

module.exports = { validateRegistration };