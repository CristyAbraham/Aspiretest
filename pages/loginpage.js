export class Loginpage{
  constructor(page){
this.page=page;
this.signInDropdown=page.getByRole('button',{name:'Hello, sign in Account & Lists'})
this.signinButton=page.getByRole('button',{name:'Sign in'})
this.emailInput =page.getByRole('textbox', { name: 'Enter mobile number or email' })
this.continueButton= page.getByRole('button', { name: 'Continue' })
  }
async openLoginpage()
{
  this.signInDropdown.click()
  this.signinButton.click()
}
async enterEmail(email){
  
  this.emailInput.fill(email)

}


}