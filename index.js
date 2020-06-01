const uniqueFilterFactory = require('./uniqueFilter')

const uniqueFilter = uniqueFilterFactory()
const numberList = [1, 2, 3, 5, 3, 2, 1];

const result = uniqueFilter.setValues(numberList).inspect().getUniqueNumber()

// console.group()
// console.log('===================================')
// console.log('Histórico: ', result)
// console.log('===================================')
// console.groupEnd()

console.group()
console.log('===================================')
console.log(`Valor único: ${result.uniqueValue}`)
console.log('===================================')
console.groupEnd()