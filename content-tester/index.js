let currentProduct = 'Rubberhose3'
let products = ['Overlord', 'Anubis', 'Rubberhose3']

fetch("../index.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("content").innerHTML = data[currentProduct].en; 
    console.log(data)
  })