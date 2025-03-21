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
    password.length>8 && numbers.includes(password.charAt(0)) ? console.log("Contraseña válida") : console.log("Contraseña Invalida")

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
    // sentence.endsWith(".") && sentence.includes(firstLetter.toUpperCase()) ? console.log("La frase es correcta") : console.log("La frase es incorrecta")

    sentence.includes(firstLetter.toUpperCase()) ? console.log("La frase es correcta") : console.log("La frase es incorrecta")
 }

 verifyIfTextIsWellWritten("sombreroS.")
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

 
verifyEmailAdressUse("begoxchotmail.org")
verifyEmailAdressUse("begoxcho@tmail.org")
verifyEmailAdressUse("begoxchotmail.com")
///DUDA -- como hago para que después de que detecte que no es @, termine la evaluacion

//EJERCICIO 8 
//8️⃣ Sabrina está revisando una lista de palabras. Si una palabra contiene la letra "z", la marcará como especial. Si no, será una palabra común. Crea una función que reciba una palabra y determine su categoría.
const doesTheWordHasZ = (word)=>{
    // version larga --word.includes("z") || word.includes("Z")  ? console.log("Es una palabra especial") : console.log("Es una palabra común")

    word.toLowerCase().includes("z") ? console.log("Es una palabra especial") : console.log("Es una palabra común")
}


doesTheWordHasZ("zardain")
doesTheWordHasZ("Zardain")
doesTheWordHasZ("Calleja")

//EJERCICIO 9
//9️⃣ Macarena está clasificando documentos según su urgencia. Si un mensaje contiene la palabra "urgente" en cualquier parte, lo priorizará. Si no, será un mensaje normal. Crea una función que reciba un mensaje y determine su nivel de prioridad.

const isThisMessageUrgent = (message)=>{
    message.includes("urgente") ? console.log("Mensaje con prioridad") : console.log("Mensaje normal")
    
    // if (message.includes("urgente")){
    //     console.log("Mensaje con prioridad");
    // } else {
    //     console.log("Mensaje normal")
    // }
}

isThisMessageUrgent("Esto es urgente")
isThisMessageUrgent("Esto no lo es")

//EJERCICIO 10
//🔟 Abby encontró una nota con un código en una casa abandonada. Si el código es un número par y tiene exactamente 4 dígitos, puede ser la combinación de una caja fuerte. Si es impar o tiene otra longitud, lo descartará. Crea una función que reciba un código y determine si Abby debe investigarlo.


const isThisCodeAPassword = (number)=>{
    const numberToString= number.toString(); //Recorde con el meme que dijiste que existia una forma de pasar un numero a "characters" y lo googolee

    numberToString.length===4 && numberToString%2===0 ? console.log("Puede ser una combinación") : console.log("Este no es un código")
    // if (numberToString.length===4 && (numberToString%2===0)){
    //     console.log("Puede ser una combinación");
    // } else {
    //     console.log("Este no es un código")
    // }
}

isThisCodeAPassword("2024")
isThisCodeAPassword("202")
isThisCodeAPassword("2026")

//EJERCICIO 11
//1️⃣1️⃣ Camila está revisando invitaciones para un evento. Si el nombre del invitado empieza con "A", "E", "I", "O" o "U", se le asignará una mesa especial. Si empieza con otra letra, se le asignará una mesa normal. Crea una función que reciba un nombre y determine su ubicación.
const tableAssignmentForGifts = (name)=>{
    const vowels="AEIOU"

    vowels.includes(name.charAt(0).toUpperCase()) ? console.log("Mesa Especial Yupi") : console.log("Mesa Normal Boo") //le pido que revise si en el primer caracter estan las vocales y si son mayusculas

    // if (vocals.includes(name.charAt(0).toUpperCase())){
    //     console.log("Mesa Especial yupi");
    // }else {
    //     console.log("Mesa Normal boooo")
    // }

}

tableAssignmentForGifts("Andrea")
tableAssignmentForGifts("Renata")

