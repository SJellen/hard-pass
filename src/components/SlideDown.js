import React, { useContext } from "react";
import '../styles/SlideDown.css'
import { Context } from "../context/Context";
import { nominalTypeHack } from "prop-types";

export default function SlideDown() {

    const {sliderOpen} = useContext(Context)

    return (
        <div className="slide-down-container" style={{display: sliderOpen ? '' : 'none'}}>
                sdgfsgfdg
        </div>
    )
}