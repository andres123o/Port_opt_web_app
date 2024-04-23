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

let activos;
let metodo;

botonNumeroActivos.addEventListener('click', () => {
    activos = input.value

    // Guardar la posición de ese PUNTO
    let posicion  = 1
    // Calculando el espacio que debe DESPLAZARSE el GRANDE
    let operacion = posicion * -54
    console.log(operacion)
    // MOVEMOS el grand
    grande.style.transform = `translateX(${ operacion }%)`

    informativo.innerHTML = 'Ahora selecciona el metodo de optimización: Minimo riesgo, Maximo sharpe ratio, Maximo retorno con un nivel de riesgo dato, Minimo riesgo con un nivel de retorno dado'

    console.log(activos)
})


botonMetodo.addEventListener('click', () => {
    metodo = input2.value
    console.log(metodo)
})

