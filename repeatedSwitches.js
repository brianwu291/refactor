/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 16:05:35
 * @LastEditTime: 2019-08-08 16:05:35
 * @LastEditors: your name
 */
const data = {
  name: 'Brian',
  id: 123,
}

// function judge(input) {
//   if (input.name === 'Brian') {
//     if (input.id < 120) {
//       return 'id is smaller than 120'
//     } else {
//       return 'id is bigger than 120'
//     }
//   } else {
//     return 'not Brian' 
//   }
// }

function judge(input) {
  if (input.name === 'Brian') {
    return input.id < 120 ? 'id is smaller than 120' : 'id is bigger than 120'
  }
  return 'not Brian'
}



console.log(judge(data))
