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
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CarvanaSteps.userIsOn(String)"
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
  "error_message": "java.lang.NullPointerException\r\n\tat steps.CarvanaSteps.userClicksOnMenuItem(CarvanaSteps.java:36)\r\n\tat ✽.user clicks on \"CAR FINDER\" menu item(src/test/resources/features/carvana.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/help-me-search/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeNavigatedTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"WHAT CAR SHOULD I GET?\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Car Finder can help! Answer a few quick questions to find the right car for you.\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"TRY CAR FINDER\" link",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeLink(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"TRY CAR FINDER\" link",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLink(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/help-me-search/qa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeNavigatedTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"WHAT IS MOST IMPORTANT TO YOU IN YOUR NEXT CAR?\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Select up to 4 in order of importance\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "skipped"
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
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CarvanaSteps.userIsOn(String)"
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
  "error_message": "java.lang.NullPointerException\r\n\tat steps.CarvanaSteps.userClicksOnMenuItem(CarvanaSteps.java:36)\r\n\tat ✽.user clicks on \"SELL/TRADE\" menu item(src/test/resources/features/carvana.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/sell-my-car\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeNavigatedTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"GET A REAL OFFER IN 2 MINUTES\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"We pick up your car. You get paid on the spot.\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"VIN\" button",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters vin number as \"12345678912345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersVinNumberAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"GET MY OFFER\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "skipped"
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
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CarvanaSteps.userIsOn(String)"
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
  "error_message": "java.lang.NullPointerException\r\n\tat steps.CarvanaSteps.userClicksOnMenuItem(CarvanaSteps.java:36)\r\n\tat ✽.user clicks on \"AUTO LOAN CALCULATOR\" menu item(src/test/resources/features/carvana.feature:36)\r\n",
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
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
});