import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress'
import RaisedButton from 'material-ui/RaisedButton'
import startExercise from '../actions/start-exercise'
import { connect } from 'react-redux'

const summaryStyle = {
  summary: {
    height: 150,
    width: '90%',
    margin: '2%',
    padding: '0px 20px',
    textAlign: 'left',
  },

  title: {
    display: 'inline-block',
    marginTop: '3%',
    marginBottom: '0%',

  },

  progressBar: {
    position: 'relative',
    top: '25%',
    width: '51%',
    left: '50%',
    margin: '1%',
  },

  img: {
    position: 'relative',
    display: 'inline-block',
    margin: '1%',
    marginTop: '2%',
    float: 'right',
  },
  progressBarSub:{
    position: 'relative',
    float: 'right',
    margin: '1%',
  },
  buttonStyle:{
    display: 'inline-block',
    float: 'left',
    position: 'relative',
  }
};

class Summary extends Component {

  renderButton(){
    return(
      <RaisedButton
        style={ summaryStyle.buttonStyle }
        onClick={ this.startExercise.bind(this) }
        label={ " Start! "}
        primary= { true } />
    )
  }

  startExercise(){
    const { id } = this.props
    this.props.startExercise(id)
  }

  render(){

    const { name, description } = this.props
    const { summary, title, img, progressBar, progressBarSub } = summaryStyle

    return (
        <div>
          <Paper style={summary} zDepth={5}>
            <h1 style= {title}>{ name }</h1>
            <img style={img} src="http://placehold.it/75x75"/>
            <img style={img} src="http://placehold.it/75x75"/>
            <img style={img} src="http://placehold.it/75x75"/>

            <div style={progressBar}>
              <LinearProgress mode="determinate" value={ 20 } />
              <h4 style={progressBarSub}> 2 van de 10 stappen afgemaakt </h4>
            </div>
            { this.renderButton() }
          </Paper>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, { startExercise })(Summary)
