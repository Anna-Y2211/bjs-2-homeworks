﻿function parseCount(value) {
    const num = Number.parseFloat(value);
    if(Number.isNaN(value)) {
        throw new Error('Невалидное значение');
    }
    return parseCount
}
function validateCount(value2) {
    try{
        return parseCount(value2);
    }catch(error) {
        return error;
        console.log('Ошибка!');
    }
   validateCount(value2)
}

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if(a + b < c || b + c < a || a + c < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    get perimeter() {
        return this.a + this.b + this.c
    }
    get area() {
        const p = 0.5 * (this.a + this.b + this.c);
        return Number(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}
function getTriangle(a,b,c) {
    try{
        return new Triangle(a,b,c);
    }catch(error) {
        return {
            getArea: function() {
                return 'Ошибка, треугольник не существует';
            }
            getPerimeter: function() {
              return 'Ошибка, треугольник не существует';
            }
        }
    }
}
