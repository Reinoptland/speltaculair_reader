import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions

// Components

// Material UI Components

// Material UI Colors

class Exercise extends Component {

  render() {
    return (
        <div>
          <h1>Exercise component</h1>
        </div>
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
