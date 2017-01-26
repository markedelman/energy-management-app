import 'isomorphic-fetch';
import { combineReducers } from 'redux';
const url = 'http://localhost:8080/energy';

var reducer = function(){
    var state = [];
    fetch(url)
        .then( res => res.json() )
        .then( data => state=Object.assign(state, data));
    return state;
};

var allReducers = combineReducers({
    energyData: reducer
});

export default allReducers;