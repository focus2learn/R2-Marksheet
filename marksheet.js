#! /usr/bin/env node
// Marks sheet with obtain marks, percentage and grade
// Coding by Naushad Hussain ( Class : Sunday 9 - 12)
// import get input student name,id and subject marks with using inquirer.prompt
import inquirer from "inquirer";
const input_stname = await inquirer.prompt([{
        name: "stname",
        type: "string",
        message: "Enter Student Name................... : "
    }]);
const input_stid = await inquirer.prompt([{
        name: "stid",
        type: "string",
        message: "Enter Student ID.Number.............. : "
    }]);
let input_urdu1 = await inquirer.prompt([{
        name: "urdu",
        type: "number",
        message: "Enter Obtain Marks in URDU........... : "
    }]);
let input_eng1 = await inquirer.prompt([{
        name: "eng",
        type: "number",
        message: "Enter Obtain Marks in English........ : "
    }]);
let input_math1 = await inquirer.prompt([{
        name: "math",
        type: "number",
        message: "Enter Obtain Marks in Math........... : "
    }]);
let input_chem1 = await inquirer.prompt([{
        name: "chem",
        type: "number",
        message: "Enter Obtain Marks in Chemistry...... : "
    }]);
let input_phy1 = await inquirer.prompt([{
        name: "phy",
        type: "number",
        message: "Enter Obtain Marks in Physics........ : "
    }]);
let input_comp1 = await inquirer.prompt([{
        name: "comp",
        type: "number",
        message: "Enter Obtain Marks in Computer....... : "
    }]);
// Assign Variables to store values, Obtain Marks and Total marks to variables
let totmarks = 500;
let isgrade = " ";
let isresult = " ";
// sum of obtain marks and percentage and store values to variables
let obtainmarks = (input_urdu1.urdu + input_eng1.eng + input_math1.math + input_chem1.chem + input_phy1.phy + input_comp1.comp);
let isper = obtainmarks * 100 / totmarks;
let urdu = input_urdu1.urdu;
let eng = input_eng1.eng;
let math = input_math1.math;
let chem = input_chem1.chem;
let phy = input_phy1.phy;
let comp = input_comp1.comp;
let stname = input_stname.stname;
let stid = input_stid.stid;
// Obtain Grade as per percentage with the help of conditional statement
if (isper >= 90) {
    isgrade = "A+";
    isresult = "Pass";
}
else if (isper >= 80) {
    isgrade = "A";
    isresult = "Pass";
}
else if (isper >= 70) {
    isgrade = "B";
    isresult = "Pass";
}
else if (isper >= 60) {
    isgrade = "C";
    isresult = "Pass";
}
else if (isper >= 50) {
    isgrade = "D";
    isresult = "Pass";
}
else {
    isgrade = "F";
    isresult = "Fail";
}
// Displa Marksheet on screen
console.log("_______________________________________________________________________________________________");
console.log("                                    `Marks Sheet`                                              ");
console.log("_______________________________________________________________________________________________");
console.log(" Studen Name : " + stname + "\t\t\t\t\t" + " Student ID : " + stid);
console.log("_______________________________________________________________________________________________");
console.log("|  Urdu         : " + urdu + " \t\t\t  |   " + "\t English           : " + eng + "     \t              |");
console.log("|                 \t\t          |                                                   |");
console.log("|  Math         : " + math + " \t\t\t  |   " + "\t Chemistry         : " + chem + "     \t              |");
console.log("|                 \t\t          |                                                   |");
console.log("|  Phys         : " + phy + " \t\t\t  |   " + "\t Computer          : " + comp + "     \t              |");
console.log("|                 \t\t          |                                                   |");
console.log("|  Total        : " + totmarks + "\t\t\t  |   " + "\t Percentage        : " + isper + "     \t              |");
console.log("|                 \t\t          |                                                   |");
console.log("|  Obtain Marks : " + obtainmarks + "\t\t\t  |   " + "\t Grade             : " + isgrade + "     \t              |");
console.log("|                 \t\t          |                                                   |");
console.log("_______________________________________________________________________________________________");
console.log("|  Marks Obtained from the Total(500 /" + obtainmarks + " )   " + "\t Result             : " + isresult + "     \t              |");
console.log("_______________________________________________________________________________________________");
