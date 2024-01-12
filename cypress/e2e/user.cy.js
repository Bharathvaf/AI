import home from "../Selector.js/user.css"
import login from "../Selector.js/login.css"
import userlabel from "../labels.js/user_label.css"
import labelerr from "../label_error.js/user_label_error.css"

describe('template spec', () => {
  it('User validation',
  {
    retries:{
  runMode: 2,
  openMode: 2
},
},
  () => {
    const sstoken = [];
    cy.visit('')
    cy.get(login.email).type('info@visualappfoundry.com'),
      cy.get(login.password).type('Sybrant@123'),
      cy.get(login.subtitle).click('topRight'),
      cy.get(login.loginbutton).click();
    cy.get(home.logo).should('be.visible');
    cy.wait(2500);

    cy.window().then((win) => {
    
      const ssvalue = win.sessionStorage;
      var token = ssvalue.getItem('token')
      sstoken.push(token)

    })
    //ADD user
    cy.get(home.profile).click();
    cy.wait(2500);
    cy.get(home.adminmenu).click();
    const api = Cypress.env('apiurl');
  cy.request({
    method:"GET",
    url:`${api}/auth/get/user/0`,
    headers:{
      authorization :"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZU5hbWUiOiJBZG1pbiIsImV4cCI6MTcwMzE3Mjg4MSwiaWF0IjoxNzAzMTUxMjgxfQ.KEnDUY-MgZW2TikKTKgwmiM5xRJPOhKcwMgk6TgPIIs",
    }
  }).then((res)=>{
     expect(res.status).to.eq(200);
  })
    cy.get(home.useradd).should('have.text','Add').click();
//check first name validation
    cy.get(home.firstname).click();
    cy.get(userlabel.firstname).click("topRight");
    cy.get(labelerr.ferror).should('be.visible').and("contain","FirstName is required");

    //check last name validation

    cy.get(home.lastname).click();
    cy.get(userlabel.lastname).click("topRight");
    cy.get(labelerr.lerror).should("be.visible").and("contain","LastName is required");

    // check email validation 
    cy.get(home.email).click();
    cy.get(userlabel.email).click("topRight");
    cy.get(labelerr.emerror).should('be.visible').and ("contain","Email is required");

    const emailformate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    cy.get(home.email).type("bharathbca17@gmail.com");
    cy.get(home.email).invoke("val").should('match',emailformate);


    //check mobile number validation

    cy.get(home.mobilnumber).click();
    cy.get(userlabel.mobile).click("topRight");
    cy.get(labelerr.merror).should('be.visible').and("contain","Mobile Number is required");
    const validNumber = '6385597425';
    cy.get(home.mobilnumber).type(validNumber);
    cy.get(home.mobilnumber).invoke("val").then((vnumber)=>{
      expect(vnumber).to.have.length(10);
    })

    //check role validation

    cy.get(home.roleclick).click();
    cy.get(userlabel.role).click("topRight");
    cy.get(userlabel.role).click("topRight");
    cy.get(labelerr.rerror).should("be.visible").and ("contain","Role is required");
    cy.get(home.cancelbtn).should('be.visible').and("contain","Cancel").click();




  
    
    
    

    
    
  
  })
 





})


