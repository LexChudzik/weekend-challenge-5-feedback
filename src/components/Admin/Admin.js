import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
      <Table>
          <TableHead>
                <TableRow>
                    <TableCell>Feeling</TableCell>
                    <TableCell>Comprension</TableCell>
                    <TableCell>Support</TableCell>
                    <TableCell>Comments</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
          </TableHead>
          <TableBody>
        { this.props.reduxState.displayReducer.map(
            feedback => <TableRow key={feedback.id}>
                <TableCell>{feedback.feeling}</TableCell>
                <TableCell>{feedback.understanding}</TableCell>
                <TableCell>{feedback.support}</TableCell>
                <TableCell>{feedback.comments}</TableCell>
                <TableCell><IconButton onClick={() => this.deleteFeedback(feedback.id)}><DeleteIcon /></IconButton></TableCell>
            </TableRow>
        )}
        </TableBody>
      </Table>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState }); 

export default connect(mapStateToProps)(Admin);