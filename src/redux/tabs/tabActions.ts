import { SWITCH_TAB } from './tabTypes';

export const switchTab = (tab: String) => {
    return {
        type: SWITCH_TAB,
        payload: tab,
    };
};
