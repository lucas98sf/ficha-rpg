import mongoose, { Schema } from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);

const SkillSchema = new Schema({
    Nome: { type: String, required: true, trim: true, unique: true },
    Descrição: { type: String, required: true },
    Descrição_Aprimorada: { type: String },
    Custo: { type: Number },
    Custo_Aprimorado: { type: Number },
    Tipo: {
        type: String,
        enum: [
            "Dano",
            "Cura",
            "Utilidade",
            "CC",
            "Buff",
            "Passiva",
            "Movimento",
        ],
        required: true,
    },
});

if (!mongoose.models.Skill)
    SkillSchema.plugin(AutoIncrement, { inc_field: "skill_id" });

const Skill =
    mongoose.models.Skill || mongoose.model("Skill", SkillSchema, "skills");

export default Skill;
