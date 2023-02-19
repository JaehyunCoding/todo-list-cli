const prompt = require('prompt-sync')({sigint:true});

let toDoList = [];
let Done = [];

let userChoice = "";

// =============================================
console.log("\nWelcome to the To-Do List Manager Application!");

function promptUser(){
    console.log("\n==============================================\n");
    if(toDoList.length === 0){
        console.log("Your to-do list is empty.");
    } else {
        //display every item in the list

        console.log("You have " + toDoList.length + " to-do item(s)");

        for(let i = 0; i < toDoList.length; i++){
            //console.log(i+1 + ". " + toDoList[i]);

            // In the case that the variable i is distrubing for comparing 2 more things, we can utilize boolean. For this one, .includes() is the key for it.
            // Done의 n번째와 toDoList의 i번째는 한 루프내에서 비교하기 힘드니 boolean을 통해 해결함.
            if(Done.includes(toDoList[i]) === true){
            console.log(`${i+1}. [Complete] ${toDoList[i]}`)

            } else {
            console.log(`${i+1}. [Incomplete] ${toDoList[i]}`)
            }
        }

    }
    console.log("\n~ Select an action ~");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");
    console.log("[3] Exit Manager");
    userChoice = Number(prompt("> "));
}

promptUser();

while(userChoice !== 3){

    if(userChoice === 1){
        console.log("\nCreate to-do item");

        let create = prompt("> ");
        toDoList.push(create);
        // push doesn't reassign array. it just stacks items step by step.

    } else if(userChoice === 2){
        
        console.log("Complete a to-do item");
        let compList = Number(prompt("> "))
            Done.push(toDoList[compList-1])
        //once we go back to the loop, the true things should not be evaporated. They should stay what they are.
        if(compList > toDoList.length || compList !== Number){
            console.log("Please input a number that corresponds to an item in the list.")
        }
        // Avoiding the case that some letters , non listed numbers or even the combination of them affect the list. That why I used OR ||.
        
    } else {
        console.log("Please input a valid number.")
    }

    promptUser();
}

console.log("\nExiting Application");