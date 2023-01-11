




// Entradas de texto

const elementoImporte = document.getElementById('importe')
const elementoInteres = document.getElementById('interes')
const elementoMeses = document.getElementById('meses')


const botonCalcular = document.getElementById('calcular')
botonCalcular.addEventListener('click', calcular)


function calcular(){
    
    const importe = parseInt(elementoImporte.value)
    const interesAnual = parseFloat(elementoInteres.value)
    const meses = parseInt(elementoMeses.value)
    
    const interes = (interesAnual/100) /12

    const cuota = importe / (( (1 - ( 1 + interes) ** -meses)) / interes)
    
    const pagado = cuota * meses

    const interesesPagados = pagado - importe

    elementoCuota.textContent = cuota.toFixed(2)
    elementoPagado.textContent = pagado.toFixed(2)
    elementoInteresesPagados.textContent = interesesPagados.toFixed(2)

}

// Elementos para mostrar info

const elementoCuota = document.getElementById('cuota')
const elementoPagado = document.getElementById('pagado')
const elementoInteresesPagados = document.getElementById('interesesPagados')