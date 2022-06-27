package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class CarvanaPage {
    public CarvanaPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(css = "a[data-cv-test=\"headerCarFinderLink\"]")
    public WebElement carFinderLink;

    @FindBy(xpath = "//h1")
    public WebElement whatCarShouldGetText;

    @FindBy(xpath = "//h3")
    public WebElement carFinderCanHelpText;

    @FindBy(css = "a[data-qa=\"router-link\"]")

    public WebElement tryCarFinderButton;


    @FindBy(css ="div[data-qa=\"headline\"]")
    public WebElement whatIsMostImportantText;

    @FindBy(css = "div[data-qa=\"sub-heading\"]")
    public WebElement selectUpTo4Text;
//=========================================================

    @FindBy(css= "a[data-cv-test=\"headerTradesLink\"]")
    public WebElement selTradeMenu;


    @FindBy(xpath= "//div[@class='sc-7ed29b82-1 jwFVns']//div[2]")
    public WebElement realOffer;


    @FindBy(css= "div[class=\"sc-7ed29b82-1 jwFVns\"]  div:nth-child(3)")
    public WebElement wePickupYourCar;


    @FindBy(css = "button[class*=\"ToggleOption-bos1o7-2 S\"")
    public WebElement vinButton;


    @FindBy(css = "input[type=\"text\"]")
    public WebElement vinInputBox;

    @FindBy(css = "button[data-cv-test=\"heroGetMyOfferButton\"]")
    public WebElement getMyOfferButton;

    @FindBy(css = "")
    public WebElement errorMessage;

//==============================================

    @FindBy(css = "a[data-cv-test=\"headerFinanceLoanCalc\"]")
    public WebElement AutoLoanLinkText;

    @FindBy(css = "input[aria-label=\"Cost of Car I want Dollar Amount\"]")
    public WebElement costOfCar;


    @FindBy(css = "#creditBlock")
    public WebElement creditScore;

    @FindBy(css = "select[name=\"loanTerm\"]")
    public WebElement loanTerm;

    @FindBy(css = "input[aria-label=\"What is Your Down Payment? Dollar Amount\"]")
    public WebElement downPayment;

    @FindBy(css = "div[class=\"loan-calculator-display-value\"]")
    public WebElement monthlyPayment;

    @FindBy(css = "a[class='MenuButton__MenuButtonWrapper-dq0g44-0 imLDTG']")
    public WebElement financingLink;
    }







