import React, { useContext } from "react";
import '../styles/Main.css'
import { Context } from "../context/Context";




export default function Main(){

    const {RandomPassword} = useContext(Context)
    

    return (
        <div className="main-container">
            <div className="top-container">
                <h1>{RandomPassword()}</h1>
            </div>
            
        </div>
    )
}