//EJERCICIO 12
//1️⃣2️⃣ Bego está verificando si un texto contiene lenguaje ofensivo. Si un mensaje contiene la palabra "tonto" o "feo", se marcará como inapropiado. Si no, será aceptado. Crea una función que reciba un mensaje y determine su categoría.

const isTheMessageOffensive=(message)=>{
    (message.includes("tonto") || message.includes("feo")) ? console.log("Inapropiado") : console.log("Apropiado")

    // if(message.includes("tonto")|| message.includes("feo")){ //no puedo poner dos palabras dentro del metodo. 
    //     console.log("Inapropiado");
    // }else {
    //     console.log("Apropiado")
    // }
}

isTheMessageOffensive("tonto")
isTheMessageOffensive("eres bonito")
isTheMessageOffensive("eres tonto")

//EJERCICIO 13
//1️⃣3️⃣ Sabrina quiere imprimir etiquetas con iniciales. Crea una función que reciba un nombre y un apellido y devuelva sus iniciales en mayúsculas, separadas por un punto.
const nameTags=(name,surename)=>{
    const inicialName= name.charAt(0).toUpperCase(); //no hay comparativa, asi que solo debe obtener la letra, hacerla mayuscula e imprimirla
    const inicialSurename= surename.charAt(0).toUpperCase();

    console.log (inicialName+"." + inicialSurename);
}

nameTags("Bego","Calleja")

//EJERCICIO 14
//1️⃣4️⃣ Macarena está diseñando una campaña publicitaria. Si el título del anuncio tiene más de 20 caracteres, lo reducirá. Si tiene 20 o menos, lo usará tal cual. Crea una función que reciba un título y determine si debe ajustarse.
 const isTheTitleAdjustable=(title)=>{
    (title.length>=20) ? console.log("Debe ajustarse") : console.log ("Se imprime igual")
 }

 isTheTitleAdjustable("zoquete")
 isTheTitleAdjustable("Popocatepetle es un volcán en Puebla")

 //EJERCICIO 15
 //1️⃣5️⃣ Abby encontró una radio funcionando con interferencias. Si la señal incluye la palabra "ayuda" o "suministros", significa que alguien está pidiendo asistencia. Si no contiene estas palabras, lo ignorará. Crea una función que reciba un mensaje de radio y determine si Abby debe responder.
const isThisAHelpMessage=(message)=>{
    (message.includes("ayuda") || message.includes("suministros")) ? console.log("JODER, NECESITAN AYUDA!") : console.log("Todo cool, todo chill")
}

isThisAHelpMessage("ayuda")
isThisAHelpMessage("suministros")
isThisAHelpMessage("holis")

//EJERCICIO 16
//1️⃣6️⃣ Camila quiere asegurarse de que los nombres de usuario no contengan espacios. Si un nombre tiene espacios, será inválido. Si no tiene, será aceptado. Crea una función que reciba un nombre de usuario y determine su validez.

const userNameValidation=(userName)=>{
    (userName.includes(" ")) ? console.log("Usuario inválido") : console.log("Usuario válido")
}

userNameValidation("nombre")
userNameValidation("tu nombre")

//EJERCICIO 17
//1️⃣7️⃣ Bego está registrando nuevas cuentas de clientes. Si un correo electrónico contiene "@" y ".", será válido. Si no tiene alguno de estos elementos, será inválido. Crea una función que reciba un email y determine si es correcto.
const accountRegistration=(email)=>{
    email.includes("@") && email.includes(".") ? console.log("Email correcto") : console.log("Email incorrecto")
}

accountRegistration("bego@.")
accountRegistration("bego.")
accountRegistration("bego@")
accountRegistration("bego")

