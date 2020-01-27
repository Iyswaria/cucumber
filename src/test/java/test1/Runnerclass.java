package test1;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/logverification/feature1.feature",glue="test1",
plugin="html:target/htmlreport.html")

public class Runnerclass {

}
