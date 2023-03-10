// função do erro caso não seja um número digitado //
 export function notANumber(value) {
  return isNaN(value) || value ==""
}

// Cálculo do IMC//
export function calculateIMC(weight, height) {
  return(weight / ((height / 100) ** 2)).toFixed(2)
}