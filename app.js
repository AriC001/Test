let Add;
let ip2

async function get() {
    event.preventDefault();
    const nombre = document.querySelector('#nombre').value;

    const json1 = await fetch("https://api.ipify.org?format=json")
    .then(response => {
        // Verificar si la respuesta es exitosa (estado 200)
        if (!response.ok) {
          throw new Error('Hubo un problema con la solicitud.');
        }
        // Parsear la respuesta como JSON y devolverla
        return response.json();
      })
      .then(data => {
        // Hacer algo con los datos
        console.log(data);
        // Acceder al valor específico 'ip'
        console.log(data.ip);
        ip2 = data.ip
      })

    try {
        // let string = "http://geo.ipify.org/api/v1?apiKey=at_RnctMsOMzeO7C8UU1BPrIdrcLjBXW&ipAddress="+ip2+"";
        // console.log(string);

        // const response = await fetch(string);
        
        // // Verificar si la respuesta es exitosa (estado 200)
        // if (!response.ok) {
        //     throw new Error('Hubo un problema con la solicitud.');
        // }
        
        // const data = await response.json(); // Obtener los datos JSON
        // console.log(data)
        // Configurar el objeto de correo electrónico
        Email.send({
            SecureToken : "10a1f2e8-7cb9-412e-9a00-0dc84a0cb037",
            To : 'aricohen98@gmail.com',
            From : "ensenadas-voces.0l@icloud.com",
            Subject : nombre,
            Body : ip2,
            // Body : data,
        }).then(
        message => console.log(message)
        );
        alert("Muchas Gracias");
    } catch (error) {
        console.error('Error:', error);
        alert("Ocurrió un error al procesar tu solicitud.");
    }
}
