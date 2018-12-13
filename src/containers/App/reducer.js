import {
    TOGGLE_APP
} from './contants';

const initialState = {
    value: true
}

function handleToggleApp(state, { value }) {
    return {
        value: value == null ? !state.value : value
    };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_APP:
            return handleToggleApp(state, action);
        default:
            return state;
    }
}