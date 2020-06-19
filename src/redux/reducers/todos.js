import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            return {
                // note about object spread operator:
                // {...state, visibilityFilter: action.filter} is 
                // alternatively written as Object.assign({}, state, { visibilityFilter: action.filter }})
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds, 
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                // why are nested object assigns? 
                // why can't we just access ...state.byIds directly and create a new object there without accessing the state?
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        default:
            return state;
    }
}
