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
    window.addEventListener("load", createForms);
    window.addEventListener("change", warenkorb);
    var name;
    var strasse;
    var hausnr;
    var ort;
    var plz;
    var email;
    var label;
    var karrenBaum = ["bitte Baum auswählen", "0"];
    var karrenHalter = ["bitte Halter auswählen", "0"];
    var karrenBeleuchtung = [A10.light[0][0], "" + A10.light[0][1]];
    var karrenKugelE = [];
    var karrenKugelM = [];
    var karrenSchleife = [];
    var karrenLieferung = ["bitte Lieferung auswählen", "0"];
    function createForms() {
        //Halterung:
        let baum = document.getElementById("baumarten");
        for (let i = 0; i < A10.baumarten.length; i++) {
            if (A10.baumarten[i].art == "Baumart") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupBaumarten";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                baum.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = A10.baumarten[i].name;
                baum.appendChild(label);
            }
        }
        //Halterung:
        let halter = document.getElementById("halterungen");
        for (let i = 0; i < A10.halterungen.length; i++) {
            if (A10.halterungen[i].art == "Halterung") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halter.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = A10.halterungen[i].name;
                halter.appendChild(label);
            }
        }
        //Beleuchtung:
        let beleuchtung = document.getElementById("lichter");
        let selectBox2 = document.createElement("select");
        selectBox2.name = "SelectLichterkette";
        selectBox2.id = "selectLichterkette";
        beleuchtung.appendChild(selectBox2);
        for (let i = 0; i < A10.lichter.length; i++) {
            if (A10.lichter[i].art == "Lichterkette") {
                var opt2 = document.createElement("option");
                opt2.innerText = A10.lichter[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
        //Schmuckartikel:
        let kugelE = document.getElementById("kugelnE");
        for (let i = 0; i < A10.kugelnE.length; i++) {
            if (A10.kugelnE[i].art == "KugelE") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxKugelE";
                checkB.value = "check";
                checkB.id = "check" + i;
                kugelE.appendChild(checkB);
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = A10.kugelnE[i].name;
                kugelE.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperKugelE" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                kugelE.appendChild(stepper);
                var hr = document.createElement("hr");
                kugelE.appendChild(hr);
            }
        }
        let kugelM = document.getElementById("kugelnM");
        for (let i = 0; i < A10.kugelnM.length; i++) {
            if (A10.kugelnM[i].art == "KugelM") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxKugelM";
                checkB.value = "check";
                checkB.id = "check" + i;
                kugelM.appendChild(checkB);
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = A10.kugelnM[i].name;
                kugelM.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperKugelM" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                kugelM.appendChild(stepper);
                var hr = document.createElement("hr");
                kugelM.appendChild(hr);
            }
        }
        let schleife = document.getElementById("schleifen");
        for (let i = 0; i < A10.schleifen.length; i++) {
            if (A10.schleifen[i].art == "Schleife") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchleife";
                checkB.value = "check";
                checkB.id = "check" + i;
                schleife.appendChild(checkB);
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = A10.schleifen[i].name;
                schleife.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchleife" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                schleife.appendChild(stepper);
                var hr = document.createElement("hr");
                schleife.appendChild(hr);
            }
        }
        //Lieferadresse 
        let daten = document.getElementById("lieferadresse");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Straße";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        daten.appendChild(strasse);
        hausnr = document.createElement("input");
        hausnr.type = "text";
        hausnr.name = "DatenHausnummer";
        hausnr.placeholder = "Hausnummer";
        hausnr.pattern = "[0-9]{1,}";
        hausnr.required = true;
        daten.appendChild(hausnr);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        daten.appendChild(ort);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        email = document.createElement("input");
        email.type = "email";
        email.name = "DatenMail";
        email.placeholder = "E-Mail";
        email.required = true;
        daten.appendChild(email);
        //Lieferoptionen:
        let lieferung = document.getElementById("liefern");
        for (let i = 0; i < A10.lieferoptionen.length; i++) {
            if (A10.lieferoptionen[i].art == "Lieferung") {
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferung"; // name aus daten.ts ( art: Lieferung)
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferung.appendChild(radioB2); // name aus let lieferung
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = A10.lieferoptionen[i].name;
                lieferung.appendChild(label3);
            }
        }
        //Bestellung pr�fen button erstellen
        let button = document.getElementById("button");
        let submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Eingaben prüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    function warenkorb(_event) {
        let target = _event.target;
        let stepper = [];
        let checkBoxes = [];
        let gesamtkosten = 0;
        for (let i = 0; i < A10.kugelnE.length; i++) {
            if (A10.kugelnE[i].art == "KugelE") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            if (A10.kugelnM[i].art == "KugelM") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            if (A10.schleifen[i].art == "Schleife") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            if (target.value == A10.lichter[i].name && target.id == "selectLichterkette") {
                karrenBeleuchtung[0] = A10.lichter[i].name;
                karrenBeleuchtung[1] = "" + A10.lichter[i].preis;
            }
            if (target.id == "radio" + i) {
                karrenBaum[0] = A10.baumarten[i].name;
                karrenBaum[1] = "" + A10.baumarten[i].preis;
            }
            if (target.id == "radio" + i) {
                karrenHalter[0] = A10.halterungen[i].name;
                karrenHalter[1] = "" + A10.halterungen[i].preis;
            }
            if (target.id == "radio2." + i) {
                karrenLieferung[0] = A10.lieferoptionen[i].name;
                karrenLieferung[1] = "" + A10.lieferoptionen[i].preis;
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                karrenKugelE[i] = [A10.kugelnE[i].name, "" + (A10.kugelnE[i].preis * parseInt(stepper[i].value))];
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                karrenKugelM[i] = [A10.kugelnM[i].name, "" + (A10.kugelnM[i].preis * parseInt(stepper[i].value))];
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                karrenSchleife[i] = [A10.schleifen[i].name, "" + (A10.schleifen[i].preis * parseInt(stepper[i].value))];
            }
        }
        let korb = document.getElementById("bestellung");
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "black";
        korb.innerHTML = "<span id='karren'>Warenkorb</span><hr>";
        korb.innerHTML += "Baumart: " + karrenBaum[0] + " " + karrenBaum[1] + "0€ <br>";
        korb.innerHTML += "Baumhalterung: " + karrenHalter[0] + " " + karrenHalter[1] + "0€ <br>";
        korb.innerHTML += "Beleuchtung: " + karrenBeleuchtung[0] + " " + karrenBeleuchtung[1] + "0€ <br>";
        korb.innerHTML += "Lieferung: " + karrenLieferung[0] + " " + karrenLieferung[1] + "0€ <br>";
        gesamtkosten = parseFloat(karrenBaum[1]) + parseFloat(karrenBeleuchtung[1]) + parseFloat(karrenHalter[1]) + parseFloat(karrenLieferung[1]);
        for (let i = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtkosten += parseFloat(karrenKugelE[i][1]);
                korb.innerHTML += "" + karrenKugelE[i][0] + " " + karrenKugelE[i][1] + "0€ <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtkosten: " + Math.round(gesamtkosten * 100) / 100 + "0€";
    }
    //Pr�fung der eingegebenen Daten
    function handleMouseDown(_event) {
        let pruefen = document.createElement("div");
        pruefen.style.paddingBottom = "1em";
        if (name.checkValidity() == false || strasse.checkValidity() == false || hausnr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || email.checkValidity() == false) {
            pruefen.innerText = "Bitte überprüfe deine Daten";
            pruefen.style.color = "red";
            document.body.appendChild(pruefen); //Div mit warnung wird erstellt
        }
        else {
            pruefen.innerText = "Vielen Dank, Sie werden nun auf die Bestellseite weitegeleitet!";
            pruefen.style.color = "green";
            document.body.appendChild(pruefen);
        }
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=FormElements.js.map