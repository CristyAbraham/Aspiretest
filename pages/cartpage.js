export class Cartpage{
    constructor(page){
    this.page=page;

this.cartbutton= page.getByRole('link', { name: 'items in cart' })
this.cartList=page.locator(".sc-active-cart")

}
async clickCartButton()
{
    this.cartbutton.click()
}
async verifyCartList(){
return await this.cartList.allTextContents()
}
}