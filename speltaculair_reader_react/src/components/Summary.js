import React from 'react';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress'

const summaryStyle = {
  summary: {
    height: 150,
    width: '90%',
    margin: '2%',
    // padding: '0px 20px',
    textAlign: 'left',
  },

  progressBar: {
  },

};

const Summary = () => (
  <div>
    <Paper style={summaryStyle.summary} zDepth={5}>
      {/* <CardTitle title="Volgende Oefening"/> */}
      <img src="http://placehold.it/100x150"/>
      <LinearProgress style={summaryStyle.progressBar} mode="determinate" value={ 20 } />
    </Paper>
  </div>
);

export default Summary;
