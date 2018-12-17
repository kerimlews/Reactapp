import {
    TOGGLE_APP
} from './contants';

const initialState = {
    value: true
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_APP: return { value: !state.value }
        default:
            return state;
    }
}