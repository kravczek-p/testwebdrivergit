assert = require('assert')
xit('home work part1', async () => {
  await browser.url('https://github.com/join');
  await browser.pause(3000)

  let users = ["kravczek-p", "kravczek-ukr"];
  let emails = ["kravczek@gmail.com", "kravczek@ukr.net"]
  let passwords = ["Aeq7Hzb5", "ge43zv13"];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let randomValue = getRandomInt(users.length)
  let user = users[randomValue];
  let email = emails[randomValue];
  let password = passwords[randomValue]
  console.log("user= " + user);
  console.log("email= " + email);
  console.log("passward= " + password)
  let inputUser = await $('//*[@id="user_login"]');
  let inputEmail = await $('//*[@id="user_email"]');
  let inputPassword = await $('//*[@id="user_password"]');
  await inputUser.setValue(user);
  await inputEmail.setValue(email);
  await inputPassword.setValue(password)
  await browser.pause(4000)
  let labelVerify=await $('#signup-form > div:nth-child(10) > h2');
  let labelVerifyBool=await labelVerify.isDisplayed();
  console.log("labelVerifyBool= "+labelVerifyBool);
})

xit('home work part2', async () => {
  await browser.url('https://github.com/');
  let linkSingUp = await $('body > div.position-relative.js-header-wrapper > header > div > div.d-flex.flex-justify-between.flex-items-center > div.d-flex.flex-items-center > a');
  await linkSingUp.click();
  await browser.pause(4000)
  let linkSingIn = await $("body > div.position-relative.js-header-wrapper > header > div > div > div > a")
  await linkSingIn.click()
  await browser.pause(4000)
  let users = ["kravczek-p", "kravczek-ukr"];
  let passwords = ["Aeq7Hzb5", "ge43zv13"];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let randomValue=getRandomInt(users.length)
  let user=users[randomValue]; 
  console.log("user= "+user);
  let inputUserName = await $('//*[@id="login_field"]');
  let buttonTest=await inputUserName.setValue(user);
  console.log("test= "+buttonTest)
  await browser.pause(4000)
  let inputPassword=await $('//*[@id="password"]');
  let password=passwords[randomValue]
  await inputPassword.setValue(password)
  let buttonSing=await $('#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button');
  await buttonSing.click();
  await browser.pause(4000)
  let addressUrl=await browser.getUrl();
  console.log("addressUrl= "+addressUrl);
  assert.equal(addressUrl, 'https://github.com/'); 
})

xit('home work part3', async () => {
  await browser.url('https://github.com/login')
  let linkForgot=await $('#login > div.auth-form-body.mt-3 > form > div > a')
  await linkForgot.click();
  await browser.pause(5000);
})


xit('home work part4', async () => {
  await browser.url('https://github.com')
  let linkPricing=await $('body > footer > div.container-xl.p-responsive > div > div.col-6.col-sm-3.col-lg-2.mb-6.mb-md-2.pr-3.pr-lg-0.pl-lg-4 > ul > li:nth-child(7) > a')
  let linkPricingBool=await linkPricing.isDisplayed();
  await browser.pause(5000);
})


it('home work4', async () => {
  await browser.url('https://github.com')
  let linkExplore=await $('#home-automate > div > div.home-git-log-center.pt-10.pt-md-11.pb-8.pb-md-9 > div.river-mktg.js-build-in-trigger.d-flex.flex-column.gutter.gutter-spacious.flex-md-items-center.my-3.my-sm-7.my-md-8.position-relative.flex-md-row.pb-4.pb-md-7 > div.col-12.py-3.js-build-in-item.col-sm-10.col-md-6.col-lg-5.build-in-slideX-right > div > div > a')
  let linkExploreBool=await linkExplore.isDisplayed();
  await browser.pause(5000);
  console.log(" linkExploreBool= "+ linkExploreBool)
})
