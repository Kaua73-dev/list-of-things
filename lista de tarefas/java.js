

let input = document.getElementById('text');
let button = document.getElementById('button-container');
let tarefa = document.getElementById('tarefa');



button.addEventListener('click', function(){

let p = document.createElement('p');
p.textContent = input.value;
tarefa.appendChild(p);

input.value = '';



// excluir tarefa



let buttonExcluir = document.createElement('button');
// estiliza o button 
buttonExcluir.classList.add('button-excluir');

buttonExcluir.textContent = "Excluir";

//mostra o button;
p.appendChild(buttonExcluir);
// aparecer tarefa 
tarefa.appendChild(p);


// criar a exlusão;
buttonExcluir.addEventListener('click', function(){
    tarefa.removeChild(p);
})


});



