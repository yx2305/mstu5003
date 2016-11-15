 // This code is INCOMPLETE, meaning some things will need massaging and some things are missing.
// Adjust code appropriately to solve the problems listed.

var numPizzas;
var subTotal;
var total;
var hasDiscount = false; // Hint for prompts

// By convention, these variables represent CONSTANTS (unchanging values)
var DISCOUNTCODE = "ChicagoStyleNumberOne";
var DISCOUNTRATE=0.8;
var flatRate = 2;
var taxRate = 0.05;
var discountcode;
// Set the flat rate per pizza

/* prompt for the following: 1) number of pizzas in order, 2) Whether they have a discount, 3) The discount code (if they indicated they have one.) */
var customerName = prompt('What is your name?');
    numPizzas = prompt('How many pizzas do you want?');
		numPizzas = Number(numPizzas);
		// console.log(typeof numPizzas, numPizzas);
		hasDiscount = prompt('Do you have a discount? Enter 0 if no, and enter 1 if yes:');
		if(hasDiscount==1){
      discountcode = prompt('Enter your discount code:');
		}
/* Write 4 functions: */
// Function that checks if the discount code the user gives matches the known discount code. Does not return anything but will set the has discount state to true if it matches. It will alert the user whether the code worked or not.

function checkDiscountCode(x){
if(x==DISCOUNTCODE){
	hasDiscount = true;
	alert('The code is valid.');
}else{
	alert('The code is invalid.');
	hasDiscount = false;
}}
checkDiscountCode(discountcode);
// Function that calculates subtotal based on number of pizzas, flat rate per pizza, and discount. It should return a number.
subtotal = function(){
	return flatRate*numPizzas*DISCOUNTRATE;
};
// Function that calculates the total based on subtotal and tax rate. It should return a number;

var totalprice = function(){
	totalprice = (taxRate+1)*subtotal();
	return totalprice;
};

// Function that writes a reciept with user information, pizza order info, including prices, discount, etc. Does not return anything but will output to the console.
var receipt = function(){
	console.log('Customer Name:'+customerName);
	console.log('Order Information:');
	console.log('  '+'Price：'+' '+'$'+flatRate+'/pizza');
	console.log('  '+'Number of pizza ordered:'+' '+numPizzas);
	console.log('  '+'Discount:'+' '+DISCOUNTRATE);
	console.log('  '+'Subtotal:'+' '+subtotal());
	console.log('  '+'Tax Rate:'+' '+taxRate);
	console.log('  '+'Total:'+' '+totalprice);
};

receipt();
/* Call functions in correct sequence and utilize them to create a "receipt" for the order in the console. */





// This function will write the following message to the <pre> element in HTML. New lines are indicated by \n
function writeToPre(text) {
	document.getElementById('info').innerHTML = text;
}
var message = "Hello, Jin.\nYour order is pending this program.";
writeToPre(message);
var receiptInfo = Text(receipt());
writeToPre(receiptInfo);
/*var orderInfo = receipt();
writeToPre(orderInfo); Why this doesn't work?*/
// Can you transform your code so that instead of to the console, it writes to the webpage?
