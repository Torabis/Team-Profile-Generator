# Team-Profile-Generator

This app generates a webpage that displays team's basic info
to have quick access to their emails and GitHub profiles

# Acceptance Criteria
```
WHEN I am prompted for my team members and their information
    THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
    THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
    THEN that GitHub profile opens in a new tab
WHEN I start the application
    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
    THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
    THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
    THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
    THEN I exit the application, and the HTML is generated
```

*Link: https://torabis.github.io/Team-Profile-Generator/

![Screenshot](Capture.PNG)
Testing Video ;https://drive.google.com/file/d/1Nmw-JpgSphmOJN-WYkpTIVmBn-dROsTl/view

```__tests__/            // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/                           // rendered output (HTML) and CSS style sheet
lib/                // classes
src/                // template helper code
Index.js            // runs the application```