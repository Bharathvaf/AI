import login from "../Selector.js/login.css"
import dash from "../Selector.js/dashboard.css"
import expand from "../Selector.js/fileand folder.css"
import rvalue from"../Selector.js/R1.css"


describe('template spec', () => {
  beforeEach(() => {
    cy.visit('');
  }),
    it('check manager login', () => {
      cy.get(login.email).type("kavirajanvaf07072021@gmail.com")
      cy.get(login.password).type("Sybrant@123");
      cy.get(login.subtitle).click('topRight');
      cy.get(login.loginbutton).should('contain', 'Log In').click();
      if (btn.is(':enabled')) {
        cy.get(login.loginbutton).click();
      } else {
        cy.log("button is disable")
      }
      cy.get(dash.breadcurm).invoke('text').then((usertype) => {
        cy.log(usertype)
      })
    })

  it.only('manager select client and project', () => {


    cy.get(login.email).type("kavirajanvaf07072021@gmail.com")
    cy.get(login.password).type("Sybrant@123");
    cy.get(login.subtitle).click('topRight');
    cy.get(login.loginbutton).should('contain', 'Log In').click();
      cy.wait(4500)

    //manager select client project
    cy.get(dash.client).click();
    cy.get(dash.clientvalue).click();
    cy.get(dash.project).click();
    cy.get(dash.projectvalue).click();
    cy.wait(2500);
    cy.get(dash.uploade).selectFile('D:/Cypress_new_framwork/AI/cypress/fixtures/Beta Document.pdf', { action: 'drag-drop' });
    cy.get(dash.uploade).selectFile('D:/Cypress_new_framwork/AI/cypress/fixtures/Aggrement.zip', { action: 'drag-drop' });
    cy.get(dash.confirmbox).click();
    cy.wait(2500);
    cy.get(dash.cancelbtn).click();

    for (let i = 0; i < 1; i++) {
      cy.get('#pr_id_21_header_1').click();
      for (let i = 0; i < 1; i++) {
        cy.get(expand.expan1).click();
        cy.wait(2500);
        cy.get(expand.expan2).click();
        cy.wait(3500);
        cy.viewport(1920, 1200);
        cy.get('#pr_id_21_header_1 > .p-tabview-title').click();
        cy.get(dash.profile).click();
        cy.get(dash.logout).click();
        cy.get(login.email).type("sybrant@gmail.com");
        cy.get(login.password).type("Sybrant@123");
        cy.get(login.subtitle).click("topRight");
        cy.get(login.loginbutton).click();
        cy.wait(4500)
        cy.get(dash.client).click();
        cy.get(dash.clientvalue).should("have.text", "Client 1").click();
        cy.get(dash.project).click();
        cy.get(dash.projectvalue).should("have.text", "Beta").click();
        cy.wait(2500);

      }

    }
    for(let i=0;i<1;i++){
      debugger
      cy.get('[tabindex="0"] > :nth-child(3) > .w-12rem > #r1 > .p-dropdown-label').click();
      for(let j=0;j<1;j++){
        // cy.get(rvalue.r1valu).click();
        // cy.wait(2500);
        // cy.get(rvalue.r1).invoke('text').then((val)=>{
        //   cy.log(val);
        // })
        // cy.get('[tabindex="0"] > :nth-child(3) > .w-12rem > #r1 > .p-dropdown-label').click();
        // cy.get(rvalue.r2valu).click();
        // cy.get('[tabindex="0"] > :nth-child(3) > .w-12rem > #r1 > .p-dropdown-label').click();
       const r3 =  cy.get(rvalue.r3value);
       r3.click();
        cy.wait(2500);

        if(r3!= null){
          cy.get(dash.profile).click();
          cy.wait(2500);
          cy.get(':nth-child(5) > .p-menuitem-link').click();
          cy.get(login.email).type("bharathbca17@gmail.com");
          cy.get(login.password).type("4119jvispzlxE$");
          cy.get(login.subtitle).click("topRight");
          cy.get(login.loginbutton).click();
          cy.get(dash.client).click();
          cy.get(dash.clientvalue).click();
          cy.get(dash.project).click();
          cy.get(dash.projectvalue).click();
          cy.wait(2500);
          cy.get('.mt-2').invoke('text').then((val)=>{
            cy.log(val);
          })
        }else{
          cy.log("dropdown is empty")
        }
       
               
      }
    }
    
    
  });



})