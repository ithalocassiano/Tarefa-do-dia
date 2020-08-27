var tabela = document.querySelector("#tableTarefa");

tabela.addEventListener("dblclick", function (event) {
	// body...

	event.target.classList.add("fadeOut");
	console.log("cliquei");
	//var dado = event.target.textContent;
	
	tarefaConcluida(event.target.textContent);

	setTimeout(function(){
		event.target.remove();
	}, 800);
});


function tarefaConcluida(dado) {
	// body...

	var trTarefaConcluida = document.querySelector(".tarefas-feita");

	var tdTarefaConcluida = document.createElement("td");
	tdTarefaConcluida.textContent = dado;

	tdTarefaConcluida.classList.add("tarefaAdd-feita");

	trTarefaConcluida.appendChild(tdTarefaConcluida);
}