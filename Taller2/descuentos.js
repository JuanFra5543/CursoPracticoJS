const precioOriginal = 120
const descuento = 18

const precioFinal = (precio, descuento) => {
    var descuentoPorcentaje = 100 - descuento
    return (precio * descuentoPorcentaje)/100
}

// console.log(`El precio original es $${precioOriginal} el descuento aplicado es de ${descuento}% dando un precio final de $${precioFinal(precioOriginal,descuento)}`)