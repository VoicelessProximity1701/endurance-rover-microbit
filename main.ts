enum RadioMessage {
    message1 = 49434,
    Forward = 16348,
    Left = 14947,
    Right = 32391
}
input.onPinPressed(TouchPin.P0, function () {
    radio.sendMessage(RadioMessage.Forward)
})
radio.onReceivedMessage(RadioMessage.Forward, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P5, 0)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P6, 0)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P7, 0)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P8, 0)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P9, 0)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P10, 0)
    ContinuousServo.turn_off_motor(DigitalPin.P5)
    ContinuousServo.turn_off_motor(DigitalPin.P6)
    ContinuousServo.turn_off_motor(DigitalPin.P7)
    ContinuousServo.turn_off_motor(DigitalPin.P8)
    ContinuousServo.turn_off_motor(DigitalPin.P9)
    ContinuousServo.turn_off_motor(DigitalPin.P10)
    basic.clearScreen()
})
radio.onReceivedMessage(RadioMessage.Right, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P5, 100)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P6, 100)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P7, 100)
    ContinuousServo.turn_off_motor(DigitalPin.P5)
    ContinuousServo.turn_off_motor(DigitalPin.P6)
    ContinuousServo.turn_off_motor(DigitalPin.P7)
    basic.clearScreen()
})
radio.onReceivedMessage(RadioMessage.Left, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P8, 100)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P9, 100)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P10, 100)
    ContinuousServo.turn_off_motor(DigitalPin.P8)
    ContinuousServo.turn_off_motor(DigitalPin.P9)
    ContinuousServo.turn_off_motor(DigitalPin.P10)
    basic.clearScreen()
})
let dist = 0
radio.setGroup(101)
basic.forever(function () {
    dist = sonar.ping(
    DigitalPin.P16,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    if (dist < 8) {
    	
    }
})
