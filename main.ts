bluetooth.startUartService()
basic.showString("h!")
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    bluetooth.uartWriteNumber(input.lightLevel())
})
