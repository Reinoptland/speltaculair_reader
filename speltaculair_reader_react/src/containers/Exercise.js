import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import getExercises from '../actions/get-exercises'

// Components
import Summary from '../components/Summary'

// Material UI Components

import {Card, CardTitle, } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import GridList from 'material-ui/GridList'

// Material UI Colors

import {
  grey200,
} from 'material-ui/styles/colors';

const style = {
  exercise: {
    height: 600,
    width: '66%',
    textAlign: 'left',
    display: 'flex',
    margin: '0% 0.5%',
    float: 'right',
    background: grey200,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
  width: '95%',
  height: '80%',
  overflowY: 'auto',
  marginLeft: '2%',
  },


}

class Exercise extends Component {

  renderSummary(exercise, index) {
  return (
      <Summary key={ index }
        index={ index } { ...exercise } />
      )
  }

  componentDidMount(){
    this.props.getExercises()
  }

  render() {
    const { exercises } = this.props

    return (
      <Card style= {style.exercise} >
        {/* <h1>Volgende Oefening</h1> */}
        <CardTitle title="Volgende Oefening"/>
          <GridList cellHeight={ 150 } cols={ 1 } style={ style.gridList }>
            { exercises.map(this.renderSummary.bind(this)) }
          </GridList>
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
