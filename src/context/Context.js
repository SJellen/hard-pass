import { func } from 'joi'
import React, {useContext, useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children})  {
    const [password, setPassword] = useState("password1234")

    const [len, setLen] = useState(6)
    const [minNumber, setMinNumber] = useState(0)
    const [minSpecial, setMinSpecial] = useState(0)
    const [symbolsChecked, setSymbolsChecked] = useState(false)
    const [numbersChecked, setNumbersChecked] = useState(false)

    const [isCopied, setIsCopied] = useState(false)
    const [isCopiedLogin, setIsCopiedLogin] = useState(false)
    const [sliderOpen, setSliderOpen] = useState(false)
    
    // array shuffler
    function shuffle(array) {
        let currentIndex = array.length, randomIndex
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }
        return array
    }

    // password creator
    function RandomPassword(minUpper = 0, minLower = 0) {
        let characters = String.fromCharCode(...Array(127).keys()).slice(33), //characters
            upperA2Z = String.fromCharCode(...Array(91).keys()).slice(65), //uppercase A-Z
            lowerA2z = String.fromCharCode(...Array(123).keys()).slice(97), // lower a-z
            zero2nine = String.fromCharCode(...Array(58).keys()).slice(48), // numbers 0-9
            specials = characters.replace(/\w/g, '') // special characters
        if (minSpecial < 1) characters = zero2nine + upperA2Z + lowerA2z
        if (minNumber < 1) characters = characters.replace(zero2nine, '')
        let minRequired = minSpecial + minUpper + minLower + minNumber
        let randomArray = [
            ...Array.from({length: minSpecial ? minSpecial : 0}, () => specials[Math.floor(Math.random() * specials.length)]),
            ...Array.from({length: minUpper ? minUpper : 0}, () => upperA2Z[Math.floor(Math.random() * upperA2Z.length)]),
            ...Array.from({length: minLower ? minLower : 0}, () => lowerA2z[Math.floor(Math.random() * lowerA2z.length)]),
            ...Array.from({length: minNumber ? minNumber : 0}, () => zero2nine[Math.floor(Math.random() * zero2nine.length)]),
            ...Array.from({length: Math.max(len, minRequired) - (minRequired ? minRequired : 0)}, () => characters[Math.floor(Math.random() * characters.length)])
        ]
        let pass = shuffle(randomArray)
        pass.join('')
        setPassword(pass)
    }

    function handleReloadClick() {
        setIsCopied(false)
        RandomPassword()
    }

    function handleCharacterLength(e) {
        let sliderLength = parseInt(e.target.value)
        setLen(sliderLength)
        RandomPassword()
    }

    function handleSymbolCheck() {
        setSymbolsChecked(!symbolsChecked)
    }

    function handleNumberCheck() {
        setNumbersChecked(!numbersChecked)
    }

    function handleCopyClick() {
        setIsCopied(true)
    }

    

    useEffect(() => {
        // console.log(symbolsChecked, numbersChecked)
        if (symbolsChecked) {
            setMinSpecial(1)
        } else {
            setMinSpecial(0)
        }
        if (numbersChecked) {
            setMinNumber(1)
        } else {
            setMinNumber(0)
        }
    }, [symbolsChecked, numbersChecked, minSpecial, minNumber])

    return (
        <Context.Provider value={{handleReloadClick, password, len, handleCharacterLength, handleSymbolCheck, symbolsChecked, handleNumberCheck, numbersChecked, isCopied, handleCopyClick, sliderOpen, setSliderOpen}}>
            {children}
        </Context.Provider>
    )
    

}

export {ContextProvider, Context}