import React from 'react';

var UserInput = React.createClass({

    render:function(){
        return (
            <div className="userinput">
                <h3>User Input:</h3>
                <textarea ref="userinput_data" defaultValue="Enter Data"></textarea>
                <button className="btn-info btn-lg">Submit</button>
            </div>
        )
    }
});

// to use the value from the textarea through ref, we do the following:
// {this.refs.userinput_data.value}
module.exports = UserInput;