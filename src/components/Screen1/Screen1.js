import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyInput = {
    feeling: ''
}

class Screen1 extends Component {

    state = emptyInput;

    handleChange = ( event ) => {
        console.log(event.target.value);
        const rating = parseInt(event.target.value)
        this.setState({feeling: rating});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state});
        this.props.history.push('/2');
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>How are you feeling today?</label>
            <select required onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> 
            <input type="submit" value="Next"/>
        </form>
    )
    }
}

const mapStateToProps = reduxState => ({ reduxState }); 

export default connect(mapStateToProps)(Screen1);