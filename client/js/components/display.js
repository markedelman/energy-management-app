import React from 'react';
require('isomorphic-fetch');
import { connect } from 'react-redux';

// var url = '/energy';

// var stateData=[];

// fetch(url).then(res => res.json()).then(data => stateData = data);

var Display = React.createClass({
    // getInitialState:function(){
    //     return {
    //         data: stateData
    //     }
    // },

    // createList:function(){
    //     return stateData.map((list)=>{
    //         return (
    //             <li key={list._id}>{list.userValue} {list.time}</li>
    //         );
    //     });
    // },

    createRedux:function(){
        return this.props.energyData.map((element)=>{
            return (
                <li key={element._id}>{element.userValue} {element.time}</li>
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
                <ul>{this.createRedux()}</ul>
           </div>
       )
        

    }

});

function mapStateToProps(state){
    return {
        energyData: state.energyData
    }
}

export default connect(mapStateToProps)(Display);

// module.exports = Display;