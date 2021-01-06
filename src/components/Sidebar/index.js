import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../assets/images/admin.jpg';


import { Local } from './style';

export default function Sidebar() {


    return (
        <Local>
             <header class="side-header opened-menu">
                <div class="admin-details"> <span><img src={logo} alt="" /></span>
                <h3>Visitante</h3>
                <i>BEM-VINDO</i>
                <h5 class="admin-status online">Online</h5>
                </div>
                <div class="menu-scroll scroll">
                        <div class="side-menus">
                            <span>MAIN LINKS</span>
                            <nav>
                                <ul>
                                    <li><Link  to="/"><i className="fa fa-bolt"></i> Usuário </Link></li>
                                </ul>
                            </nav>
                        </div>
                </div>
            </header>
        </Local>
    )
}
