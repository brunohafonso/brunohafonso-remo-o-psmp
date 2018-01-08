var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var escolas = document.querySelectorAll(".escola");

    if (this.value.length > 0) {
        for (var i = 0; i < escolas.length; i++) {
            var escola = escolas[i];
            var tdNome = escola.querySelector(".info-nomesc");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            if (!expressao.test(nome)) {
                escola.classList.add("invisivel");
            } else {
                escola.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < escolas.length; i++) {
            var escola = escolas[i];
            escola.classList.remove("invisivel");
        }
    }
});

var tpesc = document.querySelectorAll(".check");

for(var i = 0; i < tpesc.length; i++) {
    tpesc[i].addEventListener("change", function() {
        var escolas = document.querySelectorAll(".escola");
        
        if(!this.checked) {
            for(var i = 0; i < escolas.length; i++) {
                var escola = escolas[i];
                var tpesc = escola.querySelector(".info-tpescola");
                var tipo = tpesc.textContent;
                var expressao = new RegExp(this.value, "i");
                if(expressao.test(tipo)) {
                   escola.classList.add("invisivel"); 
                }
            }
        } else {
            for (var i = 0; i < escolas.length; i++) {
                var escola = escolas[i];
                escola.classList.remove("invisivel");
            }
        }
    });
}

var dre = document.querySelector("#dre");

dre.addEventListener("change", function() {
    var escolas = document.querySelectorAll(".escola");
    if(this.value != "selecionar") {
        for(var i = 0; i < escolas.length; i++) {
            var escola = escolas[i];
            var infoDre = escola.querySelector(".info-dre");
            var nomeDre = infoDre.textContent;
            var expressao = new RegExp(this.value, "i");
            if(!expressao.test(nomeDre)) {
                escola.classList.add("invisivel");
            } else {
                escola.classList.remove("invisivel");
            }
        }
    } else {
        for(var i = 0; i < escolas.length; i++) {
            var escola = escolas[i];
            escola.classList.remove("invisivel");
        }
    }
});


