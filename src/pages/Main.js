import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  // CardActions,
  // CardHeader,
  // CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';

import '../assets/stylesheets/base.scss';

class Main extends React.Component {
  renderItem(item, index) {
    return (
      <Paper onClick={() => browserHistory.push(`/lab/${index + 1}`)} style={{ marginTop: 10 }} zDepth={1}>
      <Card>
        <CardTitle title={item.name} subtitle={item.goal} />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
      </Paper>
    );
  }

  render() {
    return (
      <div className="Main">
        { this.props.labs.map(this.renderItem) }
      </div>
    );
  }
}

function mapStateProps(state) {
  return {
    labs: state.labs.items
  };
}

export default connect(mapStateProps)(Main);
