const dataClumps = {
  name: 'Brian',
  id: 123,
  gender: 'male',
  age: 24,
  address: 'cccfevseafvefvegbeqt',
}
// 把“成群出現”的資料團建立出一個類別
// 簡化函數呼叫，縮短參數列
// before refactor
function renderPerson(name, id, gender, age, address) {
  console.log('name and id', { name, id })
  if (gender === 'male') {
    console.log('gender', gender)
  } else {
    console.log('gender', 'female')
  }
  console.log('age and address', age, address)
}
renderPerson('Brian', 123, 'male', 24, 'csfvefsasadfb')

console.log('--------')

// post refactor
class Person {
  constructor(name, id, gender, age, address) {
    this.name = name
    this.id = id
    this.gender = gender
    this.age = age
    this.address = address
  }
  renderHTML() {
    console.log('name and id', { name: this.name, id: this.id })
    if (this.gender === 'male') {
      console.log('gender', this.gender)
    } else {
      console.log('gender', 'female')
    }
    console.log('age and address', this.age, this.address)
  }
}

function renderPersonRefactor() {
  const brianObj = new Person('Brian', 123, 'male', 24, 'csfvefsasadfb')
  brianObj.renderHTML()
}

renderPersonRefactor()
