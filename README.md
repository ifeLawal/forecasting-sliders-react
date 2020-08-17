This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Feel free to interact with the project so far](https://ifelawal.github.io/forecasting-sliders-react/) 

### Deployed using react gh-pages. [This awesome article by Benni Russell](https://medium.com/@bennirus/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2) shows the 3 simple steps: 

Purpose of interface / program

Allow a user to do calculations through a slider and input interface.
Currently specifically targeted at metrics within facebook advertising.

The metrics and there connections are:
Revenue = Orders * AOV
CVR = orders / sessions
CPM = cost / (impressions / 1000)
CPC = cost / click
CPS = cost / session

The system does a final calculation for Return on Ad Spend (ROAS)
ROAS = revenue / cost

Main code files:
- App.js (all react component code lives here for now. Hope to split into
  components once functionality is complete)
- index.js (places all the App.js components onto the javascript dom with
  ReactDOM.render)
- base.css (an unminified version of the
  [water.css](https://watercss.netlify.app/) styles to quickly style my inputs
  and fieldset)
- switch.css (css styling for the switch ui)
- 

Still configuring all the parts
----

## [image of interactions](https://docs.google.com/presentation/d/1mY_kCW9vYJANTlklQzCAqVQRKFbcVomjXj-jV8pGlkk/edit#slide=id.p)

Forecastdashboard - 
    - Manages state of all the numbers
    - Calculates return on ad spend to send to result block

BlockInputs
- 

TextAndSliderInput
- 

TextInput
- 


ToggleSwitch
- 

ResultBlock
- 