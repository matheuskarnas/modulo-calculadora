"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisor = exports.Multiplicador = exports.Subtrator = exports.Somador = void 0;
var Somador = /** @class */ (function () {
    function Somador() {
        this.somar = function (a, b) {
            return a + b;
        };
    }
    return Somador;
}());
exports.Somador = Somador;
var Subtrator = /** @class */ (function () {
    function Subtrator() {
        this.subtrair = function (a, b) {
            return a - b;
        };
    }
    return Subtrator;
}());
exports.Subtrator = Subtrator;
var Multiplicador = /** @class */ (function () {
    function Multiplicador() {
        this.multiplicar = function (a, b) {
            return a * b;
        };
    }
    return Multiplicador;
}());
exports.Multiplicador = Multiplicador;
var Divisor = /** @class */ (function () {
    function Divisor() {
        this.dividir = function (a, b) {
            return a / b;
        };
    }
    return Divisor;
}());
exports.Divisor = Divisor;
