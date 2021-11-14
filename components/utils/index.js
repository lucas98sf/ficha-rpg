import axios from "axios";

const getValueById = (id) => {
    return document.getElementById(id).value;
};

const getTextById = (id) => {
    return document.getElementById(id).innerText;
};

async function updatePlayer(nomePlayer, classePericia, pericia, valor) {
    try {
        const changes = {
            Perícias: {
                [classePericia]: {
                    [pericia]: valor,
                },
            },
        };

        await axios.patch(
            `http://localhost:3000/api/players/${nomePlayer}`,
            changes
        );
        return;
    } catch (error) {
        console.log(error);
    }
}

export { getValueById, getTextById, updatePlayer };
