const puppeteer =require('puppeteer');
(async()=>{
    const browser=await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://sso.stu.edu.cn/login');//mystu网站，http://credit.stu.edu.cn/这个是学分制系统
    await page.type('#username','546543',{delay:100});
    await page.type('#password','31321',{delay:100});
    page.click('#login');
    page.waitFor(1000);
    await page.waitForNavigation({
        waitUntil: 'load'
    });
    await page.waitFor(1000);
    if(await page.$('#username')){//如果没有这个元素，则返回null
        await page.evaluate(() => alert('登陆失败'))
    }else{
        await page.evaluate(() => alert('登陆成功'))
    }
    await browser.close();
})();