input.onGesture(Gesture.ScreenUp, function () {
    music.playMelody("- - - - C - - - ", 120)
    game.removeLife(1)
    changeWord()
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playMelody("- C5 - - - - - - ", 120)
    game.addScore(1)
    changeWord()
})
function changeWord () {
    word = text_list._pickRandom()
}
let word = ""
let text_list: string[] = []
text_list = [
"frozen",
"encanto",
"turning red",
"wall-e",
"wreck it ralph",
"coraline",
"paranorman"
]
game.startCountdown(30000)
changeWord()
basic.forever(function () {
    basic.showString("" + (word))
})
