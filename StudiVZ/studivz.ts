/*
Aufgabe: Aufgabe 7, StudiVZ
Name: Veronika Garbero
Matrikel: 256581
Datum: 01.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/



namespace StudiVZ {
    interface StudentData {
        // hier ist noch die richtige Datenstruktur festzulegen
        matrikel: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    
    
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let dataArray: string[] = _input.split(",");   
        let studentData: StudentData = {
            matrikel: parseInt(dataArray[0]),          
            name: dataArray[1],                   
            vorname: dataArray[2],
            alter: parseInt(dataArray[3]),
            geschlecht: parseInt(dataArray[4]) == 0,
            kommentar: dataArray[5]
        };

        students.push(studentData);

        let geschlecht: string;
        if (parseInt(dataArray[4]) == 0) {
            geschlecht = "weiblich";
        }
        else {
            geschlecht = "männlich";
        }

        return "Deine Daten:\n" + "\nMatrikelnummer: " + studentData.matrikel + "\nName: " + studentData.name + studentData.vorname + "\nAlter: " + studentData.alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + studentData.kommentar;
    }
    function queryData(_matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                let geschlecht: string = students[i].geschlecht ? "weiblich" : "männlich";
                return "Daten zur Matrikelnummer: " + students[i].matrikel + "\n\nName: " + students[i].name + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }

            else {
                return "Matrikelnummer nicht in Datenbank vorhanden";
            }
        }
    }
}
    
