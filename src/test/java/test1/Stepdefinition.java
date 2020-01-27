package test1;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
public class Stepdefinition {
  WebDriver driver;
	@Given("user open the testmeapp")
	public void user_open_the_testmeapp() {
    	System.setProperty("webdriver.chrome.driver","C://chromedriver.exe");
    	driver=new ChromeDriver();
    	driver.get("http://10.232.237.143:443/TestMeApp/login.htm");
	}
    @Given("user enters the username as {string}")
	public void user_enters_the_username_as(String un) {
		driver.findElement(By.name("userName")).sendKeys(un);
	}
	@Given("user enters the password as {string}")
	public void user_enters_the_password_as(String psd) {
	driver.findElement(By.name("password")).sendKeys(psd);
}
	@Given("user clicks submit button")
	public void user_clicks_submit_button() {
	driver.findElement(By.name("Login")).click();
	}
	@Given("verify registration")
    public void verify_registration() {
		System.out.println("user logged in successfully");
		}
	@Given("verify the title page")
	public void verify_the_title_page()  {
	Assert.assertEquals("Home",driver.getTitle());
	}
}
	
