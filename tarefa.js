
var btAdiciona = document.querySelector("#adicionar-tarefa");

btAdiciona.addEventListener("click", function(event) {
	// body...
	event.preventDefault();

	var form = document.querySelector("#AddTarefa");

	var valida = validaT(form);

	if(valida.length > 0){
		exibeMenssagemErro(valida);

		return;
	}

	addNovaTarefaNaTabela(form);

	limpaMensagemErro();

	form.reset();
});



function addNovaTarefaNaTabela(form) {
	// body...
	var trTarefa = document.querySelector(".tarefas");

	var tdTarefa = document.createElement("td");

	tdTarefa.textContent = form.tarefa.value;
	tdTarefa.classList.add("tarefaAdd");


	trTarefa.appendChild(tdTarefa);
}



function validaT (form) {
	// body...

	var erro = "";

	if(form.tarefa.value.length == 0){
		erro = "Preencha a tarefa desejada";
	}

	return erro;
}

function exibeMenssagemErro(valida) {
	// body...

	var ul = document.querySelector("#mensagem-erro");

	console.log(ul);

	ul.innerHTML = "";

	var li = document.createElement("li");
	li.textContent = valida;

	ul.appendChild(li);
}

function limpaMensagemErro() {
	// body...
	var ul = document.querySelector("#mensagem-erro");

	ul.innerHTML = "";
}