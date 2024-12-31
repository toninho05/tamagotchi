input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString("oi aqui é o tamagotchi do tonio05")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    led.plotBarGraph(
    2,
    2
    )
    toletos += -1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(fome)
})
let toletos = 0
let fome = 0
radio.setGroup(1)
music.play(music.stringPlayable("C D E G A F C C5 ", 120), music.PlaybackMode.UntilDone)
fome = 0
basic.forever(function () {
    if (input.lightLevel() == 0) {
        basic.showIcon(IconNames.Asleep)
        fome = 9
        toletos = 0
    } else if (input.lightLevel() > 0) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        fome += 5
        game.addLife(5)
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            . # . # .
            . . # . .
            `)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (fome == 0) {
        basic.showString("fome")
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (fome > 0) {
        basic.pause(200000)
        toletos += fome
        basic.showLeds(`
            . # # . .
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (fome == 0) {
        basic.pause(100000)
        game.removeLife(fome)
        basic.showIcon(IconNames.Skull)
        basic.pause(100)
        basic.showIcon(IconNames.Skull)
        basic.showString("clique em reset")
    }
})
