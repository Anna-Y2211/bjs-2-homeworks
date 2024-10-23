﻿function parseCount(value) {
    const num = Number.parseFloat(value);
    if(Number.isNaN(num)) {
        throw new Error('Невалидное значение');
    }
    return num;
}
function validateCount(valuesecond) {
    try{
        return parseCount(valuesecond);
    }catch(error) {
        return error;
    }
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
        const p = this.perimeter / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}
function getTriangle(a,b,c) {
    try{
        return new Triangle(a,b,c);
    }catch(error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
              return 'Ошибка! Треугольник не существует';
            }
        }
    }
}
