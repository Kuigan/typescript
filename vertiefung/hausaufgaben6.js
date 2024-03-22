// Aufgabe 2: Praxis: Funktionen 
// Ziel: Schreibe eine Funktion, die die Eingabeliste aus Zahlen und Strings nimmt 
// und alle Strings entfernt. Die Funktion soll ein neues Array zurückgeben, das nur Zahlen enthält.
// Code
function entferneStringsAusListe(eingabe) {
    return eingabe.filter(function (element) { return typeof element === 'number'; });
}
// Test
console.log(entferneStringsAusListe([1, "Spritzkuchen", 2, "Franzbrötchen", 4, 5])); // Sollte [1, 2, 4, 5] ausgeben
//Aufgabe 4: Praxis: Fehler beheben
// Ohje... Ein Kollege hat den folgenden Code geschrieben, aber er funktioniert nicht. Kannst du die Fehler finden und beheben?
// Ziel: Repariere den folgenden Code:
var personName = "Fred";
var alter = 40;
var fullName = personName + " Feuerstein";
var berufe = [
    "Steinmetz",
    "Höhlenmaler",
    "Mammutjäger",
    "Familienoberhauptvogel",
    "Dinosaurierkranführer",
];
var fred = {
    vorname: fullName.split(" ")[0],
    nachname: fullName.split(" ")[1],
    beruf: berufe[berufe.length - 1],
    alter: alter + 2,
};
var familieFeuerstein = [
    fred,
    { vorname: "Wilma", nachname: "Feuerstein", beruf: "Steinmetz", alter: 38 }
];
console.log(familieFeuerstein[0].alter);
