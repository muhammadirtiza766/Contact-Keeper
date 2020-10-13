import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../context';
import axios from 'axios';

class Contact extends Component {
  state = { showInfo: false };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  showClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const { contact } = this.props;
    const icon = this.state.showInfo === true ? 'fa-sort-down' : 'fa-sort-up';
    // returning jsx with context consumer component;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {contact.name}
                <i
                  className={`fa ${icon}`}
                  style={{
                    cursor: 'pointer',
                    marginLeft: '1rem',
                    verticalAlign: 'middle',
                  }}
                  onClick={this.showClick}
                ></i>
                <i
                  className="fa fa-times"
                  style={{ color: 'red', cursor: 'pointer', float: 'right' }}
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}
                ></i>
                <Link to={`edit-contact/${contact.id}`}>
                  <i
                    className="fa fa-pencil"
                    style={{ float: 'right', color: '#333', marginRight: '20px' }}
                  ></i>
                </Link>
              </h4>
              <br />
              {this.state.showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contact;
