import Skill from "../../../models/skill";
import connectDB from "../../../db";

export const handleError = (err, res) => {
    console.log(err);
    if (err.name === "ValidationError") res.status(400).send(err.message);
    else if (err.code === 11000)
        res.status(400).send("Já existe uma habilidade com este nome");
    else res.status(500).send(err);
};

async function skillsHandler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const skills = await Skill.find();
                const result = skills?.map((skill) => {
                    const skill_ = new Skill(skill);
                    return skill_.toObject({ virtuals: true });
                });
                res.status(200).json(result);
            } catch (err) {
                handleError(err, res);
            }
            break;
        case "POST":
            try {
                const skill = await Skill.create(req.body);
                res.status(201).json(skill);
            } catch (err) {
                handleError(err, res);
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

export default connectDB(skillsHandler);
