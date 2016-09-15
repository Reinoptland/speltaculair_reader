import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import getExercises from '../actions/get-exercises'

// Components
import Summary from '../components/Summary'

// Material UI Components

import {Card, CardTitle, } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

// Material UI Colors

import {
  grey200,
} from 'material-ui/styles/colors';

const style = {
  exercise: {
    height: 600,
    width: '66%',
    textAlign: 'left',
    display: 'inline-block',
    margin: '0% 0.5%',
    float: 'right',
    background: grey200,
  },
}

class Exercise extends Component {

  componentDidMount(){
    this.props.getExercises()
  }

  check(){
    console.log(this.props.exercises)
  }

  render() {
    return (
      <Card style= {style.exercise} >
        {/* <h1>Volgende Oefening</h1> */}
        <CardTitle title="Volgende Oefening"/>
        <Summary/>
        <Summary/>
        <RaisedButton onClick={this.check.bind(this)}/>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercise,
  }
}

Exercise.propTypes = {

}

export default connect(mapStateToProps, { getExercises })(Exercise)
