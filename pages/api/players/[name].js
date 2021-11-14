import connectDB from "../../../db";
import Player from "../../../models/player";
import { handleError } from ".";
import _ from "lodash";

async function playerHandler(req, res) {
    const {
        query: { name },
        method
    } = req
    const filter = { Nome: name }

    switch (method) {
        case 'GET':
            try {
                const player = await Player.findOne(filter);
                res.status(200).json(player);
            } catch (err) {
                handleError(err, res);
            }
            break
        case 'PATCH':
            try {
                console.log(req.body)
                const player = await Player.findOne(filter);
                const update = await Player.updateOne(
                    filter,
                    { $set: _.merge(player, req.body) },
                    { new: true }
                );
                if (!update || !update?.matchedCount)
                    res.status(404).send("Jogador não encontrado");
                else if (!update?.modifiedCount)
                    res.status(202).send("Campo não modificado ou não encontrado");
                else res.status(200).json(update);
            } catch (err) {
                handleError(err, res);
            }
            break
        default:
            res.setHeader('Allow', ['GET', 'PATCH'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default connectDB(playerHandler);