import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const emptyInput = {
    support: ''
}

class Screen3 extends Component {

    state = emptyInput;

    handleChange = ( event ) => {
        console.log(event.target.value);
        const rating = parseInt(event.target.value)
        this.setState({support: rating});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state});
        this.props.history.push('/4');
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>How are you being supported?</label>
            <br />
            <select required onChange={this.handleChange}>
                <option value="" selected disabled hidden>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> 
            <br />
            <Button variant="outlined" color="primary" type="submit">NEXT</Button>
        </form>
    )
    }
}

const mapStateToProps = reduxState => ({ reduxState }); 

export default connect(mapStateToProps)(Screen3);