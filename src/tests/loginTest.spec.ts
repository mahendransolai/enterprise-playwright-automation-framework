//Test Script Using the Page Object Model

import  {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("test", async ({page}) =>{

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("mahensphotography@gmail.com");
    await loginPage.fillPasswors("Arjun123$");

    const homepage = await loginPage.clickLoginButton();
    await homepage.expectServiceTitleToBeVisible();

})