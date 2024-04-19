#! /usr/bin/env node 
import inquirer from "inquirer";
//to take sentence from a user
const usrSentence = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence here "
    }
]);
const askUsr = await inquirer.prompt([
    {
        name: "ask",
        type: "list",
        message: "select what you want to count ? ",
        choices: ["words", "letters"]
    }
]);
if (askUsr.ask === "words") {
    let words = usrSentence.sentence.trim().split(" ");
    console.log(words);
    console.log(words.length);
}
else {
    let words = usrSentence.sentence.trim().split("");
    console.log(words);
    console.log(words.length);
}
