//EJERCICIO 1
//1️⃣ Camila está revisando nombres en una lista. Si un nombre tiene más de 6 caracteres, debe marcarlo como "Nombre largo". Si tiene 6 o menos, lo marcará como "Nombre corto". Crea una función que reciba un nombre y determine su clasificación.

const nameLenght=(name)=>{
    if (name.length > 6){
        console.log("Nombre Largo")
    } else console.log("Nombre Corto")
    
}

nameLenght("Macarena")
nameLenght("pepe")

//EJERCICIO 2
//2️⃣ Bego está escribiendo un email, pero quiere asegurarse de que el texto termina en un punto. Crea una función que reciba una frase y determine si acaba con "." ("Formato correcto") o no ("Falta el punto final").

const verifyIfEmailEndsInDot=(email)=>{
    // if (email.endsWith(".")){
    //     console.log("Formato correcto")
    // } else console.log("Falta el punto final")
    email.endsWith(".") ?console.log("Formato correcto"): console.log("Falta el punto final")

}
verifyIfEmailEndsInDot("corre.")
verifyIfEmailEndsInDot("corre")

//EJERCICIO 3
//3️⃣ Sabrina está verificando contraseñas. Si la contraseña tiene más de 8 caracteres y empieza con un número, será válida. Si no cumple estas condiciones, será inválida. Crea una función que reciba una contraseña y determine si es segura.
 const verifyIfPasswordIsSave=(password)=>{
    const numbers ='0123456789'
    // if (password.length>=8 && numbers.includes(password.charAt(0))){
    //     console.log("Contraseña válida")
    // }else console.log("Contraseña Invalida")
    password.length>=8 && numbers.includes(password.charAt(0)) ? console.log("Contraseña válida") : console.log("Contraseña Invalida")

 }
 verifyIfPasswordIsSave("9contraseña")
 verifyIfPasswordIsSave("coea")

 //EJERCICIO 4
 //4️⃣ Macarena está revisando la gramática de un texto. Si la primera letra de la frase está en mayúscula y la frase termina con un punto, es correcta. Si no, está mal escrita. Crea una función que reciba una frase y determine si cumple ambas reglas.

 const verifyIfTextIsWellWritten =(sentence)=>{
    const firstLetter=sentence.charAt(0)
    // if (sentence.endsWith(".") && sentence.includes(firstLetter.toUpperCase())){
    //     console.log('La frase es correcta')
    // } else console.log ('La frase es incorrecta')
    sentence.endsWith(".") && sentence.includes(firstLetter.toUpperCase(0)) ? console.log("La frase es correcta") : console.log("La frase es incorrecta")
 }

 verifyIfTextIsWellWritten("Sombrero.")
 verifyIfTextIsWellWritten("sOmbrero.")
 verifyIfTextIsWellWritten("Sombrero.")
 verifyIfTextIsWellWritten("Sombrero")

 // DUDA! SI FUNCIONA

//EJERCICIO 5
//5️⃣ Abby encontró un mensaje pintado en la pared con dos palabras. Si ambas palabras tienen la misma cantidad de letras, lo tomará como una pista. Si no, lo ignorará. Crea una función que reciba dos palabras y determine si el mensaje es importante.

const isThisMessageImportant = (wordA,wordB)=>{
    // if (wordA.length===wordB.length){
    //     console.log("Esto es una pista")
    // }else console.log ("Ignora este mensaje")

    wordA.length===wordB.length ? console.log ("Esto es una pista") : console.log("Ignora este mensaje")
}

isThisMessageImportant("sopa","copa")
isThisMessageImportant("soa","copa")



//EJERCICIO 6
//6️⃣ Camila quiere asegurarse de que un número de teléfono tiene el formato correcto. Debe tener exactamente 9 caracteres. Crea una función que reciba un número como string y determine si es válido o no.
const isThisNumberCorrect = (number)=>{
    // if(number.length===(9)){
    //     console.log("El número es válido")
    // } else console.log("El número es inválido")
    number.length===9 ? console.log("El número es válido") : console.log ("El número es inválido")
}

isThisNumberCorrect("123456789")
isThisNumberCorrect("1234567")

//EJERCICIO 7
//7️⃣ Bego está eligiendo un dominio para su nueva web. Si la web termina en ".com", se usará para negocios. Si termina en ".org", será para una organización. Si no es ninguno de estos, el dominio no es válido. Crea una función que reciba un dominio y determine su clasificación.
const verifyEmailAdressUse = (email)=>{
    //tiene que tener @ para se email
    if  (email.includes("@")){
        if (email.endsWith(".org")){
        console.log("Email para una organización");
    } else if (email.endsWith(".com")){
        console.log("Email para una negocio");
        
    }}else{ console.log("El dominio no es válido")}
}

 
verifyEmailAdressUse("begoxch@otmail.org")
verifyEmailAdressUse("begoxcho@tmail.org")
verifyEmailAdressUse("begoxchotmail.com")
///DUDA -- como hago para que después de que detecte que no es @, termine la evaluacion

//EJERCICIO 8 
//8️⃣ Sabrina está revisando una lista de palabras. Si una palabra contiene la letra "z", la marcará como especial. Si no, será una palabra común. Crea una función que reciba una palabra y determine su categoría.
const doesTheWordHasZ = (word)=>{
    word.includes("z") || word.includes("Z")  ? console.log("Es una palabra especial") : console.log("Es una palabra común")
}
doesTheWordHasZ("zardain")
doesTheWordHasZ("Zardain")
doesTheWordHasZ("Calleja")

//EJERCICIO 9
//9️⃣ Macarena está clasificando documentos según su urgencia. Si un mensaje contiene la palabra "urgente" en cualquier parte, lo priorizará. Si no, será un mensaje normal. Crea una función que reciba un mensaje y determine su nivel de prioridad.

const isThisMessageUrgent = (message)=>{
    if (message.includes("urgente")){
        console.log("Mensaje con prioridad");
    } else {
        console.log("Mensaje normal")
    }
}

isThisMessageUrgent("Esto es urgente")
isThisMessageUrgent("Esto no lo es")

//EJERCICIO 10
//🔟 Abby encontró una nota con un código en una casa abandonada. Si el código es un número par y tiene exactamente 4 dígitos, puede ser la combinación de una caja fuerte. Si es impar o tiene otra longitud, lo descartará. Crea una función que reciba un código y determine si Abby debe investigarlo.


const isThisCodeAPassword = (number)=>{
    const numberToString= number.toString(); //Recorde con el meme que dijiste que existia una forma de pasar un numero a "characters" y lo googolee
    if (numberToString.length===4 && (numberToString%2===0)){
        console.log("Puede ser una combinación");
    } else {
        console.log("Este no es un código")
    }
}

isThisCodeAPassword("2024")
isThisCodeAPassword("202")
isThisCodeAPassword("2026")


