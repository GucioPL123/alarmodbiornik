radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(30)
    basic.clearScreen()
    if (locked == 1 && receivedNumber == 1) {
        tone()
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
function tone () {
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    basic.pause(10)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
input.onButtonPressed(Button.A, function () {
    locked = 1
})
input.onButtonPressed(Button.B, function () {
    locked = 0
})
let locked = 0
locked = 0
