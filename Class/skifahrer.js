/*
Aufgabe: Aufgabe 5, Interface - Class
Name: Veronika Garbero
Matrikel: 256581
Datum: 14.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A5_Class;
(function (A5_Class) {
    class SkierInfo {
        constructor(_x, _y, _headcolor, _bodycolor) {
            this.skifahrerX = _x;
            this.skifahrerY = _y;
            this.headcolor = _headcolor;
            this.bodycolor = _bodycolor;
        }
        drawSkierInfo() {
            A5_Class.crc2.fillStyle = this.bodycolor;
            A5_Class.crc2.fillRect(this.skifahrerX, this.skifahrerY, 5, -20);
            A5_Class.crc2.fillStyle = this.headcolor;
            A5_Class.crc2.beginPath();
            A5_Class.crc2.arc(this.skifahrerX + 2.5, this.skifahrerY - 20, 7, 0, 2 * Math.PI);
            A5_Class.crc2.fill();
            A5_Class.crc2.stroke();
            A5_Class.crc2.fillStyle = this.headcolor;
            A5_Class.crc2.beginPath();
            A5_Class.crc2.moveTo(this.skifahrerX - 10, this.skifahrerY - 5);
            A5_Class.crc2.lineTo(this.skifahrerX + 20, this.skifahrerY + 9);
            A5_Class.crc2.stroke();
        }
        moveSkierInfo() {
            if (this.skifahrerX > 800) {
                this.skifahrerX = 0;
                this.skifahrerY = 0;
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            if (this.skifahrerY > 600) {
                this.skifahrerY = 0;
                this.skifahrerY = 0;
            }
            this.skifahrerX += 5;
            this.skifahrerY += 3;
            this.drawSkierInfo();
        }
    }
    A5_Class.SkierInfo = SkierInfo;
})(A5_Class || (A5_Class = {}));
//# sourceMappingURL=skifahrer.js.map