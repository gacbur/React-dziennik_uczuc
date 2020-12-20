import React from 'react'

import { NavLink } from 'react-router-dom'

import { BiBookBookmark } from 'react-icons/bi';
import { GoNote } from 'react-icons/go';
import { SiGoogleanalytics } from 'react-icons/si'
import { BsFillGearFill } from 'react-icons/bs'


const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-logo">
                <NavLink to="/" exact >Dziennik uczuć  </NavLink>
            </div>
            <ul className="nav-links">
                <li className="nav-link">
                    <NavLink to="/" exact activeClassName="nav-link-active">Dodaj wpis  <GoNote className="nav-link-icon" /></NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/wpisy" activeClassName="nav-link-active" >Wpisy <BiBookBookmark className="nav-link-icon" /></NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/analiza" activeClassName="nav-link-active" >Analiza <SiGoogleanalytics className="nav-link-icon" /></NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/opcje" activeClassName="nav-link-active">Opcje <BsFillGearFill className="nav-link-icon" /></NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav
