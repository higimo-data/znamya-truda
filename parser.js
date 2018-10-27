var fs      = require('fs')
var cheerio = require('cheerio')

const dir = './novosti/'
const resultDir = './json/'

const fileList = fs.readdirSync(dir)

for (var i = 0, l = fileList.length; i < l; i++) {
	const path = dir + fileList[i]
	const resPath = (resultDir + fileList[i]).replace('html', 'json')
	const html = fs.readFileSync(path).toString()
	var $ = cheerio.load(html.toString(), {
		normalizeWhitespace: true,
		decodeEntities: false,
	})
	const article = $('.meedcol')
	const title = $('h1').text()
	const date = article.find('.date').text()
	
	article.find('.pyt').remove()
	article.find('#comments').remove()
	article.find('.date').remove()
	article.find('.view').remove()
	article.find('.clear').remove()
	article.find('.com').remove()
	article.find('h1').remove()

	const text = article.html()
		.replace(/ style=".*?"/g, '')
		.replace(/<!--.*?-->/g, '')
		.replace(/\n+/g, '\n')

	const resObj = {
		title,
		date,
		text,
	}

	fs.writeFileSync(resPath, JSON.stringify(resObj, 0, '\t'))
}

