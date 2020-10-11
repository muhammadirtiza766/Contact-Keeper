// importting react
import React from 'react';
// creating context
export const Context = React.createContext();
// setup a reducer function
const reducer = (state, action) => {
  // checking action type
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };

    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};
// create a Provider component
export class Provider extends React.Component {
  // give it an state object
  state = {
    contacts: [
      { id: 1, name: 'John Doe', email: 'jDoe@example.com', phone: '122-34344-2' },
      { id: 2, name: 'John Doe', email: 'jDoe@example.com', phone: '122-34344-2' },
      { id: 3, name: 'John Doe', email: 'jDoe@example.com', phone: '122-34344-2' },
      { id: 4, name: 'John Doe', email: 'jDoe@example.com', phone: '122-34344-2' },
    ],
    // make a dispatch function which tacke's an action as an argument
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  // rendering the Provider from the context to the main App component
  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}
// exporting the Consumer component from the Context to any child Component
export const Consumer = Context.Consumer;
