import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const hintStyle = {
  card: {
    width: '80%',
    position: 'relative',
    // float: 'left',
    margin: '1%',
    top: '450px',
    marginLeft: 'auto',
    marginRight: 'auto',
    // float: 'left',
    // // position: 'relative',
    // display: 'inline-block',
    // width: '200px',
  },
}

class Hint extends Component {


render() {
  return (
      <Card style={ hintStyle.card }>
        <CardHeader
          title="Geef me een hint!"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, {})(Hint)
