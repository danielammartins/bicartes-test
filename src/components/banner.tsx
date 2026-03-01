import React from "react";
import banner from "../assets/banner.png"

const Banner: React.FC = () => {
    return (
        <div className="mt-24">
            <img src={banner} className=""/>
        </div>
    );
};

export default Banner;