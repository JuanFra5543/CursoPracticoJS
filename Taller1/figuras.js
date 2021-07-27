// Codigo formulas de cuadrado
// console.group("Formulas de Cuadrado")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2")

// console.groupEnd()

// Codigo formulas de triangulo
// console.group("Formulas de Triangulo")
// const ladosTriangulo = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triangulo miden: " 
//     + ladosTriangulo 
//     + "cm, " 
//     + ladosTriangulo 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );
// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm")
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2")
// console.groupEnd()
// // Codigo del Circulo
// console.group("Formulas de Circulo")
//Radio
// const radioCirculo = 5;
// console.log(`El radio del circulo es: ${radioCirculo}cm`)
// console.log(`El diametro del circulo es: ${diametroCirculo}cm`)
// console.log(`El perimetro del circulo es: ${circunferencia}cm`)
// console.log(`PI es: ${PI}`)
// console.log(`El area del circulo es: ${areaCirculo}cm^2`)
// console.groupEnd()

//Perimetro Cuadrado
const perimetroCuadrado = (ladoCuadrado) => 4 * ladoCuadrado
//Area Cuadrado
const areaCuadrado = (ladoCuadrado) => Math.pow(ladoCuadrado,2)

//Altura Triangulo
const alturaTriangulo = (base, ladoA, ladoB) => {
    if(ladoA !== ladoB)
        return "Este no es un triangulo Isoceles, El primer y segundo lado no son los mismos"
    return Math.sqrt((Math.pow(ladoA,2)-(Math.pow(base,2)/4)))
}
//Perimetro Triangulo
const perimetroTriangulo = (ladoTrianguloA,ladoTrianbuloB,baseTriangulo) => ladoTrianguloA + ladoTrianbuloB + baseTriangulo
//Area Triangulo
const areaTriangulo = (baseTriangulo,alturaTriangulo) => (baseTriangulo*alturaTriangulo)/2

//Diametro
const diametroCirculo = (radio) => radio * 2 
//Pi
const PI = Math.PI
//Circunferencia
const circunferencia = (radio) => PI * diametroCirculo(radio)
//Area
const areaCirculo = (radio) => PI * Math.pow(radio,2)


//Funciones para el htmL
const calcularPerimetroCuadrado = () =>{
    var lado = document.getElementById("InputCuadrado")
    alert(`El perimetro del cuadrado es : ${perimetroCuadrado(lado.value)}`)
}
const calcularAreaCuadrado = () =>{
    var lado = document.getElementById("InputCuadrado")
    alert(`El area del cuadrado es : ${areaCuadrado(lado.value)}`)
}

const calcularPerimetroTriangulo = () =>{
    var ladoA = Number(document.getElementById("InputLadoA").value)
    var ladoB = Number(document.getElementById("InputLadoB").value)
    var base = Number(document.getElementById("InputBase").value)
    alert(`El perimetro del cuadrado es : ${perimetroTriangulo(ladoA,ladoB,base)}`)
}
const calcularAreaTriangulo = () =>{
    var ladoA = Number(document.getElementById("InputLadoA").value)
    var ladoB = Number(document.getElementById("InputLadoB").value)
    var base = Number(document.getElementById("InputBase").value)
    var altura = alturaTriangulo(base, ladoA,ladoB)
    typeof(altura) === 'string' ? alert(altura): alert(`El area del cuadrado es : ${areaTriangulo(base,altura)}`)
}

const calcularPerimetroCirculo = () =>{
    var radio = document.getElementById("InputRadio")
    alert(`El perimetro del circulo es : ${circunferencia(radio.value)}`)
}
const calcularAreaCirculo = () =>{
    var radio = document.getElementById("InputRadio")
    alert(`El area del circulo es : ${areaCirculo(radio.value)}`)
}