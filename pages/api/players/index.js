import Player from "../../../models/player";
import connectDB from "../../../db";

export const handleError = (err, res) => {
  console.log(err);
  if (err.name === "ValidationError") res.status(400).send(err.message);
  else if (err.code === 11000)
    res.status(400).send("Já existe um jogador com este nome");
  else res.status(500).send(err);
};

async function playersHandler(req, res) {
  const {
    method
  } = req

  switch (method) {
    case 'GET':
      try {
        const players = await Player.find();
        const result = players.map((player) => {
          const player_ = new Player(player);
          return player_.toObject({ virtuals: true });
        });
        res.status(200).json(result);
      } catch (err) {
        handleError(err, res);
      }
      break
    case 'POST':
      try {
        const player = await Player.create(req.body);
        res.status(201).json(player);
      } catch (err) {
        handleError(err, res);
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default connectDB(playersHandler);