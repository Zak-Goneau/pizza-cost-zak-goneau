game.splash("This game calculates the total price for a pizza")
let Diameter = game.askForNumber("What diameter of pizza would you like (inches) ?")
let Rent = 1
let Labour_cost = 0.75
let Materials = 0.5
let HST = 0.13
let Subtotal = Labour_cost + Rent + Materials * Diameter
let Tax = Subtotal * HST
let Total = Subtotal + Tax
Total = Total * 100
Total = Math.round(Total)
Total = Total / 100
game.splash("The subtotal of the pizza is " + Subtotal + " dollars, with an HST of 13% the total price of the pizza is " + Total + " dollars.")
