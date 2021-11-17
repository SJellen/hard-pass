import React, { useContext } from "react";
import '../styles/Main.css'




export default function Main(){

    const {RandomPassword} = useContext(Context)
    

    return (
        <div className="main-container">
            <div>

            </div>
            <h1>{}</h1>
        </div>
    )
}