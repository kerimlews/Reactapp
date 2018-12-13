import {
    TOGGLE_APP
} from './contants';

export function toggleApp(value) {
    return {
        type: TOGGLE_APP,
        value
    }
}