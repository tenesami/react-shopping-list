import React, { Component } from 'react';

import {ShopList } from './ShopList';


 class MyList extends Component {
     constructor(props){
         super(props)
         this.state = {
            list:
             [
              {id: "1", title: "Hello"},
             {id: "2", title: "World"}
            ]
         }  
     }

     handleDelete = (id) => {
         //console.log(id)
         this.setState(prevState => {
             const newState = prevState.list.filter(item => item.id != id)
             return {
                list: newState
             }
         })
     }
     render(){
         const {list} = this.state 
         const shopLists = list.map(item => {
             return <ShopList  id={item.id} title={item.title} handleOnDelete={this.handleDelete}/> 
         })
         return (
            <div>
                {shopLists}
            </div>
         )
        }

     }
    
export default MyList;