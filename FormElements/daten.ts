/*
Aufgabe: Aufgabe 10, FormElements: Weihnachtsbaumkonfigurator
Name: Veronika Garbero
Matrikel: 256581
Datum: 30.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace A10 {

export interface Daten {
        art: string;
        name: string;
        preis: number;
    }

   export let baumarten: Daten[] = [
        { art: "Baumart", name: "Weisser Weihnachtsbaum", preis: 50.00 },
        { art: "Baumart", name: "Berkshire Bergtanne", preis: 29.99 },
        { art: "Baumart", name: "Alpen Weihnachtsbaum", preis: 45.00 },
        { art: "Baumart", name: "Nordmanntanne", preis: 29.99 },
     ];
        
   export let halterungen: Daten[] = [
        { art: "Halterung", name: "Gusseisen", preis: 17.99 },
        { art: "Halterung", name: "Aluminiumguss", preis: 14.99}, 
     ];

    export let lichter: Daten[] = [
        { art: "Lichterkette", name: "Kerzen", preis: 1.99},
        { art: "Lichterkette", name: "Lichterkette", preis: 20.00},
     ];

    export let kugelnE: Daten[] = [
        { art: "KugelE", name: "Rosa", preis: 0.60},
        { art: "KugelE", name: "Schwarz", preis: 0.60},
        { art: "KugelE", name: "Silber", preis: 0.60},
        
     ];

    export let kugelnM: Daten[] = [
        { art: "KugelM", name: "Gruen", preis: 0.90},
        { art: "KugelM", name: "Rot", preis: 0.90},
        { art: "KugelM", name: "blau", preis: 0.90},
        { art: "KugelM", name: "feder", preis: 0.90},
        { art: "KugelM", name: "Rot-Glizer", preis: 0.90},
    ];
        
    export let schleifen: Daten[] = [
        { art: "Schleife", name: "Weiss-Blau", preis: 1.60},
        { art: "Schleife", name: "Rot", preis: 1.60},
        
     ];

    export let lieferoptionen: Daten[] = [
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0},
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.90}
    ];
    
 
    export let light: string[][] = [];
    
     for (var i: number = 0; i < lichter.length; i++) {

        if (lichter[i].art == "lichterketten") {
            var temp: any = [lichter[i].name, lichter[i].preis];
            light.push(temp);
        }
    }
}