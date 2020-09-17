const puppeteer = require("puppeteer");

const Telegraf=require('telegraf');
const {Composer}  = require('micro-bot')

const devmode = false;

//const bot = new Telegraf('1160311103:AAFpD41d7v7jaf8ECHTXS9WX_zVZKtVkHGI') 
const bot = new Composer


const seasonalGarden = async ()=>{
    
    // open the headless browser
    var browser = await puppeteer.launch({ args: ['--no-sandbox'], headless:!devmode })

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
            return document.querySelector('div > table > tbody > tr:nth-child(6) > td.s14').innerText
        })
        var nextSeasonDay = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(6) > td:nth-child(8)').innerText
        })
        var nextSeasonTime = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(6) > td:nth-child(6)').innerText
        })
        var nextSeason = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(6) > td.s11').innerText
        })

        await page.close()
        return await `${time}\n\nIt is now ${season}, ends in ${seasonLeft}\n\n${nextSeason.slice(11, nextSeason.length-1)} starts at ${nextSeasonTime} on ${nextSeasonDay}`
    } 
    
    return (await sendmsg())
}

const balacksCove = async ()=>{
    
    // open the headless browser
    var browser = await puppeteer.launch({ args: ['--no-sandbox'], headless:!devmode })

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

        var tide = await page.evaluate(()=>{
            return document.querySelector('td.s20').innerText
        })

        var changesIn = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(13) > td.s14').innerText
        })

        var nextTide = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(13) > td.s21').innerText
        })

        var nextTideDay = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(13) > td:nth-child(8)').innerText
        })
        var nextTideTime = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(13) > td:nth-child(6)').innerText
        })
       
        await page.close()
        return await `${time}\n\nThe tide is ${tide} for another ${changesIn}\n\n${nextTide.slice(11, nextTide.length-1)} at ${nextTideTime} on ${nextTideDay}`
    } 
    return (await sendmsg())
}

const forbiddenGrove = async ()=>{
    
    // open the headless browser
    var browser = await puppeteer.launch({ args: ['--no-sandbox'], headless:!devmode })

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

        var state = await page.evaluate(()=>{
            return document.querySelector('td.s24').innerText
        })

        var timeLeft = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(21) > td.s14').innerText
        })

        var changeTime = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(21) > td:nth-child(6)').innerText
        })

        var changeDay = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(21) > td:nth-child(8)').innerText
        })
       
        await page.close()
        return await `${time}\n\nForbidden Grove is ${state} for another ${timeLeft}\n\n${((state=='OPEN')?'Closes':'Opens')} at ${changeTime} on ${changeDay}`
    } 
    return (await sendmsg())
}

const toxicSpill = async ()=>{
    
    // open the headless browser
    var browser = await puppeteer.launch({ args: ['--no-sandbox'], headless:!devmode })

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

        var level = await page.evaluate(()=>{
            return document.querySelector('td.s42').innerText
        })

        var timeLeft = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(37) > td.s14').innerText
        })

        var changeTime = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(37) > td:nth-child(6)').innerText
        })

        var changeDay = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(37) > td:nth-child(8)').innerText
        })

        var nextLevel = await page.evaluate(()=>{
            return document.querySelector('div > table > tbody > tr:nth-child(37) > td.s11').innerText
        })
       
        await page.close()
        return await `${time}\n\nToxic Spill level: ${level} for another ${timeLeft}\n\n${nextLevel.slice(11,nextLevel.length-1)} at ${changeTime} on ${changeDay}`
    } 
    return (await sendmsg())
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const duration = 2000

var about = ()=>{
    return `Made by @EtherealDrift\nGithub repo: https://github.com/Incandescere/MHTImerBot`
}

var startText = ()=>{
    return `/help for list of commands\n/donate to send me stuff`
}

var helpText = ()=>{
    return '/timers for timers'
}

var helpMe = ()=>{
    return 'I\'m not just poor, son. I\'m destitute.\n\nhttps://www.mousehuntgame.com/supplytransfer.php?fid=1000023506993941'
}

bot.command('start', (ctx)=>{
    ctx.reply(startText())
})


bot.command('donate', (ctx)=>{
    console.log('donate recd')
    ctx.reply(helpMe())
})

bot.command('dodog', (ctx)=>{
    console.log('dodog recd')
    ctx.reply('https://www.mousehuntgame.com/profile.php?snuid=1578463878')
})

bot.command('about', (ctx)=>{
    console.log('about cmd recd')
    ctx.reply(about())
})

bot.command('help', async (ctx)=>{
    ctx.reply(helpText())
})

bot.command('timers', (ctx)=>{
    console.log('timers recd')
    ctx.reply('Select Location', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Seasonal Garden', callback_data: "SG"},
                {text: 'Balack\'s Cove', callback_data: "BC"}],
                [{text: 'Forbidden Grove', callback_data: "FG"},
                {text: 'Toxic Spill', callback_data: "TX"}]
            ]
        }
    })
})


bot.action('SG', async (ctx)=>{
    console.log('sg cmd recd')
    ctx.reply('fetching latest info...')
    ctx.reply(await seasonalGarden())
})

bot.action('BC', async (ctx)=>{
    console.log('cove cmd recd')
    ctx.reply('fetching latest info...')
    ctx.reply(await balacksCove())
})

bot.action('FG', async (ctx)=>{
    console.log('fg cmd recd')
    ctx.reply('fetching latest info...')
    ctx.reply(await forbiddenGrove())
})

bot.action('TX', async (ctx)=>{
    console.log('toxic cmd recd')
    ctx.reply('fetching latest info...')
    ctx.reply(await toxicSpill())
})


//bot.launch()
module.exports=bot