class Operation {
  constructor() {
    this._valueA = 0;
    this._valueB = 0;
    this._operando = "";
    this._result = 0;
  }
}

const botonesNumericos = document.querySelectorAll(".number");
const outcome = document.getElementById("text-outcome");
const current = document.getElementById("text-current-operation");

let valor1 = false;
let valor2 = true;
let numeroTieneComa = false;
let operacion = new Operation();

document.addEventListener("click", (e) => {
  if (e.target.matches(".number")) {
    let valueFloat = parseInt(e.target.value);
    if (!valor1) {
      outcome.innerText += valueFloat;
      outcome.title = outcome.innerText;
      operacion._valueA = outcome.innerText;
    } else {
      outcome.innerText += valueFloat;
      outcome.title = outcome.innerText;
      operacion._valueB = outcome.innerText;
    }
  }
  if (e.target.matches("#coma")) {
    if (!numeroTieneComa) {
      outcome.innerText += ".";
      numeroTieneComa = true;
    }
  }
  if (e.target.matches(".operator")) {
    if (operacion._result != 0) {
      operacion._valueA = operacion._result;
      operacion._result = 0;
    }
    valor1 = true;
    numeroTieneComa = false;
    operacion._operando = e.target.value;
    current.innerText = operacion._valueA + " " + operacion._operando;
    outcome.innerText = "";
  }
  if (e.target.matches("#igual")) {
    setCalculo(operacion._valueA, operacion._valueB, operacion._operando);
    console.log(operacion._result);
    outcome.innerText = operacion._result;
    current.innerText = `${operacion._valueA} ${operacion._operando} ${operacion._valueB} =`;
  }
  if (e.target.matches("#borrar")) {
    let str = outcome.innerText.slice(0, -1);
    outcome.innerText = str;
  }
});

function setCalculo(valor1, valor2, operador) {
  let valor1Float = parseFloat(valor1);
  let valor2Float = parseFloat(valor2);
  if (operador === "+") {
    operacion._result = sumar(valor1Float, valor2Float);
  }
  if (operador === "x") {
    operacion._result = multiplicar(valor1Float, valor2Float);
  }
  if (operador === "-") {
    operacion._result = restar(valor1Float, valor2Float);
  }
  if (operador === "/") {
    operacion._result = dividir(valor1Float, valor2Float);
  }
}
function sumar(valor1, valor2) {
  return valor1 + valor2;
}
function restar(valor1, valor2) {
  return valor1 - valor2;
}
function multiplicar(valor1, valor2) {
  return valor1 * valor2;
}
function dividir(valor1, valor2) {
  return valor1 / valor2;
}

function limpiar() {
  operacion._valueA = 0;
  operacion._valueB = 0;
  operacion._result = 0;
  operacion._operando = "";
  outcome.innerText = "";
  current.innerText = "";
  valor1 = false;
  valor2 = true;
  numeroTieneComa = false;
}
