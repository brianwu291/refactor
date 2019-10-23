const orders = [
  { speed: 23 },
  { speed: 34 },
  { speed: 33 },
  { speed: 12 },
  { speed: 56 },
]

// function filterHigherThan30(input) {
//   let result =[]
//   for (let i = 0; i < input.length; i++) {
//     if(input[i].speed > 30) { result.push(input[i]) }
//   }
//   return result
// }

function filterHigherThan30(input) {
  return input.filter(order => order.speed > 30)
}

console.log(filterHigherThan30(orders))
