import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import ToggleNavbar from './components/ToggleNavbar';
import NavList from './components/navlist/NavList';
import Header from './components/header/Header';
import SubHeader from './components/header/SubHeader';
import Display from './components/display/Display';
import pictures from './components/pictures/pictures';
import axios from 'axios';

const url = ('http://localhost:3001/api/reptiles/');

class App extends Component {
  constructor() {
    super()
    this.homeState = {
      navbar: false,
      items: ["Testudines", "Rhyncocephalia", "Squamata", "Crocodilia", "Aves"],
      selectedItem: "Reptiles",
      subHeader: ['<--- Click left to display pictures'],
      toDisplay: ['/python.PNG'],
      description: "A description will show up here when you click on one of the subgroups above"
    }
    this.state = Object.assign(this.homeState);

    this.selectItem = this.selectItem.bind(this);
    this.goHome = this.goHome.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.hideNavbar = this.hideNavbar.bind(this);
  }

  selectItem(item) {
    let prop = item.toLowerCase();
    axios.get(url + prop).then(response => this.setState({
      navbar: false,
      selectedItem: item,
      subHeader: response.data.subHeader,
      //subHeader: pictures[prop].subHeader,
      toDisplay: response.data.images,
      //toDisplay: pictures[prop].images,
      description: response.data.description
    }))
    console.log(this.state);
  }

  toggleNavbar() {
    let navbar = this.state.navbar;
    this.setState({
      navbar: !navbar
    }, () => console.log(this.state))
  }

  hideNavbar() {
    console.log(this.state);
    this.setState({
      navbar: false
    })
    console.log(this.state);
  }

  goHome() {
    this.setState(this.homeState);
  }

  render() {
    return (
      <div>
        <NavList navbar={this.state.navbar} toggleNavbar={this.toggleNavbar} hideNavbar={this.hideNavbar} goHome={this.goHome} selectItem={this.selectItem} description={this.state.description} selectedItem={this.state.selectedItem} />
        <main className="main-wrapper">
          <Header selectedItem={this.state.selectedItem} />
          <SubHeader subHeader={this.state.subHeader} />
          <Display name={this.state.selectedItem} toDisplay={this.state.toDisplay} />
        </main>
      </div>
    );
  }
}

export default App;
