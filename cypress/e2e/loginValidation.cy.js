/// <reference types= "cypress" /> 

//const today = new Date();
const date = new Date();
let Chance = require('chance')

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate ;




describe('template spec', () => {
  beforeEach('waits on apis and removes flake', ()=>{
    cy.intercept('POST','/users/login').as('login')
    cy.intercept('GET','/contacts').as('contacts')
  })
  it('passes', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.get('#email').should('be.visible').type('avvarivishnugithubrepo@gmail.com');
    cy.get('#password').should('be.visible').type('TestAutomationRepo@2024');
    cy.get('#submit').should('be.visible').click();
    cy.wait('@login').then((res)=>{

      expect(res.response.statusCode).to.eq(200)
    })

    cy.wait('@contacts').then((res)=>{

      expect(res.response.statusCode).to.eq(200)
    })
    //cy.get('userName').


    cy.get('#add-contact').should('be.visible').click();
    cy.get('#firstName').should('be.empty').type('test');
    cy.get('#lastName').should('be.empty').type('test');

  

// This arrangement can be altered based on how we want the date's format to appear.
        currentDate =`${year}-${month}-${day}`;
      console.log(currentDate);
     console.log(date);
      cy.get('#birthdate').type(currentDate);


      //chance.email()
       let email = chance.email({domain: "example.com"}) 
      cy.get('#email').should('be.visible').type(email);

     let phone =  chance.phone()
     cy.get('#phone').type(phone)

     // program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));

     cy.get('#street1').type(generateString(10))
     cy.get('#street2').type(generateString(10))
     cy.get('#city').type(generateString(5))
     cy.get('#stateProvince').type(generateString(5))
     cy.get('#postalCode').type(generateString(5))
     cy.get('#country').type(generateString(5))
     cy.get('#submit').type(generateString(5))
    // cy.get('#street2')
    })
})