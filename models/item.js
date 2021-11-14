import mongoose, { Schema } from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ItemSchema = new Schema({
    Nome: { type: String, required: true, trim: true, unique: true },
    Descrição: { type: String, required: true },
    Imagem: { type: String },
    Dano: { type: String },
    Defesa: { type: String },
    Efeito: { type: String },
});

if (!mongoose.models.Item)
    ItemSchema.plugin(AutoIncrement, { inc_field: "item_id" });

const Item =
    mongoose.models.Item || mongoose.model("Item", ItemSchema, "items");

export default Item;
