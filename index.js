// const createStatementData = require('./createStatementData')

// const plays = {
//   hamlet: { name: "Hamlet", type: "tragedy" },
//   asLike: { name: "As You Like It", type: "comedy" },
//   othello: { name:  "Othello", type: "tragedy" },
// };
// exports.plays = plays;

// const invoice = {
//   customer: "BigCo", performances:
//   [
//     { playID: "hamlet", audience: 55 },
//     { playID: "asLike", audience: 35 },
//     { playID: "othello", audience: 40  }
//   ]
// }

// function htmlStatement(invoice, plays) {
//   return renderHtml(createStatementData(invoice, plays))
// }

// function renderHtml(data) {
//   let result = `Statement for ${data.customer}\n`
//   for (let perf of data.performances) {
//     result += `${perf.play.name}: ${formatAsUSD(perf.amount)} (${perf.audience} seats)\n`
//   }
//   result += `Amount owed is ${formatAsUSD(data.totalAmount)}\n`
//   result += `You earned ${data.totalVolumeCredits} credits\n`
//   return result
  
//   function formatAsUSD(aNumber) {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency", currency: "USD", minimumFractionDigits: 2
//     }).format(aNumber / 100)
//   }
// }
// const content = htmlStatement(invoice, plays)

// console.log(content)
// module.exports = {
//   plays,
//   invoice
// }

// const fetch = require('node-fetch')

// const a = 'brian'

// const b = String('brian')


// console.log('a' , a)
// console.log('b' , b)



function Stack() {
  let result = {}, target = []

  result.push = ele => target.push(ele) // 添加元素在最後

  result.pop = () => target.pop()  // 移除最後一個，並回傳它

  result.peek = () => target[target.length - 1]  // 回傳 stack 最上面的值

  result.isEmpty = () => target.length === 0 // 判斷 stack 是否為空
  
  result.size = () => target.length  // 回傳 stack 長度
  
  result.clear = () => target.length = 0 // 將 stack 清空
  
  return result
}

// const stack = Stack()
// stack.push(1)
// stack.push(1)
// stack.push(1)
// console.log(stack.clear())
// console.log(stack.size())

function convertBy2(num) {
  if (num === 0) { return 0 }

  let stack = new Stack(), remain, result = ''

  while (num > 0) {
    remain = Math.floor(num % 2)
    stack.push(remain)
    num = Math.floor(num / 2)
  }

  while (!stack.isEmpty()) {
    result += stack.pop().toString()
  }

  return result
}

// console.log('test', convertBy2(10))

function convertByBase(num, base) {
  if (num === 0) { return 0 }

  let stack = new Stack(),
      remain,
      result = '',
      mapDigitsStr = '0123456789ABCDEF'
  
  while (num > 0) {
    remain = Math.floor(num % base)
    stack.push(remain)
    num = Math.floor(num / base)
  }

  while (!stack.isEmpty()) {
    result += mapDigitsStr[stack.pop()]
  }
  
  return result
}

console.log('rest1', convertByBase(2, 16))