//EJERCICIO 19
//Macarena está validando números de identificación. Si un número tiene exactamente 8 caracteres y termina en una letra, será válido. Si no cumple estas condiciones, será inválido. Crea una función que reciba un número de identificación y determine si es correcto.
const idValidation=(numbers)=>{
    const lastLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lastLetter.includes(numbers.charAt(8).toLowerCase()) && numbers.length===8 ? console.log("Contraseña válida") : console.log("Contraseña inválida")
}
 idValidation("1234567b")
 idValidation("12347A")
 idValidation("1234")

 //EJERCICIO 20
 //2️⃣0️⃣ Abby encontró una combinación de caja fuerte que parece ser un número de 4 dígitos. Quiere probar combinaciones aleatorias hasta encontrar una que termine en 7. Crea una función que genere un número de 4 dígitos que termine en 7.
const codeGenerator=()=>{
    const combination=Math.floor(Math.random()*(999-100)+100); //que evalue del 999 para que si tenga 3 digitos

    console.log(combination + "7");

}
codeGenerator() //Intente copiar el ejemplo de clase pero nop

//EJERCICIO 21
// Macarena está seleccionando un color al azar para una promoción. Los colores posibles son "Rojo", "Azul", "Verde" y "Amarillo". Crea una función que devuelva uno de estos colores de forma aleatoria.

const colorForPromotion =()=>{
    const aleatoryNumber=Math.floor(Math.random()*4); //como son 4 colores, necesito que busque del 0-4
    if (aleatoryNumber ===0){
        console.log("Azul");
    } else if (aleatoryNumber=== 1) {
        console.log("Rojo");
    } else if (aleatoryNumber===2){
        console.log("Verde");
    } else {
        console.log("Amarillo");
    }
}
colorForPromotion()

//EJERCICIO 22 
// 2️⃣2️⃣ Sabrina quiere generar una combinación de letras para un código de producto. La combinación debe tener 3 letras aleatorias en mayúsculas. Crea una función que genere y muestre esta combinación.

const lettersPassword=()=>{
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number1=Math.floor(Math.random()*27);
    const number2=Math.floor(Math.random()*27);
    const number3=Math.floor(Math.random()*27);
    
    console.log(letters.charAt(number1)+ letters.charAt(number2)+letters.charAt(number3));

}
lettersPassword()

//EJERCICIO 23
//2️⃣3️⃣ Bego está revisando una lista de verbos para una clase de gramática. Necesita clasificar cada verbo según su conjugación. Crea una función que reciba dos verbos en infinitivo y determine si pertenecen a la primera ("-ar"), segunda ("-er") o tercera ("-ir") conjugación. La función deberá imprimir la clasificación de cada verbo.

const verbSorting=(verb1,verb2)=>{
    const defineConjugation=(verb)=>{ //para agrupar ambas conjugaciones y no hacerlo doble
        if (verb.endsWith("ar")){
            console.log("Primer conjugación");
        } else if (verb.endsWith("er")){
            console.log("Segunda clasificacion");
        } else if (verb.endsWith("ir")){
            console.log("Tercer clasificación");
        }
    }
    defineConjugation(verb1);
    defineConjugation(verb2); //les da valor a cada verbo

}
verbSorting("cantar","llorar")
verbSorting("tener","morir")

//EJERCICIO 24
//2️⃣4️⃣ Abby encontró una caja cerrada con un código de 5 números. Solo uno de cada 5 intentos abrirá la caja. Crea una función que simule 5 intentos y muestre si en alguno se abre la caja o no.

// const tryToOpenTheBox=()=>{
//     const correctCode=Math.floor(Math.random()*6);

//     if (correctCode===1){
//         console.log("CORRECTO");
//     } else {
//         console.log("INCORRECTO");
//     }

//     if (correctCode===2){
//         console.log("CORRECTO");
//     } else {
//         console.log("INCORRECTO");
//     }

//     if (correctCode===3){
//         console.log("CORRECTO");
//     } else {
//         console.log("INCORRECTO");
//     }

//     if (correctCode===4){
//         console.log("CORRECTO");
//     } else {
//         console.log("INCORRECTO");
//     }

//     if (correctCode===5){
//         console.log("CORRECTO");
//     } else {
//         console.log("INCORRECTO");
//     }
// }

