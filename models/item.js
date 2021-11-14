import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
    type: [
        {
            ID: { type: [Schema.Types.ObjectId], required: true },
            Quantidade: { type: [Number], default: 1, min: 1, required: true },
            Imagem: { type: {String}},
        },
    ],
    default: [],
});

const Item =
    mongoose.models.Item || mongoose.model("Item", ItemSchema, "Items");

export default Item;
