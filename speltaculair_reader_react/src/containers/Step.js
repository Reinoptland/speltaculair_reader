import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import getSteps from '../actions/get-steps'

// Components
import Hint from '../components/hint'

// Material UI Components

import {Card, CardTitle, } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import GridList from 'material-ui/GridList'

// Material UI Colors

import {
  grey200,
} from 'material-ui/styles/colors';

const style = {
  step: {
    height: 600,
    width: '99%',
    margin: '0% 0.5%',
    background: grey200,
  },

  buttonStyle: {
    width: '30%',
    position: 'relative',
    float: 'right',
    margin: '1%',
  },

}

class Step extends Component {

  // renderSummary(exercise, index) {
  // return (
  //     <Summary key={ index }
  //       index={ index } { ...exercise } />
  //     )
  // }

  componentDidMount(){

  }

  render() {
    const { exercises } = this.props

    return (
      <Card style= {style.step} >
        <RaisedButton style= { style.buttonStyle } label={"Volgende Stap!"} primary={true} />
        <Hint style= { style.hintStyle }/>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

Step.propTypes = {

}

export default connect(mapStateToProps, { getSteps })(Step)
