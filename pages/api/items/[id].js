import connectDB from "../../../db";
import Item from "../../../models/item";
import { handleError } from ".";

async function itemHandler(req, res) {
    const {
        query: { id },
        method,
    } = req;
    const filter = { item_id: Number(id) };

    switch (method) {
        case "GET":
            try {
                const item = await Item.findOne(filter);
                item
                    ? res.status(200).json(item)
                    : res.status(404).send("Item não encontrado");
            } catch (err) {
                handleError(err, res);
            }
            break;
        case "PATCH":
            try {
                const update = await Item.updateOne(
                    filter,
                    { $set: { ...req.body } },
                    { new: true, runValidators: true }
                );
                console.log(update);
                if (!update || !update?.matchedCount)
                    res.status(404).send("Item não encontrado");
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

export default connectDB(itemHandler);
