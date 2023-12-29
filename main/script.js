let resultado = document.querySelector('#resultado');
let precioInicial = document.querySelector('#input1');
let descuentoInput = document.querySelector('#input2');

const calculo = document.querySelector('.finalPrice');

calculo.addEventListener('click', calcular);

function calcular() {
    let precioInicialConvertido = Number(precioInicial.value);
    let descuentoConvertido = Number(descuentoInput.value);

    let discount = (precioInicialConvertido * descuentoConvertido) / 100;

    let precioFinal = precioInicialConvertido - discount;

    resultado.value = `El precio final es ${precioFinal}`;
}

