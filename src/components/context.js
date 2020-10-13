// importting react
import React from 'react';
import axios from 'axios';
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
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? (contact = action.payload) : contact
        ),
      };
    default:
      return state;
  }
};
// create a Provider component
export class Provider extends React.Component {
  // give it an state object
  state = {
    contacts: [],
    // make a dispatch function which tacke's an action as an argument
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  // making an http GET request
  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({ contacts: res.data });
  }
  // rendering the Provider from the context to the main App component
  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}
// exporting the Consumer component from the Context to any child Component
export const Consumer = Context.Consumer;
