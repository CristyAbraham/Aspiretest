import{test,expect} from '@playwright/test' 
import {Homepage} from '../pages/homepage'
import { Loginpage } from '../pages/loginpage'
import logindata from '../testdata/logindata.json'
test('navigate to sigin page',async({page})=>{
const homepage=new Homepage(page)
const loginpage=new Loginpage(page)
await homepage.openAmazon()
await loginpage.openLoginpage()
await loginpage.enterEmail(logindata.email)
})


