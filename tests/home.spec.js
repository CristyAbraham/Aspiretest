import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/homepage';
import searchdata from '../testdata/searchdata.json'

test('Amazon homepage loads successfully', async ({ page }) => {
  const homepage = new Homepage(page);

  await homepage.openAmazon();

  await expect(page).toHaveURL(/^https:\/\/www\.amazon\.in\//);

});

test('the search box is displayed', async ({ page }) => {
  const homepage = new Homepage(page);

  await homepage.openAmazon();

  await expect(homepage.searchBox).toBeVisible();
});
test('verify the search button',async({page})=>{
    const homepage=new Homepage(page);
    await homepage.openAmazon()
    await expect(homepage.searchButton).toBeVisible();
})
test('search with valid product',async({page})=>{
  const homepage=new Homepage(page);
  await homepage.openAmazon()
  await homepage.searchproduct(searchdata.validdata)
})