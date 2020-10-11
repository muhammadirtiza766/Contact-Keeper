import React, { Component } from 'react';
import { Consumer } from '../context';

class Contact extends Component {
  state = { showInfo: false };

  onDeleteClick = (id, dispatch) => {
    console.log(id);
    dispatch({ type: 'DELETE_CONTACT', payload: id });
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
