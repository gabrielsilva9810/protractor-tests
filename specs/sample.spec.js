describe('SauceDemo Login Page', () => {
  it('should have the correct title', async () => {
    await browser.get('https://www.saucedemo.com/');
    const title = await browser.getTitle();
    expect(title).toEqual('Swag Labs');
  });
});
