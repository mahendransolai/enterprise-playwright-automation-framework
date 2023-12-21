//Test Script Using the Page Object Model

import  {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("test", async ({page}) =>{

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    // await loginPage.fillUsername("mahensphotography@gmail.com");
    // await loginPage.fillPasswors("Arjun123$");
    await loginPage.fillUsername(process.env.userid!);
    await loginPage.fillPassword(process.env.password!);


    const homepage = await loginPage.clickLoginButton();
    await homepage.expectServiceTitleToBeVisible();

});

test("Sample env test ", async({page}) => {

    console.log(process.env.NODE_ENV);
    console.log(process.env.userid);
    console.log(process.env.password);

})