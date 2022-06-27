package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import pages.CarvanaPage;
import utils.Driver;
import utils.DropdownHandler;
import utils.Waiter;

public class LoanCalculators {

    WebDriver driver;
    CarvanaPage carvanaPage;


    @Before
    public void setup() {
        driver = Driver.getDriver();
        carvanaPage = new CarvanaPage();
    }
    @When("user hovers over on {string} menu item")
    public void userHoversOverOnMenuItem(String linkText) {
        Actions action = new Actions(driver);
        Waiter.pause(15);
        action.moveToElement(carvanaPage.financingLink).build().perform();
        Waiter.pause(3);

    }



    @When("user enters {string} as {string}")
    public void userEntersAs(String cost, String price) {
        switch (cost) {
            case "What is Your Down Payment?":
                carvanaPage.downPayment.sendKeys(price);
                break;

            case "Cost of Car I want":
                carvanaPage.costOfCar.sendKeys(price);
                break;
            case "What’s Your credit Score?":
                DropdownHandler.selectOptionByIndex(carvanaPage.creditScore, 0);
                break;
            case "Choose Your Loan Terms":
                Waiter.pause(2);
                DropdownHandler.selectOptionByIndex(carvanaPage.loanTerm,1);
                break;
            default:
                throw new NotFoundException("The button text is not defined properly in the feature file!!!");
        }

    }

    @And("user selects {string} as {string}")
    public void userSelectsAs(String credit, String score) {
        switch(credit){
            case "What’s Your credit Score?":
                carvanaPage.creditScore.sendKeys(score);
                break;
            case "Choose Your Loan Terms":
                carvanaPage.loanTerm.sendKeys(score);
                break;
            default:
                throw new NotFoundException("The link is not defined properly in the feature file!!!");

        }

    }

    @Then("user should see the monthly payment as {string}")
    public void userShouldSeeTheMonthlyPaymentAs(String payment) {
        Assert.assertEquals(payment, carvanaPage.monthlyPayment);
    }
}