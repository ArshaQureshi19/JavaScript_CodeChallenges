/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it. 
Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!" 
Hint: Use an if/else statement 
�*/
// program using if-else
//Assinging the variables
const massMark = 95;
const heightMark=1.88;
const massJohn= 85;
const heightJohn=1.76;
//Applying Formula to find the BMI of Mark and John
const BMIMark= massMark/ heightMark **2;
const BMIJohn= massJohn/ heightJohn **2;
console.log (BMIMark,BMIJohn);
//IF-else Loop
if (BMIMark >  BMIJohn){
    console.log ("Mark's is heighr than John's!");
}else{
    console.log ("John's is heighr than John's!");
}
