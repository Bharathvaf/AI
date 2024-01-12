import login from '../Selector.js/login.css'
import user from '../Selector.js/user.css'
import client from '../Selector.js/client.css'
import clientlabel from "../labels.js/client_label.css"
import clienterr from "../label_error.js/client_label_error.css"
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('')
  })

  for(let i = 1;i<=1;i++){
    it('passes', () => {
      cy.get(login.email).type('sybrant@gmail.com');
      cy.get(login.password).type('Sybrant@123');
      cy.wait(2500);
      cy.get(login.subtitle).click('topRight');
      cy.wait(2500);
      cy.get(login.loginbutton).should('have.text', 'Log In').click();
  
      cy.get(user.logo).should('be.visible');
      cy.get(user.profile).click();
      cy.get(user.adminmenu).click();
      //client start
      cy.get(client.clienttab).should("be.visible").and("contain","Client").click();
      //click add button
  
      cy.get(client.clientadd).should("be.visible").and("contain","Add").click();
  
      //check name validation;
  
      cy.get(client.name).click();
      cy.get(clientlabel.client_name).click("bottom");
      cy.get(clienterr.name_error).should('be.visible').and("contain","Name is Required");
  
  
      // check country validation
  
      cy.get(client.country).click();
      cy.get(clientlabel.client_country).click("bottom");
      cy.get(clientlabel.client_country).click("bottom");
      cy.get(clienterr.country_error).should("be.visible").and("contain", "Country is Required");
  
      //check state valiation
  
      cy.get(client.state).click();
      cy.get(clientlabel.client_country).click("bottom");
      cy.get(clientlabel.client_country).click("bottom");
      cy.wait(2500);
      cy.get(clienterr.state_error).should("be.visible").and("contain","State is Required");
  
  
      // check city validation
  
      cy.get(client.city).click();
      cy.get(clientlabel.client_city).click("bottom");
      cy.get(clientlabel.client_city).click("bottom");
      cy.get(clienterr.city_error).should("be.visible").and("contain","City is Required");
  
      //click cancel 
  
      cy.get(client.client_cancel).should("be.visible").and("contain","Cancel").click();
  
    })
  }
  

  
})