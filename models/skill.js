import mongoose, { Schema } from "mongoose";

const SkillSchema = new Schema({
    "Nome da Habilidade": { type: String, required: true },
    Descrição: { type: String, required: true },
});

const Skill =
    mongoose.models.Skill || mongoose.model("Skill", SkillSchema, "skills");

export default Skill;
