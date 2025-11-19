const headerInfo = document.getElementById('headerInfo')
const headerConsole = document.getElementById('headerConsole')
const mainClicks = document.getElementById('mainClicks')
const mainSpeed = document.getElementById('mainSpeed')
const mainBlock = document.getElementById('mainBlock')

let clicks = 0
let clicksPerSec = 0
let clicksTime = []

mainBlock.addEventListener(('click'), () => {
    clicks += 1
    mainClicks.innerHTML = clicks
    clicksTime.push(Date.now())
})

function clearClicksTime(){
    while(clicksTime.length != 0 && clicksTime[0] < Date.now() - 1000){
        clicksTime.shift()
    }
    mainSpeed.innerHTML = clicksTime.length
}

setInterval(clearClicksTime, 100)

