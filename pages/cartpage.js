export class Cartpage{
    constructor(page){
    this.page=page;

this.cartbutton= page.locator('#nav-cart-count-container')
this.cartList=page.locator(".sc-active-cart")

}
async clickCartButton()
{
    await this.cartbutton.click()
}
async verifyCartList(){
return await this.cartList.allTextContents()
}
}