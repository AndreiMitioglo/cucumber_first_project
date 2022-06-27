$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/carvana.feature");
formatter.feature({
  "name": "Carvana first cucumber project",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate CAR FINDER menu item",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on \"CAR FINDER\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/help-me-search/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeNavigatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"WHAT CAR SHOULD I GET?\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Car Finder can help! Answer a few quick questions to find the right car for you.\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"TRY CAR FINDER\" link",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"TRY CAR FINDER\" link",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/help-me-search/qa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeNavigatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"WHAT IS MOST IMPORTANT TO YOU IN YOUR NEXT CAR?\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Select up to 4 in order of importance\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027sc-7ed29b82-1 jwFVns\u0027]//div[2]\"}\n  (Session info: chrome\u003d103.0.5060.53)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO-7IPRO\u0027, ip: \u0027192.168.165.154\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\mitio\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63205}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c26c5e4bf183ee1337fcf4d88b718edb\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027sc-7ed29b82-1 jwFVns\u0027]//div[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat steps.CarvanaSteps.userShouldSeeText(CarvanaSteps.java:87)\r\n\tat ✽.user should see \"Select up to 4 in order of importance\" text(src/test/resources/features/carvana.feature:18)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate SELL/TRADE invalid vin search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on \"SELL/TRADE\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/sell-my-car\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeNavigatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"GET A REAL OFFER IN 2 MINUTES\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"We pick up your car. You get paid on the spot.\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"VIN\" button",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters vin number as \"12345678912345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersVinNumberAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"GET MY OFFER\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate AUTO LOAN CALCULATOR under FINANCING menu item",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user hovers over on \"FINANCING\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "LoanCalculators.userHoversOverOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"AUTO LOAN CALCULATOR\" menu item",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NotFoundException: The link is not defined properly in the feature file!!!\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO-7IPRO\u0027, ip: \u0027192.168.165.154\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: driver.version: unknown\r\n\tat steps.CarvanaSteps.userClicksOnMenuItem(CarvanaSteps.java:41)\r\n\tat ✽.user clicks on \"AUTO LOAN CALCULATOR\" menu item(src/test/resources/features/carvana.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters \"Cost of Car I want\" as \"10,000\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoanCalculators.userEntersAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"What’s Your credit Score?\" as \"Excellent: 780\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoanCalculators.userSelectsAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"Choose Your Loan Terms\" as \"60 Months\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoanCalculators.userSelectsAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"What is Your Down Payment?\" as \"1,500\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoanCalculators.userEntersAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see the monthly payment as \"154.00\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoanCalculators.userShouldSeeTheMonthlyPaymentAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});