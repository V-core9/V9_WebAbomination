describe('v-core9.com Demo', function() {

  before(browser => browser.navigateTo('https://www.google.com/'));

  test('Demo test v-core9.com', function(browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Google')
      .assert.visible('.gLFyf')
      .setValue('.gLFyf', 'v-core9')
      .assert.visible('.gNO89b')
      .click('.gNO89b')
      .assert.textContains('#search', 'v-core9');
  });

  after(browser => browser.end());
});
