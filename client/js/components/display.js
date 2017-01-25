import React from 'react';
require('isomorphic-fetch');

var url = 'http://localhost:8080/energy';

var stateData=[];

fetch(url).then(res => res.json()).then(data => stateData = data);

var Display = React.createClass({
    getInitialState:function(){
        return {
            data: stateData
        }
    },

    createList:function(){
        return stateData.map((list)=>{
            return (
                <li key={list._id}>{list.userValue} {list.time}</li>
            );
        });
    },

    render:function(){
        // setTimeout(()=>{console.log(stateData)},100);
       setTimeout(()=>{
           this.setState({
                data:[]
            })
       }, 100);

       return (
           <div className="energylist">
                <ul>{this.createList()}</ul>
           </div>
       )
        

    }

});

module.exports = Display;