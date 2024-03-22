// Aufgabe 2: Praxis: Funktionen 
// Ziel: Schreibe eine Funktion, die die Eingabeliste aus Zahlen und Strings nimmt 
// und alle Strings entfernt. Die Funktion soll ein neues Array zurückgeben, das nur Zahlen enthält.

// Code
function entferneStringsAusListe(eingabe: (string | number)[]): number[] {
return eingabe.filter(element => typeof element === 'number');
}

// Test
console.log(
entferneStringsAusListe([1, "Spritzkuchen", 2, "Franzbrötchen", 4, 5])
); // Sollte [1, 2, 4, 5] ausgeben




//Aufgabe 4: Praxis: Fehler beheben
// Ohje... Ein Kollege hat den folgenden Code geschrieben, aber er funktioniert nicht. Kannst du die Fehler finden und beheben?
// Ziel: Repariere den folgenden Code:

const personName: string = "Fred";
let alter: number = 40;

const fullName: string = personName + " Feuerstein";

const berufe: string[] = [
  "Steinmetz",
  "Höhlenmaler",
  "Mammutjäger",
  "Familienoberhauptvogel",
  "Dinosaurierkranführer",
];

const fred = {
  vorname: fullName.split(" ")[0],
  nachname: fullName.split(" ")[1],
  beruf: berufe[berufe.length - 1],
  alter: alter + 2,
};

const familieFeuerstein: { vorname: string; nachname: string; beruf: string; alter: number; }[] = [
  fred,
  { vorname: "Wilma", nachname: "Feuerstein", beruf: "Steinmetz", alter: 38 }
];

console.log(familieFeuerstein[0].alter);
