/* ORIGINAL

// das Ausrufezeichen weist Typescript an, dass wir
// uns sicher sind, dass es sich hier nicht um NULL
// handelt

// mittels 'as' können wir Typescript versichern,
// dass es sich um einen bestimmten Typen handeln wird

const farbenInput
  = document.getElementById('farbe')! as HTMLInputElement

// console.log(farbenInput.value)

// Wenn ich auf den Knopf klicke, dann soll in der Konsole
// der Wert des TextInputs ausgegeben werden

// Ich ziehe mir die Form aus dem Dokument; Variante 1
const form
  = document.getElementById('form')! as HTMLFormElement

// Ich ziehe mir die Form aus dem Dokument; Variante 2
const form1
  = document.querySelector('form')! as HTMLFormElement
// wenn wir auf den Knopf drücken, wird ein submit-Event
// ausgelöst. Wir hören, ob ein solches Event ausgelöst wird.
// Wenn das Event ausgelöst wird, dann lesen wir den Wert
// aus der Eingabe aus und geben sie aus.

const obst = document.getElementsByName('obst')

form.addEventListener('submit', (e) => {
  // preventDefault verhindert das automatische
  // neuladen der kompletten Seite
  e.preventDefault()
  console.log(farbenInput.value)

  // const obst1 = obst[1] as HTMLInputElement

  // console.log(obst1.value, obst1.checked)

  //  for (let i = 0; i < obst.length; i = i + 1 /* i++ ODER i += 1 */) {
  //    const aktuellesObst = obst[i] as HTMLInputElement
  //    console.log(aktuellesObst.value, aktuellesObst.checked)
  //  }

  //})

*/



// Aufgabe 3: Praxis: Typen
// Ziel: Vervollständige die app.ts Datei, sodass sie folgende Anforderungen erfüllt:

// Beim Klick auf den Button absenden, soll in der Konsole ausgegeben werden, welche Schüsselgröße ausgewählt wurde.
// Beim Klick auf den Button absenden, soll in der Konsole ausgegeben werden, welche Obstsorten ausgewählt wurden. 
// Diese sollen als Array ausgegeben werden. Wenn keine Obstsorten ausgewählt wurden, soll ein leeres Array ausgegeben werden. 
// So soll eine beispielhafte Ausgabe aussehen: ["Apfel", "Kiwi"].
// Erstelle einen Typ, in dem die Inhalte der Obstschüssel gespeichert werden können. 
// Es soll gespeichert werden, welche Schüsselgröße ausgewählt wurde, welche Farbe die Schüssel hat 
// und welche Obstsorten ausgewählt wurden (Array aus der vorherigen Aufgabe).


// ANGEPASST (aber der Code funktioniert nicht... gibt nur eine Liste mit Boolen Sorten-Werten aus)

// Typ für den Inhalt der Obstschüssel definieren
type Obstschuessel = {
  schuesselGroesse: string;
  schuesselFarbe: string;
  obstSorten: string[];
}

// Elemente abrufen
const farbenInput = document.getElementById('farbe')! as HTMLInputElement;
const form = document.getElementById('form')! as HTMLFormElement;
const obst = document.getElementsByName('obst');
const groesseInput = document.getElementById('groesse')! as HTMLFormElement

// Eventlistener für das Absenden des Formulars hinzufügen
form.addEventListener('submit', (e) => {
  // Standardverhalten des Formulars verhindern
  e.preventDefault();

  // Ausgewählte Schüsselgröße ausgeben
  console.log('Ausgewählte Schüsselgröße:', groesseInput.value);

  // Ausgewählte Obstsorten sammeln
  const ausgewaehlteObstsorten: string[] = [];
  for (let i = 0; i < obst.length; i++) {
    const aktuellesObst = obst[i] as HTMLInputElement;
    if (aktuellesObst.checked) {
      ausgewaehlteObstsorten.push(aktuellesObst.value);
    }
  }

  // Obstschüssel-Objekt erstellen
  const obstschuessel: Obstschuessel = {
    schuesselGroesse: groesseInput.value,
    schuesselFarbe: 'blau', // Beispielwert für die Farbe
    obstSorten: ausgewaehlteObstsorten
  };

  // Ausgabe des Obstschüssel-Objekts
  console.log('Inhalt der Obstschüssel:', obstschuessel);
});
