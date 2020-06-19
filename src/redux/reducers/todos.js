import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            return Object.assign({}, state, { 
                allIds:[...state.allIds, id],
                byIds: Object.assign({}, state.byIds, {
                        [id]: {
                            content,
                            completed: false
                        }
                    })
                }
            )
        }

                // note about object spread operator:
                // {...state, visibilityFilter: action.filter} is 
                // alternatively written as Object.assign({}, state, { visibilityFilter: action.filter }})

                // return Object.assign({}, state, {editableData:
                //     Object.assign({}, state.editableData,
                //       {input: action.data,
                //        status: action.status
                //      })
                //   })

                
                // ...state,
                // allIds: [...state.allIds, id],
                // byIds: {
                //     ...state.byIds, 
                //     [id]: {
                //         content,
                //         completed: false
                //     }
                // }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return Object.assign({}, state, {
                byIds: Object.assign({}, state.byIds, {
                    [id]: Object.assign({}, state.byIds[id], {
                        completed: !state.byIds[id].completed
                    })
                })
            })

            // return {
            //     ...state,
            //     byIds: {
            //         ...state.byIds,
            //         [id]: {
            //             ...state.byIds[id],
            //             completed: !state.byIds[id].completed
            //         }
            //     }
            // };
        }
        default:
            return state;
    }
}
