# wecheer

For the 1st question, please find the export API collection for POSTMAN in WeCheer.postman_collection.json file. For API automation project I prefer POSTMAN also.

For the 2nd question, I wrote a simple scenario using Cypress to verify the number of bottles from the UI compare with API. I use Cypress just for demonstration because it's simple and easy to setup. I already push the code to this repo, in master branch FYI. Step to run:
- Install nodejs and cypress
- Run command: npx cypress open
- Select e2e testing/chrome and start
- Run wecheer.cy.js

For the 3rd question, to test the mobile version we can use Appium to automation the UI part and use Restassured if we need to integrate with some API testing.
