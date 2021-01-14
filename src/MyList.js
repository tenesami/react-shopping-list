import React, { Component } from 'react';


 class MyList extends Component {
     constructor(props){
         super(props)
         this.state = {
            list:
             [
              {title: "test one"},
             {title: "test 2"}
            ]
         }  

     }
     render(){
         const {list} = this.state 
         const itemList = list.map(item => {
             return <div>{item.title}</div>  
         })
         return (
            <div>
                {itemList}
            </div>
         )
        }

     }
    
export default MyList;