// bodaFareCalculator/fare.js

/**
 * Your Friendly Neighborhood Boda Fare Guide
 * 
 * Helps you estimate your motorcycle taxi fare before you even hop on,
 * so you never get surprised by the price!
 */

// Start with a warm greeting
const distance = Number(prompt(
  "Mambo vipi rafiki!\n" +
  "Tuko na boda boda nzuri hapa.\n" +
  "Unataka kwenda kilometer ngapi?\n" +
  "(Andika namba tu, kama 2, 5, 10...)"
));

// Our simple pricing structure (fair for both rider and passenger)
const FARE_DETAILS = {
  startingFee: 100,    // Just to get the bike moving
  perKilometer: 30,    // Reasonable rate for your journey
};

/**
 * Calculates your boda fare with complete transparency
 * @param {number} km - Your journey distance in kilometers
 * @returns A clear breakdown of what you're paying for
 */
function computeBodaFare(km) {
  return {
    baseFee: FARE_DETAILS.startingFee,
    distanceFee: km * FARE_DETAILS.perKilometer,
    grandTotal: FARE_DETAILS.startingFee + (km * FARE_DETAILS.perKilometer)
  };
}

// Let's calculate your fare
const yourFare = computeBodaFare(distance);

// Presenting your fare receipt with local flavor...
console.log(`\nBODA BODA FARE RECEIPT`);
console.log("-------------------------------");
console.log(`Distance: ${distance} km`);
console.log(`Starting Fee: KES ${yourFare.baseFee} (hii ni must!)`);
console.log(`Distance Charge (${distance} km × KES ${FARE_DETAILS.perKilometer}): KES ${yourFare.distanceFee}`);
console.log("-------------------------------");
console.log(`TOTAL: KES ${yourFare.grandTotal}`);
console.log("-------------------------------");

// Some friendly advice
console.log("\nPole kwa shida: Prices may vary slightly by:");
console.log("- Time of day (night rides sometimes cost more)");
console.log("- Road conditions (rough roads = small extra)");
console.log("- Luggage (that big suitcase might need negotiation)");
console.log("\nUsisahau kumwacha tip kama service ni nzuri!");
console.log("Safari njema na uwe mkono wa kuomba!\n");