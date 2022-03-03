Feature: Log In

  Scenario Outline: Logging into the ecommerce site

    Given I am on the login page
    When I login with username <username> and password <password>
    Then Login should be <message>

    Examples:
      | username              | password      | message                        |
      | tomsawyer@gmail.com   | abcd123       | successful |
      | tomsawyer@gmail.com   | foo           | unsuccessful |
      | tom_foo123@gmail.com  | abcd123       | unsuccessful |
      | joffe@gmail.com       | abcd1234       | unsuccessful |


