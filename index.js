const createStatementData = require('./createStatementData')

const plays = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  asLike: { name: "As You Like It", type: "comedy" },
  othello: { name:  "Othello", type: "tragedy" },
}

const invoice = {
  customer: "BigCo", performances:
  [
    { playID: "hamlet", audience: 55 },
    { playID: "asLike", audience: 35 },
    { playID: "othello", audience: 40  }
  ]
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays))
}

function renderHtml(data) {
  let result = `Statement for ${data.customer}\n`
  for (let perf of data.performances) {
    result += `${perf.play.name}: ${formatAsUSD(perf.amount)} (${perf.audience} seats)\n`
  }
  result += `Amount owed is ${formatAsUSD(data.totalAmount)}\n`
  result += `You earned ${data.totalVolumeCredits} credits\n`
  return result
  
  function formatAsUSD(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency", currency: "USD", minimumFractionDigits: 2
    }).format(aNumber / 100)
  }
}

const content = htmlStatement(invoice, plays)

console.log(content)