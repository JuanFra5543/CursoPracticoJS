const listaSueldos1 = [100, 200, 300, 500]
const calculaPromedio = (listaSueldos) => {
    //let sumaLista = 0
    // for(let i = 0 ; i < listaSueldos.length; i++){
    //     sumaLista += listaSueldos[i]
    // }

    const sumaLista = listaSueldos.reduce(
        (valorAcumulado = 0, nElemento) => {
            return valorAcumulado += nElemento
        }
    )

    return sumaLista/listaSueldos.length
}
