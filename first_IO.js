var fs = require('fs')

var str = fs.readFileSync(process.argv[2]).toString()

var n = str.split("\n")

var ans = n.length - 1

console.log(ans)


