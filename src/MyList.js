import React, { Component } from 'react';

import {ShopList } from './ShopList';

import Form from './Form'

 class MyList extends Component {
     constructor(props){
         super(props)
         this.state = {
            list:[
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

     addNewShop = (data) => {
         //console.log(data)
         const newShop = {
             id: this.state.list.length +1,
             title: data.title
         }
         this.setState(prevState => ({
            list: [...prevState.list, newShop]
         }))

     }
     render(){
        // const {list} = this.state 
         const shopLists = this.state.list.map(item => {
             return <ShopList  id={item.id} title={item.title} handleOnDelete={this.handleDelete}/> 
         })
         return (
            <div>
                 <Form handleDataOnSubmit={this.addNewShop} /><br/>
                {shopLists} 
            </div>
         )
        }

     }
    
export default MyList;