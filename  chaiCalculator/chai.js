// Function to calculate ingredients for Kenyan chai
/**
 * This friendly calculator helps you prepare the perfect Kenyan chai
 * by telling you exactly how much of each ingredient you'll need.
 */

// First, we must connect to our customer
const cupsWanted = Number(prompt(
  "Jambo, our customer! How many cups of Chai Bora shall we prepare for you today?\n" +
  "(Enter a number like 2, 4, or however many thirsty friends you have!)"
));

// Secret recipe for one perfect cup
const PERFECT_CUP_RECIPE = {
  water: 200,    // The base of all good chai
  milk: 50,      // For that creamy richness
  teaLeaves: 1,  // Premium Kenyan gold tea leaves
  sugar: 2       // Because life should always be sweet
};

/**
 * Calculates chai ingredients for desired cups
 * @param {number} cups - How many cups you want
 * @returns Object with scaled ingredients
 */
function prepareChaiPlan(cups) {
  return {
    water: PERFECT_CUP_RECIPE.water * cups,
    milk: PERFECT_CUP_RECIPE.milk * cups,
    teaLeaves: PERFECT_CUP_RECIPE.teaLeaves * cups,
    sugar: PERFECT_CUP_RECIPE.sugar * cups
  };
}

// Time to do the math
const chaiPlan = prepareChaiPlan(cupsWanted);

// Presenting your beautiful chai blueprint
console.log(`
Your Chai Preparation Guide for ${cupsWanted} Cup(s)
------------------------------------------------------
Fresh Water : ${chaiPlan.water} ml
Creamy Milk : ${chaiPlan.milk} ml
Tea Leaves  : ${chaiPlan.teaLeaves} tbsp (the good Kenyan stuff!)
Sugar       : ${chaiPlan.sugar} tsp (adjust to your sweetness preference)
------------------------------------------------------

Pro Tip: Always bring your water to a boil first,
then add tea leaves and let them dance in the water
before introducing the milk. Happy brewing!

Your perfect chai awaits! Share and enjoy!
`);