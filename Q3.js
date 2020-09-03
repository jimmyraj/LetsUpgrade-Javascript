console.log("Hello from the console");

console.log("Q3 - Program to search for a element in a array of strings?");

let array = ["Hello", "From", "Abhishek Raj", "To", "LetUpgrade"];
let value = "Abhishek Raj";

array.forEach(function(a) {
    console.log(a);
});


console.log("Element to be Searched in Array");
array.forEach(function(a) {
    if (a === value) {
        console.log(a);
    }
});

let index = array.indexOf("Abhishek Raj");
console.log(index);