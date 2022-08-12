let sec = 0
let min = 0
let hr = 0
let interval

const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const stopBtn = document.getElementById('stop')
const body = document.getElementsByTagName('body')

document.body.style.backgroundColor = 'bisque'


function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

startBtn.addEventListener('click', function start(){
    watch()
    interval= setInterval(watch,10)


})


pauseBtn.addEventListener('click', function pause(){
    clearInterval(interval)

})


stopBtn.addEventListener('click', function stop(){
    clearInterval(interval)
    sec = 0
    min = 0
    window.alert("You've stopped at: "+document.getElementById('watch').innerText)
    document.getElementById('watch').innerText='00:00:00'

})


function watch(){
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min == 60){
            min = 0
            hr++
        }
    }
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}