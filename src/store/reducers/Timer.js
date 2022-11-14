import ACTIONS from '../constants/actionsTypes';

const initialState = {
    list     : []
};

export default (state = initialState, action = {}) => {
    const { type, data , id} = action;

    switch (type) {
        case ACTIONS.GET_TIMER:
            return { 
                ...state,
                list: [...state.list, data]
            }
        case ACTIONS.REMOVE_TIMER:
                return { 
                    ...state,
                    list: state.list.filter((item) => item.id !== id)
                }
        default:
            return state;
    }
};
