import mongoose, { Schema } from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);

const SkillSchema = new Schema({
    Nome: { type: String, required: true, trim: true, unique: true },
    Descrição: { type: String, required: true },
    Descrição_Aprimorada: { type: String },
    Custo: { type: String },
    Custo_Aprimorado: { type: String },
    Tipo: {
        type: String,
        enum: [
            "Dano", // vermelho
            "Cura", // verde
            "Utilidade", // azul
            "CC", // #874400
            "Buff", // rosa
            "Passiva", // cinza
            "Movimento", // amarelo
            "Reação", // roxo
        ],
        required: true,
    },
});

if (!mongoose.models.Skill)
    SkillSchema.plugin(AutoIncrement, { inc_field: "skill_id" });

const Skill =
    mongoose.models.Skill || mongoose.model("Skill", SkillSchema, "skills");

export default Skill;
