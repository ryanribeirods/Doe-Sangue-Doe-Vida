# 🩸 Doe Sangue, Doe Vida - Campanha de Doação em Cornélio Procópio

Projeto prático desenvolvido para a disciplina de **Programação Web Front-End**, com o objetivo de conscientizar a população sobre a importância da doação de sangue, informar os requisitos básicos do Ministério da Saúde e divulgar os dados de atendimento da Unidade de Coleta e Transfusão (UCT) de Cornélio Procópio - PR.

---

## 📋 Sobre o Projeto

A aplicação foi construída utilizando exclusivamente **HTML5 semântico**, **CSS3** e **JavaScript puro (DOM e Web Storage)**, sem o uso de bibliotecas ou frameworks externos, seguindo todas as diretrizes de validação da W3C.

### Funcionalidades Implementadas
* **Página Inicial (`index.html`):** Apresentação da campanha, importância da doação, requisitos para doadores e informações de endereço, horário e contato da unidade de coleta em Cornélio Procópio.
* **Pré-Cadastro e Login (`cadastro.html` e `login.html`):** Formulário semântico para registro de novos doadores com redirecionamento para a tela de acesso.
* **Painel Administrativo (`admin.html`):** Gerenciamento dinâmico de usuários/voluntários armazenados localmente no navegador (`localStorage` em formato JSON), contando com:
  * Cadastro de usuário (nome, e-mail e data automática de envio);
  * Listagem dinâmica logo abaixo do formulário;
  * Pesquisa/filtro em tempo real;
  * Limpeza dos campos do formulário;
  * Exclusão individual de registros e exclusão total da lista.
* **Currículo (`curriculo.html`):** Página com as informações acadêmicas e profissionais do desenvolvedor, acessível pelo rodapé.

---

## 📁 Estrutura do Projeto

```text
projeto-doacao-sangue-cp/
├── index.html          # Página principal da campanha
├── cadastro.html       # Formulário de pré-cadastro de doadores
├── login.html          # Página de login (destino após cadastro)
├── admin.html          # Painel administrativo com manipulação de DOM e Local Storage
├── curriculo.html      # Currículo do desenvolvedor
├── css/
│   └── style.css       # Folha de estilos padrão de todas as páginas
├── js/
│   └── admin.js        # Lógica JavaScript para cadastro, busca, exclusão e Local Storage
├── img/
│   ├── bloodtype.svg   # Ícone da marca no cabeçalho
│   ├── banner-doacao.jpg
│   ├── doa-para-quem.jpg
│   └── fachada-uct.png
└── README.md           # Documentação do repositório
