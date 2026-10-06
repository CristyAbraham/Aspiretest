export class Homepage{
    constructor(page){
        this.page=page;

        //search box
        //this.searchBox=page.getByRole('search box',{name:'Search Amazon.in'})
        this.searchButton=page.locator('#nav-search-submit-button')
        this.searchBox=page.getByPlaceholder("Search Amazon.in")
        //search valid product
        //this.validproduct=page.getByRole('button', { name: 'macbook pro', exact: true })
        
        }

    async openAmazon(){
            await this.page.goto("https://www.amazon.in/")
        }
        
    async searchproduct(productName){
            await this.searchBox.fill(productName);
            //await this.searchButton.click()
        await this.searchBox.press('Enter')
    }

      
}