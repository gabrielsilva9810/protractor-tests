const { browser, element, by } = require('protractor');
const helper = require('protractor-helper');

describe('Login no SauceDemo', () => {
  beforeAll(async () => {
    await browser.waitForAngularEnabled(false); // Desativa a espera do Angular
    await browser.get('https://www.saucedemo.com/');
  });

  it('Deve fazer login com sucesso', async () => {
    const usernameField = element(by.id('user-name'));
    const passwordField = element(by.id('password'));
    const loginButton = element(by.id('login-button'));
    const inventoryList = element(by.className('inventory_list'));

    // Espera os elementos estarem visíveis
    await helper.waitForElementVisibility(usernameField);
    await helper.waitForElementVisibility(passwordField);
    await helper.waitForElementVisibility(loginButton);

    // Insere o nome de usuário e senha
    await usernameField.sendKeys('standard_user');
    await passwordField.sendKeys('secret_sauce');

    // Clica no botão de login
    await loginButton.click();

    // Espera a página de produtos carregar
    await helper.waitForElementVisibility(inventoryList);

    // Verifica se o usuário foi autenticado
    expect(await inventoryList.isDisplayed()).toBe(true);
  });
});