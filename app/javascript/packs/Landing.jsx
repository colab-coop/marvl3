import React from 'react'

import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

import DrawerUndockedExample from './DrawerUndockedExample'
import IntegrationAutosuggest from './IntegrationAutosuggest'
import CategoryShow from './CategoryShow'
import ButtonAppBar from './ButtonAppBar';

import axios from 'axios'


export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.getDrawerStatus = this.getDrawerStatus.bind(this);
    this.state = {
      categoriesData: [],
      testData: [
        { label: 'Afghanistan' },
        { label: 'Aland Islands' },
        { label: 'Albania' },
        { label: 'Algeria' },
        { label: 'American Samoa' }
      ],
      searchTerm: "",
      vendorsData: [],
      drawerOpen: false,
      categoryShowOpen: false
    };
  }

  componentDidMount() {
    axios.get(`https://www.marvl.org/data`)
      .then((response) => {
        this.setState({categoriesData: response.data.categories,
                       vendorsData: response.data.vendors})
      })
      .catch((error) => console.error('axios error', error))
  }

  handleDrawerToggle() {
    this.setState({drawerOpen: !this.state.drawerOpen})
  }

  buttonTextCategories() {
    if (this.state.drawerOpen === false) {
      return "All Categories"
    } else {
      return "Hide Categories"
    }
  }

  leftButtons() {
    return (
      <a href="/writeareview">
        Button
          style={{margin: 4}}
          label="Write a Review" />
      </a>
    )
  }

  rightButtons() {
    return (
      <div>
        Button
          style={{margin: 4}}
          label={this.buttonTextCategories()}
          onClick={this.handleDrawerToggle} />
      </div>
    )
  }

  getDrawerStatus() {
    return this.state.drawerOpen
  }

  categoryShow() {
    if (this.state.categoryShowOpen === true) {
      return (<CategoryShow />)
    } else {
      return (<div></div>)
    }
  }

  render () {
    return (
      <div>
        <ButtonAppBar />
        <h2 style={{paddingTop: 200, marginLeft: '45%'}}>MARVL</h2>
        <div style={{position: 'relative'}}>
          <IntegrationAutosuggest style={{}} categories={this.state.categoriesData} vendors={this.state.vendorsData} tests={this.state.testData}/>
          <Button style={{ position: 'absolute', top: -5, right: '12.5%' }}>SEARCH</Button>
        </div>
        {this.categoryShow()}
      </div>
    )
  }
}