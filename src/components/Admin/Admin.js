import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

  render() {
    return (
    //   <ul>
    //     { this.props.reduxState.elementReducer.map(
    //         element => <li key={element.name}>{element.name}</li>
    //     )}
    //   </ul>
    );
  }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(Admin);