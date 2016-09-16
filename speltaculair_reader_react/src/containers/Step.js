import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import nextStep from '../actions/next-step'
import endExercise from '../actions/end-exercise'

// Components
import Hint from '../components/hint'

// Material UI Components

import {Card, CardTitle, } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
// import GridList from 'material-ui/GridList'

// Material UI Colors

import {
  grey200, grey500, orange400,
} from 'material-ui/styles/colors';

const style = {
  step: {
    height: 600,
    width: '99%',
    margin: '0% 0.5%',
    background: grey200,
  },

  buttonStyleRight: {
    width: '30%',
    position: 'relative',
    float: 'right',
    margin: '1%',
    display: 'inline-block',
  },

  buttonStyleLeft: {
    width: '30%',
    position: 'relative',
    float: 'left',
    margin: '1%',
    display: 'inline-block',
  },

  instruction: {
    width: '30%',
    height: '300px',
    float: 'left',
    // position: 'relative',
    // display: 'inline-block',
    margin: '1%',
    background: orange400,
    padding: '1%',
  },

  img: {
    float: 'right',
    margin: '1%',
  }
}

class Step extends Component {

  enablePrevious() {
  return (
        <RaisedButton
        style= { style.buttonStyleLeft }
        label={"Vorige Stap!"}
        primary={true}
        onClick={this.previousStep.bind(this)}/>
    )
  }

  disablePrevious() {
  return (
        <RaisedButton
        style= { style.buttonStyleLeft }
        label={"Vorige Stap!"}
        disabled = {true} />
    )
  }




  nextStep(){
    const next = this.props.currentStep + 1
    this.props.nextStep(next)
  }

  previousStep(){
    const previous = this.props.currentStep - 1
    this.props.nextStep(previous)
  }

  endExercise(){
    this.props.endExercise()
  }

  componentDidMount(){

  }

  render() {
    const { exercises } = this.props

    return (
      <Card style= { style.step } >
        {this.props.firstStep ? this.disablePrevious() : this.enablePrevious() }

            <RaisedButton
            style= { style.buttonStyleRight }
            label={ this.props.lastStep ? "Je bent klaar!" : "Volgende Stap!"}
            primary={true}
            onClick={this.props.lastStep ? this.endExercise.bind(this) : this.nextStep.bind(this)}/>

        <img style={ style.img } src="http://placehold.it/700x300   "/>
        <Paper style={ style.instruction } zDepth={5}>
          <h1> { this.props.instructionText } </h1>
        </Paper>
        <Hint/>

      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.currentExercise.currentStep,
    instructionText: state.steps[state.currentExercise.currentStep].instruction,
    firstStep: (state.currentExercise.currentStep == 0),
    lastStep:( state.currentExercise.currentStep + 1 == state.steps.length),
  }
}

Step.propTypes = {

}

export default connect(mapStateToProps, { nextStep, endExercise })(Step)
