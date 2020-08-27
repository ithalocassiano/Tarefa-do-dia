
var tabela = document.querySelector("#tarefas-concluidas");

tabela.addEventListener("dblclick", function(event) {
	// body...

	event.target.classList.add("fadeOut");

	setTimeout(function () {
		// body...
		event.target.remove();
	}, 800);
});