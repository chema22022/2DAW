function ej12() {
    var numero1 = parseInt(prompt("Introduce el primer número positivo menor de 57:"));
            var numero2 = parseInt(prompt("Introduce el segundo número positivo menor de 57:"));

            if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0 || numero1 >= 57 || numero2 >= 57) {
                alert("Por favor, introduce dos números positivos menores de 57.");
            } else {
                var producto = numero1 * numero2;
                alert("El producto de " + numero1 + " y " + numero2 + " es: " + producto);
            }

            var reiniciar = confirm("¿Quieres volver a empezar?");
            if (reiniciar) {
                calcularProducto();
            }
}