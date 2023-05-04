describe('WeCheer Automation', () => {
  it('Verify number of bottles from UI is the same with API', () => {
    cy.visit('https://wecheer.me/dashboard')
    cy.get('mat-card.dash-users.mat-card h5').invoke('text').as('numOfBottles')
    cy.get('@numOfBottles').then((name) => {
        cy.request({
            method : 'GET',
            url:'https://api.wecheer.me/dashboard/api/statistics/topusers'
            }).then((response) => {
              expect(response).property('status').to.equal(200)
              const body = (response.body)
              expect(name).to.include(body['totalBottlesPeriod'])
            })
    })
  })
})