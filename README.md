# 🚀 Projeto Sauce Demo com Protractor

Este repositório contém testes automatizados para o site [SauceDemo](https://www.saucedemo.com/) utilizando o Protractor.

## Requisitos
Antes de executar os testes, certifique-se de ter os seguintes requisitos instalados:
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Protractor](https://www.protractortest.org/)

## Instalação
Clone este repositório e instale as dependências:
```sh

# Clone o repositório
git clone https://github.com/gabrielsilva9810/protractor-tests.git

# Acesse o diretório do projeto
cd protractor-tests

# Instale as dependências
npm install

# Instale o Cypress
npm install cypress --save-dev
```

## Configuração do WebDriver
Antes de rodar os testes, atualize o WebDriver com:
```sh
npx webdriver-manager update
npx webdriver-manager start
```

## Execução dos Testes
Para rodar os testes, utilize o comando:
```sh
npx protractor.conf.js  # Executa os testes em modo headless
```

## Estrutura do Projeto
```
|-- specs/
|   |-- login.spec.js   # Testes de login
|   |-- sample.spec.js  # Teste de exemplo
|-- protractor.conf.js  # Configuração do Protractor
|-- package.json        # Dependências do projeto
```

## Tecnologias Utilizadas
- Protractor
- Jasmine

---
🤝🏻 Feito por [Gabriel Silva](https://www.linkedin.com/in/gabrielsilva9810/)

