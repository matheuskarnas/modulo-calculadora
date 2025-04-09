class Somador {
    public somar = (a: number, b: number): number => {
        return a + b;
    }
}

class Subtrator {
    public subtrair = (a: number, b: number): number => {
        return a - b;
    }
}

class Multiplicador {
    public multiplicar = (a: number, b: number): number => {
        return a * b;
    }
}

class Divisor {
    public dividir = (a: number, b: number): number => {
        return a / b;
    }
}

export { Somador, Subtrator, Multiplicador, Divisor };