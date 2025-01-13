const form = document.getElementById('formDadosUser');

const nomesAdicionados = [];
const numerosAdicionados = [];

linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizarTabela();
});

function adicionaLinha() {
    const inputNomeUser = document.getElementById('nomeUser');
    const inputNumeroUser = document.getElementById('numeroUser');

    if (numerosAdicionados.includes(inputNomeUser)) {
        alert(`Este número de usuario -${inputNumeroUser.value}- ja foi inserido no formulário`);
    } else {
        nomesAdicionados.push(inputNomeUser.value);
        numerosAdicionados.push(inputNumeroUser);

        let linha = '<tr>'
        linha += `<td class="td1">${inputNomeUser.value}</td>`;
        linha += `<td class="td2">${inputNumeroUser.value}</td>`;
        linha += '</tr>';

        linhas += linha
    };

    inputNomeUser.value = '';
    inputNumeroUser.value = '';
};

function atualizarTabela() {
    const corpoTabela = document.querySelector('.nomeReturn');
    corpoTabela.innerHTML = linhas;
};
