import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions

// Components
import Summary from '../components/Summary'

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
    width: '66%',
    textAlign: 'left',
    display: 'inline-block',
    margin: '0% 0.5%',
    float: 'right',
    background: grey200,
  },
}

class Exercise extends Component {

  render() {
    return (
      <Card style= {style.exercise} >
        {/* <h1>Volgende Oefening</h1> */}
        <CardTitle title="Volgende Oefening"/>
        <Summary/>
        <Summary/>
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
