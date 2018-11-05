import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const emptyInput = {
    comments: ''
}

class Screen4 extends Component {

    state = emptyInput;

    handleChange = ( event ) => {
        console.log(event.target.value);
        this.setState({comments: event.target.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state});
        this.props.history.push('/5'); 
        
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>Any comments you would like to leave?</label>
            <br />
            <textarea onChange={this.handleChange} />  
            <br />
            <Button variant="outlined" color="primary" type="submit">NEXT</Button>
        </form>
    )
    }
}

const mapStateToProps = reduxState => ({ reduxState }); 

export default connect(mapStateToProps)(Screen4);