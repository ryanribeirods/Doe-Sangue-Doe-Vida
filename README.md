# 🩸 Doe Sangue, Doe Vida — Cornélio Procópio

Aplicação web desenvolvida como Projeto Prático da disciplina de **Programação Web Front-end** (UTFPR — Campus Cornélio Procópio). O site tem como objetivo conscientizar a população sobre a importância da doação de sangue, apresentar os requisitos básicos do Ministério da Saúde e divulgar os dados de atendimento da Unidade de Coleta e Transfusão (UCT / Hemepar) de Cornélio Procópio - PR.

🔗 **Acesse o projeto online (GitHub Pages):** [https://ryanribeirods.github.io/Doe-Sangue-Doe-Vida/](https://ryanribeirods.github.io/Doe-Sangue-Doe-Vida/)

---

## 📋 Funcionalidades Implementadas

### Etapa 1 — HTML5 e CSS3
* **Página Inicial (`index.html`):** Layout responsivo construído com HTML5 semântico, CSS Grid e Flexbox, contendo banner informativo, cartões sobre a importância da doação, infográfico de compatibilidade sanguínea, lista de requisitos e informações de endereço/horário da unidade de coleta em Cornélio Procópio.
* **Pré-Cadastro (`cadastro.html`) e Login (`login.html`):** Formulário semântico de pré-cadastro de doadores com 6 campos validados e redirecionamento para a página de acesso do doador.
* **Currículo (`curriculo/index.html`):** Página de currículo do desenvolvedor integrada por meio de link no rodapé de todas as telas.
* **Conformidade W3C:** Código-fonte HTML5 e CSS3 validado pelos validadores oficiais da W3C.

### Etapa 2 — JavaScript (DOM e Web Storage)
* **Painel Administrativo (`admin.html` + `js/admin.js`):**
  * Cadastro de usuários/voluntários (nome e e-mail) com registro automático de data e hora de envio;
  * Persistência local em **chave única** (`usuariosDoeVidaCP`) no `localStorage` utilizando objetos JSON;
  * Listagem dinâmica em lista não ordenada (`<ul>`) exibida logo abaixo do formulário;
  * Limpeza rápida dos campos do formulário;
  * Pesquisa/filtragem em tempo real por nome ou e-mail;
  * Exclusão individual de registros ou exclusão completa da lista e do `localStorage`.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** (Tags semânticas e formulários nativos)
* **CSS3** (Variáveis CSS, Flexbox, CSS Grid e Media Queries para responsividade)
* **JavaScript (ES6+)** (Manipulação pura de DOM e API Web Storage / `localStorage`, sem bibliotecas externas)
* **Git & GitHub Pages** (Versionamento e hospedagem estática)

---

## 📁 Estrutura do Projeto

```text
Doe-Sangue-Doe-Vida/
├── index.html              # Página principal da campanha
├── cadastro.html           # Formulário de pré-cadastro de doadores
├── login.html              # Página de acesso do doador
├── admin.html              # Painel administrativo (CRUD com Local Storage)
├── README.md               # Documentação do projeto
├── css/
│   └── style.css           # Folha de estilos principal e responsividade
├── js/
│   └── admin.js            # Lógica JavaScript pura (DOM + Web Storage)
├── img/
│   ├── banner-doacao.jpg   # Banner da seção principal
│   ├── bloodtype.svg       # Ícone do logotipo
│   ├── doa-para-quem.jpg   # Infográfico de compatibilidade sanguínea
│   ├── fachada-uct.png     # Foto da fachada da UCT de Cornélio Procópio
│   └── ponto-localizacao.svg # Ícone de localização
└── curriculo/
    ├── index.html          # Página do currículo do desenvolvedor
    ├── css/
    │   └── style.css       # Folha de estilos do currículo
    ├── icones/             # Ícones de contato (GitHub, LinkedIn, e-mail, telefone)
    └── imagens/            # Foto de perfil e ícone ODS
