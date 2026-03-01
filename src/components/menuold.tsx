import React from "react";
import logo from "../assets/logo.png"

const Menuold: React.FC = () => {
    return (
        <nav className="flex flex-row justify-between py-4 px-4 bg-red-100" >
            <img src={logo} className="w-16"></img>
            <div className="flex flex-row items-center pr-8 gap-12 [&>*]:cursor-pointer [&>*]:bg-transparent">
                <button><a href="#bicartes">Bicartes</a></button>
                <button><a href="#programação">Programação</a></button>
                <button><a href="#fazparte">Faz Parte</a></button>
            </div>
        </nav>
    );
};

export default Menuold;