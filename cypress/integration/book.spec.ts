describe('BookMonkey', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:4730/books').as('booksCall');

    cy.visit('/');
  });
  it('should show Books', () => {
    // seite besuchen
    cy.contains('BookMonkey');
    cy.screenshot({ overwrite: true });
    cy.wait('@booksCall').its('response.body').should('have.length', 3);
    // weiterleiting auf books
    // 3 bücher
  });
  it('should show form', () => {
    cy.get('[test-id="createBook"]').click({ force: true });
    cy.get('h2').should('have.text', 'Add New Book');
  });
});
