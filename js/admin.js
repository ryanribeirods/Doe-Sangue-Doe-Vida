// Chave única utilizada no Local Storage (requisito do edital)
const CHAVE_STORAGE = "usuariosDoeVidaCP";

// Seleção dos elementos do DOM
const formAdmin = document.getElementById("form-admin");
const inputNome = document.getElementById("nome-usuario");
const inputEmail = document.getElementById("email-usuario");
const btnLimpar = document.getElementById("btn-limpar");
const btnExcluirTodos = document.getElementById("btn-excluir-todos");
const inputPesquisa = document.getElementById("campo-pesquisa");
const listaUsuarios = document.getElementById("lista-usuarios");

// 1. FUNÇÕES AUXILIARES DE WEB STORAGE (JSON)
function obterUsuariosStorage() {
    const dados = localStorage.getItem(CHAVE_STORAGE);
    // Se já houver dados salvos, converte de texto JSON para array; senão, retorna array vazio
    return dados ? JSON.parse(dados) : [];
}

function salvarUsuariosStorage(lista) {
    // Converte o array de objetos para string JSON e salva na chave única
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
}

// 2. FUNÇÃO PARA RENDERIZAR A LISTA NÃO ORDENADA (<ul>) NA TELA
function renderizarLista(filtro = "") {
    const usuarios = obterUsuariosStorage();
    const termoBusca = filtro.trim().toLowerCase();

    // Limpa a lista visual antes de redesenhar
    listaUsuarios.innerHTML = "";

    // Filtra os usuários caso exista texto no campo de pesquisa (busca por nome ou e-mail)
    const usuariosFiltrados = usuarios.filter((usuario) => {
        return (
            usuario.nome.toLowerCase().includes(termoBusca) ||
            usuario.email.toLowerCase().includes(termoBusca)
        );
    });

    // Mensagem informativa caso não haja itens
    if (usuariosFiltrados.length === 0) {
        const liVazio = document.createElement("li");
        liVazio.textContent = "Nenhum usuário encontrado.";
        listaUsuarios.appendChild(liVazio);
        return;
    }

    // Cria um <li> para cada registro contendo: Data de envio + Nome + E-mail + Botão Excluir
    usuariosFiltrados.forEach((usuario) => {
        const li = document.createElement("li");

        const spanInfo = document.createElement("span");
        spanInfo.innerHTML = `<strong>[${usuario.dataEnvio}]</strong> ${usuario.nome} — <em>${usuario.email}</em>`;

        const btnExcluirItem = document.createElement("button");
        btnExcluirItem.type = "button";
        btnExcluirItem.textContent = "Excluir";
        btnExcluirItem.className = "btn-perigo";

        // Evento para excluir apenas este item específico
        btnExcluirItem.addEventListener("click", () => {
            excluirUsuario(usuario.id);
        });

        li.appendChild(spanInfo);
        li.appendChild(btnExcluirItem);
        listaUsuarios.appendChild(li);
    });
}

// 3. FUNÇÃO PARA INCLUIR NOVO USUÁRIO (CADASTRO)
formAdmin.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();

    if (nome === "" || email === "") {
        alert("Por favor, preencha o nome e o e-mail.");
        return;
    }

    // Formata a data e hora atual do envio
    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString("pt-BR") + " " + agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    // Cria o objeto do novo usuário
    const novoUsuario = {
        id: Date.now(), // Identificador único baseado no timestamp
        nome: nome,
        email: email,
        dataEnvio: dataFormatada
    };

    // Adiciona ao array existente e salva no Local Storage
    const usuarios = obterUsuariosStorage();
    usuarios.push(novoUsuario);
    salvarUsuariosStorage(usuarios);

    // Limpa os campos, limpa a pesquisa e atualiza a lista na tela
    limparCampos();
    inputPesquisa.value = "";
    renderizarLista();
});

// 4. FUNÇÃO PARA LIMPAR OS CAMPOS DO FORMULÁRIO
function limparCampos() {
    inputNome.value = "";
    inputEmail.value = "";
    inputNome.focus();
}

btnLimpar.addEventListener("click", limparCampos);

// 5. FUNÇÃO PARA EXCLUIR UM ITEM ESPECÍFICO DA LISTA E DO LOCAL STORAGE
function excluirUsuario(id) {
    const usuarios = obterUsuariosStorage();
    // Mantém apenas os usuários cujo ID seja diferente do ID excluído
    const novaLista = usuarios.filter((usuario) => usuario.id !== id);
    salvarUsuariosStorage(novaLista);
    renderizarLista(inputPesquisa.value);
}

// 6. FUNÇÃO PARA EXCLUIR TODOS OS ITENS DA LISTA E DO LOCAL STORAGE
btnExcluirTodos.addEventListener("click", function () {
    const usuarios = obterUsuariosStorage();
    if (usuarios.length === 0) {
        alert("A lista já está vazia.");
        return;
    }

    if (confirm("Tem certeza que deseja excluir todos os usuários cadastrados?")) {
        localStorage.removeItem(CHAVE_STORAGE);
        inputPesquisa.value = "";
        renderizarLista();
    }
});

// 7. FUNÇÃO DE PESQUISA EM TEMPO REAL
inputPesquisa.addEventListener("input", function () {
    renderizarLista(inputPesquisa.value);
});

// Carrega os dados salvos no Local Storage assim que a página abre
document.addEventListener("DOMContentLoaded", function () {
    renderizarLista();
});