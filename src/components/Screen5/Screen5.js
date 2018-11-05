import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Screen5 extends Component {

    componentDidMount() {
        this.submitFeedback();
    }

    submitFeedback = () => {
        const feedbackItem = this.props.reduxState.feedbackReducer;
        console.log('submitting', feedbackItem);
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackItem
        }).then( (response) => {
            console.log('feedback added to database');
            this.props.dispatch({type: 'SUBMIT_FEEDBACK'});          
        }).catch( (error) => {
            console.log('error adding feedback', error); 
        })
    }

    render() {
    return (
        <div>
            <p>Hello</p>
        </div>
    )
    }
}

const mapStateToProps = reduxState => ({ reduxState }); 

export default connect(mapStateToProps)(Screen5);