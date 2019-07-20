const createStatementData = require('./createStatementData')
const allData = require('./index')
const { plays, invoice } = allData

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

test('createStatementData function result', () => {
  expect(createStatementData(invoice, plays).customer).toEqual('BigCo')
  expect(createStatementData(invoice, plays).totalAmount).toEqual(173000)
  expect(createStatementData(invoice, plays).totalVolumeCredits).toEqual(47)
  expect(createStatementData(invoice, plays).performances[0]).toMatchObject({
    playID: 'hamlet',
    audience: 55,
    play: { name: 'Hamlet', type: 'tragedy' },
    amount: 65000,
    volumeCredits: 25
  })
  expect(createStatementData(invoice, plays).performances[1]).toMatchObject({
    playID: 'asLike',
    audience: 35,
    play: { name: 'As You Like It', type: 'comedy' },
    amount: 58000,
    volumeCredits: 12
  })
  expect(createStatementData(invoice, plays).performances[2]).toMatchObject({
    playID: 'othello',
    audience: 40,
    play: { name: 'Othello', type: 'tragedy' },
    amount: 50000,
    volumeCredits: 10
  })
})

test('htmlStatement function result', () => {
  const parsePlaysArr = htmlStatement(invoice, plays).split('\n')
  expect(parsePlaysArr).toContain('Hamlet: $650.00 (55 seats)')
  expect(parsePlaysArr).toContain('As You Like It: $580.00 (35 seats)')
  expect(parsePlaysArr).toContain('Othello: $500.00 (40 seats)')
  expect(parsePlaysArr).toContain('Amount owed is $1,730.00')
  expect(parsePlaysArr).toContain('You earned 47 credits')
})
