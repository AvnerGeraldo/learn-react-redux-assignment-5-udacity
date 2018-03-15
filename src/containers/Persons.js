import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Components
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { ADD_PERSON, DELETE_PERSON } from '../store/actions';

class Persons extends Component {
    render () {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        };

        return (
            <div>
                <AddPerson personAdded={() => this.props.onAddPerson(newPerson)} />
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
        persons: state.reducerPerson.persons
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPerson: (newPerson) => dispatch({type: ADD_PERSON, newPerson: newPerson}),
        onDeletePerson: (id) => dispatch({type: DELETE_PERSON, personId: id})
    };
};

const { object, func } = PropTypes;

Persons.propTypes = {
    persons: object.isRequired,
    onAddPerson: func,
    onDeletePerson: func
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);