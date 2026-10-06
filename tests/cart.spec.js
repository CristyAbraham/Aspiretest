import {test,expect} from '@playwright/test'
import { Cartpage } from '../pages/cartpage'   
import { Homepage } from '../pages/homepage'     
test('verify the products in cart',async({page})=>{
const homepage= new Homepage(page)
const cartpage=new Cartpage(page)
await homepage.openAmazon()
await cartpage.clickCartButton()
const cartitems=await cartpage.verifyCartList()
console.log(cartitems)

    })
