document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form-reg");
    const URL = "https://jsonplaceholder.typicode.com/users";

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(event);

        const nombre = document.getElementById("nnombre").value;
        const apellido = document.getElementById("napellido").value;
        const fecha = document.getElementById("nnacimiento").value;
        const datos = {
            nombre: nombre,
            apellido: apellido,
            fecha: fecha,
        };

        if (nombre != "" && apellido != "" && fecha != "") {
            alert("Registrado Correctamente");
            console.log(fecha);
            fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datos)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error: ", error);
            });
        }
    });
});