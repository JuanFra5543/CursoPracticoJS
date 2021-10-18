const precioOriginal = 120
const descuento = 18

const CuponesDescuento = ["MitadOff", "ClienteFrecuente", "ReyDeCompras", "Secreto", "DescuentoAleatoreo"]

const precioFinal = (precio, descuento) => {
    var descuentoPorcentaje = 100 - descuento
    return (precio * descuentoPorcentaje)/100
}

const onClickButtonPriceDisc = () => {
    var price = document.getElementById("InputPrice")
    const priceV = price.value;

    var disc = document.getElementById("InputDiscount")
    const discV = disc.value;

    var cup = document.getElementById("InputCupon")
    const cupV = cup.value

    var priceDiscount = precioFinal(priceV,discV)

    if (cupV !== "") {
        switch(cupV){
            case CuponesDescuento[0]:
                priceDiscount = precioFinal(priceDiscount,50)
                break
            case CuponesDescuento[1]:
                priceDiscount = precioFinal(priceDiscount,25)
                break
            case CuponesDescuento[2]:
                priceDiscount = precioFinal(priceDiscount,75)
                break
            case CuponesDescuento[3]:
                priceDiscount = precioFinal(priceDiscount,90)
                break
            case CuponesDescuento[4]:
                crazyDisc = Math.round(Math.random()*75)
                priceDiscount = precioFinal(priceDiscount,crazyDisc)
                console.log(crazyDisc)
                break
        }
    }

    var resultP = document.getElementById("ResultP")
    resultP.innerText = `El Precio con descuento es de $${priceDiscount}`
}

// console.log(`El precio original es $${precioOriginal} el descuento aplicado es de ${descuento}% dando un precio final de $${precioFinal(precioOriginal,descuento)}`)