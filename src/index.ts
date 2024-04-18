//81121876 controll person number
// 0 1 2 3 4 5 6 7 8
// 8 1 1 2 1 8 9 8 7(6)

function isValidPersonNumber (personNumber : string) : boolean {
	// if person number is not 10 digits return false
	if ( personNumber.length !==10) {
		return false;
}

let sum = 0;
// loop through the first 9 digits of the person number
for (let i = 0; i <9; i++) {
	// get the digit at the index i and convert it to a number
	let digit = Number(personNumber[i]);
	// if the index is even
	if (i % 2 === 0) {
		// multiply it by 2
		digit *= 2;
		// if the result i greater than 9 split the digits and add them together
		if (digit > 9){
			const digitString = String(digit);
			digit = Number(digitString[0]) + Number(digitString[1]);
	}
}
// add the manipulated digits and the others to the sum
sum += digit;

}

const calculatedControlDigit = (10 - (sum % 10)) %10;

// Check if control digit matches the last digit of personNumber
    const lastDigit = Number(personNumber[9]); // Get the last digit
    if (calculatedControlDigit !== lastDigit) {
        return false; // Return false if control digit is not valid
    }

    return true; // Return true if all checks pass
}

// Example usage:
const personNumber = "9411160866"; // Replace with an actual person number
const isValid = isValidPersonNumber(personNumber);
console.log("Is valid:", isValid);