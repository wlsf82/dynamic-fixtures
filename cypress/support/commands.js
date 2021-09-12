Cypress.Commands.add('generateFixtures', () => {
  const faker = require('faker')

  cy.writeFile('cypress/fixtures/stories.json', {
    'hits': Cypress._.times(20, () => {
      return {
        'title': `${faker.lorem.words(3)}`,
        'url': `${faker.internet.url()}`,
        'author': `${faker.name.firstName()} ${faker.name.lastName()}`,
        'num_comments': `${faker.datatype.number()}`,
        'points': `${faker.datatype.number()}`,
        'objectID': `${faker.datatype.uuid()}`,
      }
    })
  })
})
