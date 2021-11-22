import React, { useContext } from "react";
import '../styles/SlideDown.css'
import { Context } from "../context/Context";

export default function SlideDown() {

    const {sliderOpen, setSliderOpen, password, handleLoginCopyClick, isCopiedLogin} = useContext(Context)

    return (
        <div className="slide-down-container" style={{display: sliderOpen ? '' : 'none'}}>
            <div className="input-container">
                <div className="single-input">
                    <label>Website</label>
                    <input 
                        type="text"
                        id="website"
                    />
                </div> 
                <div className="single-input">
                    <label>Username</label>
                    <input
                        type="text"
                        id="username"
                    />
                </div>
                <div className="single-input">
                    <label>Password</label>
                    <p className="single-input-password">{password}</p>
                </div>
            </div>
            <div className="copy-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="close-button" onClick={() => setSliderOpen(false)}>
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/>
                </svg>
                <span className="copy-button-container"><button onClick={handleLoginCopyClick}>{isCopiedLogin ? 'Copied' : "Copy"}</button></span>
            </div>
        </div>
    )
}