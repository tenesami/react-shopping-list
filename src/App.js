import React, { Component } from 'react';

import MyList from './MyList'

//import './App.css';

const names = ['Tesfay', 'Alem', 'Samuel', 'Michael', 'Natinael']

class App extends Component {

    handleClick(){
        console.log("Hello There")
    }
    render() {
        const family = names.map((name, i) => <MyList name={name} key={i} handleOnClick={this.handleClick}/>)
        return (
            <div className="App" >
                
                <h2> hello Family </h2>
                <ul>
                   {family} 
                </ul>
            
            </div >
        );
    };

}

export default App;