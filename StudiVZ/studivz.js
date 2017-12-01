/*
Aufgabe: Aufgabe 7, StudiVZ
Name: Veronika Garbero
Matrikel: 256581
Datum: 01.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let dataArray = _input.split(",");
        let studentData = {
            matrikel: parseInt(dataArray[0]),
            name: dataArray[1],
            vorname: dataArray[2],
            alter: parseInt(dataArray[3]),
            geschlecht: parseInt(dataArray[4]) == 0,
            kommentar: dataArray[5]
        };
        students.push(studentData);
        let geschlecht;
        if (parseInt(dataArray[4]) == 0) {
            geschlecht = "weiblich";
        }
        else {
            geschlecht = "m�nnlich";
        }
        return "Deine Daten:\n" + "\nMatrikelnummer: " + studentData.matrikel + "\nName: " + studentData.name + studentData.vorname + "\nAlter: " + studentData.alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + studentData.kommentar;
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                let geschlecht = students[i].geschlecht ? "weiblich" : "m�nnlich";
                return "Daten zur Matrikelnummer: " + students[i].matrikel + "\n\nName: " + students[i].name + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }
            else {
                return "Matrikelnummer nicht in Datenbank vorhanden";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=studivz.js.map