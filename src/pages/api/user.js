import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
          return res.status(401).json({ success: false, message: 'Not authenticated' });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decodedToken);
        const user = await User.findById(decodedToken.id);
        if (!user) {
          console.log("User not found:", decodedToken.id);
          return res.status(404).json({ success: false, message: 'User not found' });
        }
        console.log("User found:", user);
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
