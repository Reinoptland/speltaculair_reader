import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions

// Components

// Material UI Components
import {Card, CardTitle, } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

// Material UI Colors

const style = {
  progress: {
    height: 600,
    width: 350,
    textAlign: 'center',
    display: 'inline-block',
    position: 'absolute',
    left: 10,
  },
}


class Progress extends Component {

  render() {
    return (
        <Card style={style.progress}>
          <CardTitle title='Progress' />
          <CircularProgress mode="determinate" value={ 66 } size={ 4 } />
        </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

Progress.propTypes = {

}

export default connect(mapStateToProps, { })(Progress)
