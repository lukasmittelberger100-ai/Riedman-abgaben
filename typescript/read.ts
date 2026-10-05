import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function createPerson(callback: (p: Person) => void): void {
    let safeName: string = "Default Name";
    let safeAge: number = 0;
    rl.question("Wie heißt du? ", (name) => {
     rl.question("Wie alt bist du? ", (age) => {
            safeAge = parseInt(age);
            safeName = name;
            const newPerson: Person = {
                name: safeName,
                age: safeAge
            };
            callback(newPerson);
        });
    });
}