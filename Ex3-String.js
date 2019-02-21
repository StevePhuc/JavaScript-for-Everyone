// Exercise - 3 : String   ****************************************************************

//1. Declare a variable name company and assign it to an initial value "Coding Academy".
const company = "Coding Academy";
//2 Print the string  on the browser console using console.log()
console.log(company);
//3 Print the length of the string  on the browser console using console.log()
console.log(company.length);
// 4Change all the string to capital letters using toUpperCase() method
console.log(company.toUpperCase());
//5 Change all the string to small letters using toLowerCase() method
console.log(company.toLowerCase());
//6 7 Cut(slice) out the first word of the string using slice, substr() or substring() method
console.log(company.slice(0, 9));
console.log(company.substr(0, 9));
//8 Check if the string contains a word Academy using includes() method
console.log(company.includes("Academy"));
//9 Split the string into array using split() method
console.log(company.split(""));
//10 Split the string Coding Academy at the space using split() method
console.log(company.split(" "));
//11 “Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon” split at the string at the comma  and change it to an array.
console.log(
    "Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon".split(",")
);
// 12  Change Coding Academy  to Microsoft Academy using replace() method.
console.log(company.replace("Coding", "Microsoft"));
// 13 What is character at index 10 in "Coding Academy" string use charAt() method.
console.log(company.charAt(10));
// 14 What is the character code of A in ‘Coding Academy’ string using charCodeAt()
console.log(company.charCodeAt("A"));
// Use indexOf to determine the position of  the first occurrence of c in Coding Academy
console.log(company.indexOf("c"));
// Use lastIndexOf to determine the position of the last occurrence of e in Coding Academy
console.log(company.lastIndexOf("e"));
// Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g “  Coding Academy   ”.
console.log(company.trim("  Coding Academy   "));
// 21 Use startsWith() method with the string Coding Academy make the result true
console.log(company.startsWith("Coding"));
// Use endsWith() method with the string Coding Academy make the result true
console.log(company.endsWith("Academy"));
// Use  match() method to find all the c’s in Coding Academy
console.log(company.match("c"));
// Use concat() and merge ‘Integrify’ and ‘Academy’ to a single string, ‘Coding Academy’
console.log("Integrify ".concat("Academy"));
// Use repeat() method to print Coding Academy 5 times
console.log((company + " ").repeat(5));
// 27 Calculate the total annual income of the person by extracumbers from the following text.
//'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.
const incomeString =
    "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const incomeNumber = incomeString.match(/[0-9]+/g);
console.log(
    `Total annual: ` +
        (parseInt(incomeNumber[0]) * 12 +
            parseInt(incomeNumber[1]) +
            parseInt(incomeNumber[2] * 12))
);
