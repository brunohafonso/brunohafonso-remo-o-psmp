window.onload = function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "escolas.json");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var escolas = JSON.parse(resposta);

            escolas.forEach(function(escola) {
                adicionaEscolaNaTabela(escola);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
};
