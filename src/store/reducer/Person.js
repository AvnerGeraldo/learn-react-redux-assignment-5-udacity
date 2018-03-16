import { ADD_PERSON, DELETE_PERSON } from '../actions';

const initialState = {
    persons: []
};

const reducerPerson = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            };
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }            
        case DELETE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
        default:
            return state;
    }
};

export default reducerPerson;