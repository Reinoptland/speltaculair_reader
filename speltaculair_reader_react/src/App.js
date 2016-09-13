import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions

// Components
import Navbar from './components/Navbar'

// Containers
import Exercise from './containers/Exercise'
import Progress from './containers/Progress'

// Material UI Components
import mui from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Material UI Colors
import {
  grey200, green500, lightGreen500,
  orange400, green100, fullBlack
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    accent1Color: lightGreen500,
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
          <h1>Hello Rein!</h1>
          <Exercise/>
          <Progress/>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

App.propTypes = {

}

export default connect(mapStateToProps, { })(App)
