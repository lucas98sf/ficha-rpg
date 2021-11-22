import mongoose, { Schema } from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);

const EffectSchema = new Schema({
    Nome: { type: String, required: true, trim: true, unique: true },
    Descrição: { type: String, required: true },
    
})



if (!mongoose.models.effect)
    effectSchema.plugin(AutoIncrement, { inc_field: "effect_id" });

const effect =
    mongoose.models.effect || mongoose.model("effect", effectSchema, "effects");