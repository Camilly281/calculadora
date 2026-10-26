alert("Coloque dois numeros na calculadora")

let numero1 = Number(prompt("Dite o primeiro numero:"))
let numero2 = Number(prompt("Digite o segundo numero:"))

let resultado1 = numero1 + numero2
let resultado2 = numero1 - numero2
let resultado3 = numero1 * numero2
let resultado4 = numero1 / numero2

alert(
`Resultado soma \n ${numero1} + ${numero2} = ${resultado1}
Resultado subtração \n ${numero1} - ${numero2}  = ${resultado2}
Resultado divisão \n ${numero1} * ${numero2}  = ${resultado3}
Resultado multiplicação\n ${numero1} / ${numero2}  = ${resultado4}`
)