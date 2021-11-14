import connectDB from "../../../db";
import Skill from "../../../models/skill";
import { handleError } from ".";

async function skillHandler(req, res) {
    const {
        query: { id },
        method,
    } = req;
    const filter = { skill_id: Number(id) };

    switch (method) {
        case "GET":
            try {
                const skill = await Skill.findOne(filter);
                skill
                    ? res.status(200).json(skill)
                    : res.status(404).send("Habilidade não encontrada");
            } catch (err) {
                handleError(err, res);
            }
            break;
        case "PATCH":
            try {
                const update = await Skill.updateOne(
                    filter,
                    { $set: { ...req.body } },
                    { new: true, runValidators: true }
                );
                if (!update || !update?.matchedCount)
                    res.status(404).send("Habilidade não encontrada");
                else if (!update?.modifiedCount)
                    res.status(202).send(
                        "Campo não modificado ou não encontrado"
                    );
                else res.status(200).json(update);
            } catch (err) {
                handleError(err, res);
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "PATCH"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

export default connectDB(skillHandler);
