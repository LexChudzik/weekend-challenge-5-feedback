import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';

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
            <p>Feedback submitted!</p>
            <Button variant="outlined" color="primary" type="button" onClick={() => this.props.history.push('/')}>Leave New Feedback</Button> 
        </div>
    )
    }
}

const mapStateToProps = reduxState => ({ reduxState }); 

export default connect(mapStateToProps)(Screen5);