input.onButtonPressed(Button.A, function () {
    if (Game == true) {
        Game = false
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Game == true) {
        Game = false
        basic.showLeds(`
            # # . . .
            # . # . .
            # # # . .
            # . # . .
            # # . . .
            `)
    }
})
let Game = false
Game = false
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(randint(2000, 5000))
Game = true
basic.clearScreen()
