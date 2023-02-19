const prompt = require('prompt-sync')({sigint:true});

let toDoList = [];
let userChoice = "";

console.log("Welcome to the To-Do List Manager Application!");

promptUser();

//while loop
//to continuously prompt the user to make a choice for their to-do list
while(userChoice !== 3){

    if(userChoice === 1){
        console.log("\nCreate to-do item");

        let create = prompt("> ");
        toDoList.push(create);

    } else if(userChoice === 2){
        console.log("Complete a to-do item");
    } else {
        console.log("Invalid choice")
    }

    promptUser();
}

//pick 3 skip to bottom
console.log("Exiting Application");







/* Functions */

//showcase if the "to do list" is empty or not
//select an action
//display different actions
//prompt - to select an action
//array length is 0 means the array is empty
function promptUser(){
    console.log("\n==============================================\n");
    if(toDoList.length === 0){
        console.log("Your to-do list is empty.");
    } else {
        //display every item in the list

        console.log("You have " + toDoList.length + " to-do item(s)");

        for(let i = 0; i < toDoList.length; i++){
            //console.log(i+1 + ". " + toDoList[i]);
            console.log(`${i+1}. ${toDoList[i]}`)
        }

    }
    console.log("\n~ Select an action ~");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");
    console.log("[3] Exit Manager");
    userChoice = Number(prompt("> "));
}