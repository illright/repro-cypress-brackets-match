/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    cy.intercept({ query: { "ids[]": "something" }}).as("target");
    cy.window().then((win) => cy.wrap(win.fetch("/?ids[]=something").catch(() => "whatever")));
    cy.wait("@target");
  })
})
