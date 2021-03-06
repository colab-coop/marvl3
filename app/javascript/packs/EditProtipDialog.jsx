import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import { withStyles } from '@material-ui/core/styles';

import IntegrationReactSelect from './IntegrationReactSelect'

import ReactStars from 'react-stars'
import axios from 'axios'


const styles = theme => ({
  root: {
    visibility: 'visible'
  },
  title: {
    width: 600
  },
  button: {
    color: 'inherit'
  },
  protip: {
    marginBottom: 10
  },
  stars: {
    marginLeft: 50,
    marginTop: 12
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    marginBottom: 10
  },
});

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
const thisAxios = axios.create({
  headers: {
    'X-CSRF-Token': csrfToken,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

class EditProtipDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleProtipSubmit = this.handleProtipSubmit.bind(this);

    this.state = {
      open: false,
      submitDisabled: true,
      title: props.protip.title,
      content: props.protip.content
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value } );
  };

  handleContentChange = event => {
    this.setState({ content: event.target.value } );
  };

  handleProtipSubmit() {
    const { title, content } = this.state;
    const that = this;

    thisAxios.patch(`/protips/`+this.props.protip.id, {
      protip: {
        title: title,
        content: content
      }
    })
    .then(function (response) {
      console.log(response);
      that.handleClose()
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { classes, protip } = this.props;

    return (
      <div>
        <Button variant="outlined" className={classes.button} onClick={this.handleClickOpen}>Edit Protip</Button>
        <Dialog
          className={classes.root}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" className={classes.title}>Edit your protip about {protip.category} from {protip.date_written}</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>

            <FormGroup>

              <FormControl className={classes.protip}>
                <TextField
                  required
                  id="multiline-flexible"
                  label="Pro Tip Title"
                  multiline
                  rowsMax="10"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </FormControl>

              <FormControl className={classes.protip}>
                <TextField
                  id="multiline-flexible"
                  label="Pro Tip Content"
                  multiline
                  rowsMax="10"
                  value={this.state.content}
                  onChange={this.handleContentChange}
                />
              </FormControl>

            </FormGroup>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleProtipSubmit} color="primary">
              Submit Edits
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(EditProtipDialog);
