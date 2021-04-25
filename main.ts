input.onButtonPressed(Button.A, function () {
    Go = true
})
input.onButtonPressed(Button.B, function () {
    Go = false
})
let item = false
let Go = false
music.playMelody("C - E - G C5 A C5 ", 120)
basic.showString("DFM Auto1")
basic.forever(function () {
    if (Go == true) {
        if (DFRobotMaqueenPlus.ultraSonic(PIN.P0, PIN.P1) < 35 && DFRobotMaqueenPlus.ultraSonic(PIN.P0, PIN.P1) != 0) {
            item = Math.randomBoolean()
            if (item == true) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 100)
                basic.pause(800)
            }
            if (item == false) {
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 100)
                basic.pause(800)
            }
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
        }
    }
})
