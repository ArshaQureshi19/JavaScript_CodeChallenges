//Fundamenatal part1
/*Coding Challenge #1 
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John. 
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. */

let markMass = 78;
let markHeight =1.69;
let johnMass = 92;
let johnHeight = 1.95;
 const markBMI =   markMass / markHeight ** 2 ;
 const johnBMI =   johnMass / johnHeight ** 2 ;
 const markHigherBMI=  markBMI > johnBMI;
 console.log (markBMI,johnBMI,markHigherBMI);