const tryToOpenTheBox =()=>{
    const try1 = Math.random()< 0.2; // evalua la probabilidad 1/5 (probabilidad 20%)
    const try2 = Math.random()< 0.2; // evalua la probabilidad 1/5 (probabilidad 20%)
    const try3 = Math.random()< 0.2; // evalua la probabilidad 1/5 (probabilidad 20%)
    const try4 = Math.random()< 0.2; // evalua la probabilidad 1/5 (probabilidad 20%)
    const try5 = Math.random()< 0.2; // evalua la probabilidad 1/5 (probabilidad 20%)

    if(try1 || try2 || try3 || try4 || try5){
        console.log("CORRECTO");
    } else {
        console.log("INCORRECTO");
    }
}


tryToOpenTheBox();

//EJERCICIO 25
//2️⃣5️⃣ Camila quiere generar una clave secreta para una nueva cuenta. La clave debe tener un número aleatorio entre 100 y 999 y una letra aleatoria entre "A" y "Z". Crea una función que genere una clave con ese formato.

const generateNewPassword=()=>{
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter=Math.floor(Math.random()*27);
    const randomNumber=Math.floor(Math.random()* (999-100)+100)

    console.log(randomNumber+ letters.charAt(randomLetter))
}

generateNewPassword();

//EJERCICIO 26
//2️⃣6️⃣ Macarena quiere jugar al Euromillones, pero como nunca le toca, ha decidido confiar en el destino. Quiere generar 5 números aleatorios entre 1 y 50, asegurándose de que si un número es menor que 10, aparezca con un "0" delante. Por ejemplo, un posible resultado sería: "08 10 33 35 49". Crea una función que genere y muestre esta combinación de números en el formato correcto.

const lotteryNumberGenerator=()=>{
    const aleatoryNumber1=Math.floor(Math.random()* (50-1)+1);
    const aleatoryNumber2=Math.floor(Math.random()* (50-1)+1);
    const aleatoryNumber3=Math.floor(Math.random()* (50-1)+1);
    const aleatoryNumber4=Math.floor(Math.random()* (50-1)+1);
    const aleatoryNumber5=Math.floor(Math.random()* (50-1)+1);
    
    const number1=aleatoryNumber1<10 ? ("0"+ aleatoryNumber1): aleatoryNumber1; //si el numero es menor a 10- agregale 0, si no, dejalo igual
    const number2=aleatoryNumber2<10 ? ("0"+ aleatoryNumber2): aleatoryNumber2;
    const number3=aleatoryNumber3<10 ? ("0"+ aleatoryNumber3): aleatoryNumber3;
    const number4=aleatoryNumber4<10 ? ("0"+ aleatoryNumber4): aleatoryNumber4;
    const number5=aleatoryNumber5<10 ? ("0"+ aleatoryNumber5): aleatoryNumber5;

    console.log(number1,number2,number3,number3,number4,number5);
    // if (number1<10) {
    //     console.log(`0${number1} ${number2} ${number3} ${number4} ${number5}`);
    // }
    // if (number2<10){ 
    //     console.log(`${number1} 0${number2} ${number3} ${number4} ${number5}`);
    // }
    // if (number3<10){
    //     console.log(`${number1} ${number2} 0${number3} ${number4} ${number5}`);
    // }
    // if (number4<10){
    //     console.log(`${number1} ${number2} ${number3} 0${number4} ${number5}`);
    // }
    // if (number5<10){
    //     console.log(`${number1} ${number2} ${number3} ${number4} 0${number5}`);
    // }


}

lotteryNumberGenerator();

//EJERCICIO 27
//2️⃣7️⃣ Sabrina necesita ocultar parte de un número de tarjeta de crédito. Dado un número de 16 dígitos como string, la función debe reemplazar todos los caracteres excepto los últimos 4 con asteriscos. Por ejemplo, "1234567812345678" debe mostrarse como **********5678.

