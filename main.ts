/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program ...
*/

let firstNumber = randint(0, 99)
let secondNumber = randint(0, 99)

input.onButtonPressed(Button.A, function() {
    basic.showNumber(firstNumber)
})
input.onButtonPressed(Button.B, function() {
    basic.showNumber(secondNumber)
})

input.onGesture(Gesture.Shake, function() {
    if (firstNumber < secondNumber) 
        basic.showString(`${firstNumber} < ${secondNumber}`)
    else if (firstNumber > secondNumber)
        basic.showString(`${firstNumber} > ${secondNumber}`)
})