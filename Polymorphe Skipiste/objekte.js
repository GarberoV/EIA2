/*
Aufgabe: Aufgabe 6, Polymorphe Skipiste
Name: Veronika Garbero
Matrikel: 256581
Datum: 23.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A6;
(function (A6) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() { }
        move() {
            this.x += Math.random() * 200;
            this.y += Math.random() * 200;
        }
    }
    A6.MovingObjects = MovingObjects;
})(A6 || (A6 = {}));
//# sourceMappingURL=objekte.js.map