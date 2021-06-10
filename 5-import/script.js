//5-1 Import

import { hello } from './functions.js';
import { showError } from './functions.js';
import anonyme from './functions.js';

hello()
showError("Non, ce n'est pas une erreur")
    //anonyme()

// 5-2 Export
const [a, b] = [7, 9]

import { sum } from './math.js'
import { sub } from './math.js'
import { multiply } from './math.js'
import { divide } from './math.js'
import { pow } from './math.js'

console.log(sum(a, b));
console.log(sub(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));
console.log(pow(a, b));
import { hello } from './functions.js' //on importe la fonction hello depuis functions.js
import { showError } from './functions.js'
import anonyme from './functions.js'

hello() //on l'appelle
showError('erreur')
    // anonyme()

// 5-2 Export

import * as Math from './math.js'
const [a, b] = [7, 9]
console.log(Math.sum(a, b))