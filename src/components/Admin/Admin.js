import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

  render() {
    return (
    //   <ul>
    //     { this.props.reduxState.displayReducer.map(
    //         feedback => <li key={}></li>
    //     )}
    //   </ul>
    );
  }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(Admin);