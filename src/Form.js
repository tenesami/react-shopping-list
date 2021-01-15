import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ""
        }

    }

    handleChange = (e)=> {
        //console.log(e.target.value)
        this.setState ({
            title: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state.value)
        this.props.handleDataOnSubmit(this.state)
        this.setState(
            {
            title: ""
        }
        )

    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Add Shoping :   </label>
                   <input type="text" value={this.state.title} onChange={this.handleChange}></input>
                   <input type="submit"></input>
                </form> 
            </div>
        )
    }
}
export default Form