import * as readline from "readline";

interface Person {
    name: string;
    age: number;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createPerson(callback: (p: Person) => void): void {
    rl.question("Wie heißt du? ", (name) => {
        rl.question("Wie alt bist du? ", (ageInput) => {
            const age = parseInt(ageInput, 10);
            const person: Person = { name, age };
            if (isNaN(age)) {
                console.log("Bitte eine gültige Zahl eingeben!");
                rl.close();
                return;
            }

            callback(person);
        });
    });
}

// Verwendung:
createPerson((p) => {
    rl.close(); // ← erst hier schließen
    console.log("Person erstellt:", p);
});
