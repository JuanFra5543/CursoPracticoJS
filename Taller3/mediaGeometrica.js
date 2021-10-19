
const mediaGeometrica = (lista) =>{
    var sumaValores = 1

    lista.forEach((element) => sumaValores = sumaValores * element)

    var resultado = Math.pow(sumaValores,(1/lista.length))

    var resultP = document.getElementById("ResultMediaG")
    resultP.innerText = `La media geometrica de los datos ingresados [${lista}]  es ${resultado}`
}

const onClickButtonMediaG = () =>{

    const x = document.getElementById("InputArray")

    const listaValores = x.value.split(",").map(Number)

    const valoresLimpios = []
    
    listaValores.forEach((element) => {
        if(!isNaN(element)){
            valoresLimpios.push(element)
        }
    })

    mediaGeometrica(valoresLimpios)

}