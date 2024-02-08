//Test Script Using the Page Object Model

import  {test, expect} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { decrypt, encrypt } from "../utils/CryptojsUtil";

const authFile = "src/config/auth.json";

test("test", async ({page}) =>{

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("mahens@gmail.com");
    await loginPage.fillPassword("Arjun123$");
    // await loginPage.fillUsername(process.env.userid!);
    // await loginPage.fillPassword(process.env.password!);

    const homepage = await loginPage.clickLoginButton();
    await homepage.expectServiceTitleToBeVisible();
    await page.context().storageState({path: authFile})

});

test("Sample env test ", async({page}) => {

    // console.log(process.env.NODE_ENV);
    // console.log(process.env.userid);
    // console.log(process.env.password);

})

test("Using Auth File ", async({browser}) => {

    const context = await browser.newContext({storageState: authFile});
    const page =  await context.newPage();
    await page.goto("https://mahensphotography-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");
    await expect(page.getByRole("link",{ name: "Accounts"})).toBeVisible();
    await expect(page.getByRole("link",{ name: "Accounts"})).toBeVisible();
    

})