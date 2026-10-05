


const person = {
    personen_name: "John Doe",
    personen_alter: 30
};
function nameAndAge(person:any): void {
   console.log(person.name + person.age);
}
nameAndAge(person); // Funktioniert nicht wegen bennenungs Fehler.
// Funktioniert nicht wegen bennenungs Fehler.
interface Person {
    name: string;
    age: number;}
    const person1: Person = {
        name: "Jane Smith",
        age: 25
    };
  //  const person2: Person = {
    //    personen_name: "Alice Johnson",
      //  personen_alter: 35
    //}; Würde jetzt einen Fehler geben, da die Eigenschaften nicht mit dem Interface übereinstimmen.

    const person2: Person = {
        name: "Alice Johnson",
        age: 35
    };
    nameAndAge(person1); 
    nameAndAge(person2); 

    // Funktioniert jetzt, da die Eigenschaften mit dem Interface übereinstimmen.
  
   
    