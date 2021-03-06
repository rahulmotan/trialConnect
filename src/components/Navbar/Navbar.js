import React from 'react'
import {connect} from 'react-redux'
import logo from '../../assets/images/whatsapp-image-2018-06-24-at-10.26.44-pm-184x184.jpg'


const dispatchToPropsMapper = () => ({
    logout: () => {
        localStorage.clear();
        window.location.href = '/login';
    },
    home: () => {
        let role = JSON.parse(localStorage.getItem('role'));
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(role);
        if (role === "Patient") {
            window.location.href = '/home/' + user.username + '/dashboard';
        }
        else if (role === "Doctor") {
            window.location.href = '/doctor/dashboard/' + user.username;
        }
        else if (role === "Admin") {
            window.location.href = '/admin';
        } else {
            window.location.href = '/'
        }
    }
});

const NewNavbar = ({
                       showLogin = true, showRegister = true, showProfile = true,
                       showLogout = true, showHome = true, showAboutUs = true, showSearch = true, logout, home
                   }) => {
    let user = JSON.parse(localStorage.getItem('user'));
    let role = localStorage.getItem('role');
    let link = '/'
    if (role === null) {
        role = 'Anon';
    } else if (role !== null && role.includes('Doctor')) {
        link = '/doctor/dashboard/' + user.username;
    } else if (role !== null && role.includes('Patient')) {
        link = '/home/' + user.username + '/dashboard';
    } else if (role.includes('Admin')) {
        link = '/admin';
    }
    return (
        <div>
            <section className="menu cid-qTkzRZLJNu" once="menu" id="menu1-0">
                <nav
                    className="navbar navbar-expand beta-menu  align-items-center navbar-toggleable-sm">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div className="menu-logo">
                        <div className="navbar-brand">
                            <span className="navbar-logo">
                                <a href={link}>
                                    <img className='mr-2' src={logo} alt="Logo" height={'60px'} width={'60px'}
                                         title="Logo"/>
                                </a>
                            </span>
                            <span className="navbar-caption-wrap">
                                <a className="navbar-caption text-primary display-5"
                                   href={link}>Trial Connect</a></span>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                            {showHome &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4"
                                   onClick={() => {
                                       home()
                                   }}>
                                    <span className="mbri-home mbr-iconfont mbr-iconfont-btn"></span>
                                    Home
                                </a>
                            </li>
                            }
                            {showLogin && role.includes('Anon') &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href='/login'>
                                    <span className="mbri-login mbr-iconfont mbr-iconfont-btn"></span>
                                    Login
                                </a>
                            </li>
                            }
                            {showRegister && role.includes('Anon') &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href='/register'>
                                    <span className="mbri-users mbr-iconfont mbr-iconfont-btn"></span>
                                    Register
                                </a>
                            </li>}
                            {showAboutUs &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href="/aboutUs">
                                    <span className="mbri-smile-face mbr-iconfont mbr-iconfont-btn"></span>
                                    About Us
                                </a>
                            </li>
                            }
                            {showProfile && role.includes('Patient') &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href={`/profile/${user.username}`}>
                                    <span className="mbri-user mbr-iconfont mbr-iconfont-btn"></span>
                                    Profile
                                </a>
                            </li>
                            }
                            {showProfile && role.includes('Doctor') &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href={`/doctor/profile/${user.id}`}>
                                    <span className="mbri-user mbr-iconfont mbr-iconfont-btn"></span>
                                    Profile
                                </a>
                            </li>
                            }
                            {showLogout && !role.includes('Anon') &&
                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" onClick={() => {
                                    logout()
                                }}>
                                    <span className="mbri-logout mbr-iconfont mbr-iconfont-btn"></span>
                                    Logout
                                </a>
                            </li>
                            }

                        </ul>
                    </div>
                </nav>
            </section>
        </div>
    )
};

const NavContainer = connect(null, dispatchToPropsMapper)(NewNavbar);
export default NavContainer