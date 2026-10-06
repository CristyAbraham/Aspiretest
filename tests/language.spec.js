import {test,expect} from '@playwright/test';
import { languagepage } from '../pages/languagepage';
test('select language from dropdown',async({page})=>{
    const LanguagePage= new languagepage(page)
    await page.goto("https://www.amazon.in/")
    await LanguagePage.clickLanguageDropdown()
    await LanguagePage.clickEnglish()
    await expect(LanguagePage.selectedlanguage).toContainText("English")
})
