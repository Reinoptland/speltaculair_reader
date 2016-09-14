import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions

// Components

// Material UI Components

import {Card, CardTitle, } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Material UI Colors

import {
  grey200,
} from 'material-ui/styles/colors';

const style = {
  exercise: {
    height: 600,
    width: 900,
    textAlign: 'left',
    display: 'inline-block',
    position: 'absolute',
    right: 10,
    background: grey200,
  },
}

class Exercise extends Component {

  render() {
    return (
      <Card style= {style.exercise} >
        <CardTitle title="Volgende Oefening"/>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

Exercise.propTypes = {

}

export default connect(mapStateToProps, { })(Exercise)
