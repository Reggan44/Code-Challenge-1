My expernation for my Chai Bora Ingredient Calculator
step 1,we Greet the customer by:-
(1)pop up with afriendly message asking how many cups of chai you want to make.
(2)i have used kiswahili for it is my local language
(3)


This object (PERFECT_CUP_RECIPE) stores the exact amounts needed for one cup of Kenyan chai.
Measurements:
Water: 200 ml (essential for brewing)
Milk: 50 ml (for creaminess)
Tea Leaves: 1 tablespoon (Kenyan tea is the best!)
Sugar: 2 teaspoons (adjustable to taste)



prepareChaiPlan(cups) → A function that takes the number of cups (cups) and scales the recipe accordingly.
How it works:
Multiplies each ingredient by the number of cups.
Example: For 3 cups:
Water: 200 * 3 = 600 ml
Milk: 50 * 3 = 150 ml
Tea Leaves: 1 * 3 = 3 tbsp
Sugar: 2 * 3 = 6 tsp




chaiPlan → Stores the scaled ingredients.
console.log()  Prints a well-formatted shopping list:
Uses template literals (``) for clean multi-line output.
${variable} inserts dynamic values (e.g., ${chaiPlan.water} becomes 600 ml if 3 cups).
Includes dividers (---) for readability.





Advice:
Boil water first (essential for proper tea extraction).
Let tea leaves "dance" (steep for rich flavor).
Add milk last (prevents curdling).
Encourages sharing (because chai tastes better with friends!).







BODA BODA FARE CALCULATOR 


prompt()  Displays a pop-up asking the user for distance in kilometers.
Number()  Converts the input (which is initially a string) into a number.
Example: If the user enters "5", it becomes 5 (a number).
Local Swahili phrases make it user-friendly for Kenyan riders:
"Mambo vipi rafiki!" "What’s up, friend!"
"Unataka kwenda kilometer ngapi?"  "How many kilometers do you want to go?"



FARE_DETAILS is an object storing pricing rules:
startingFee: 100  Base fare (KES 100) charged at the beginning.
perKilometer: 30  Additional KES 30 per km traveled.



computeBodaFare(km)  A function that calculates the fare breakdown:
baseFee Fixed starting fee (KES 100).
distanceFee  km * 30 (KES 30 per km).
grandTotal  baseFee + distanceFee.



Prints a clear receipt with:
Distance entered by the user.
Starting Fee (fixed KES 100).
Distance Charge (calculated per km).
Total Fare (sum of base + distance fee).
Swahili note  "hii ni must!" ("this is a must!") adds local flavor.



Explains factors that may affect pricing:
Night rides  Often more expensive.
Rough roads  May incur extra charges.
Luggage Large items may require negotiation.
Encourages tipping "Usisahau kumwacha tip" ("Don’t forget to leave a tip!").
Wishes a safe journey "Safari njema!" ("Have a good trip!").



Mobile Money Fee Calculator

prompt() asks the user:
"Karibu kwenye Mobile Money!" "Welcome to Mobile Money!"
"Unaplani kutuma pesa ngapi?" "How much do you want to send?"
Example amounts guide the user (500, 1000, 5000 KES).
Number() converts the input to a numeric value.



percentage: 1.5  Standard 1.5% fee on the sent amount.
minimumFee: 10  You never pay less than KES 10.
maximumFee: 70  You never pay more than KES 70.
Approved by CBK (Central Bank of Kenya) for fairness.


How It operates
Calculates rawFee amount × 1.5%.
Example: For KES 500, 500 × 0.015 = KES 7.5 (but minimum is KES 10).
Applies limits:
If rawFee < 10  Fee = KES 10
If rawFee > 70  Fee = KES 70
Returns:
originalAmount What you’re sending.
serviceFee Final fee after limits.
totalDeduction amount + fee.



Key advice to oure customer:
Off-peak discounts → Some providers charge less at night.
Fee cap → No fee exceeds KES 70 (even for KES 100,000!).
Double-check numbers → Avoid sending to wrong recipients!
"Asante!"Thanks the user in Swahili.
"Simu ya benki" → "Mobile banking, safe and easy!"