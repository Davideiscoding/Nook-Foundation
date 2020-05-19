import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
      <ul className="nav_links">
        <li><a href="/">Home</a></li>
        <li><a href="/review">Reviews</a></li>
        <li><a to='/profile'>My Profile</a></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
      </ul>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
