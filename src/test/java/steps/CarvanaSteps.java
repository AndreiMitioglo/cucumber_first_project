package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import pages.CarvanaPage;
import utils.Driver;
import utils.Waiter;

public class CarvanaSteps {

   WebDriver driver;
   CarvanaPage carvanaPage;

   @Before
   public void setup() {
      driver = Driver.getDriver();
      carvanaPage = new CarvanaPage();
   }

   @When("user clicks on {string} menu item")
   public void userClicksOnMenuItem(String linkText)  {

     Waiter.pause(15);
      switch (linkText){
         case "AUTO LOAN CALCULATOR":
            carvanaPage.AutoLoanLinkText.click();
            break;
         case  "CAR FINDER":
            System.out.println(carvanaPage.carFinderLink.getText());
            carvanaPage.carFinderLink.click();
            break;
         case"SELL/TRADE":
            Waiter.pause(5);
            carvanaPage.selTradeMenu.click();
            break;
         default:
            throw new NotFoundException("The link is not defined properly in the feature file!!!");

      }
   }

   @Then("user should be navigated to {string}")
   public void userShouldBeNavigatedTo(String navigatedToUrl) {
      switch (navigatedToUrl) {
         case "https://www.carvana.com/help-me-search/":
         case "https://www.carvana.com/help-me-search/qa":
         case "https://www.carvana.com/sell-my-car":
            Assert.assertEquals(navigatedToUrl, driver.getCurrentUrl());
            break;
         default:
            throw new NotFoundException("The url is not defined properly in the feature file!!!");
      }
   }

   @And("user should see {string} text")
   public void userShouldSeeText(String paragraphText) {
      switch (paragraphText){
         case "WHAT CAR SHOULD I GET?":
            Assert.assertTrue(carvanaPage.whatCarShouldGetText.isDisplayed());
            Assert.assertEquals(paragraphText, carvanaPage.whatCarShouldGetText.getText());
            break;
         case "Car Finder can help! Answer a few quick questions to find the right car for you.":
            Assert.assertTrue(paragraphText, carvanaPage.carFinderCanHelpText.isDisplayed());
            Assert.assertEquals(paragraphText, carvanaPage.carFinderCanHelpText.getText());
            break;

         case "TRY CAR FINDER":
            Assert.assertTrue(paragraphText, carvanaPage.tryCarFinderButton.isDisplayed());
            Assert.assertEquals(paragraphText, carvanaPage.tryCarFinderButton.getText());
            break;

         case "WHAT IS MOST IMPORTANT TO YOU IN YOUR NEXT CAR?":
            Assert.assertTrue(carvanaPage.whatIsMostImportantText.isDisplayed());
            Assert.assertEquals(paragraphText,carvanaPage.whatIsMostImportantText.getText());
            break;

         case "Select up to 4 in order of importance":
            Assert.assertTrue(carvanaPage.selectUpTo4Text.isDisplayed());
            Assert.assertEquals(paragraphText, carvanaPage.selectUpTo4Text.getText());

         case "GET A REAL OFFER IN 2 MINUTES":
            Waiter.pause(10);
            Assert.assertEquals(paragraphText, carvanaPage.realOffer.getText());
            break;
         case "We pick up your car. You get paid on the spot.":
            Assert.assertEquals(paragraphText, carvanaPage.wePickupYourCar.getText());
            break;

         default:
            throw new NotFoundException("The paragraph text is not defined properly in the feature file!!!");

      }


   }


   @And("user should see {string} link")
   public void userShouldSeeLink(String link) {

   }

   @When("user clicks on {string} link")
   public void userClicksOnLink(String link) {
      carvanaPage.tryCarFinderButton.click();
   }


   @When("user clicks on {string} button")
   public void userClicksOnButton(String button) {
      switch (button){
         case "GET MY OFFER":
            carvanaPage.getMyOfferButton.click();
            break;
         case "VIN":
            carvanaPage.vinButton.click();
            break;
         case "AUTO LOAN CALCULATOR":
            carvanaPage.AutoLoanLinkText.click();
            break;
         default:
            throw new NotFoundException("The button is not defined properly in the feature file!!!");
      }

   }

   @And("user enters vin number as {string}")
   public void userEntersVinNumberAs(String key) {
      carvanaPage.vinInputBox.sendKeys(key+ Keys.ENTER);
   }
}