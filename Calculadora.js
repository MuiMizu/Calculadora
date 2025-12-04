calcularEdad = () => {
    const nombre = document.getElementById("nombre").value;
    const año = document.getElementById("año").value;
    const edad = 2025 - año;
    document.getElementById("resultado").innerHTML = "Hola, " + nombre + ". Tienes " + edad + " años.";
}