import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Components
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { ADD_PERSON, DELETE_PERSON } from '../store/actions';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPerson: (name, age) => dispatch({ 
            type: ADD_PERSON, 
            personData: { name: name, age: age } 
        }),
        onDeletePerson: (id) => dispatch({ type: DELETE_PERSON, personId: id })
    };
};

const { array, func } = PropTypes;

Persons.propTypes = {
    persons: array.isRequired,
    onAddPerson: func,
    onDeletePerson: func
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);