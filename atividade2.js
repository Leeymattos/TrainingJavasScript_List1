const prompt = require('prompt-sync')()

const totaldias = parseInt(prompt('Quantos dias você já viveu? '))

const anos = Math.trunc(totaldias / 365)

const meses = Math.trunc((totaldias % 365) / 30)

const dias = (totaldias % 365) % 30

console.log(`Você já viveu ${anos} anos e ${meses} meses e ${dias} dias`)