import React from 'react';
import ReactDOM from 'react-dom';

class UserInput extends React.Component {
 constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

   buttonClicked() {
	   var inputText= ReactDOM.findDOMNode(this.refs.textInput).value;
	   var url ='/energy';
		 this.refs.textInput.value = '';
		 fetch(url, {
            body: JSON.stringify({entry:inputText}),
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
			 
		}).then((response) => {
			
			if (response.status < 200) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			
		}).catch((err) => {
			console.log(err);
		});
   }

    render(){
        return (
            <div className="userinput">
                <h3>User Input:</h3>
				<input type="text" ref="textInput" />
               <input type="button" value="Add Entry" onClick={this.buttonClicked /* this.refs.userinput_data.value = ''*/} />
			</div>
        )
    }
};

// to use the value from the textarea through ref, we do the following:
// {this.refs.userinput_data.value}
module.exports = UserInput;