[![RealWorld Frontend](https://img.shields.io/badge/realworld-frontend-%23783578.svg)](http://realworld.io)
[![Build Status](https://travis-ci.org/gothinkster/angular-realworld-example-app.svg?branch=master)](https://travis-ci.org/gothinkster/angular-realworld-example-app)

# ![Angular Example App](logo.png)

> ### Angular codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) spec and API.

<br>
This project used angular realWord App to learn about E2E and implement tests using cypress library
<br>

# Setup
 - Run npm install to install all the dependencies
# Steps to run 

- first of all 
    - run  **ng serve** to run the angular app.
- then, in order to run e2e'test, you can use:
    - npx cypress open -> it will run the test on the brownser
    - npx cypress run -> it will run all the test on cypress/integration folder
    - npx cypress run --spec "[path]" -> it will run an expecific test wich must be passed at the path

[![Brought to you by Thinkster](https://raw.githubusercontent.com/gothinkster/realworld/master/media/end.png)](https://thinkster.io)
