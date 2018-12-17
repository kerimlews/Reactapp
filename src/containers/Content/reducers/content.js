import { TOGGLE } from '../constants/content';
  
const initialState = {
    toggle: true
}
  
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE:
            return {
                toggle: action.value == null ? !state.toggle : action.value
            }
        default:
            return state;
    }
}