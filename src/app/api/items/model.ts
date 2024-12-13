import { Schema, model, models } from 'mongoose';

const ItemSchema = new Schema({
  menuId: { type: Schema.Types.ObjectId, ref: 'Menu', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Item = models.Item || model('Item', ItemSchema);