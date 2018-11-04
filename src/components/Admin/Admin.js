import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';



class Admin extends Component {

    componentDidMount() {
        this.getFeedback();
    }

    getFeedback = () => {
        axios.get('/feedback')
        .then((response) => {
            console.log('The orders have arrived from the GET request!', response.data);
            
        }).catch((error) => {
            alert('Unable to GET feedback!');
        })
    }

    render() {
    return (
      <ul>
        {/* { this.props.reduxState.displayReducer.map(
            feedback => <li key={}></li>
        )} */}
      </ul>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(Admin);