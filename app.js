
let Add;

async function get(){
    event.preventDefault();
    const nombre = document.querySelector('#nombre').value
    const response = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_RnctMsOMzeO7C8UU1BPrIdrcLjBXW')
    .then(response => Add = response.json())
    .then(data => Add = data)
    Email.send({
    SecureToken : "d5e5614a-c92d-4997-8b9a-6e3e522acfcd",
    To : 'kahaneary@gmail.com',
    From : "formulario@verdegestion.com",
    Subject : nombre,
    Body : Add,
  }).then(
  message => console.log(message)
  );
  alert("Muchas Gracias");
  location.reload()
}

