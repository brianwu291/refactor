const axios = require('axios')
// 一般的 promise
const APIKEY = 'CWB-CE69F0E3-CF87-48D7-BE4C-53EC8603AF6A'
const baseUri = 'https://opendata.cwb.gov.tw/api'
const predictIn36Hours = '/v1/rest/datastore/F-C0032-001'
const params =  {
  Authorization: APIKEY,
  limit: '1',
  format: 'JSON',
  locationName: '宜蘭縣',
  elementName: 'MinT',
}
const normalPromise = new Promise((resolve, reject) => {
  axios.get(`${baseUri}${predictIn36Hours}`, { params }).then(res => {
    if (res.status === 200) { resolve(res.data) }
    else { reject(new Error('cannot get')) }
  })
})


// 簡單實作 promise

// 首先創建一個物件，作為狀態判斷、執行函數的起點。
const promiseObj = {
  state: 'pending',
  value: undefined,
  reason: undefined,
}

// executor function
const resolver = (resolve, reject) => {
  resolve(10)
}

// 藏在建構式內部的函數，負責改變 promise 物件狀態，並決定回傳值
const _resolve = (promise, value) => {
  promise.state = 'onFulfilled'
  promise.value = value
}
const _reject = (promise, reason) => {
  promise.state = 'onRejected'
  promise.reason = reason
}

//初始化 promise 物件的函數
const initPromise = (promise, resolver) => {
  const res = value => _resolve(promise, value)
  const rej = reason => _reject(promise, reason)

  try {
    resolver(res,rej)
  } catch (e) {
    _reject(promise, e)
  }
  return promise
}
console.log('result', initPromise(promiseObj, resolver))

function *async() {
  let result = 0
  result += yield result
  result += yield result
  yield result
}
const asyncTer = async()
console.log(asyncTer.next())
console.log(asyncTer.next(1))
console.log(asyncTer.next(1))

// function *asyncPromise() {
//   let result = 0
//   yield setTimeout(() => {
//     result++
//   }, 2000)
//   yield result
// }

// const asyncPromiseTer = asyncPromise()
// console.log(asyncPromiseTer.next())
// console.log(asyncPromiseTer.next())
