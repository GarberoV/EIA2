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
    class CloudInfo {
        constructor(x, y) {
            this.cloudX = x;
            this.cloudY = y;
        }
        moveCloudInfo() {
            if (this.cloudX > 800) {
                this.cloudX = 0;
            }
            this.cloudX += Math.random();
            this.moveCloudInfo();
        }
        drawCloudInfo() {
            A5_Class.crc2.fillStyle = "#ffffff";
            A5_Class.crc2.beginPath();
            A5_Class.crc2.arc(this.cloudX, this.cloudY, 20, 0, 2 * Math.PI);
            A5_Class.crc2.fill();
            A5_Class.crc2.beginPath();
            A5_Class.crc2.arc(this.cloudX + 15, this.cloudY + 5, 18, 0, 2 * Math.PI);
            A5_Class.crc2.fill();
            A5_Class.crc2.beginPath();
            A5_Class.crc2.arc(this.cloudX - 15, this.cloudY + 5, 18, 0, 2 * Math.PI);
            A5_Class.crc2.fill();
        }
    }
    A5_Class.CloudInfo = CloudInfo;
})(A5_Class || (A5_Class = {}));
//# sourceMappingURL=cloud.js.map