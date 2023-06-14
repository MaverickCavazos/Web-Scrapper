const PORT = 3002
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express();


const url = ''



axios(url).then(response => {
    const html = response.data

    const $ = cheerio.load(html)
    const buildInfo = []


    $('.r-qvutc0', html).each(function(){
       const title = $(this).find('h2').text()
       const url = $(this).attr('href')
        console.log(title)
       buildInfo.push({title,url})
    })
console.log(buildInfo)
}).catch(error => console.log(error))








app.listen(PORT, () => console.log(`Server running on ${PORT}`) )