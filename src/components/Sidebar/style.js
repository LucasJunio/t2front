import styled from 'styled-components';

export const Local = styled.div`

/*===== Cross Browser Compatibility =====*/
.logo,
.menu-options,
.menu-action,
.menu-action::before,
.menu-action::after,
.menu-action > i::before,
.admin-details,
header,
.panel-layout,
.quick-links > ul > li > a,
.side-menus .menu-item-has-children > a::before,
.side-menus nav > ul  li a,
.side-menus nav > ul  li a i,
.comment-form > form > textarea,
footer,
.slct-whr-pst > ul,
.slct-whr-pst > ul li ,
a,
.fltrs-lst > li::before,
.fltrs-lst > li a i,
.cmt-opt > i,
.pst-carousel .owl-nav > div,
.noti-lst,
.lt-lst > span,
.lt-lst,
.lt-lst > span strong,
.lt-lst > span strong span,
.btn1,
.sb-drp > li,
.rev-opt > ul > li,
.sb-drp,
button,
.chat-system-wrp,
.popup-wrp2,
.popup-wrap,
.scrh-grp-btn,
.noti-bd > ul > li,
.noti-bd > ul > li i,
.cldr .days .day,
.fb-slct-pst-typ > ul,
.gpl-crsl .owl-nav > div,
.pst-optns > ul {

    -webkit-transition:all 0.4s ease 0s;
    -moz-transition:all 0.4s ease 0s;
    -ms-transition:all 0.4s ease 0s;
    -o-transition:all 0.4s ease 0s;
    transition:all 0.4s ease 0s;
}

.admin-status::before,
.quick-links > ul > li > a,
.admin-details > span > img,
.user-status::before,
.user-device,
.user-device::before,
.poster-status,
.comment-thumb,
.notif > span i,
.cmp-thm > img,
.tckr-dta > span,
.tckt-cmt > span i,
.tgl-icn,
#btnZoomOut,
#btnZoomIn,
.gpl-sndr-info > img,
.gpl-pst-lk-cm > li a,
.bsp-pst-shr-cmt > li a i {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}

/*===== Side Header =====*/
header.side-header.slide-menu {left: -220px;}
header.side-header {
  
    background: #fff;
    height: 100%;
    left: 0;
    position: fixed;
    top: 63px;
    width: 220px;
    z-index: 999;
	box-shadow: 4px 5px 8px rgba(0,0,0,.1);
}
header.side-header.light-skin {background: #ffffff none repeat scroll 0 0;}
.side-header.light-skin .side-menus > span {color: #5a5a5a; }
.side-header.light-skin .side-menus nav > ul > li > a {color: #555555;}
.side-header.light-skin .side-menus nav > ul > li ul::before {border-bottom-color: #dfe6ec;}
.side-header.light-skin .side-menus nav > ul > li ul {background: #dfe6ec none repeat scroll 0 0; padding-bottom: 100px;}
.admin-details {
    display: table;
    float: left;
    padding: 40px 30px 115px;
    position: relative;
    width: 100%;
    z-index: 0;
}

.side-header.light-skin .admin-details h3 {color: #333333;}
.side-header.light-skin .admin-details > i {color: #787878;}
.side-header.light-skin .admin-status {
    color: #303030;
    font-weight: 400;
}
.admin-details > span {
    float: left;
    margin-right: 16px;
}
.admin-details > span > img {
    float: left;
    width: 59px;
}
.admin-details h3 {
    color: #000;
    display: block;
    float: none;
    font-size: 15px;
    margin: 3px 0 0;
	font-weight: 600;
}
.admin-details > i {
    color: #c8c8c8;
    display: block;
    font-family: Open sans;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    margin-top: 6px;
    text-transform: uppercase;
}
.side-header.light-skin .side-menus nav > ul > li ul li > a {color: #697178;}
.admin-status {
    color: #333;
    float: left;
    font-family: Open sans;
    font-size: 11px;
    font-weight: bold;
    margin: 7px 0 0;
    padding-left: 10px;
    position: relative;
    text-transform: capitalize;
}
.admin-status.online:before{background: #64c352;}
.admin-status.offline:before{background: #ff6e6e;}
.admin-status::before {
    content: "";
    height: 6px;
    left: 0;
    margin-top: -2px;
    position: absolute;
    top: 50%;
    width: 6px;
}
/*===== Side Menus =====*/
.side-menus {    

    float: left;
    position: relative;
    width: 100%;
    z-index: 9;    
}
.menu-scroll {
    float: left;
    margin-top: -70px;
    width: 100%;
}
.side-menus > span {
    
    border-bottom: 1px solid #d0d0d0;
    border-top: 1px solid #d0d0d0;
    color: #333;
    float: left;
    font-family: arimo;
    font-size: 10px;
    font-weight: bold;
    padding: 12px 30px;
    text-transform: uppercase;
    width: 100%;
    background-color: yellow;
}
.side-menus nav {

    float: left;
    padding-top: 15px;
    width: 100%;
}
.side-menus nav > ul {

    float: left;
    list-style: outside none none;
    margin: 0;
    padding: 0;
    width: 100%;
}
.side-menus nav > ul > li {

    float: left;
    width: 100%;
}
.side-menus nav > ul > li > a {

    color: #333;
    float: left;
    font-size: 14px;
    padding: 10px 30px;
    position: relative;
	text-transform: capitalize;
}
.side-menus nav > ul > li > a > i {width: 22px; }
.side-menus .menu-item-has-children > a::before {
    background: #8b8b8c none repeat scroll 0 0;
    content: "";
    height: 1px;
    left: 100%;
    margin-left: -18px;
    position: absolute;
    top: 50%;
    width: 5px;
}
.side-menus .menu-item-has-children.active > a::before {width: 30px; }
.side-menus nav > ul > li ul {

    background: #dedede none repeat scroll 0 0;
    display: none;
    float: left;
    list-style: outside none none;
    margin: 10px 0;
    padding: 20px 0;
    position: relative;
    width: 100%;
}
.side-menus nav > ul > li ul::before {

    border-bottom: 7px solid #dedede;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    content: "";
    left: 50px;
    position: absolute;
    top: -6px;
}
.side-menus nav > ul > li ul li {

    float: left;
    width: 100%;
}
.side-menus nav > ul > li ul li > a {

    color: #333;
    float: left;
    font-size: 13px;
    padding: 6px 20px 6px 40px;
    text-transform: capitalize;
    width: 100%;
}
.side-menus nav > ul > li ul li > a > i {

    float: left;
    font-size: 10px;
    line-height: 20px;
    margin-right: 10px;
    padding-bottom: 200px;
}
.scroll {
    overflow-y: scroll;
}
.menu-scroll {
  height: 100%;
  padding-bottom: 230px;
}
`
