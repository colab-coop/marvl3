import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Map from './Map';


const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 16,
    margin: theme.spacing.unit * 3,
  }),
});

function OrgShowMap(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Map />
      </Paper>
    </div>
  );
}

OrgShowMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrgShowMap);
