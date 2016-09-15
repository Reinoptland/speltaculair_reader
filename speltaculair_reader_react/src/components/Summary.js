import React from 'react';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress'

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
};

const Summary = () => (
  <div>
    <Paper style={summaryStyle.summary} zDepth={5}>
      <h1 style= {summaryStyle.title}>Exercise</h1>
      <img style={summaryStyle.img} src="http://placehold.it/75x75"/>
      <img style={summaryStyle.img} src="http://placehold.it/75x75"/>
      <img style={summaryStyle.img} src="http://placehold.it/75x75"/>
      <div style={summaryStyle.progressBar}>
        <LinearProgress mode="determinate" value={ 20 } />
        <h4 style={summaryStyle.progressBarSub}> 2 van de 10 stappen afgemaakt </h4>
      </div>
    </Paper>
  </div>
);

export default Summary;
