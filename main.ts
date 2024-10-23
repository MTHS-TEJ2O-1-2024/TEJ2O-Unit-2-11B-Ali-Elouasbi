/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program ...
*/

//setup
basic.showIcon(IconNames.Happy)

//variables
let firstNumber = randint(0, 99)
let secondNumber = randint(0, 99)

//Button A
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showNumber(firstNumber)
    basic.showIcon(IconNames.Happy)
})

//Button B
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showNumber(secondNumber)
    basic.showIcon(IconNames.Happy)
})

//Shake
input.onGesture(Gesture.Shake, function() {
   basic.clearScreen()
    if (firstNumber < secondNumber) 
        basic.showString(`${firstNumber} < ${secondNumber}`)
    else if (firstNumber > secondNumber)
        basic.showString(`${firstNumber} > ${secondNumber}`)
        basic.showIcon(IconNames.Sad)
})