/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

class Poligono {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  // Getter
  get area() {
    return "El area del Poligono es: " + this.calcArea();
  }
  // Método
  calcArea() {
    return this.alto * this.ancho;
  }
}

class Cuadrado extends Poligono {
  constructor(lado) {
    super(lado, lado);
    this.lado = lado;
  }
  // Getter
  get area() {
    return "El area del Cuadrado es: " + this.calcArea();
  }
  // Método
  calcArea() {
    return this.lado * this.lado;
  }
}

class Triangulo extends Poligono {
  constructor(base, altura) {
    super(base, altura);
    this.altura = altura;
    this.base= base;
  }
   // Getter
  get area() {
    return "El area del Triangulo es: " + this.calcArea();
  }
}

class Rectangulo extends Poligono{
  
  // Getter
  get area() {
    return "El area del Rectangulo es: " + this.calcArea();
  }
}


function areaPoligono(poligono) {
  console.log(poligono.area);
}


const c1 = new Cuadrado(4);
const t1 = new Triangulo(2, 3);
const r1 = new Rectangulo(7,12);

areaPoligono(c1);
areaPoligono(t1);
areaPoligono(r1);

