let baseline = input.magneticForce(Dimension.Strength)
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength)) > baseline) {
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    } else {
        basic.showIcon(IconNames.Sad)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    }
})
