import React from 'react';
import logo from './logo.svg';
import './App.css';
import './switch.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, } from 'react-router-dom';


class RoutePage extends React.Component {

  render() {
    return (
      <Router basename="/forecasting-sliders-react">
        <Switch>
          <Route path="/" exact component={ForecastDashBoard}/>
        </Switch>
      </Router>
    )
  }
}

// manages all the data and states in inputs and sliders
// uses that data to calculate the data for the result block
// TBD - if it passes revenue, orders, AOV, and cost values as props to BlockInputs
class ForecastDashBoard extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Forecast</h1>
        <fieldset>
          
          <div className="flex-padding">
            <BlockInputs name={"Revenue"}/>
            <BlockInputs name={"Orders"}/>
            <BlockInputs name={"AOV"}/>
            
          </div>
          <div className="flex-padding">
            <BlockInputs 
              name={"Cost"}/>
          </div>

          <ResultBlock 
            name={"Return on Ad Spend"}
          />
        </fieldset>
      </div>
    );
  }

}


// holds user input for updating metric values in slider ant text 
// also updates incrementer for the slider steps of the metric
// TBD - if it loads values from a parent component allowing the parent to
// calculate values
// how to manage switch freezing calculated values
class BlockInputs extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dataVal: 100,
      incVal: 10
    }

    this.handleUpdateDataInput = this.handleUpdateDataInput.bind(this);
    this.handleUpdateIncInput = this.handleUpdateIncInput.bind(this);
  }

  handleUpdateDataInput(val) {
    this.setState({
      dataVal: val
    })
  }

  handleUpdateIncInput(val) {
    this.setState({
      incVal: val,
    })
  }

  render() {
    return (
      <div className="box-border data">
        <div>
          <label><strong>{this.props.name}</strong></label>
          <TextAndSliderInput       // 
            dataInputUpdate={this.handleUpdateDataInput}
            val={this.state.dataVal}
            sliderStep={this.state.incVal}
             />
          <ToggleSwitch />
        </div>
        <div>
          <label>Increment by</label>
          <TextInput 
            textVal={this.state.incVal}
            incInputUpdate={this.handleUpdateIncInput}
          />
        </div>
      </div>
    )
  }
}

// manages the text and slider input UI
// parent sends down updated values based on UI interactions
class TextAndSliderInput extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      min: 0,
      max: 1000
    }

    this.updateSliderAndTextInput = this.updateSliderAndTextInput.bind(this);
  }

  updateSliderAndTextInput(e) {
    this.props.dataInputUpdate(e.target.value);
    this.updateMinAndMax(e.target.value);
  }

  updateMinAndMax(val) {
    if(val < this.state.min) {
      this.setState({
        min: val
      });
    } else if (val > this.state.max) {
      this.setState({
        max: val
      });
    }
  }

  render() {
    return (
      <div>
        <input type="text" 
          value={this.props.val} 
          onChange={this.updateSliderAndTextInput}
        />
        <input type="range" 
          value={this.props.val} 
          step={this.props.sliderStep} 
          onChange={this.updateSliderAndTextInput}
          min={this.state.min}
          max={this.state.max}
        />
      </div>
    )
  }
}

// purely meant to set text and slider input increment value
class TextInput extends React.Component {

  constructor(props) {
    super(props)

    this.updateTextInput = this.updateTextInput.bind(this);
  }

  updateTextInput(e) {
    this.props.incInputUpdate(e.target.value)
  }

  render() {
    return(
      <div>
        <input type="text" 
          value={this.props.textVal} 
          onChange={this.updateTextInput}/>
      </div>
    )
  }
}

// freezes or unfreezes metrics to allow user control of what values
// they want to stay the same while changing a calculated value
class ToggleSwitch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: true,
    }

    this.toggleOnAndOff = this.toggleOnAndOff.bind(this);
  }

  toggleOnAndOff(e) {
    console.log(this.state.checked)
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <label className="switch">
        <input type="checkbox" checked={this.state.checked} onChange={this.toggleOnAndOff} />
        <span className="slider round"></span>
      </label>
    )
  }
}

// display the total calculated metric
// in this case it will be purely for return on ad spend
class ResultBlock extends React.Component {
  render() {
    return (
      <div className="box-border data">
        <div><strong>{this.props.name}</strong></div>
        <input type="text" value={this.props.val}/>
      </div>
    )
  }
}


export default RoutePage;
