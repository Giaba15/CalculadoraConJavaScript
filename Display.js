class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined; //guarda el tipo de operacion que esta realizando el usuario
        this.valorActual = ''; // deja el string vacia 
        this.valorAnterior = '';
        this.signos = {  //mapear los operadores
            sumar : '+',
            dividir : '%',
            multiplicar : 'x',
            restar : '-',
        }

    }

    borrar (){ 
        this.valorActual = this.valorActual.toString().slice(0,-1) //nos permite recortarlo solamente desde su ultima posición (numero)
        this.imprimirValores(); //imprime los valores para que se actualize el display
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores ();
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular(); //ejecuta la operacion
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero (numero){
        if (numero === '.' && this.valorActual.includes('.')) return  //permite agregar solo un operador
        this.valorActual = this.valorActual.toString() + numero.toString(); // va agregando (concatenando) los numeros y operadores (to string) uno al lado del otro 
        this.imprimirValores(); //sirve para utilizarlo con otros métodos
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual; 
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}` ;//agrega los operadores solo si existe sino (or) pone un srting vacio 
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior); //deja de ser un string y vuelve a ser un numero 
        const valorActual = parseFloat(this.valorActual);

        if (isNaN (valorActual) || isNaN(valorAnterior)) return //si cualquiera de estos dos valores es NaN no va a realizar ninguna operación 

        this.valorActual = this.calculador[this.tipoOperacion] (valorAnterior, valorActual); //realiza un update del valor actual.selecciona un método de la calculadora con el tipo de operacion que seleccionó el usuario
    }
}