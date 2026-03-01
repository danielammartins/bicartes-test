import React from "react";
import noiteBandas from "../assets/noite_bandas.png"

const Programacao: React.FC = () => {
    return (
        <div id="programacao">
            <h2 className="py-8 font-bold">
                Programação
            </h2>
            <div className="mx-24 mt-12 flex flex-row flex-wrap justify-evenly gap-12">
                <img src={noiteBandas} className="w-128"></img>
                <img src={noiteBandas} className="w-128"></img>
            </div>
        </div>
    );
};

export default Programacao;