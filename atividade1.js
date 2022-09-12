const prompt = require('prompt-sync')()

const anos = parseInt(prompt('Quantos anos você já viveu? '))

const meses = parseInt(prompt('Quantos meses você já viveu? '))

const dias = parseInt(prompt('Quantos dias você já viveu? '))

const resultadoDias = ((anos * 365) + (meses * 30) + dias)

console.log(`Você já viveu ${resultadoDias} dias.\n`)