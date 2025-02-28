const { browser, element, by } = require('protractor');
const helper = require('protractor-helper');

describe('Teste de Logout', () => {
    beforeEach(async () => {
        await browser.get('https://www.saucedemo.com/');
    });

    it('Deve realizar logout com sucesso', async () => {
        // Elementos da página de login
        const usernameField = element(by.id('user-name'));
        const passwordField = element(by.id('password'));
        const loginButton = element(by.id('login-button'));
        
        // Elementos do menu e logout
        const menuButton = element(by.id('react-burger-menu-btn'));
        const logoutButton = element(by.id('logout_sidebar_link'));

        // Faz login
        await helper.waitForElementVisibility(usernameField);
        await usernameField.sendKeys('standard_user');
        await passwordField.sendKeys('secret_sauce');
        await loginButton.click();

        // Espera o menu aparecer e faz logout
        await helper.waitForElementVisibility(menuButton);
        await menuButton.click();
        await helper.waitForElementVisibility(logoutButton);
        await logoutButton.click();

        // Verifica se voltou para a tela de login
        await helper.waitForElementVisibility(usernameField);
        expect(await usernameField.isPresent()).toBe(true);
    });
});
