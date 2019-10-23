// 建立基礎型態，例如金額、體重、長度等等
// 給物理單位明確的型態，才不會發生例如：公分加公尺、錢只是簡單的數字
// “字串”常是其中的異味來源

// 用到的資料
const orders = [
  { id: 0, create_at: '2018-08-06' },
  { id: 1, create_at: '10-10-2019' },
  { id: 3, create_at: 1565222400000 },
  { id: 4, create_at: 'Thu Aug 08 2019 10:30:00 GMT+0800' },
]

// 要找出比現在早的時間點

// before 直接拿了就比較
// const canAddReviewOrders = orders.filter(order => order.create_at < new Date())
// console.log('res', canAddReviewOrders)

// after 轉換成一樣的基準再進行比較
const canAddReviewOrders = orders.filter(order => new Date(order.create_at) < new Date())
console.log('res', canAddReviewOrders)