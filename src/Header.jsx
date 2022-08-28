import React from 'react'
import { Component } from 'react'

class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const headerContainer = {
            backgroundColor: "purple",
            width : "100%",
            padding: "20px",
            color: "white",
        }
        const header = {
            fontSize: "bold",
            fontSize : "2.3rem"
        }

        return (
            <div style={headerContainer} className='headerContainer shadow-lg'>
                <h1 style={header}>ToDo List</h1>
            </div>
          )
    }
}


export default Header;