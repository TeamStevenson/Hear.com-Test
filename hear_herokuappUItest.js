describe('Login via Cypress', function() {
  it('Succesful login to XYZ site', function() {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username', {timeout: 8000}).type('tomsmith');
    cy.get('#password', {timeout: 8000}).type('SuperSecretPassword!');
    cy.get('#login > button', {timeout: 8000}).click();
    cy.wait(4000);
//logout
    cy.get('#content > div > a', {timeout: 8000}).click();
    cy.wait(3000);
  })
})

describe('Login error via Cypress', function() {
  it('Shows error on login attempt to XYZ site', function() {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username', {timeout: 8000}).type('EricStevenson');
        cy.get('#password', {timeout: 8000}).type('SuperSecretPassword');
        cy.get('#login > button', {timeout: 8000}).click();
        cy.wait(3000);
      })
})

describe('Example table 1: Test sorting of last names by alphabetic order (A..Z, Z..A)', function() {
  it('Sorting last names A..Z, Z..A', function() {
        cy.visit('https://the-internet.herokuapp.com/tables');
        cy.wait(3000)
//Example table 1: test sorting of last names by alphabetic order (A..Z, Z..A)
        cy.contains('Last Name', {timeout: 8000}).click();
        cy.wait(3000)
        cy.contains('Last Name', {timeout: 8000}).click();
        cy.wait(3000)

//describe('Example table 2: Test sorting of first names by alphabetic order (A..Z, Z..A)', function() {
//  it('Sorting first names A..Z, Z..A', function() {
//      cy.contains('first-name', {timeout: 8000}).click();
//      cy.wait(3000);
//      cy.contains('first-name', {timeout: 8000}).click();

      })
})

describe('test that the click opens a new browser-tab or new window', function() {
  it('New browser tab', function() {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(3000)
        cy.contains('Click Here', {timeout: 8000}).click();
        cy.wait(3000)
//      cy.get('')
      })
})

describe('Enable/disable input field', function() {
  it('test should show that input field is enabled after async process is finished - Enable button was clicked', function() {
        cy.wait(3000)
        cy.visit('https://the-internet.herokuapp.com/dynamic_controls')
        cy.wait(3000)
        cy.get('#input-example > button', {timeout: 8000}).click();
        cy.wait(3000)
        cy.get('#input-example > input[type=text]', {timeout: 8000}).type('Test by Eric Stevenson')
        cy.wait(3000)
        cy.contains('Disable', {timeout: 8000}).click();
        cy.wait(3000)
      })
})
