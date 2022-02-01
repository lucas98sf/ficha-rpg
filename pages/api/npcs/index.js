import Npc from "../../../models/npc";
import connectDB from "../../../db";

export const handleError = (err, res) => {
  console.log(err);
  if (err.name === "ValidationError") res.status(400).send(err.message);
  else if (err.code === 11000)
    res.status(400).send("Já existe um jogador com este nome");
  else res.status(500).send(err);
};

async function npcsHandler(req, res) {
  const {
    method
  } = req

  switch (method) {
    case 'GET':
      try {
        const npcs = await Npc.find();
        const result = npcs?.map((npc) => {
          const npc_ = new Npc(npc);
          return npc_.toObject({ virtuals: true });
        });
        res.status(200).json(result);
      } catch (err) {
        handleError(err, res);
      }
      break
    case 'POST':
      try {
        const npc = await Npc.create(req.body);
        res.status(201).json(npc);
      } catch (err) {
        handleError(err, res);
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default connectDB(npcsHandler);