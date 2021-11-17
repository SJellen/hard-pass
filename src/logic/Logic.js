
let characters = ''
let passwordLength = ''

function setUpperCase(isUpperCase) {
    if (isUpperCase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    } 
    return ''
}

function setLowerCase(isLowerCase) {
    if (isLowerCase) {
        characters += 'abcdefghijklmnopqrstuvwxyz'
    }
    return ''
}

function setSymbols(isSymbol) {
    if (isSymbol) {
        characters += '!@#$%^&*()<>,.?/[]{}-=_+|/'
    }
    return ''
}

function setNumber(isNumber) {
    if (isNumber) {
        characters =+ '0123456789'
    }
    return ''
}

characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()<>,.?/[]{}-=_+|/0123456789'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function passwordCharacters() {
    let password = ''
    if (characters.length) {
        for (let i = 0; i < passwordLength; i++) {
            password += characters[getRandomInt(0, characters.length - 1)]
        }
        characters = ''
        passwordLength = 0
        return password
    }

}

export function setPasswordLength(length) {
    passwordLength = length
    return passwordLength
}

export function generatePassword(passWordProps, pwdLength) {
    const { uppercase, lowercase, symbols, numbers} = passWordProps
    setPasswordLength(pwdLength)
    setUpperCase(uppercase)
    setLowerCase(lowercase)
    setSymbols(symbols)
    setNumber(numbers)
    const password = passwordCharacters()
    return password
}