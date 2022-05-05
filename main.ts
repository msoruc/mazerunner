hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setPositionServo(FourPort.One, input.rotation(Rotation.Pitch))
    hummingbird.setPositionServo(FourPort.Two, input.rotation(Rotation.Pitch))
})
