$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/logverification/feature1.feature");
formatter.feature({
  "name": "To verify multiple user login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Multiple user login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open the testmeapp",
  "keyword": "* "
});
formatter.step({
  "name": "user enters the username as \"\u003cusername\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "user enters the password as \"\u003cpassword\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "user clicks submit button",
  "keyword": "* "
});
formatter.step({
  "name": "verify registration",
  "keyword": "* "
});
formatter.step({
  "name": "verify the title page",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "lalitha",
        "password123"
      ]
    },
    {
      "cells": [
        "ishusumathy",
        "Aishu123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Multiple user login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open the testmeapp",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.user_open_the_testmeapp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the username as \"lalitha\"",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.user_enters_the_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password as \"password123\"",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.user_enters_the_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks submit button",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.user_clicks_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify registration",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.verify_registration()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the title page",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.verify_the_title_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Multiple user login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open the testmeapp",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.user_open_the_testmeapp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the username as \"ishusumathy\"",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.user_enters_the_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password as \"Aishu123\"",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.user_enters_the_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks submit button",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.user_clicks_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify registration",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.verify_registration()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the title page",
  "keyword": "* "
});
formatter.match({
  "location": "Stepdefinition.verify_the_title_page()"
});
formatter.result({
  "status": "passed"
});
});