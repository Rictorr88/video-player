const $video = document.querySelector("#video")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $backward = document.querySelector("#backward")
const $forward = document.querySelector("#forward")

$play.addEventListener ("click", handlePlay)
$pause.addEventListener ("click", handlePause)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
console.log("le diste clic al boton de play")
}

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
console.log("le diste clic al boton de pausa")
}

$backward.addEventListener ("click", handleBackward)

function handleBackward () {
    $video.currentTime = $video.currentTime - 10
 console.log("le diste clic a retroceder 10 segundos", $video.currentTime)   
}

$forward.addEventListener ("click", handleForward)

function handleForward () {
    $video.currentTime = $video.currentTime + 10
    console.log('le diste click a adelantar 10 segundos', $video.currentTime)

}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded () {
    $progress.max = $video.duration
    console.log('Ha cargado mi video', $video.duration)
}

function handleTimeUpdate() {
    // console.log('Tiempo Actual', $video.currentTime)
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}