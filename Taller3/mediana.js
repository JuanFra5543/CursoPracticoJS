const lista1 = [ 100,200,500,1000000000 ]

const esPar = (num) => {
    return num%2 === 0 ? true : false
}

const mediana = (lista) => {

    //Si solo se utiliza sort podrian existir fallos ya que los ordenaria del 1 al 9 es decir (1,5,100000,2,3,10) => (1,10,100000,2,3,5)
    //la funcion interna especifica que el primer valor "a" sea menor que el segundo valor a analizar "b"
    lista.sort((a,b) => a - b)

    const mitadLista = parseInt(lista.length/2)

    if(esPar(lista.length)){
        return ((lista[mitadLista]+lista[mitadLista-1])/2)
    } else {
        return lista[mitadLista]
    }
}
