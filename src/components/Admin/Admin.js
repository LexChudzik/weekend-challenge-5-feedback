import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

    componentDidMount() {
        this.getFeedback();
    }

    getFeedback = () => {
        console.log('getting feedback');
        //get feedback from database
        axios.get('/feedback')
        .then((response) => {
            console.log('The orders have arrived from the GET request!', response.data);
            //send response to reducer
            this.props.dispatch({ type: 'GET_FEEDBACK', payload: response.data})
        }).catch((error) => {
            alert('Unable to GET feedback! Error:', error);
        })
    }

    deleteFeedback = (id) => {
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`
          })
          .then( (response) => {
            this.getFeedback();
            console.log('feedback deleted');
            
          })
          .catch( (error) => {
            console.log('error deleting:', error);
            
      })
    }

    render() {
    return (
      <table>
          <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Comprension</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Delete</th>
                </tr>
          </thead>
          <tbody>
        { this.props.reduxState.displayReducer.map(
            feedback => <tr key={feedback.id}>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td><button onClick={() => this.deleteFeedback(feedback.id)}>Delete</button></td>
            </tr>
        )}
        </tbody>
      </table>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState }); 

export default connect(mapStateToProps)(Admin);