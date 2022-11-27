const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');

const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');


const display = new Display(displayValorAnterior,displayValorActual);

//Agrega los números
botonesNumeros.forEach(boton => {
    boton.addEventListener ('click', () => display.agregarNumero(boton.innerHTML));
});

//Agrega los operadores 
botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
}); 


