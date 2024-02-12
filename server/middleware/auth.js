// server/middleware/auth.js

import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log('Authorization token:', token);
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required' });
  }

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: err });
    }
    req.user = decoded; // Decodes the token and adds it to the request object for later use
    next(); // Move to the next middleware or route
  });
};
