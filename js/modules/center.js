const headerInfo = document.getElementById('headerInfo')
const headerConsole = document.getElementById('headerConsole')
const mainClicks = document.getElementById('mainClicks')
const mainSpeed = document.getElementById('mainSpeed')
const mainBlock = document.getElementById('mainBlock')

let clicks = localStorage.getItem("clicks") != null ? +localStorage.getItem("clicks") : 0;
let clicksPerSec = 0
let clicksTime = []

mainClicks.innerHTML = clicks;

mainBlock.addEventListener(('click'), () => {
    clicks += 1
    mainClicks.innerHTML = clicks
    localStorage.clicks = clicks; //save to local
    clicksTime.push(Date.now())
})

function clearClicksTime() {
    while (clicksTime.length != 0 && clicksTime[0] < Date.now() - 1000) {
        clicksTime.shift()
    }
    mainSpeed.innerHTML = clicksTime.length
}

setInterval(clearClicksTime, 100)

