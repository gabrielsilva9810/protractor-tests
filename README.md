# Testes Automatizados no SauceDemo com Protractor

Este repositório contém testes automatizados para o site [SauceDemo](https://www.saucedemo.com/) utilizando o Protractor.

## Requisitos
Antes de executar os testes, certifique-se de ter os seguintes requisitos instalados:
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Protractor](https://www.protractortest.org/)

## Instalação
Clone este repositório e instale as dependências:
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
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
npx protractor.conf.js
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

## Autor
Gabriel Silva

