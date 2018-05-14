import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});


class RfpTextField extends React.Component {
  state = {
    name: 'Cat in the Hat',
    multiline: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="multiline-flexible"
          label="Describe the work."
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('RfpDetails')}
          className={classes.textField}
          margin="normal"
        />
      </form>
    );
  }
}

RfpTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RfpTextField);
