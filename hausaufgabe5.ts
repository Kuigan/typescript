// Beispielcode
function summeZahlen(arr) {
  // Implementieren Sie Ihre Lösung mit reduce
}

// wird zu:
function summeZahlen(arr: number[]): number {
    // Implementieren Sie Ihre Lösung mit reduce
  }

// Test
console.log(summeZahlen([1, 2, 3, 4, 5])); // Sollte 15 ausgeben





// Beispielcode
function entferneDuplikate(arr) {
  // Verwenden Sie hier geeignete Array-Methoden
}

// wird zu:
function entferneDuplikate(arr: number[]): number[] {
  // Verwenden Sie hier geeignete Array-Methoden
}

// Test
console.log(entferneDuplikate([1, 2, 2, 3, 4, 4, 5])); // Sollte [1, 2, 3, 4, 5] ausgeben





// Beispielcode
function bestimmeJahreszeit(monat) {
  // Verwenden Sie Bedingungen, um die Jahreszeit zu bestimmen
}

// wird zu:
function bestimmeJahreszeit(monat: number): string {
  // Verwenden Sie Bedingungen, um die Jahreszeit zu bestimmen
}

// Test
console.log(bestimmeJahreszeit(4)); // Sollte "Frühling" ausgeben






// Beispielcode
function istPasswortGueltig(passwort) {
  // Implementieren Sie die Passwort-Validierungslogik
}

// wird zu:
function istPasswortGueltig(passwort: string): boolean {
  // Implementieren Sie die Passwort-Validierungslogik
}

// Test
console.log(istPasswortGueltig("Test1234")); // Sollte true ausgeben





// Beispielcode
function taschenrechner(a, b, operation) {
  // Verwenden Sie Bedingungen, um die entsprechende Operation auszuführen
}

// wird zu:
function taschenrechner(a: number, b: number, operation: string): number | string {
  // Verwenden Sie Bedingungen, um die entsprechende Operation auszuführen
}

// Test
console.log(taschenrechner(10, 5, "+")); // Sollte 15 ausgeben
console.log(taschenrechner(10, 5, "/")); // Sollte 2 ausgeben
console.log(taschenrechner(10, 5, "x")); // Sollte "Ungültige Operation" ausgeben





// Beispielcode
function multiplikationstabelle(n) {
  // Verwenden Sie eine for-Schleife, um die Tabelle zu generieren und auszugeben
}

// wird zu:
function multiplikationstabelle(n: number): number { // oder evtl. ":void" da kein Wert zurückgegeben wird, sondern eine Tabelle generiert wird
  // Verwenden Sie eine for-Schleife, um die Tabelle zu generieren und auszugeben
}

// Test
multiplikationstabelle(5); // Sollte die Multiplikationstabelle für 5 ausgeben





// Beispielcode
function umkehrenArray(arr) {
  // Implementieren Sie die Logik, um das Array umzukehren
}

// wird zu:
function umkehrenArray(arr: number[]): number[] {
  // Implementieren Sie die Logik, um das Array umzukehren
}

// Test
console.log(umkehrenArray([1, 2, 3, 4, 5])); // Sollte [5, 4, 3, 2, 1] ausgeben





// Beispielcode
function zaehleBuchstaben(str, buchstabe) {
  // Zählen Sie, wie oft `buchstabe` in `str` vorkommt
}

// wird zu:
function zaehleBuchstaben(str: string, buchstabe: string): number {
  // Zählen Sie, wie oft `buchstabe` in `str` vorkommt
}

// Test
console.log(zaehleBuchstaben("Hallo Welt", "l")); // Sollte 3 ausgeben





// Beispielcode
function filterGeradeZahlen(arr) {
  let geradeZahlen = [];
  // Verwenden Sie eine for-Schleife und eine Bedingung, um gerade Zahlen zu filtern
  return geradeZahlen;
}

// wird zu:
function filterGeradeZahlen(arr: number[]): number[] {
  let geradeZahlen = [];
  // Verwenden Sie eine for-Schleife und eine Bedingung, um gerade Zahlen zu filtern
  return geradeZahlen;
}

// Test
console.log(filterGeradeZahlen([1, 2, 3, 4, 5, 6])); // Sollte [2, 4, 6] ausgeben





// Beispielcode
function findeMinMax(arr) {
  // Initialisieren Sie min und max entsprechend
  // Durchlaufen Sie das Array, um min und max zu aktualisieren
  return { min: /* min Wert */, max: /* max Wert */ };
}

// wird zu:
function findeMinMax(arr: number[]): { min: number, max: number } {
  // Initialisieren Sie min und max entsprechend
  // Durchlaufen Sie das Array, um min und max zu aktualisieren
  return { min: /* min Wert */, max: /* max Wert */ };
}

// Test
console.log(findeMinMax([10, 2, 5, 1, 9])); // Sollte { min: 1, max: 10 } ausgeben





// Beispielcode
function berechneDurchschnitt(arr) {
  let summe = 0;
  // Verwenden Sie eine for-Schleife, um die Summe der Zahlen zu berechnen
  // Teilen Sie die Summe durch die Anzahl der Zahlen, um den Durchschnitt zu erhalten
  return summe / arr.length;
}

// wird zu:
function berechneDurchschnitt(arr: number[]): number {
  let summe = 0;
  // Verwenden Sie eine for-Schleife, um die Summe der Zahlen zu berechnen
  // Teilen Sie die Summe durch die Anzahl der Zahlen, um den Durchschnitt zu erhalten
  return summe / arr.length;
}

// Test
console.log(berechneDurchschnitt([1, 2, 3, 4, 5])); // Sollte 3 ausgeben