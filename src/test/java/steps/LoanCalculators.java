package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoanCalculators {
    @When("user hovers over on {string} menu item")
    public void userHoversOverOnMenuItem(String arg0) {
    }



    @When("user enters {string} as {string}")
    public void userEntersAs(String arg0, String arg1) {
    }

    @And("user selects {string} as {string}")
    public void userSelectsAs(String arg0, String arg1) {
    }

    @Then("user should see the monthly payment as {string}")
    public void userShouldSeeTheMonthlyPaymentAs(String arg0) {
    }
}