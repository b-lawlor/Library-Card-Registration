Google Apps Script web app that uses Sierra API to create patron records. Created by Brendan Lawlor for test purposes only. Use at your own risk. Not supported by CLAMS.

# Quickstart

## Install Node.js
https://nodejs.org/en/download/

## Install clasp
```
npm install @google/clasp -g
```

## Enable the Google Apps Script API
https://script.google.com/home/usersettings

## Clone this Repo
```
git clone https://github.com/b-lawlor/Library-Card-Registration
```

## Create a New Apps Script Project
```
cd library-Card-registration
clasp login
clasp create --title "Library Card Registration"
```
**choose standalone**
```
clasp push
clasp open
```

## Edit Apps Script Code

In api.gs
```
var baseUrl = "https://YOUR-DOMAIN.org/iii/sierra-api/v5/";
```

In main.gs:
```
processForm handles the data send from the html form
newPatron = {} //this is the JSON patron object we post to the API
getExpirationdate() returns an expiration date of 30 days from today
```

index.html contains the form and is served by the doGet function when someone visits your web app

javascript.html gets included in index.html and has some functions associated with the form

This line calls the serverside processForm function with a success handler call back function:
```
google.script.run.withSuccessHandler(confirmation(data.email)).processForm(data);
```

## Add your API Credentials to the Project Properties

1. Go to File -> Project properties
2. Open the Script properties tab
3. Click + Add Row
4. Add a property with the name key with a value of your API key
5. Add a property with the name secret with a value of your client secret
6. Click Save

## Authorize the Script

1. Run-> Run function -> main
2. Click Allow
3. You will see an error, don't worry about it though

## Deploy as Web App

1. Go to Publish -> Deploy as web app
2. Copy the Current web app URL
3. Anytime you update code you need to redeploy a new version of the web app for the changes to go live on this URL
4. Select Project version -> new
5. Set Who has access to the app, Anyone even anonymous for a public form or Anyone within my domain for a staff tool
5. Click update