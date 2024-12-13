import { Schema, model, models } from 'mongoose';

const MenuSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export const Menu = models.Menu || model('Menu', MenuSchema);