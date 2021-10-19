const lista1 = [1,2,3,1,2,3,2,2,2,4,5,6,7,8,1,3,2,3,4,5,6]

const moda = (lista) =>{
    const listaC = {}

    lista.map(
        (elemento) => {
            listaC[elemento] ? listaC[elemento] += 1 : listaC[elemento] = 1
        }
    )

    var result = Object.entries(listaC).sort((a,b) => a[1]-b[1])

    return result[result.length-1]
}