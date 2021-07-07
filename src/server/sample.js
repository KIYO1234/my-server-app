// console.log('My first app !');

const fs = require('fs')

// サーバーを立ち上げた瞬間に何か操作したい => コマンドライン引数を取得する
// console.log(process.argv[2])
const request = process.argv[2];
const {read, write} = require('./helper')
if (request === 'read') {
    read();
} else if (request === 'write') {
    write();
} else {
    console.error('エラー：read or write parameter needed')
}