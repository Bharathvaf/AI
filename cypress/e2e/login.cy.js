import login from "../Selector.js/login.css"
import loginlabel from "../labels.js/login_label.css"
import loginlabelerr from "../label_error.js/login_label_error.css"

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('');
  })
  for (let i = 1; i <= 1; i++) {
    
    it('correct login', () => {
      cy.get(login.email).click();
      cy.get(loginlabel.email).click("topRight");
      cy.wait(2500)
      cy.get(loginlabel.email).should('have.css', 'font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"');
      cy.wait(2500);
      cy.get(login.email).should('have.css', 'font-size', '13px');
      cy.wait(2500);
      cy.get(login.email).should('have.css', 'font-weight', '400');
      cy.wait(2500);
      cy.get(loginlabelerr.email_error).should("be.visible").and("contain", "Email is required");
      cy.wait(2500)
      cy.get(login.email).type("sybrant@gmail.com")
      cy.get(login.password).click();
      cy.get(loginlabel.password).click("topRight");
      cy.wait(2500);
      cy.get(loginlabel.password).should('have.css', 'font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"');
      cy.wait(2500);
      cy.get(login.password).should('have.css', 'font-size', '13px');
      cy.wait(2500);
      cy.get(loginlabelerr.password_error).should("be.visible").and("contain", "Password is required");

      cy.get(login.password).type("Sybrant@123");
      cy.get(login.subtitle).click();
      cy.wait(2500);
      cy.get(login.loginbutton).should("be.visible").and('have.text', "Log In").click();

      cy.url('includes', "main/tree'")
      const api = Cypress.env("apiurl")
      cy.request({
        method: "POST",
        url: `${api}/auth/user/login`,
        body: {
          email: "sybrant@gmail.com",
          password: "Sybrant@123",
        }
      }).then((res) => {
        expect(res.status).to.eq(200);
      })
    })

    it.only('without enter email', () => {
      cy.get(login.email).type("sybrant@gmail.com");
      cy.get(login.password).type('Sybrant@123');
      cy.get(login.subtitle).click();
      cy.get(login.loginbutton).then((btn)=>{
        
        if(btn.is(':enabled')){
          cy.get(login.loginbutton).click();
        }else{
          cy.log("button is disable")
        }
      })
     


    });

    it('without enter password', () => {
      cy.get(login.email).type("sybrant@gmail.com");
      cy.get(login.password).type('{backspace}');
      cy.get(login.subtitle).click();
      cy.get(login.loginbutton).then((btn)=>{
        debugger
        if(btn.is(':enabled')){
          cy.get(login.loginbutton).click();
        }else{
          cy.log("button is disable")
        }
      })
    })


    it('click eye icon to visible enter password', () => {
      cy.get(login.email).type("sybrant@gmail.com");
      cy.get(login.password).type("Sybrant@123");
      cy.get(login.eyeicon).should('be.visible').click();
      cy.wait(2500);
      cy.get(login.password).should('be.visible');
      cy.get(login.eyeicon).click();
    })

    it('incorrect email', () => {
      cy.get(login.email).click();
      cy.get(loginlabel.email).click("topRight");
      cy.wait(2500)
      cy.get(login.email).should('have.css', 'font-size', '13px')
      cy.wait(2500);
      cy.get(loginlabelerr.email_error).should("be.visible").and("contain", "Email is required");
      cy.wait(2500)
      cy.get(login.email).type("sybrant1@gmail.com")
      cy.get(login.password).click();
      cy.get(loginlabel.password).click("topRight");
      cy.wait(2500);
      cy.get(loginlabelerr.password_error).should("be.visible").and("contain", "Password is required");

      cy.get(login.password).type("Sybrant@123");
      cy.get(login.subtitle).click();

      cy.get(login.loginbutton).should("be.visible").and('have.text', "Log In").click();

      cy.get(loginlabelerr.toaster_error).should("be.visible").and("contain", "Invalid Credential")

      const api = Cypress.env("apiurl")
      cy.request({

        method: "POST",
        url: `${api}/auth/user/login`,
        failOnStatusCode: false,
        body: {
          email: "sybrant@gmail1.com",
          password: "Sybrant@123",
        }
      }).then((res) => {
        expect(res.status).to.eq(404);

      })
    })
    it("incorrect password", () => {
      cy.get(login.email).click();
      cy.get(loginlabel.email).click("topRight");
      cy.wait(2500)
      cy.get(loginlabelerr.email_error).should("be.visible").and("contain", "Email is required");
      cy.wait(2500)
      cy.get(login.email).type("sybrant@gmail.com")
      cy.get(login.password).click();
      cy.get(loginlabel.password).click("topRight");
      cy.wait(2500);
      cy.get(loginlabelerr.password_error).should("be.visible").and("contain", "Password is required");

      cy.get(login.password).type("Sybrant@1234");
      cy.get(login.subtitle).click();

      cy.get(login.loginbutton).should("be.visible").and('have.text', "Log In").click();

      cy.get(loginlabelerr.toaster_error).should("be.visible").and("contain", "Invalid Password");
      const api = Cypress.env("apiurl")
      cy.request({
        method: "POST",
        url: `${api}/auth/user/login`,
        failOnStatusCode: false,
        body: {
          email: "sybrant@gmail.com",
          password: "Sybrant@1234",
        }
      }).then((res) => {
        expect(res.status).to.eq(400);
      })
    })
  }
});





















