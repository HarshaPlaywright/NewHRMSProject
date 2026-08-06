
import {Given,When,Then, setDefaultTimeout, DataTable} from "@cucumber/cucumber";
import {Browser, expect, firefox, FrameLocator, Locator, Page} from "@playwright/test";
setDefaultTimeout(60000);
let browser:Browser;
let page:Page;
let frame: FrameLocator;
Given('open the firefox browser', async () => {
    browser = await firefox.launch({
        headless: true
    });
});

Given('navigate the application', async () => {
    const context = await browser.newContext();
    page = await context.newPage();

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
});

When('enter the lusername', async()=> {
  await page.locator("//input[@name='txtUserName']").fill("username");
});

When('enter the lpassword', async()=> {
  await page.locator("//input[@name='txtPassword']").fill("password");
});

When('click on Login', async()=> {
   await page.locator("//input[@name='Submit']").click();
});

Then('verify welcome page', async()=> {
  await expect(page.locator("//*[@id='option-menu']/li[1]")).toHaveText("Welcome username");
});


//======================================================================
//======================direct login approch================
When('enter the username {string}', async (loginusername:string)=> {
  await page.locator("//input[@name='txtUserName']").fill(loginusername);
});

When('enter the password {string}', async  (loginpassword:string) =>{
 await page.locator("//input[@name='txtPassword']").fill(loginpassword);
});

//================DataTable login Approch without Header=======================
When('enter the userlog',  async (dataTable:DataTable)=> {
  //read all data from datatable w/o header
  let data:string[][]= dataTable.raw();
  //syntax 
  //data[first-row-index][first-column-index]
  let usernamelogin:string = data[0][0];
  //print username
  console.log("username :"+usernamelogin);
  await page.locator("//input[@name='txtUserName']").fill(usernamelogin);
  
});

When('enter the passwordlog', async (dataTable:DataTable) => {
   //read all data from datatable w/o header
  let data:string[][]= dataTable.raw();
  //syntax 
  //data[first-row-index][first-column-index]
  let passwordlogin:string = data[0][0];
  //print password
  console.log("password :"+passwordlogin);
  await page.locator("//input[@name='txtPassword']").fill(passwordlogin);
});

When('click on PIM menu', async ()=> {
  await page.locator("xpath=//li[@id='pim']").click();
});

When('click on Add Employee', async () =>{
  await page.locator("xpath=/html/body/div[4]/ul/li[2]/ul/li[2]/a/span").click();
});

When('click on iframe', async () =>{
  frame= await page.frameLocator("#rightMenu");
 
});


When('enter first name as {string}', async (firstname:string)=> {
  await frame.locator("xpath=//input[@id='txtEmpFirstName']").fill(firstname);
});

When('enter middle name as {string}', async (middelname:string)=> {
    await frame.locator("xpath=//input[@id='txtEmpMiddleName']").fill(middelname);

});

When('enter last name as {string}', async (lastname:string)=> {
      await frame.locator("xpath=//input[@id='txtEmpLastName']").fill(lastname);

});

When('click on Save button', async ()=> {
  await frame.locator("xpath=//input[@id='btnEdit']").click();
});

When('click on Back button', async ()=> {
  await frame.locator("xpath=//input[@class='backbutton']").click();
});


When('click on selectoption from dropdown', async ()=> {
  await frame.locator("#loc_code").waitFor();
  //idenfify dropdown inside frame
let dropdown:Locator= await frame.locator("#loc_code");
await dropdown.selectOption("1");
});
When('enter searchFor as {string}', async (searchFor:string)=> {
  await frame.locator("xpath=//input[@id='loc_name']").fill(searchFor);
});

When('click on search button', async ()=> {
  await frame.locator("xpath=//*[@id='standardView']/div[2]/input[2]").click();
});


Then('verify employee is added successfully', async ()=> {

  
 await expect(frame.locator("//a[contains(text(),'Akki')]")).toHaveText("Akki la DSU");
});


/*When('click on logout', async()=> {
  await page.locator("xpath= //a[text()='Logout']").click();
});*/

When("enter the username", async () => {
    await page.locator("//input[@name='txtUserName']").fill("username");
});

When("enter the password", async () => {
    await page.locator("//input[@name='txtPassword']").fill("password");
});

When("click on logout", async function () {
    await page.locator("//a[text()='Logout']").click();
});

import { After } from "@cucumber/cucumber";

After(async () => {
    if (page) {
        await page.close();
    }

    if (browser) {
        await browser.close();
    }
});