console.log("Hello from the console");

console.log("Q4 - Program to display only elements containing 'a' in them from a array?");

let array = ["Hello", "From", "Abhishek Raj", "To", "LetUpgrade"];


array.forEach(function(a) {
    console.log(a);
});

console.log(array);

for (let i = 0; i < array.length; i++) {
    if (array[i].includes("a")) {

        console.log(array[i]);
    }
}