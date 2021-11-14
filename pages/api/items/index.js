import Item from "../../../models/item";
import connectDB from "../../../db";

export const handleError = (err, res) => {
    console.log(err);
    if (err.name === "ValidationError") res.status(400).send(err.message);
    else if (err.code === 11000)
        res.status(400).send("Já existe um item com este nome");
    else res.status(500).send(err);
};

async function itemsHandler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const items = await Item.find();
                const result = items?.map((item) => {
                    const item_ = new Item(item);
                    return item_.toObject({ virtuals: true });
                });
                res.status(200).json(result);
            } catch (err) {
                handleError(err, res);
            }
            break;
        case "POST":
            try {
                const item = await Item.create(req.body);
                res.status(201).json(item);
            } catch (err) {
                handleError(err, res);
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

export default connectDB(itemsHandler);
