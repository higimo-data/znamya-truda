var http    = require('http')
var cheerio = require('cheerio')
var fs      = require('fs')

const data = fs.readFileSync('./links.txt').toString()

const arr = data.split('\n')

let result = {}

for (var i = 0, l = arr.length; i < l; i++) {
	((link) => {
		const path = `.${link}`
		if (!!result[path]) {
			return
		}
		if (fs.existsSync(path)) {
			result[path] = true
			return
		}

		http.get(`http://znamiatruda.ru${link}`, res => {
			const statusCode = res.statusCode
			const contentType = res.headers['content-type']

			let error
			if (statusCode !== 200) {
				error = new Error(`Request Failed.\nStatus Code: ${statusCode}`)
			}
			if (error) {
				console.log(error.message)
				res.resume()
				return
			}

			res.setEncoding('utf8')
			let rawData = ''
			res.on('data', (chunk) => rawData += chunk)
			res.on('end', () => {
				try {
					fs.writeFileSync(path, rawData, error => {
						console.log(error)
					})
					result[path] = true
					console.log(path)
				} catch (error) {
					console.log(error.message)
				}
			})
		}).on('error', (error) => {
  			console.log(`Got error: ${error.message}`);
		})
	})(arr[i])
}