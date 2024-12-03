const authMiddleware = (req, res, next) => {
    // Placeholder for authentication logic
    console.log('Auth middleware hit!');
    next();
  };
  
  module.exports = authMiddleware;
  