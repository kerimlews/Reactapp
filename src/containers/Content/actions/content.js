import { TOGGLE } from '../constants/content';

export function onToggle(value) {
    return {
        type: TOGGLE,
        value
    };
}