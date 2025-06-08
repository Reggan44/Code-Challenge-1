// mobileMoneyEstimator/fee.js
/**
 *Your Personal Mobile Money Assistant  
 * Calculates fair transaction fees with complete transparency  
 * Never wonder "Ningelipia pesa ngapi?" again!
 */
// Start by welcome them
const sendAmount = Number(prompt(
  "Karibu kwenye Mobile Money! \n" +
  "Unaplani kutuma pesa ngapi? (Andika kiasi kwa KES)\n" +
  "Mfano: 500, 1000, 5000..."
));
// Our transparent pricing (approved by CBK!)
const FEE_RULES = {
  percentage: 1.5,  // Fair 1.5% fee
  minimumFee: 10,   // Smallest possible charge
  maximumFee: 70    // You'll never pay more than this
};
/**
 * Generates your receipt before you send  
 * @param {number} amount - Your hard-earned money  
 * @returns Your complete transaction breakdown  
 */
function calculateSendCost(amount) {
  const rawFee = amount * (FEE_RULES.percentage / 100);
  // Apply consumer protection rules
  let finalFee = rawFee;
  if (rawFee < FEE_RULES.minimumFee) {
    finalFee = FEE_RULES.minimumFee;  // You pay at least KES 10
  } else if (rawFee > FEE_RULES.maximumFee) {
    finalFee = FEE_RULES.maximumFee;  // You never pay more than KES 70
  }
  return {
    originalAmount: amount,
    serviceFee: finalFee,
    totalDeduction: amount + finalFee
  };
}
// Calculate with care
const yourTransaction = calculateSendCost(sendAmount);
// Your beautiful digital receipt
console.log(`\n**M-PESA TRANSACTION SUMMARY**`);
console.log("----------------------------------");
console.log(`Amount to Send: KES ${yourTransaction.originalAmount.toLocaleString()}`);
console.log(`Fee (${FEE_RULES.percentage}%): KES ${yourTransaction.serviceFee.toFixed(2)}`);
console.log("----------------------------------");
console.log(`TOTAL TO DEDUCT: KES ${yourTransaction.totalDeduction.toLocaleString()}`);
console.log("----------------------------------");
// Helpful tips from your financial friend
console.log("\nDID YOU KNOW?");
console.log("- Save more by sending during off-peak hours");
console.log("- For amounts over KES 4,667, your fee caps at KES 70");
console.log("- Always confirm the recipient's number not less than TWICE!\n");
console.log("Asante kwa kutumia huduma yetu!");
console.log("Simu ya benki, salama na rahisi!\n");