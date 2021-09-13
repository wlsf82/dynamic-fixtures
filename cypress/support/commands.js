Cypress.Commands.add('generateNStories', n => {
  const faker = require('faker')

  return {
    'hits': Cypress._.times(n, () => {
      return {
        'title': `${faker.lorem.words(3)}`,
        'url': `${faker.internet.url()}`,
        'author': `${faker.name.firstName()} ${faker.name.lastName()}`,
        'num_comments': `${faker.datatype.number()}`,
        'points': `${faker.datatype.number()}`,
        'objectID': `${faker.datatype.uuid()}`,
      }
    })
  }
})
