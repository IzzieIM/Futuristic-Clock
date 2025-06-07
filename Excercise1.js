let randomNumber = Math.random();
let randomgenerated = Math.round(randomNumber * 100); // Rounds to nearest integer between 0 and 10

let a = input("enter a random number");

if ( a == randomgenerated) {
    console.log("you've gussed the correct answer");
}
else if ( a > randomgenerated) {
    console.log(`the number is smaller than ${a}`);
}
else {
    console.log(`the number is greater than ${a}`);
}