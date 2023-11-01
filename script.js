var cantidadEntrada = document.getElementById('cantidadEntrada')
var categoria = document.getElementById('categoria')
var totalCompra = document.getElementById("totalCompra")
var botonCalcular = document.getElementById('botonCalcular')
var valorEntrada = 200
const estudiante = document.getElementById('estudiante')
const trainee = document.getElementById('trainee')
const junior = document.getElementById('junior')

function resumen(){
    if(categoria.value=="estudiante"){
      estudiante.value = valorEntrada * 0.20
      console.log(estudiante.value)
    }else if(categoria.value=="trainee"){
      trainee.value = valorEntrada * 0.50
      console.log(trainee.value)
    }else if(categoria.value=="junior"){
     junior.value = valorEntrada * 0.85
     console.log(junior.value)
    }
    totalCompra.textContent = totalCompra.textContent + Number(cantidadEntrada.value) * Number(categoria.value)
}