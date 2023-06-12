import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const authHeader = req.headers['authorization'];

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.status(200).json(decoded);
    } catch (err) {
      res.status(401).json({ error: 'Token is not valid', message: err.message });
    }
  } else {
    res.status(401).json({ error: 'Authorization header must be provided' });
  }
};
