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
    if (password.length>=8 && numbers.includes(password.charArt(0))){
        console.log("Contraseña válida")
    }else console.log("Contraseña Invalida")
 }
 verifyIfPasswordIsSave("9contraseña")
 verifyIfPasswordIsSave("coea")