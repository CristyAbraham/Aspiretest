export class languagepage{
    constructor (page){
        this.page=page;
        this.languagedropdown=page.getByRole('link', { name: 'Choose a language for shopping in Amazon India. The current selection is' })
        this.selectenglish=page.getByText("English")
        this.selectedlanguage=page.locator("#icp-nav-flyout")
    
    }
    async clickLanguageDropdown(){
        await this.languagedropdown.click()

    }
    async clickEnglish(){
        await this.selectenglish.click()

    }
}
