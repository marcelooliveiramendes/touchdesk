import React from 'react';
import './UserDetails.scss'
import userImg from '../../imgs/user.png'
import { Link } from 'react-router-dom';

function UserDetails() {
  return (
    <div id='userDetailsContainer'>
        <img src={userImg} alt="" />
        <div className="user-info">
            <h3>Davi Cedro</h3>
            <p>CPF 000.000.000-00</p>
        </div>
        <Link to={'/home'} id='btnLogout'>
            <button>Sair</button>
        </Link>
    </div>
  );
}


export default UserDetails;