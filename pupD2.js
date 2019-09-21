const puppeteer =require('puppeteer');
(async()=>{
    const browser=await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://credit.stu.edu.cn/portal/stulogin.aspx');//学分制系统
    await page.type('#txtUserID','453213',{delay:100});
    await page.type('#txtUserPwd','546783',{delay:100});
    page.click('#btnLogon');
    page.waitFor(1000);
    await page.waitForNavigation({
        waitUntil: 'load'
    });
    await page.waitFor(1000);
    if(await page.$('#txtUserID')){
        await page.evaluate(() => alert('登陆失败'))
    }else{
        await page.evaluate(() => alert('登陆成功'))
    }
    await browser.close();
})();