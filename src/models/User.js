import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: { type: [String], required: true, default: [] },
});

export default models.User || model('User', UserSchema);
