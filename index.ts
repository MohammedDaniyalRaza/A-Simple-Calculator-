#! /usr/bin/env node
// Shabang


import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter First Number Please: ",
    type: "number",
    name: "FirstNumber",
  },

  {
    message: "Enter Second Number Please: ",
    type: "number",
    name:"SecondNumber",
  },

  {
    message: "Select One Of The Operator To Perfoam Action",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Percentage"],
  },

]);

// Conditional Statement's....

if(answer.Operator === "Addition"){
  console.log(answer.FirstNumber + answer.SecondNumber);
}else if(answer.Operator === "Subtraction"){
  console.log(answer.FirstNumber - answer.SecondNumber);
}else if(answer.Operator === "Multiplication"){
  console.log(answer.FirstNumber * answer.SecondNumber);
}else if(answer.Operator === "Division"){
  console.log(answer.FirstNumber / answer.SecondNumber);
}// This Code Is Written By Daniyal Raza...
else if(answer.Operator === "Percentage"){
  console.log(answer.FirstNumber / answer.SecondNumber * 100 + "%");
}
else{
  console.log("PLEASE ENTER A VALID OPERATOR...");
};

// Percentage= 
// Diffrence (Divide By) Orignal Value
// and Then Multiply By 100
/* 30/100 x100 = 30% */