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
    
   window.addEventListener("load", createForms);
   window.addEventListener("change", warenkorb);
    
    var name: HTMLInputElement;
    var strasse: HTMLInputElement;
    var hausnr: HTMLInputElement;
    var ort: HTMLInputElement;
    var plz: HTMLInputElement;
    var email: HTMLInputElement;
    var label: HTMLLabelElement;
    
    var karrenBaum: string[] = ["bitte Baum auswählen", "0"];
    var karrenHalter: string[] = ["bitte Halter auswählen", "0"];
    var karrenBeleuchtung: string[] = [light[0][0], "" + light[0][1]];
    var karrenKugelE: string[][] = [];
    var karrenKugelM: string[][] = [];
    var karrenSchleife: string[][] = [];
    var karrenLieferung: string[] = ["bitte Lieferung auswählen", "0"];
    
    
     function createForms(): void {
         
        //Halterung:
        let baum: HTMLDivElement = <HTMLDivElement>document.getElementById("baumarten");
        for (let i: number = 0; i < baumarten.length; i++) {
            if (baumarten[i].art == "Baumart") {
                var radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupBaumarten";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                baum.appendChild(radioB);

                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = baumarten[i].name;
                baum.appendChild(label);
            }
        }
         
         
        //Halterung:
        let halter: HTMLDivElement = <HTMLDivElement>document.getElementById("halterungen");
        for (let i: number = 0; i < halterungen.length; i++) {
            if (halterungen[i].art == "Halterung") {
                var radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halter.appendChild(radioB);

                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = halterungen[i].name;
                halter.appendChild(label);
            }
        }
         
         //Beleuchtung:
        let beleuchtung: HTMLDivElement = <HTMLDivElement>document.getElementById("lichter");
        let selectBox2: HTMLSelectElement = document.createElement("select");
        selectBox2.name = "SelectLichterkette";
        selectBox2.id = "selectLichterkette";
        beleuchtung.appendChild(selectBox2);
        for (let i: number = 0; i < lichter.length; i++) {

            if (lichter[i].art == "Lichterkette") {
                var opt2: HTMLElement = document.createElement("option");
                opt2.innerText = lichter[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
         
         
         //Schmuckartikel:
        let kugelE: HTMLDivElement = <HTMLDivElement>document.getElementById("kugelnE");
        for (let i: number = 0; i < kugelnE.length; i++) {
            if (kugelnE[i].art == "KugelE") {
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxKugelE";
                checkB.value = "check";
                checkB.id = "check" + i;
                kugelE.appendChild(checkB);

                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = kugelnE[i].name;
                kugelE.appendChild(label2);
                

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperKugelE" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                kugelE.appendChild(stepper);
                var hr: HTMLElement = document.createElement("hr");
                kugelE.appendChild(hr);
            }
        }
         
         
         let kugelM: HTMLDivElement = <HTMLDivElement>document.getElementById("kugelnM");
         for (let i: number = 0; i < kugelnM.length; i++) {
            if (kugelnM[i].art == "KugelM") {
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxKugelM";
                checkB.value = "check";
                checkB.id = "check" + i;
                kugelM.appendChild(checkB);

                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = kugelnM[i].name;
                kugelM.appendChild(label2);
                

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperKugelM" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                kugelM.appendChild(stepper);
                var hr: HTMLElement = document.createElement("hr");
                kugelM.appendChild(hr);
            }
        }
         
         
          let schleife: HTMLDivElement = <HTMLDivElement>document.getElementById("schleifen");
          for (let i: number = 0; i < schleifen.length; i++) {
            if (schleifen[i].art == "Schleife") {
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchleife";
                checkB.value = "check";
                checkB.id = "check" + i;
                schleife.appendChild(checkB);

                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = schleifen[i].name;
                schleife.appendChild(label2);
                

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchleife" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "50";
                stepper.step = "1";
                schleife.appendChild(stepper);
                var hr: HTMLElement = document.createElement("hr");
                schleife.appendChild(hr);
            }
        }
         
         
         
          //Lieferadresse 
        let daten: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferadresse");
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
        let lieferung: HTMLDivElement = <HTMLDivElement>document.getElementById("liefern");  
        for (let i: number = 0; i < lieferoptionen.length; i++) { // name aus daten.ts (let lieferoptionen)
            if (lieferoptionen[i].art == "Lieferung") { // namen aus daten.ts ( art: Lieferung)
                var radioB2: HTMLInputElement = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferung"; // name aus daten.ts ( art: Lieferung)
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferung.appendChild(radioB2); // name aus let lieferung

                var label3: HTMLLabelElement = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = lieferoptionen[i].name;
                lieferung.appendChild(label3);
            }
        }
         
        //Bestellung pr�fen button erstellen
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Eingaben prüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }

    function warenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let stepper: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let gesamtkosten: number = 0;

        for (let i: number = 0; i < kugelnE.length; i++) {
            if (kugelnE[i].art == "KugelE") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
            }
            if (kugelnM[i].art == "KugelM") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
            }
            if (schleifen[i].art == "Schleife") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
            }
            if (target.value == lichter[i].name && target.id == "selectLichterkette") {
                karrenBeleuchtung[0] = lichter[i].name;
                karrenBeleuchtung[1] = "" + lichter[i].preis;
            }
            if (target.id == "radio" + i) {
                karrenBaum[0] = baumarten[i].name;
                karrenBaum[1] = "" + baumarten[i].preis;

            }
            if (target.id == "radio" + i) {
                karrenHalter[0] = halterungen[i].name;
                karrenHalter[1] = "" + halterungen[i].preis;

            }
            if (target.id == "radio2." + i) {
                karrenLieferung[0] = lieferoptionen[i].name;
                karrenLieferung[1] = "" + lieferoptionen[i].preis;

            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                karrenKugelE[i] = [kugelnE[i].name, "" + (kugelnE[i].preis * parseInt(stepper[i].value))];
            }
             if (target.id == "check" + i || target.id == "stepper" + i) {
                karrenKugelM[i] = [kugelnM[i].name, "" + (kugelnM[i].preis * parseInt(stepper[i].value))];
            }
             if (target.id == "check" + i || target.id == "stepper" + i) {
                karrenSchleife[i] = [schleifen[i].name, "" + (schleifen[i].preis * parseInt(stepper[i].value))];
            }
        }
        
        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("bestellung");
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "black";
        korb.innerHTML = "<span id='karren'>Warenkorb</span><hr>";
        korb.innerHTML += "Baumart: " + karrenBaum[0] + " " + karrenBaum[1] + "0€ <br>";
        korb.innerHTML += "Baumhalterung: " + karrenHalter[0] + " " + karrenHalter[1] + "0€ <br>";
        korb.innerHTML += "Beleuchtung: " + karrenBeleuchtung[0] + " " + karrenBeleuchtung[1] + "0€ <br>";
        korb.innerHTML += "Lieferung: " + karrenLieferung[0] + " " + karrenLieferung[1] + "0€ <br>";

        gesamtkosten = parseFloat(karrenBaum[1]) + parseFloat(karrenBeleuchtung[1]) +   parseFloat(karrenHalter[1]) + parseFloat(karrenLieferung[1]);
        for (let i: number = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtkosten += parseFloat(karrenKugelE[i][1]);
                korb.innerHTML += "" + karrenKugelE[i][0] + " " + karrenKugelE[i][1] + "0€ <br>";
                                 // "" + karrenKugelM[i][0] + " " + karrenKugelM[i][1] + "0€ <br>",
                                 // "" + karrenSchleife[i][0] + " " + karrenSchleife[i][1] + "0€ <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtkosten: " + Math.round(gesamtkosten * 100) / 100 + "0€";
    }
    
    //Pr�fung der eingegebenen Daten
    function handleMouseDown(_event: MouseEvent): void {
        let pruefen: HTMLDivElement = document.createElement("div");
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
         }
    

    
