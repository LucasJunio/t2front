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
                                    <li><Link  to="/admin/"><i className="fa fa-bolt"></i> Departamento </Link></li>
                                    <li><Link  to="/admin/office"><i className="fa fa-bolt"></i> Cargo </Link></li>
                                    <li><Link  to="/admin/user"><i className="fa fa-bolt"></i> Usuário </Link></li>
                                    <li><Link  to="/admin/segment"><i className="fa fa-bolt"></i> Segmento </Link></li>
                                    <li><Link  to="/admin/interest"><i className="fa fa-bolt"></i> Interesse </Link></li>
                                    <li><Link  to="/admin/question"><i className="fa fa-bolt"></i> Pergunta </Link></li>
                                    <li><Link  to="/admin/contenttype"><i className="fa fa-bolt"></i> Tipo de conteúdo </Link></li>
                                    <li><Link  to="/admin/company"><i className="fa fa-bolt"></i> Empresa </Link></li>
                                    <li><Link  to="/admin/content"><i className="fa fa-bolt"></i> Conteúdo </Link></li>
                                    <li><Link  to="/admin/conquest"><i className="fa fa-bolt"></i> Conquista </Link></li>
                                    <li><Link  to="/admin/skill"><i className="fa fa-bolt"></i> Competência </Link></li>
                                    <li><Link  to="/admin/quadrant"><i className="fa fa-bolt"></i> Quadrante </Link></li>
                                    <li><Link  to="/admin/sublevel"><i className="fa fa-bolt"></i> Subnível </Link></li>
                                    <li><Link  to="/admin/audience"><i className="fa fa-bolt"></i> Público Alvo </Link></li>
                                    <li><Link  to="/admin/evaluation"><i className="fa fa-bolt"></i> Avaliação </Link></li>
                                </ul>
                            </nav>
                        </div>
                </div>
            </header>
        </Local>
    )
}
