import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions

// Components
import Navbar from './components/Navbar'

// Containers
import Exercise from './containers/Exercise'
import Progress from './containers/Progress'
import Step from './containers/Step'

// Material UI Components
import mui from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {fade} from 'material-ui/utils/colorManipulator'

// Material UI Colors
import {
  grey200, grey300, grey100, grey500, green500, lightGreen500,
  orange400, green100, darkBlack, white, fullBlack, pinkA200
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: lightGreen500,
    primary3Color: orange400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: green100,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: green500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  appBar: {
    height: 125,
  }
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Navbar/>
          {this.props.displayOverview ? <Progress/> : null }
          {this.props.displayOverview ? <Exercise/> : null }
          {this.props.displayExercise ? <Step/> : null}
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    displayOverview: state.display.displayOverview,
    displayExercise: state.display.displayExercise
  }
}

App.propTypes = {

}

export default connect(mapStateToProps, { })(App)