const hideCardNumbers=(number)=>{
    const last4Numbers = number.slice(-4); //sacar los ultimos 4 digitos
    const asterisk = ("************");

    console.log(asterisk.substring(0,number.length-4)+ last4Numbers)
}

hideCardNumbers("123456781230000")

//2️⃣8️⃣ Camila quiere dividir frases largas en dos partes. Si una frase tiene más de 20 caracteres, debe dividirla en dos partes: los primeros 10 caracteres y el resto, separados por " - ". Si la frase tiene 20 o menos, se devuelve tal cual. Crea una función que realice esta división.

const sentenceDivision=(sentance)=>{
    if (sentance.lenght>20){ //detecta si es muy larga
        const part1=sentence.substring(0,10); //hace la primer parte
        const part2=sentence.substring(10); //hace la segunda parte
        
        console.log(part1 + "-" + part2); //imprime estas dos juntas
    } else{
        console.log(sentance);
    }
}

sentenceDivision("Quién es la alumna favorita de Adrian?");
sentenceDivision("Es Bego");

//EJERCICIO 29
//2️⃣9️⃣ Sabrina está encriptando mensajes secretos. Sabe que todos los mensajes deben tener 4 letras y quiere que cada letra de una palabra se sustituya por la siguiente en el abecedario (por ejemplo, "hola" se convertiría en "ipmb"). Si la letra es "z" o "Z", debe convertirse en "a" o "A" respectivamente. Crea una función que realice esta transformación en una palabra.

const messageTranscription=(message)=>{
    const letters ="abcdefghijklmnopqrstuvwxyz"
    // const character1 = letters.charAt(Math.floor(Math.random()*letters.length)); //
    const firstLetterPosition =  letters.indexOf(message.charAt(0)); //yo quiero saber la posicion del abecedario de la primer letra de la palabra
    const firstLetter = firstLetterPosition=== letters.length -1 ? "a": letters.charAt(firstLetterPosition+1); //letters.length -1 es la ultima posicion del abecedario. Le estoy diciendo que si la primer letra, es la ultima del abecedar"z" se convierta a "a"

    const secondLetterPosition =  letters.indexOf(message.charAt(1));
    const secondLetter = secondLetterPosition=== letters.length -1 ? "a": letters.charAt(secondLetterPosition+1);

    const thirdLetterPosition =  letters.indexOf(message.charAt(2));
    const thirdLetter = thirdLetterPosition=== letters.length -1 ? "a": letters.charAt(thirdLetterPosition+1);

    const forthLetterPosition =  letters.indexOf(message.charAt(3));
    const forthLetter = forthLetterPosition=== letters.length -1 ? "a": letters.charAt(forthLetterPosition+1);
   
    console.log(`${firstLetter}${secondLetter}${thirdLetter}${forthLetter}`);
} 

messageTranscription("hola");
//EJERCICO 30
//3️⃣0️⃣ Bego necesita verificar si dos palabras de 4 letras son palíndromos (es decir, si lee igual de derecha a izquierda y de izquierda a derecha, como "amor" y "roma"). Crea una función que determine si dos palabras son palíndromos.

const areThisWordsPalindromes=(word1,word2)=>{
    // const word1Palindrome= word1.charAt(0)===word1.charAt(3) && word1.charAt(1) === word1.charAt(2); //esto las hace palindromos
    // const word2Palindrome= word2.charAt(0)===word2.charAt(3) && word2.charAt(1) === word2.charAt(2);

    // if (word1Palindrome && word2Palindrome){ //si estas dos sucedes
    //     console.log("Son palíndromos");
    // } else {
    //     console.log("Alguna palabra no es palíndromo");
    // }
    if (word1.charAt(0)===word2.charAt(3) && (word1.charAt(3)===word2.charAt(0))){
        console.log("Son palíndromos")
    } else {
        console.log("No son palíndormos")
    }
}
areThisWordsPalindromes("amor","roma")
areThisWordsPalindromes("lote","etol")
areThisWordsPalindromes("amot","roma")