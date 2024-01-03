// let resultado = document.querySelector('#resultado');
// let precioInicial = document.querySelector('#input1');
// let descuentoInput = document.querySelector('#input2');

// const calculo = document.querySelector('.finalPrice');

// calculo.addEventListener('click', calcular);

// function calcular() {
//     let precioInicialConvertido = Number(precioInicial.value);
//     let descuentoConvertido = Number(descuentoInput.value);

//     let discount = (precioInicialConvertido * descuentoConvertido) / 100;

//     let precioFinal = precioInicialConvertido - discount;

//     resultado.value = `El precio final es ${precioFinal}`;
// }

let resultado = document.querySelector('#resultado');
let precioInicial = document.querySelector('#input1');
let descuentoInput = document.querySelector('#input2');
let historialDescuentosPreciosFinales = [];

const calculo = document.querySelector('.finalPrice');
calculo.addEventListener('click', calcular);

function calcular() {
    let precioInicialConvertido = Number(precioInicial.value);
    let descuentoConvertido = Number(descuentoInput.value);

    let discount = (precioInicialConvertido * descuentoConvertido) / 100;

    let precioFinal = precioInicialConvertido - discount;

    resultado.value = `El precio final es ${precioFinal.toFixed(2)}`;
    
    historialDescuentosPreciosFinales.push({
        descuento: discount,
        precioFinal: precioFinal
    });

    actualizarHistorialDescuentosPreciosFinales();
}

function actualizarHistorialDescuentosPreciosFinales() {
    const historialList = document.getElementById('historialDescuentosPreciosFinales');
    historialList.innerHTML = '';
    historialDescuentosPreciosFinales.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Descuento: ${item.descuento.toFixed(2)}, Precio Final: ${item.precioFinal.toFixed(2)}`;
        historialList.appendChild(listItem);
    });
}

function sumarResultados() {
    const sumaDescuentos = historialDescuentosPreciosFinales.reduce((total, item) => total + item.descuento, 0);
    const sumaPreciosFinales = historialDescuentosPreciosFinales.reduce((total, item) => total + item.precioFinal, 0);

    document.getElementById('resultadoSumaDescuentos').textContent = `Suma de descuentos: ${sumaDescuentos.toFixed(2)}`;
    document.getElementById('resultadoSumaPreciosFinales').textContent = `Suma de precios finales: ${sumaPreciosFinales.toFixed(2)}`;
}