const botonNumeroActivos = document.getElementById('boton-num-activos')
const botonMetodo = document.getElementById('boton-metodos')
const informativo = document.getElementById('informativo')
const pregunta = document.getElementById('pregunta')
const input = document.getElementById('input')
const input2 = document.getElementById('input2')
const grande = document.querySelector('.grande2')

const pregunta1 = document.getElementById('pregunta1')
const pregunta2 = document.getElementById('pregunta2')
const pregunta3 = document.getElementById('pregunta3')

let activosModificados;
let metodo;

botonNumeroActivos.addEventListener('click', () => {
    let activos = input.value

    // Guardar la posición de ese PUNTO
    let posicion  = 1
    // Calculando el espacio que debe DESPLAZARSE el GRANDE
    let operacion = posicion * -54
    console.log(operacion)
    // MOVEMOS el grand
    grande.style.transform = `translateX(${ operacion }%)`
    informativo.innerHTML = 'Ahora selecciona el metodo de optimización: Minimo riesgo, Maximo sharpe ratio, Maximo retorno con un nivel de riesgo dato, Minimo riesgo con un nivel de retorno dado'
    const items = activos.split(',').map(item => item.trim());
    activosModificados = new Array(...items);
})


botonMetodo.addEventListener('click', async () => {
   const response = await fetch('http://127.0.0.1:5000/static/obtener_datos?query=' + encodeURIComponent(activosModificados), {
    'method': 'GET'
   })
   const data = await response.json()
   const dataConvert = JSON.parse(data)
   const arrayDatos = Object.values(dataConvert)
   console.log(typeof arrayDatos)

   const datosPlot = [
    {
        x: [],
        y: [],
        name: 'AAPL',
        type: 'scatter'
    },
    {
        x: [],
        y: [],
        name: 'TSLA',
        type: 'scatter'
    }
   ]

    // Check if data is an array before using forEach
    if (Array.isArray(arrayDatos)) {
        arrayDatos.forEach(day => {
        datosPlot[0].x.push(day.fecha);
        datosPlot[0].y.push(day.AAPL);
        datosPlot[1].x.push(day.fecha);
        datosPlot[1].y.push(day.TSLA);
    })
    } else {
        console.error("Data is not an array. Cannot use forEach.")
        // Handle the case where data is not an array (show error message, etc.)
    }
    console.log(datosPlot)
    const layout = {
    title: 'Stock price',
    xaxis: {
        title: 'Month'
    },
    yaxis: {
        title: 'Stock Price'
    }
    }
    Plotly.newPlot('graph', datosPlot, layout)
})


