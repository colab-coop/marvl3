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



const styles = theme => ({
  root: {
    visibility: 'visible'
  },
  title: {
    width: 600
  },
  review: {
    marginBottom: 10
  },
  stars: {
    marginLeft: 130,
    marginTop: 12
  },
  switchAnon: {
    marginTop: 10
  }
});

class WriteReviewDialog extends React.Component {
  state = {
    open: false,
    reviewContent: '',
    rating: 0,
    anonymous: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleContentChange = event => {
    this.setState({ reviewContent: event.target.value });
  };

  handleRatingServiceChange = (newRating) => {
    this.setState({ ratingService: newRating });
  };

  handleRatingQualityChange = (newRating) => {
    this.setState({ ratingQuality: newRating });
  };

  handleAnonChange = event => {
    this.setState({ anonymous: !this.state.anonymous });
  };

  anonLabel = () => {
    if (this.state.anonymous === false) {
      return "Posting Publically"
    } else {
      return "Posting Anonymously"
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen}>Write Review</Button>
        <Dialog
          className={classes.root}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" className={classes.title}>Write a review</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>

            <FormGroup>
              <FormControl className={classes.formControl}>
                <IntegrationReactSelect data={[ { value: 'Composting', label: 'Composting' }, { value: 'Computers - Staff', label: 'Computers - Staff' } ]}/>
              </FormControl>

              <FormControl className={classes.review}>
                <TextField
                  id="multiline-flexible"
                  label="Review"
                  multiline
                  rowsMax="10"
                  value={this.state.reviewContent}
                  onChange={this.handleContentChange}
                />
              </FormControl>

              <FormControl>
                <InputLabel>Customer Service</InputLabel>
                <ReactStars
                  className={classes.stars}
                  count={5}
                  value={this.state.ratingService}
                  onChange={this.handleRatingServiceChange}
                  size={24}
                  color2={'#ffd700'} />
              </FormControl>

              <FormControl>
                <InputLabel>Quality of Work</InputLabel>
                <ReactStars
                  className={classes.stars}
                  count={5}
                  value={this.state.ratingQuality}
                  onChange={this.handleRatingQualityChange}
                  size={24}
                  color2={'#ffd700'} />
              </FormControl>

              <FormControlLabel className={classes.switchAnon}
                control={
                  <Switch
                    checked={this.state.anonymous}
                    onChange={this.handleAnonChange}
                    value="anonymous"
                    color="primary"
                  />
                }
                label={this.anonLabel()}
              />

            </FormGroup>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(WriteReviewDialog);
