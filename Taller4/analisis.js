const esPar = (num) =>  (num%2) === 0

const mediana = (lista) =>{
    var x =  lista.reduce((valA = 0, elemento) => valA+elemento)
    return (x/lista.length)
}

const salariosEcu = ecuador.map((elemento) => elemento.salary)

const salarioEcuSort = salariosEcu.sort((a,b) => a-b)

const medianaSal = (lista) => {
    const mitad = parseInt(lista.length / 2)

    if(esPar(lista.length)) {
        const pMitad = mediana([lista[mitad-1],lista[mitad]])
        return pMitad
    } else {
        const pMitad = lista[mitad]
        return pMitad
    }
}

const spliceI = (salarioEcuSort.length * 90)/100
const spliceC = salarioEcuSort.length - spliceI

const top10S = salarioEcuSort.splice(spliceI,spliceC)

const medianaGeneralEcu = medianaSal(salarioEcuSort)
const medianaTop10Ecu = medianaSal(top10S)

console.log({
    medianaGeneralEcu,
    medianaTop10Ecu
})