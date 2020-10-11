import React, { Component } from 'react';
import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// bootstrap css for styling components
import 'bootstrap/dist/css/bootstrap.min.css';
// component
import Header from './layout/Header';
import Contacts from './contacts/Contacts';
import About from './pages/About';
import AddContact from './contacts/AddContact';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/add-contact" component={AddContact}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
