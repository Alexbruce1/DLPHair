import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from './Components/Home/Home';


class App extends Component {
  constructor() {
    super();
    this.state = {
      menuExpanded: false
    }
  }

  expandLeftMenu = () => {
    const { menuExpanded } = this.state;
    this.setState({
      menuExpanded: !menuExpanded
    })
  }

  render() {
    const { menuExpanded } = this.state;
    return (
      <div className="App">
        <Header expandLeftMenu={this.expandLeftMenu} />
        {
          menuExpanded &&
          <Sidebar expandLeftMenu={this.expandLeftMenu} />
        }
        <Route exact path='/' render={() => 
          <Home />
        } />
        <Route path='/about' render={() => 
          <About 
            expandLeftMenu={this.expandLeftMenu}
            menuExpanded={menuExpanded}
          />
        }/>
        <Route path='/contact' render={() => 
          <Contact />
        } />
        <Route path='/portfolio' render={() =>
          <Portfolio />
        } />
      </div>
    );
  }
}

export default App;