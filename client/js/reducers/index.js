import 'isomorphic-fetch';
import { combineReducers } from 'redux';
const url = 'http://localhost:8080/energy';



const initialEntryState = [];

const entryReducer = (state, action) => {
    
    state = state || initialEntryState;
    
    if (action.type === actions.ADD_ENTRY) {
        return state.concat({
            type: action.entry,
            description: null,
        });
fetch(url)
        .then( res => res.json() )
        .then( data => state=Object.assign(state, data));    

const allReducers = combineReducers({
    energyData: reducer
/* var newRepository = Object.assign({}, repository, {
            description: 'N/A' 
        });   */
})
  
    
    
    
   return before.concat(newEntry, after);


};

return state;
};

// export default allReducers;
exports.entryReducer = entryReducer;