export default function Stats({ Nome, Imagem, Raça, Status }) {
    return (
        <div className="centro">
            <div className="playerNameFicha">{Nome}</div>
            <img className="playerImgFicha" src={Imagem}></img>
            {/* <div className="playerRaceFicha">{Raça}</div> */}
            <div className="playerHealthFicha">
                PV:{Status["Vida Atual"]}/{Status["Vida Máxima"]}
            </div>
            <div className="playerSanityFicha">
                PS:{Status["Sanidade Atual"]}/{Status["Sanidade Máxima"]}
            </div>
            <div className="playerMagicFicha">
                PM:{Status["Magia Atual"]}/{Status["Magia Máxima"]}
            </div>
        </div>
    );
}
