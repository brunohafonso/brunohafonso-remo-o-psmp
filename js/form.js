function montaTr(escola) {
    var escolaTr = document.createElement("tr");
    escolaTr.classList.add("escola");

    escolaTr.appendChild(montaTd(escola.DRE, "info-dre"));
    escolaTr.appendChild(montaTd(escola.CODESC, "info-eol"));
    escolaTr.appendChild(montaTd(escola.TIPOESC, "info-tpescola"));
    escolaTr.appendChild(montaTd(escola.NOMESC, "info-nomesc"));
    escolaTr.appendChild(montaTd(escola.ENDERECO_FORM, "info-endesc"));
    escolaTr.appendChild(montaTd(escola.TEL1, "info-telefone1"));
    escolaTr.appendChild(montaTd(escola.TEL2, "info-telefone2"));
    escolaTr.appendChild(montaTd("-", "info-trajeto"));
    
    return escolaTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function adicionaEscolaNaTabela(escola) {
    var escolaTr = montaTr(escola);
    var tabela = document.querySelector("#tabela-escolas");
    tabela.appendChild(escolaTr);
}
