var http    = require('http')
var cheerio = require('cheerio')
var fs      = require('fs')

for (var i = 0; i <= 1920; i += 10) {
	var URL = `http://znamiatruda.ru/novosti/?curPos=${i}`

	console.log(URL)
	
	http.get(URL, res => {
		res.on('data', data => {
			var $ = cheerio.load(data.toString(), {
				normalizeWhitespace: true,
				decodeEntities: false,
			})
			
			$('[href^="/novosti/"]').each((i, item) => {
				fs.appendFileSync('./links.txt', `${$(item).attr('href')}\n`, e => {
					console.log(e)
				})
			})
		})
	}, {}).on('error', (e) => {
		console.error(e)
	})
}