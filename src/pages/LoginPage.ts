import { Page } from "@playwright/test";
import HomePage from "./HomePage";

export default class LoginPage {
    private readonly usernameInputSelector = "#username";
    private readonly passwordInputSelector = "#password";
    private readonly loginButtonSelector = "#Login";

    constructor(private page: Page){

    }

    async navigateToLoginPage(){
        await this.page.goto("/");
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameInputSelector).fill(username);
        //await this.page.pause();
    }

    async fillPasswors(password: string) {
        await this.page.locator(this.passwordInputSelector).fill(password);
    }

    async clickLoginButton(){
        await this.page
        .locator(this.loginButtonSelector).click()
        .catch((error) => {
            console.error(`Error clicking login button : ${error}`);
            throw error; 
        });
        
        const homepage = new HomePage(this.page);
        return homepage;

    }
}