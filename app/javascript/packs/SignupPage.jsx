import React from 'react'

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


import SignupModal from './SignupModal'

import axios from 'axios'

const orgData =
  {name: 'Noble Street PCS - UIC Campus',
   street: '800 N. Halsted Street',
   city: 'Chicago, IL 60612',
   phone: '(312) 222-1234',
   website: 'www.noblestreetpcs.com/uic'
  }

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    // this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    // this.getDrawerStatus = this.getDrawerStatus.bind(this);
    // this.state = {
    //   categoriesData: [],
    //   testData: [
    //     { label: 'Composting' },
    //     { label: 'Computers - Staff' },
    //     { label: 'Computers - Students' },
    //     { label: 'Custom Industrial Kitchens' },
    //     { label: 'Capital City Contracting' }
    //   ],
    //   searchTerm: "",
    //   drawerOpen: false,
    //   categoryShowOpen: false
    // };
  }

  componentDidMount() {
    axios.get(`https://marvl-next.herokuapp.com/landing_search_data`)
      .then((response) => {
        this.setState({categoriesData: response.data.categories})
      })
      .catch((error) => console.error('axios error', error))
  }


  render () {
    const { classes } = this.props;

    return (
      <div>
        <SignupModal />
      </div>
    )
  }
}

export default withStyles(styles)(SignupPage);