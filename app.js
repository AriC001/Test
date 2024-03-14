
let Add;

async function get(){
    event.preventDefault();
    const nombre = document.querySelector('#nombre').value
    const response = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_aHq1A9SvneSNxjakDbvxbPa84CTby&ipAddress=8.8.8.8')
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
  location.reload()
}

