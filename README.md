# gms-test

Testes com Cypress - Jornada QA
Este repositório contém testes automatizados utilizando o Cypress, aplicados em uma jornada de qualidade de software (QA). O objetivo principal é garantir o correto funcionamento de funcionalidades essenciais, como o cadastro de membros e busca de filmes, enquanto aprende as melhores práticas e estrutura do Cypress.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Rodar os Testes](#como-rodar-os-testes)
- [Testes](#testes)
  - [Cadastro de Membros](#cadastro-de-membros)
  - [Busca de Filmes](#busca-de-filmes)
- [Comandos Customizados](#comandos-customizados)
- [Estrutura do Cypress](#estrutura-do-cypress)


## Pré-requisitos
**É necessário ter ambos os projetos configurados:**
[🔗 API](https://github.com/EBAC-QE/server-gms)
[🔗 Frontend](https://github.com/EBAC-QE/golden-movie-studio)

Antes de rodar os testes, certifique-se de ter o Node.js instalado em sua máquina. Também será necessário o Cypress.

**Instale as dependências do projeto com o seguinte comando:**

```bash
npm install
```

## Estrutura do Projeto
O projeto é organizado da seguinte maneira:

**cypress/integration**: Contém os arquivos de teste (por exemplo, cadastro.cy.js e busca.cy.js).

**cypress/fixtures**: Contém dados fixos para os testes (ex: filmes.json).

**cypress/support**: Contém arquivos de configuração e comandos customizados (ex: commands.js).

## Como Rodar os Testes
**Para rodar os testes com Cypress, use o comando:**

```bash
npx cypress open
```

Isso abrirá a interface gráfica do Cypress onde você poderá rodar os testes manualmente.

**Para rodar os testes em modo headless (sem interface gráfica):**

```bash
npx cypress run
```

## Testes:
## Cadastro de Membros
No arquivo cadastro.cy.js, são testadas as funcionalidades de cadastro de membros.

**Descrição dos testes:**

**Cadastro de campos obrigatórios:**

Criação de um novo usuário com um e-mail único (baseado no timestamp).

Verificação de uma mensagem de sucesso após o cadastro.

**Validação de erro com nome inválido:**

Valida a mensagem de erro quando o nome contém caracteres inválidos (ex: números).

## Busca de Filmes

No arquivo busca.cy.js, são testadas as funcionalidades de busca de filmes.

**Descrição dos testes:**

**Busca de um filme específico:**

A busca é realizada digitando o nome do filme diretamente.

**Busca de filmes a partir de um arquivo de fixture:**

A busca é realizada para cada filme presente na lista no arquivo de fixture filmes.json.

**Busca em uma lista com método clear e wait:**

A busca é limpa a cada iteração, e um tempo de espera é adicionado para simular o comportamento real do usuário.

## Comandos Customizados
O arquivo commands.js contém comandos customizados que ajudam a manter os testes mais limpos e reutilizáveis. Um exemplo de comando personalizado é o preencherCadastro, utilizado para preencher os campos do formulário de cadastro de membros.


## Estrutura do Cypress
O Cypress permite que você escreva testes de forma declarativa, com comandos como cy.visit(), cy.get(), e cy.type(), que simulam interações reais com a interface. Além disso, o Cypress oferece diversos métodos para fazer asserções, como should() e and(), garantindo que a aplicação se comporte conforme esperado.

