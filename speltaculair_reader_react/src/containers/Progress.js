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
    width: '32%',
    textAlign: 'center',
    display: 'inline-block',
    float: 'left',
    margin: '0% 0.5%',
  },

  progressCircle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '50%',
    width: '50%',
    textAlign: 'center',
    display: 'inline-block',
  },

  logo: {
    display: 'inline-block',
    marginTop: '50px',
    width: '75%',
    height: '75%',
    },
}


class Progress extends Component {

  render() {
    return (
        <Card style={style.progress}>
          <CardTitle title='Progress' />
          <CircularProgress style={style.progressCircle} mode="determinate" value={ 66 } size={ 4 }/>
          <img style={style.logo} src="http://res.cloudinary.com/speltaculair/image/upload/v1474013193/Reader/Logo_zj8yce.png"/>
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
