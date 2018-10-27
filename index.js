var fs      = require('fs')
var cheerio = require('cheerio')

const dir = './json/'
const fileList = fs.readdirSync(dir)

let result = []

for (var i = 0, l = fileList.length; i < l; i++) {
	const path = dir + fileList[i]
	const json = JSON.parse(fs.readFileSync(path).toString())

	result.push(json)
}

fs.writeFileSync('./result-data.json', JSON.stringify(result, 0, '\t'))
