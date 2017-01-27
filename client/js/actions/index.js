require('isomorphic-fetch');

const ADD_ENTRY = 'ADD_ENTRY';
const addEntry = function(entry) {
    return {
        type: ADD_ENTRY,
        entry: entry
    };
};

const FETCH_ENTRY_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
const fetchDescriptionSuccess = function(entry, description) {
    return {
        type: FETCH_DESCRIPTION_SUCCESS,
        entry: entry,
        description: description
    };
};

const FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
const fetchDescriptionError = function(entry, error) {
    return {
        type: FETCH_DESCRIPTION_ERROR,
        entry: entry,
        error: error
    };
};

const fetchDescription = function(entry) {
    return function(dispatch) {
        const url = 'localhost:8080/energy/' + entry;
        return fetch(url).then(function(response) {
            if (response.state < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var description = data.description;
            return dispatch(
                fetchDescriptionSuccess(entry, description)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchDescriptionError(entry, error)
            );
        });
    }
};

exports.ADD_ENTRY = ADD_ENTRY;
exports.addEntry = addEntry;

exports.FETCH_DESCRIPTION_SUCCESS = FETCH_DESCRIPTION_SUCCESS;
exports.fetchDescriptionSuccess = fetchDescriptionSuccess;

exports.FETCH_DESCRIPTION_ERROR = FETCH_DESCRIPTION_ERROR;
exports.fetchDescriptionError = fetchDescriptionError;

exports.fetchDescription = fetchDescription;