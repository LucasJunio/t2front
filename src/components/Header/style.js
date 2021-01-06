import styled from 'styled-components';

export const Local = styled.div`

/* Header */
.header {
    height: 62px;
    padding: 10px 0 10px 15px;
    background: #993399;
    -webkit-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -moz-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -ms-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -o-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    float: left;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
	padding-right: 30px;
}

.logo {
    width: 50px;
    heigth: 50px;
    
    top: 50px;
    float: rigth;
    min-width: auto;
    padding-top: 4px; 
    padding-left: 15px;
}

/* bottom logout */
.btn-logout {
    top: 22%;
    height: 35px;
    position: absolute;
    width: 35px;
    right: 2%;  
    font-size: 1em;
    border: 1px solid #e2e2e2;
    background-color: yellow;
    border-radius: 50%;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-out;
}
.btn-logout:hover {
background: white;
color: black;
}

`