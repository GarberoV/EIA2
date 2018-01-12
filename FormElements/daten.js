/*
Aufgabe: Aufgabe 10, FormElements: Weihnachtsbaumkonfigurator
Name: Veronika Garbero
Matrikel: 256581
Datum: 30.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A10;
(function (A10) {
    A10.baumarten = [
        { art: "Baumart", name: "Weisser Weihnachtsbaum", preis: 50.00 },
        { art: "Baumart", name: "Berkshire Bergtanne", preis: 29.99 },
        { art: "Baumart", name: "Alpen Weihnachtsbaum", preis: 45.00 },
        { art: "Baumart", name: "Nordmanntanne", preis: 29.99 },
    ];
    A10.halterungen = [
        { art: "Halterung", name: "Gusseisen", preis: 17.99 },
        { art: "Halterung", name: "Aluminiumguss", preis: 14.99 },
    ];
    A10.lichter = [
        { art: "Lichterkette", name: "Kerzen", preis: 1.99 },
        { art: "Lichterkette", name: "Lichterkette", preis: 20.00 },
    ];
    A10.kugelnE = [
        { art: "KugelE", name: "Rosa", preis: 0.60 },
        { art: "KugelE", name: "Schwarz", preis: 0.60 },
        { art: "KugelE", name: "Silber", preis: 0.60 },
    ];
    A10.kugelnM = [
        { art: "KugelM", name: "Gruen", preis: 0.90 },
        { art: "KugelM", name: "Rot", preis: 0.90 },
        { art: "KugelM", name: "blau", preis: 0.90 },
        { art: "KugelM", name: "feder", preis: 0.90 },
        { art: "KugelM", name: "Rot-Glizer", preis: 0.90 },
    ];
    A10.schleifen = [
        { art: "Schleife", name: "Weiss-Blau", preis: 1.60 },
        { art: "Schleife", name: "Rot", preis: 1.60 },
    ];
    A10.lieferoptionen = [
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.90 }
    ];
    A10.light = [];
    for (var i = 0; i < A10.lichter.length; i++) {
        if (A10.lichter[i].art == "lichterketten") {
            var temp = [A10.lichter[i].name, A10.lichter[i].preis];
            A10.light.push(temp);
        }
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=daten.js.map