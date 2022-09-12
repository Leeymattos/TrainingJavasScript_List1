const prompt = require('prompt-sync')()

const Px1 = parseInt(prompt('Digite o valor x1 do primeiro ponto: '))

const Py1 = parseInt(prompt('Digite o valor y1 do primeiro ponto: '))

const Px2 = parseInt(prompt('Digite o valor x2 do primeiro ponto: '))

const Py2 = parseInt(prompt('Digite o valor y2 do primeiro ponto: '))


const D = Math.floor(Math.sqrt((Math.pow(Px2 - Px1, 2) + Math.pow(Py2 - Py1, 2))))

console.log(`A distância dos dois pontos é: ${D}`)
