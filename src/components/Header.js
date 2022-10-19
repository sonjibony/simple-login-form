import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
  const {user,logOut} = useContext (AuthContext);
  console.log(user)

  const handleSignOut =() => {
    logOut()
    .then (() => {})
    .catch (error => console.error(error));
  }
    return (
        <div>
            
<div className="navbar bg-primary text-primary-content">
  <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  <Link className="btn btn-ghost normal-case text-xl"    to='/'>Home</Link >
  <Link className="btn btn-ghost normal-case text-xl"    to='/shop'>Shop</Link >
  
  <Link className="btn btn-ghost normal-case text-xl" to='/login'> Log in</Link >
  <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link >
  {user?.email && <span>Welcome,{user.email}</span>}
  { user?.email ?
  <button onClick={handleSignOut} className="btn btn-sm btn-ghost normal-case">Sign out</button>
: <Link to= '/login' >
  <button className="btn btn-sm btn-ghost normal-case"  >Log In</button>
  </Link>
  }
</div>
        </div>
    );
};

export default Header;