import connectDB from "../../../db";
import Npc from "../../../models/npc";
import { handleError } from ".";
import _ from "lodash";

async function npcHandler(req, res) {
    const {
        query: { name },
        method,
    } = req;
    const filter = { Nome: name };

    switch (method) {
        case "GET":
            try {
                const npc = await Npc.findOne(filter);
                npc
                    ? res.status(200).json(npc)
                    : res.status(404).send("Jogador não encontrado");
            } catch (err) {
                handleError(err, res);
            }
            break;
        case "PATCH":
            try {
                const npc = await Npc.findOne(filter);
                const changes = req.body;
                const $set =
                    changes.Itens?.length < npc.Itens.length ||
                    changes.Habilidades?.length < npc.Habilidades.length
                        ? changes
                        : _.merge(npc, changes);
                const update = await Npc.updateOne(filter, $set, {
                    new: true,
                    runValidators: true,
                });
                if (!update || !update?.matchedCount)
                    res.status(404).send("Jogador não encontrado");
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

export default connectDB(npcHandler);
