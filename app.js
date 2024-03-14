
let Add;

async function get(){
    event.preventDefault();
    const nombre = document.querySelector('#nombre').value
    // console.log("hola")
    // const json1 = await fetch("https://api.ipify.org?format=json")
    // .then(response => {
    //     // Verificar si la respuesta es exitosa (estado 200)
    //     if (!response.ok) {
    //       throw new Error('Hubo un problema con la solicitud.');
    //     }
    //     // Parsear la respuesta como JSON y devolverla
    //     return response.json();
    //   })
    //   .then(data => {
    //     // Hacer algo con los datos
    //     console.log(data);
    //     // Acceder al valor específico 'ip'
    //     console.log(data.ip);
    //     ip2 = data.ip
    //   })
    let string = "https://geo.ipify.org/api/v1?apiKey=at_RnctMsOMzeO7C8UU1BPrIdrcLjBXW"
    console.log(string);
    const response = await fetch(string)
    .then(response => Add = response.json())
    .then(data => Add = data)
    Email.send({
        SecureToken : "9f000ead-c1a3-4f50-b67e-4957363f3f96",
        To : 'ensenadas-voces.0l@icloud.com',
        From : "ensenadas-voces.0l@icloud.com",
        Subject : nombre,
        Body : Add,
    }).then(
    message => console.log(message)
    );
    alert("Muchas Gracias");
    // location.reload()
    // console.log(json)
    // alert("hola")
}

