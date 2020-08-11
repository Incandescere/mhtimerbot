const puppeteer = require("puppeteer");

//const Telegraf=require('telegraf');
const {Composer}  = require('micro-bot')

//const bot = new Telegraf('1160311103:AAFpD41d7v7jaf8ECHTXS9WX_zVZKtVkHGI')
const bot = new Composer

const seasonalGarden = async ()=>{
    
    // open the headless browser
    var browser = await puppeteer.launch({ args: ['--no-sandbox'], headless:true })

    // open a new page
    var page = await browser.newPage()

    //link is mhtimers for gmt +8, Singapore time
    const url = 'https://sites.google.com/site/mhtimerslinks/8'

    await page.goto(url, {waitUntil:"networkidle2"})

    var fLayer = async ()=>{
        return await page.evaluate(()=>{
            var fLink = document.querySelector('#sites-canvas-main-content > div > table > tbody > tr > td.sites-layout-tile.sites-tile-name-content-1 > div > div.sites-embed-align-left-wrapping-off > div > div>iframe').src
            return fLink
        })
    }

    var first = await fLayer()
    //console.log(first)

    await page.goto((first), {waitUntil:"networkidle2"})

    var sLayer = async ()=>{
        return await page.evaluate(()=>{
            var sLink = document.querySelector('#dest > iframe').src.trim()
            return sLink
        })
    }
    
    var second = await sLayer()
    //console.log(second)

    await page.goto((second), {waitUntil:"networkidle2"})

    var sendmsg = async ()=>{
        var time = await page.evaluate(()=>{
            var timeArr = []
            document.querySelectorAll('td.s4').forEach(x=>{
                timeArr.push(x.innerText.trim()+' ')
            })
            return timeArr.join(' ')
        })

        var season = await page.evaluate(()=>{
            return document.querySelector('td.s12').innerText
        })
        var seasonLeft = await page.evaluate(()=>{
            return document.querySelector('td.s14').innerText
        })
        var nextSeasonDay = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(6) > td:nth-child(8)').innerText
        })
        var nextSeasonTime = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(6) > td:nth-child(6)').innerText
        })
        await page.close()
        return await `${time}\n\nCurrent season is ${season} ending in ${seasonLeft}\n\nSeason changes on ${nextSeasonDay} at ${nextSeasonTime}`
    } 
    
    return (await sendmsg())
}


var about = ()=>{
    return `Made by @EtherealDrift\n\nGithub: https://github.com/Incandescere/`
}

bot.command('about', (ctx)=>{
    console.log('about cmd recd')
    ctx.reply(about())
})

bot.command('sg', async (ctx)=>{
    console.log('sg cmd recd')
    ctx.reply('fetching latest info...')
    ctx.reply(await seasonalGarden())
})

// bot.command('help', async (ctx)=>{
//     ctx.reply
// })

//bot.launch()
module.exports=bot