const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}
const fs = require('fs');
const read = () => {
    fs.readFile('sample.json', 'utf8', (err, data) => {
        console.log(data)
    })
}
const write = () => {
    fs.writeFile('sample.json', JSON.stringify('HELLO'), () => { })
    console.log('書き出し完了')
}

module.exports = { add, subtract, read, write }