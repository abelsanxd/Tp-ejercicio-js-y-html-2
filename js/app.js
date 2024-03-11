class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    let generacion = "";
    if (this.anioNacimiento >= 1965 && this.anioNacimiento <= 1980) {
      generacion = "Generación X";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1996) {
      generacion = "Millennials";
    } else if (this.anioNacimiento >= 1997 && this.anioNacimiento <= 2012) {
      generacion = "Generación Z";
    } else {
      generacion = "Otra generación";
    }
    return generacion;
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso} kg\nAltura: ${this.altura} cm\nAño de Nacimiento: ${this.anioNacimiento}`;
  }
}

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const dni = document.getElementById("dni").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseInt(document.getElementById("altura").value);
    const anioNacimiento = parseInt(
      document.getElementById("anioNacimiento").value
    );

    const persona = new Persona(
      nombre,
      edad,
      dni,
      sexo,
      peso,
      altura,
      anioNacimiento
    );
    alert(persona.mostrarDatos());
    document.getElementById("botones").classList.remove("d-none");
  });
