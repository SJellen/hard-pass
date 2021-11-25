import React, { useContext } from "react";
import '../styles/Main.css'
import { Context } from "../context/Context";
import SlideDown from "./SlideDown";

export default function Main(){

    const {password, handleReloadClick, len, handleCharacterLength, handleSymbolCheck, symbolsChecked, handleNumberCheck, numbersChecked, isCopied, handleCopyClick, sliderOpen, setSliderOpen} = useContext(Context)

    return (
        <div>
          <div className="main-container" style={{borderBottomLeftRadius: sliderOpen ? '0px' : '', borderBottomRightRadius: sliderOpen ? '0px' : ''}}>
            <div className="top-container" style={{borderBottom: password.length > 20 && numbersChecked && symbolsChecked ? '5px solid green' : password.length > 20 && (numbersChecked || symbolsChecked) ? '5px solid yellow' : '5px solid red'}}>
                <h1 className="password" >{password}</h1>
                <span className="reload-button" onClick={handleReloadClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                        <path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z"/>
                    </svg>
                </span>
            </div>
            <div className="selection-container">
                <span className="selection-container-left" ><h4>{len} characters</h4></span>
                <input 
                    type="range" 
                    id="length" 
                    name="characters" 
                    min="6" 
                    max="98" 
                    onChange={(e) => handleCharacterLength(e)} 
                    onClick={(e) => handleCharacterLength(e)}
                    className="selection-container-right" 
                />
            </div>
            <div className="selection-container">
                <span className="selection-container-left" ><h4>Options</h4></span>
                <span className="check-container">
                    <h4>Symbols</h4>
                    <input type="checkbox" id="symbols" name="symbols" value={symbolsChecked} onChange={handleSymbolCheck} />
                </span>
                <span className="check-container">
                    <h4>Numbers</h4>
                    <input type="checkbox" id="numbers" name="numbers" value={numbersChecked} onChange={handleNumberCheck} />
                </span>
            </div>
            <div className="button-container selection-container" style={{display: sliderOpen ? 'none' : ''}}>
                <span className="selection-container-left" ><button onClick={() => setSliderOpen(true)}>Create Login</button></span>
                <span className="selection-container-right" ><button onClick={handleCopyClick}>{isCopied ? 'Copied' : "Copy"}</button></span>
            </div>
        </div>  
            <SlideDown />
        </div>
    )
}