import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import Leaf from './img/Leaf.png';

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <div className="App">
    <header className="heading">
      <div className="logo">
      <img src={Leaf} alt="Leaf" />
        <h1>Nook Foundation</h1>
      </div>
      <nav>
<ul className="nav_links">
<li><a>{links}</a></li>
</ul>
</nav>
    </header>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
