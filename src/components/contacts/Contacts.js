import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context'; // importing consumer to consume state.
// making Contacts Component
/**
 * this component will generate a linst of <Contact /> component.
 */
class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-4">
                <span className="text-primary">Contact</span> List
              </h1>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
