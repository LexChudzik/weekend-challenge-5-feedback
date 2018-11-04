import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';



class Admin extends Component {

    componentDidMount() {
        this.getFeedback();
    }

    getFeedback = () => {
        console.log('getting feedback');
        
        axios.get('/feedback')
        .then((response) => {
            console.log('The orders have arrived from the GET request!', response.data);
            this.props.dispatch({ type: 'GET_FEEDBACK', payload: response.data})
        }).catch((error) => {
            alert('Unable to GET feedback!');
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
                <td>DELETE button here</td>
            </tr>
        )}
        </tbody>
      </table>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(Admin);