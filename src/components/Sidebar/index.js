import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../assets/admin/images/resource/admin.jpg';

import { getUser} from '../../store/modules/auth/authLocalStorage'

import { Local } from './style';

export default function Sidebar() {

    let user = getUser()

    return (
        <Local>
             <header class="side-header opened-menu">
                <div class="admin-details"> <span><img src={logo} alt="" /></span>
                <h3>{user.name}</h3>
                <i>BEM-VINDO</i>
                <h5 class="admin-status online">Online</h5>
                </div>
                <div class="menu-scroll scroll">
                        <div class="side-menus">
                            <span>MAIN LINKS</span>
                            <nav>
                                <ul>
                                    <li><Link  to="/admin/interest"><i className="fa fa-bolt"></i> Interesse </Link></li>
                                    <li><Link  to="/admin/question"><i className="fa fa-bolt"></i> Pergunta </Link></li>
                                    <li><Link  to="/admin/evaluation"><i className="fa fa-bolt"></i> Avaliação </Link></li>
                                </ul>
                            </nav>
                        </div>
                </div>
            </header>
        </Local>
    )
}
