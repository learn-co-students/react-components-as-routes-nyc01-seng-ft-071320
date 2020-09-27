import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

class NavBar extends React.Component {

    render(){
        return(
            <div>
                <NavLink to='/' exact stlye= {link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
                <NavLink exact to='/login' stlye={link} activeStyle={{background: 'darkgreen'}}>Login</NavLink>
                <NavLink exact to='/about' style={link} activeStyle={{background: 'darkblue'}}>About</NavLink>
          </div>
        )
    }


}
export default NavBar