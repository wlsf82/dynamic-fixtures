describe('Hacker Stories', () => {
  beforeEach(() => {
    cy.generateFixtures()

    cy.intercept(
      'GET',
      '**/search?query=React&page=0',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('/')
    cy.wait('@getStories')
  })
  it('renders 20 stories, then 19 when dismissing one', () => {
    cy.get('.item').should('have.length', 20)

    cy.get('.button-small').first().click()

    cy.get('.item').should('have.length', 19)
  })
})
