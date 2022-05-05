hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setPositionServo(FourPort.One, input.acceleration(Dimension.X) / 10)
    hummingbird.setPositionServo(FourPort.Two, input.acceleration(Dimension.Y) / 10)
})
