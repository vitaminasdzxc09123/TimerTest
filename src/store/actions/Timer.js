import ACTIONS from '../constants/actionsTypes';

export function setTimer(data) {
    return async (dispatch) => {
             dispatch({
                type : ACTIONS.GET_TIMER,
                data 
            });
    };
}

export function removeTimer(id) {
    return async (dispatch) => {
             dispatch({
                type : ACTIONS.REMOVE_TIMER,
                id 
            });
    };
}