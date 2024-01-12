import login from "../Selector.js/login.css"
import home from "../Selector.js/user.css"
import project from "../Selector.js/project.css"
 import plabel from "../labels.js/project_label.css"
import pl_error from "../label_error.js/project_label_error.css"
describe('template spec', () => {
  beforeEach(() => {
      cy.clearCookies()
      cy.visit('')
      cy.get(login.email).type('sybrant@gmail.com');
      cy.get(login.password).type('Sybrant@123');
      cy.wait(2500);
      cy.get(login.subtitle).click('topRight');
      cy.wait(2500);
      cy.get(login.loginbutton).should('have.text', 'Log In').click();
      
  })
  it('passes', () => {
    cy.get(home.logo).should("be.visible");
    cy.get(home.profile).click();
    cy.get(home.adminmenu).click();
    cy.get(project.project_tab).should("be.visible").and("contain","Project").click();

    
    cy.get(project.addbutton).should("be.visible").and("contain","Add").click();
  //project name validation
    cy.get(project.pname).click();
    cy.get(plabel.projectname).click("topRight");
    cy.get(pl_error.pname).should("be.visible").and("contain","Project Name is required");


    // clientname validation

    cy.get(project.cname).click();
    cy.get(plabel.client).click("topRight");
    cy.get(plabel.client).click("topRight");
    cy.get(pl_error.cerror).should("be.visible").and("contain","Client is required");


    // template validation


    cy.get(project.tname).click();
    cy.get(plabel.template).click("topRight");
    cy.get(plabel.template).click("topRight");
    cy.get(pl_error.terror).should("be.visible").and("contain","Template is required");
    cy.get(project.cancel).should("be.visible").and("contain","Cancel").click();



    // permision

    cy.get(project.permission).click();
    cy.wait(2500);
    cy.get(project.cancel).click();
  


     

        

    

  })
})