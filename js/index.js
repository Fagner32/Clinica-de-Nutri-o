// variavel principal para chamar o tr da tabela
let nomeCliente = document.querySelector(".nomeCliente").textContent = 'Meus Clientes'
let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i]
        console.log(paciente)

    // variavel do segundo td correspondente ao peso
    let tdpeso = paciente.querySelector(".info-peso");
    let peso = tdpeso.textContent;

    //variavel do terceiro td correspondente a altura 
    let tdaltura = paciente.querySelector(".info-altura");
    let altura = tdaltura.textContent; 

    //variavel do 5 td correspondente ao imc
    let tdimc = paciente.querySelector(".info-imc");
    let valorImc = peso / (altura*altura);
    let imc = parseFloat(valorImc).toFixed(2) 


    let pesoValido = true;
    let alturaValida = true;
    //condicional em if/ else
    if(peso <= 0 || peso >= 500){
        tdimc.textContent = "Peso invalido";
        //paciente.style.backgroundColor = "lightcoral"
        tdpeso.style.color = "yellow"
        paciente.classList.add("paciente-invalido")
        pesoValido = false;
        
    }else if(altura <= 0 || altura >= 3.00){
        tdimc.textContent = "Altura invalida";
        //paciente.style.backgroundColor = "lightcoral"
        tdaltura.style.color = "yellow"
        paciente.classList.add("paciente-invalido")
        alturaValida = false;

    }else if(alturaValida && pesoValido){
        tdimc.textContent = imc
    }
        
}

//let titulo = document.querySelector('.titulo').addEventListener("click", escutaMensagem)


//function escutaMensagem(){
//    console.log("Eu fui clicado")
//}
let titulo = document.querySelector('.titulo').addEventListener("click", function(){
    console.log("Fui clicado")
})

let botao = document.querySelector("#adicionar-paciente").addEventListener("click", function(){
    console.log("eu, cliquei no botão")
})




