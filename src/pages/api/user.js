import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const token = req.cookies.accessToken;
      if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }

      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return res.status(403).json({ message: 'Invalid token' });
        }

        return res.status(200).json({ user });
      });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' }); 
  }
}
