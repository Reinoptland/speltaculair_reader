import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const hintStyle = {
  card: {
    width: '80%',
    position: 'relative',
    margin: '1%',
    // top: '425px',
    marginLeft: '10%',
    marginTop: '5%',
    // marginRight: 'auto',
    display: 'inline-block',
    // width: '200px',
  },

  title: {
    fontSize: '30px',
  },

}

class Hint extends Component {


render() {
  return (
      <Card style={ hintStyle.card }>
        <CardHeader
          titleStyle={ hintStyle.title }
          title="Geef mij een hint!"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText style={ hintStyle.expand } expandable={true}>
          {this.props.hintText}
        </CardText>
      </Card>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    hintText: state.hints.hints[0].hint_text
  }
}

export default connect(mapStateToProps, {})(Hint)
