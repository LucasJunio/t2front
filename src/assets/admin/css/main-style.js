import styled from 'styled-components';

export const Style = styled.div`
/* 
[Master Stylesheet]

Project Name:	Winku Admin panel (HTML5)
Version:		1.1
Last change:	24/feb/19
Assigned to:	Mr.Ashraf 

====INDEX=====
01- Google fonts 
02- General styling code
03- Cross Browser Compatibility
04 - Top Bar
05- Side Header
06- Side Menus
07- Profile
08- Color Classes
09- Add Content For
10- Widget
11- Our Clients Sec
12- Post Format
13- Filters Nav
14- Comments Style
15- Pst Carousel
16- Notifications
17- Notifaction List
18- Notification Redirect Post	
19- Link Post
20- Footer
21- User Mangement
22- User Group Creater
23- Connect Page
24- Reviews
25- Panel Group
26- Group Search
27- Location Management Edit
28- Address Form
29- Change O Radd Business Site
30- User Management User Creater
31- Ticketing Accordions
32- Post Preview Page
33- Chat System
34- Inbox
35- Image Croper Panel
36- Edit Profile
37- Tweeter Post
38- Forsquare Post

*/

/*=============== General Styling ===================*/
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');


html, body{overflow-x:hidden;}
body {
    background: #f4f2f2 none repeat scroll 0 0;
    color: #505050;
    float: left;
	font-size: 14px;
    font-family: Open sans;
    position: relative;
    width: 100%;
}
h1,h2,h3,h4,h5,h6{
    font-family:Open sans;
    color:#202020;
}
p{
    font-family:Open sans;
    color:#777777;
    line-height:26px;
    font-size:13px;
    letter-spacing:0.3px;
}
ul li ,ul li a,
ol li,ol li a{
    font-family:Open sans;
    color:#666666;
    line-height:20px;
}
a,
a:hover,
a:focus {
    text-decoration:none;
    outline:none;
}
a {cursor: pointer;}
input:focus,
textarea:focus,
select:focus,
button:focus {outline: none;}
textarea {resize: none;}
input:focus,
textarea:focus {font-style: normal !important;}
.mrg15 {
    float: left;
    margin-bottom: -15px;
    width: 100%;
}
.mrg15 > .row {margin: 0 -7.5px; }
.mrg15 > .row > div {padding: 0 7.5px;}
.mrg15 .pst-img {margin-bottom: 15px;}
.mrg10 {
    float: left;
    margin-bottom: -10px;
    width: 100%;
}
.mrg10 > .row {margin: 0 -5px;}
.mrg10 > .row > div {padding: 0 5px;}
.mrg1 {margin: 0 -.5px;}
.mrg1 > div {padding: 0 .5px;}
.mrg10 .pst-img {margin-bottom: 10px;}
div.paddlr50,
.popup-innr .usr-pnl div.paddlr50 {
    padding-left: 50px;
    padding-right: 50px;
}
.mt50 {margin-top: 50px;}
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

.post-gallery > a,
.widget,
.add-content-form > textarea,
.my-location > #mapthree,
.pst-frmt,
.comment-form > form > textarea,
.fltrs-lst > li a,
.fltrs-lst > li a i,
.pst-img,
.popup-innr,
.usr-itm,
.usr-pnl,
.usr-cnt,
.social-btns.bg-scl > ul > li > a > i,
.rev-pf,
.cmp-bnr,
.cmp-bnr > img,
.cmp-loc,
.ad-usr-frm,
.tkt1,
.tckt-cmt,
.tckt-itm,
.tcktng-itm,
.cmt-btn,
.chat-system-wrp,
.cht-inpt-br,
.billing-sec,
.cldr
{
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
} 

/*===== Scroll bar Styling =====*/
.slimScrollDiv {
    border: 0 solid transparent;
    float: left;
    width: 100% !important;
}
.our-clients-sec .slimScrollDiv{
	height: 365px !important;	
}
.our-clients-sec .slimScrollDiv > ul{
	height: 365px !important;	
}
/*===== Panel Content =====*/
.panel-layout {
    float: left;
    padding: 106px 45px 45px 265px;
    width: 100%;
}
.panel-layout.wide-content {padding-left: 45px;}


/*===== Top Bar =====*/
.top-bar {
	background: #fff;
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
    float: left;
    min-width: 220px;
    padding: 15px 0 15px 50px;
}
.logo > a {
    color: #263238;
    float: left;
    font-family: Open sans;
    font-size: 14px;
    font-weight: bold;
    line-height: 25px;
}
.logo > a > i {
    color: #ff5f5f;
    float: left;
    font-size: 18px;
    line-height: 25px;
    margin-right: 10px;
}
.menu-options {
    border-radius: 100%;
    color: #808891;
    cursor: pointer;
    float: left;
    font-size: 18px;
    height: 41px;
    line-height: 41px;
    position: relative;
    text-align: center;
    width: 41px;
	margin-top: 10px;
	margin-left: 45px;
}
.menu-action {
    height: 12px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
}
.menu-action::after {
    background: #fff none repeat scroll 0 0;
    border-radius: 2px;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0px;
    position: absolute;
    width: 14px;
}
.menu-options.active .menu-action::after {
    bottom: 6px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.menu-action::before {
    background: #fff none repeat scroll 0 0;
    border-radius: 2px;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    top: 0;
    width: 14px;
}
.menu-options.active .menu-action::before {
    top: 4px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
.menu-action > i {
    height: 3px;
    left: 0;
    position: absolute;
    top: 50%;    
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 10px;
}
.menu-action > i::before {
    background: #fff none repeat scroll 0 0;
    border-radius: 2px;
    content: "";
    height: 2px;
    left: 2px;
    position: absolute;
    top: 0;
    width: 100%;
}
.menu-options.active .menu-action > i::before {
    opacity: 0;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
}
form.search-form {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: medium none;
    float: right;
    line-height: initial;
    margin-right: 45px;
    margin-top: 8px;
    position: relative;
    width: 360px;
}
form.search-form > input {
    background: #f4f2f2 none repeat scroll 0 0;
    border: medium none;
    border-radius: 50px;
    color: #333;
    float: left;
    font-size: 12px;
    padding: 15px 35px;
    width: 100%;
}
form.search-form > button {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: medium none;
    color: #a0a0a0;
    font-size: 18px;
    padding: 0;
    position: absolute;
    right: 17px;
    top: 50%;
    transform: translateY(-50%);
}
.top-bar > ul {
    float: left;
    list-style: outside none none;
    margin: 0;
    padding: 0;
}
.top-bar > ul > li {
    float: left;
    margin-left: 40px;
    padding: 23px 0;
}
.top-bar > ul > li > a > i {
    font-size: 11px;
    margin-right: 8px;
}
.quick-links {
    float: right;
    padding: 16px 14px 16px 0;
}
.quick-links > ul {
    float: left;
    list-style: outside none none;
    margin: 0;
    padding: 0;
}
.quick-links > ul > li {
    float: left;
    margin-right: 3px;
    position: relative;
}
.quick-links > ul > li > a {
    border: 1px solid #dfdfdf;
    color: #838383;
    cursor: pointer;
    display: inline-block;
    font-size: 13px;
    height: 30px;
    line-height: 28px;
    text-align: center;
    width: 30px;
}
.quick-links > ul > li > a:hover {
	color: #fff !important;
}
/*===== Side Header =====*/
header.side-header.slide-menu {left: -220px;}
header.side-header {
    background: #fff;
    height: 100%;
    left: 0;
    position: fixed;
    top: 65px;
    width: 220px;
    z-index: 999;
	box-shadow: 4px 5px 8px rgba(0,0,0,.1);
}
header.side-header.light-skin {background: #ffffff none repeat scroll 0 0;}
.side-header.light-skin .side-menus > span {color: #5a5a5a;}
.side-header.light-skin .side-menus nav > ul > li > a {color: #555555;}
.side-header.light-skin .side-menus nav > ul > li ul::before {border-bottom-color: #dfe6ec;}
.side-header.light-skin .side-menus nav > ul > li ul {background: #dfe6ec none repeat scroll 0 0;}
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
.side-menus nav > ul > li > a > i {width: 22px;}
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
.side-menus .menu-item-has-children.active > a::before {width: 30px;}
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
}

/*===== Profile =====*/
.panel-content{
	float: left;
	width: 100%;
}
.profile-sec {
    float: left;
    width: 100%;
}
.profile-banner-sec {
    float: left;
    min-height: 110px;
    position: relative;
    width: 100%;
}
.profile-banner-sec::before {
    background: #088dcd;
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0.9;
    position: absolute;
    right: 0;
    top: 0;
}
.profile-banner-sec > ul {
    display: block;
    float: none;
    left: 0;
    list-style: outside none none;
    margin: 0;
    padding: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
}
.profile-banner-sec li {
    display: inline-block;
    width: 100%;
}
.profile-banner-sec li > a, .profile-banner-sec li > label {
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Open sans;
    font-weight: normal;
    margin: 10px 0 0;
    padding: 13px 10px;
	border: 1px solid #fff;
	text-transform: uppercase;
	font-size: 11px;
	width: 195px;
}
.profile-banner-sec li > a:hover, 
.profile-banner-sec li > label:hover {
    background: transparent;
    color: #ffffff;
	border-color: #fff;
}
.profile-banner-sec li > a > i,
.profile-banner-sec li > label i {
    margin-right: 9px;
}
.profile-banner-sec li > a:hover > i,
.profile-banner-sec li > label:hover i {color: #ffffff;}
.profile-banner-sec > img {
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    float: left;
    width: 100%;
}
.user-bar {
    background: #fff none repeat scroll 0 0;    
    -webkit-border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
    float: left;
    padding-left: 27%;
    position: relative;
    width: 100%;
}
.user-thumb {
    float: left;
    left: 45px;
    position: absolute;
    top: 50%;    
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 20%;
}
.user-thumb > img {
	border-radius: 100%;
    border: 8px solid #fff;
    float: left;
    margin-top: 10px;
    width: 100%;
	box-shadow: 0px 10px 20px rgba(0,0,0,.15);
}
.user-thumb > h3 {
    float: left;
    font-size: 18px;
    text-align: center;
    width: 100%;
}
.user-thumb > span {
    color: #a5a5a5;
    float: left;
    font-family: Open sans;
    font-size: 11px;
    text-align: center;
    width: 100%;
}
.user-thumb > span > i {
    color: #ff5f5f;
    margin-right: 4px;
}
.user-bar > ul {
    float: right;
    list-style: outside none none;
    margin: 0;
    padding: 0;
}
.user-bar > ul > li {
    color: #232323;
    float: left;
    font-family: Open sans;
    font-size: 20px;
    padding: 15px 20px 13px;
	text-align: center;
}
.user-bar > ul > li > span {
    color: #969696;
    display: list-item;
    font-family: arimo;
    font-size: 11px;
    margin-top: 2px;
}
.user-bar > a {
    border-radius: 4px;
    color: #ffffff !important;
    float: right;
    font-family: Open sans;
    font-size: 11px;
    margin: 17px 20px;
    padding: 10px 25px;
    text-transform: uppercase;
}
.user-bar > a i {margin-right: 5px;}
.user-bar > .social-btns {
    float: left;
    margin: 20px 0 0;
    padding: 0;
    width: auto;
}
.profile-all {
    float: left;
    margin-top: 95px;
    width: 100%;
	box-shadow: 0 5px 10px rgba(0,0,0,.1);
}
.profile-banner-sec li > input {display: none;}
.my-location > #mapthree {
    float: left;
    height: 300px;
    width: 100%;
}
.social-btns {
    float: left;
    padding-top: 30px;
    text-align: center;
    width: 100%;
}
.social-btns > ul {
    float: left;
    list-style: outside none none;
    margin: 0;
    padding: 0;
    text-align: center;
}
.social-btns > ul > li {
	display: inline-block;
}
.social-btns > ul > li > a {
	border-radius: 100%;
    box-shadow: 0 7px 8px rgba(0, 0, 0, 0.2);
    float: left;
}
.social-btns > ul > li > a > i {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 50%;
    color: #ffffff;
    float: left;
    height: 30px;
    line-height: 30px;
    width: 30px;
}
.social-btns > ul > li > a > i.fa-facebook{background: #3e6baf;}
.social-btns > ul > li > a > i.fa-twitter{background: #4dd3f0;}
.social-btns > ul > li > a > i.fa-google-plus{background: #ff4949;}
/*===== Color Classes =====*/
.red-skin{
    background-color: #ff6b6b;
    border-color: #ff6262 !important;
}
.sky-skin{
    background-color: #63d6ff;
    border-color: #28c4fc !important;
}
.purple-skin{
    background-color: #6e6eff;
    border-color: #7373ff !important;
}
.pink-skin{
    background-color: #f76fff;
    border-color: #f661ff !important;
}
.orange-skin{
    background-color: #ffb48f;
    border-color: #ff742f !important;
}

/*===== Add Content Form =====*/
.add-content-form {
    float: left;
    width: 100%;
}
.add-content-form > textarea {
    float: left;
    font-size: 15px;
    color: #000;
    max-height: 152px;
    max-width: 100%;
    min-height: 152px;
    min-width: 100%;
    padding: 20px 20px 20px 25px;
    width: 100%;
	border-radius: 0;
	border: 1px solid #ede9e9;
}
.add-content { 
    -webkit-border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
    border: 1px solid #ede9e9;
    float: left;
    padding: 0 20px;
    width: 100%;
}
.add-content > ul {
    float: left;
    list-style: outside none none;
    margin: 0;
    padding: 0;
}
.add-content > ul > li {float: left;}
.add-content > ul > li a {
    color: #808891;
    float: left;
    text-align: center;
    width: 35px;
	padding: 13px 0;
	font-size: 15px;
}
.add-content > ul > li a:hover {
    background: #333 none repeat scroll 0 0;
    color: #fff;
}

.add-content > button,
.add-content > a {
    border: medium none;    
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    float: right;
    font-family: Open sans;
    font-size: 12px;
    padding: 6px 18px;
	margin-top: 8px;
}
/*===== Widget =====*/
.widget {
    background: #ffffff none repeat scroll 0 0;
    float: left;
    position: relative;
    width: 100%;

}
.widget.no-color {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;    
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
}
/*===== Widget Title =====*/
.widget-title {
    border-bottom: 1px solid #ede9e9;
    float: left;
    margin-bottom: 22px;
    padding: 15px 20px;
    position: relative;
    width: 100%;
}
.widget-title::before {
    content: "";
    height: 20px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
}
.widget-title > h3 {
    color: #2e2e2e;
    float: left;
    font-size: 18px;
    margin: 0 0 5px;
    padding-right: 30px;
}
.widget-title > span {
    color: #777;
    float: left;
    font-family: Open sans;
    font-size: 13px;
    width: 100%;
}
.dark{
	background: #333;
	float:left;
	width: 100%;
}
.dark h3{color: #fff !important;}
.dark span{color: #c6c6c6;}

/*===== Our Clients Sec =====*/

#searchDir {
    float: left;
    padding: 0 40px;
    width: 100%;
}

.our-clients-sec {
    float: left;
    width: 100%;
}
.filterform > input{
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: medium none;
    color: #000;
    float: left;
    font-size: 12px;
    padding: 9px 20px 9px 25px;
    width: 100%;
}
form.filterform {
    background: #f2f2f2 none repeat scroll 0 0;
    border: medium none;
    border-radius: 5px;
    float: left;
    height: 38px;
    margin: 0 0 20px;
    position: relative;
    width: 100%;
}

.client-list {
    float: left;
    list-style: outside none none;
    margin: 0;
    padding: 0;
}
.client-list > li {
    cursor: pointer;
    float: left;
    padding: 20px 40px 15px 40px;
    position: relative;
    width: 100%;
}
.client-list > li:nth-child(2n+1){
	background: #f9f9f9;	
}
.client-info > a {
    color: #cbcbcb;
    font-size: 14px;
    margin-top: -15px;
    position: absolute;
    right: 10px;
    top: 50%;
}
.client-info > h3 {
    float: left;
    margin: 0;
    width: 100%;
}
.client-info > h3 a {
    color: #2e2e2e;
    float: left;
    font-family: Open sans;
    font-size: 15px;
    margin: 0;
    width: 100%;
}
.client-list > li > span {
    border-radius: 100%;
    color: #fff;
    float: left;
    font-family: Open sans;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
    position: relative;
    text-align: center;
    width: 41px;
}
.client-info {
    display: table-cell;
    padding-left: 15px;
    position: relative;
    vertical-align: middle;
    width: 100%;
}
.user-status::before {
    border: 2px solid #fff;
    content: "";
    height: 14px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 13px;
}
.user-status.online::before{background: #5bdd5e;}
.user-status.offline::before{background: #999;}
.user-status.away::before{background: #ffda2b;}
/*===== Activity Feed =====*/
.activity-feed {
    float: left;
    width: 100%;
	padding: 0 15px;
}
.activity-timeline {
    float: left;
    list-style: outside none none;
    padding: 30px 0 0;
    position: relative;
    width: 100%;
}
.activity-timeline::before {
    background: #fff none repeat scroll 0 0;
    content: "";
    height: 100%;
    left: 18px;
    margin-left: -1.5px;
    position: absolute;
    top: 0;
    width: 3px;
}
.activity-timeline > li {
    float: left;
    margin-bottom: 50px;
    padding-left: 60px;
    position: relative;
    width: 100%;
}
.user-device {
    background: #ffffff none repeat scroll 0 0;
    color: #626262;
    font-size: 16px;
    height: 38px;
    left: 0;
    line-height: 38px;
    margin-top: 14px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 38px;
}
.user-device::before {
    background: #fff none repeat scroll 0 0;
    content: "";
    height: 6px;
    margin-top: -3px;
    position: absolute;
    right: -14px;
    top: 50%;
    width: 6px;
}
.user-activity {
    float: left;
    width: 100%;
}
.who-post-this {
    display: table;
    float: left;
    width: 100%;
}
.who-post-detail {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
}
.who-post-this > span {
    border: 3px solid #ffffff;
    float: left;
    height: 66px;
    margin-right: 20px;
    overflow: hidden;
    width: 66px;
	border-radius: 100%;
}
.who-post-this > span img {
    float: left;
    width: 100%;
	border-radius: 100%;
}
.who-post-detail > h3 {
    float: left;
    line-height: 10px;
    margin: 0 0 5px;
    width: 100%;
}
.who-post-detail > h3 > a {
    color: #2e2e2e;
    float: left;
    font-family: Open sans;
    font-size: 14px;
    padding-right: 20px;
    position: relative;
}
.poster-status {
    height: 6px;
    position: absolute;
    right: 0;
    top: 50%;
    width: 6px;
}
.poster-status.online{background: #66cc6e;}
.who-post-detail > span,
.who-post-detail > span a {
    color: #5e5e5e;
    float: left;
    font-family: Open sans;
    font-size: 11px;
    font-weight: 400;
    width: 100%;
}
.who-post-detail > span a {
    float: none;
    width: auto;
}
.who-post-detail > i {
    color: #7b8692;
    font-family: Open sans;
    font-size: 11px;
    font-style: normal;
}
/*===== Post Format =====*/
.pst-frmt {
    float: left;
    overflow: hidden;
    width: 100%;
}
.pst-frmt > a {
    float: left;
    width: 100%;
}
.pst-frmt > a > img {
    float: left;
    width: 100%;
}
.pst-inf {
    background: #fff none repeat scroll 0 0;
    float: left;
    padding: 25px 20px;
    width: 100%;
}
.pst-inf > h2 {
    color: #393939;
    float: left;
    font-size: 16px;
    margin-bottom: 6px;
    margin-top: 0;
    width: 100%;
}
.pst-inf > h2 a {
    color: inherit;
    font-size: inherit;
}
.pst-inf > p {
    color: #838383;
    float: left;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 8px;
    width: 100%;
}
.pst-inf > span {
    color: #c1c0c0;
    font-family: arimo;
    font-size: 12px;
}
.lnk {
    color: #6e6eff;
    display: inline-block;
    font-family: Open sans;
    font-size: 13px;
    line-height: 19px;
    margin-top: 0px;
}

.pst-shr-inf > i {
    color: #939393;
    float: left;
    font-size: 12px;
    font-style: normal;
    line-height: 19px;
    margin-right: 25px;
}
.pst-shr-inf{
	float:right;
	margin-right: 25px;
}
.slct-whr-pst {
    float: left;
    position: relative;
}
.slct-whr-pst > span {
    color: #8e99a5;
    cursor: pointer;
    font-size: 12px;
    padding-right: 13px;
    position: relative;
}
.slct-whr-pst > span i {
    font-size: 13px;
    margin-right: 2px;
}
.slct-whr-pst > span::before {
    content: "\f0d7";
    font-family: fontawesome;
    font-size: 13px;
    position: absolute;
    right: 0;
    top: -2px;
}
.slct-whr-pst > ul {
    background: #fff none repeat scroll 0 0;
    
    -webkit-box-shadow: 0 0 13px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 0 13px rgba(0, 0, 0, 0.12);
    -ms-box-shadow: 0 0 13px rgba(0, 0, 0, 0.12);
    -o-box-shadow: 0 0 13px rgba(0, 0, 0, 0.12);
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.12);
    float: left;
    left: 0;
    list-style: outside none none;
    margin-bottom: 0;
    opacity: 0;
    padding: 15px 0;
    position: absolute;
    top: 100%;
    visibility: hidden;
    width: 100px;
    z-index: 1;
}

.slct-whr-pst > ul li {
    color: #555;
    cursor: pointer;
    font-family: Open sans;
    font-size: 10px;
    line-height: 15px;
    padding: 6px 15px;
}
.slct-whr-pst > ul li i {
    font-size: 11px;
    margin-right: 2px;
}
.slct-whr-pst.active > ul {
    opacity: 1;
    visibility: visible;
}

.post-content {
    background: #fff;
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    float: left;
    margin-top: 45px;
    padding: 15px 15px 28px;
    width: 100%;
}
.post-gallery {
    float: left;
    width: 100%;
}
.post-gallery > a {
    float: left;
    margin-right: 2px;
    overflow: hidden;
}
.comment-form > span {
    color: #a2a2a2;
    float: left;
    font-family: Open sans;
    font-size: 11px;
    margin-right: 12px;
    margin-top: 18px;
}
.comment-form > form {
    float: left;
    padding-top: 9px;
    width: 100%;
}
.comment-form::before {
    border-bottom: 9px solid #fff;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    content: "";
    left: 20px;
    position: absolute;
    top: -6px;
}
.comment-form {
    background: #ffffff none repeat scroll 0 0;
    -webkit-border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
    float: left;
    padding: 20px;
    position: relative;
    width: 100%;
	box-shadow: 0 5px 10px rgba(0,0,0,.1);
}
.comment-form > form > textarea {
    background: #f5f5f5 none repeat scroll 0 0;
    border: medium none;
    color: #555555;
    float: left;
    font-size: 13px;
    height: 40px;
    max-width: 100%;
    min-height: 40px;
    min-width: 100%;
    padding: 10px 20px;
    width: 100%;
}
.comment-form > form > textarea:focus{height: 100px;}
.comment-form > a {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    float: right;
    font-family: Open sans;
    font-size: 10px;
    line-height: 9px;
    margin-top: 10px;
    padding: 11px 20px;
    text-transform: uppercase;
}
.pst-rt {
    float: right;
    list-style: outside none none;
    margin-bottom: 0;
    margin-right: 25px;
    padding-left: 0;
	
}
.comment-form .pst-rt {
	margin-top: 12px;	
}
.pst-rt > li {
    color: #a4a4a4;
    float: left;
    font-size: 16px;
    margin-right: 6px;
    margin-top: 5px;
}
.pst-rt > li:last-child {margin-right: 0;}
.pst-rt > li a {
    color: inherit;
    float: left;
    font-size: inherit;
}

/*===== Filters Nav =====*/
.fltrs-lst {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    margin-top: 40px;
    padding-left: 0;
    width: 100%;
}
.fltrs-lst > li {
    color: #fff;
    float: left;
    font-size: 16px;
    margin-bottom: 7px;
    margin-right: 7px;
    position: relative;
    text-align: center;
    width: 60px;
}
.fltrs-lst > li a {
    background: #333;
    color: inherit;
    float: left;
    font-family: inherit;
    font-size: inherit;
    line-height: 55px;
    width: 100%;
}
.fltrs-lst > li:first-child {
    font-family: Open sans;
    font-size: 13px;
    width: auto;
}
.fltrs-lst > li:first-child a {padding: 0 27px;}
.fltrs-lst > li::before {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 7px solid #fff;
    bottom: -7px;
    content: "";
    left: 0;
    opacity: 0;
    position: absolute;
}
.fltrs-lst > li.selected::before {
    left: 10px;
    opacity: 1;
}
.fltrs-lst > li.selected a {
    background: #fff;
    color: #555;
}
.fltrs-lst > li a i {
    float: left;
    line-height: 55px;
    width: 100%;
}
.fltrs-lst > li a i.fa-facebook {background: #4a6ea9 none repeat scroll 0 0;}
.fltrs-lst > li a i.fa-twitter {background: #4bd6ed none repeat scroll 0 0;}
.fltrs-lst > li a i.fa-foursquare {background: #6f6dff none repeat scroll 0 0;}
.fltrs-lst > li a i.fa-google-plus {background: #fc494c none repeat scroll 0 0;}
.fltrs-lst > li a i.fa-instagram {background: #012840 none repeat scroll 0 0;}
.fltrs-lst > li.selected a i {background: #fff none repeat scroll 0 0;}

.cmnts-liks {
    float: left;
    margin-top: 20px;
    padding: 0 20px;
    width: 100%;
}
.cmnts-liks > a {
    float: right;
    font-size: 11px;
    margin-left: 22px;
}
.cmnts-liks > a:first-child {
    float: left;
    margin-left: 0;
}
.cmnts-liks > a:hover {text-decoration: underline;}

/*===== Comments Style =====*/
.comments-thread {
    float: left;
    list-style: outside none none;
    margin-bottom: 6px;
    padding: 10px 15px;
    width: 100%;
}
.comments-thread ul.sub-comment {
    padding-left: 75px;
    margin-bottom: 0;
    list-style: none;
}
.comments-thread > li {
    float: left;
    width: 100%;
}
.comment {
    border-top: 1px dashed #ebebeb;
    float: left;
    padding-bottom: 20px;
    padding-top: 20px;
    position: relative;
    width: 100%;
}
.comments-thread > li:first-child > .comment {border-top: 0 none;}
.comment-thumb {
    float: left;
    margin-right: 15px;
}
.comment-detail {display: table;}
.comment-detail > h2 {
    color: #333;
    font-size: 14px;
    line-height: initial;
    margin-bottom: 5px;
    margin-top: 7px;
	float: left;
}
.comment-detail > h2 a {
    color: inherit;
    font-size: inherit;
}
.comment-detail > p {
    color: #838383;
    font-size: 12px;
    line-height: initial;
	clear: both;
}

.cmt-tm {
    display: inline-block;
    font-family: Open sans;
    font-size: 11px;
    margin-left: 15px;
    margin-top: 7px;
    vertical-align: bottom;
}

.cmnt-meta {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
}
.cmnt-meta > li {
    color: #828282;
    float: left;
    margin-right: 10px;
    padding-right: 13px;
    position: relative;
}

.cmnt-meta > li::before {
    content: "-";
    position: absolute;
    right: 0;
}
.cmnt-meta > li:last-child::before {display: none;}
.cmt-opt {
    position: absolute;
    right: 0;
    top: 10px;
}
.cmt-opt > i {
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    color: #c9c9c9;
    cursor: pointer;
    font-size: 18px;
    margin-bottom: -1px;
    position: relative;
    text-align: center;
}

.cmt-opt.active > i {
    background: #fff none repeat scroll 0 0;
    border-color: #f6f6f6;
    padding: 5px 10px;
    z-index: 4;
}
.cmt-opt > ul {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #f6f6f6;
    -webkit-border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
    list-style: outside none none;
    margin-bottom: 0;
    opacity: 0;
    padding: 10px 20px;
    position: absolute;
    right: -10px;
    text-align: center;
    top: 100%;
    visibility: hidden;
    width: 70px;
    z-index: 1;
}
.cmt-opt > ul li {
    font-family: arimo;
    font-size: 10px;
    margin-bottom: 3px;
}
.cmt-opt > ul li a {
    font-family: inherit;
    font-size: inherit;
}
.cmt-opt > ul li:last-child {margin-bottom: 0;}
.cmt-opt.active > ul {
    opacity: 1;
    visibility: visible;
}
.comments-thread > li:last-child {border-bottom: 1px dashed #ebebeb;}
.cmnt-meta > li.cmt-tm {font-size: 11px;}
/*===== Pst Carousel =====*/
.pst-carousel {
    float: left;
    width: 100%;
}
.pst-carousel .pst-inf > h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.pst-carousel .owl-nav {
    position: absolute;
    top: 50%;
    width: 100%;
}
.pst-carousel .owl-nav > div {
    background: #fff none repeat scroll 0 0;
    color: #555;
    font-size: 24px;
    height: 40px;
    line-height: 38px;
    margin-top: -20px;
    position: absolute;
    text-align: center;
    width: 40px;
}
.pst-carousel .owl-nav > div.owl-next {
    -webkit-border-radius: 5px 0 0 5px;
    -moz-border-radius: 5px 0 0 5px;
    border-radius: 5px 0 0 5px;
    right: 0;
}
.pst-carousel .owl-nav > div:hover {color: #fff;}
.pst-carousel .owl-nav > div.owl-prev {
    -webkit-border-radius: 0 5px 5px 0;
    -moz-border-radius: 0 5px 5px 0;
    border-radius: 0 5px 5px 0;
}
/*===== Desc Pst =====*/
.who-post-detail > p {
    color: #7f7f7f;
    float: left;
    font-size: 14px;
    line-height: 29px;
    margin-bottom: 0;
    width: 100%;
}
.hsh-tgs {
    float: left;
    list-style: outside none none;
    margin-bottom: 15px;
    margin-top: 25px;
    padding-left: 0;
    width: 100%;
}
.hsh-tgs > li {
    float: left;
    margin-right: 15px;
}
.hsh-tgs > li a {color: inherit;}
.hsh-tgs > li a:hover,
.who-post-detail > p a:hover {text-decoration: underline;}
.post-content.no-pd {padding: 0;}
.pst-img {
    float: left;
    overflow: hidden;
    position: relative;
    width: 100%;
}
.pst-img img {width: 100%;}
.mor-imgs::before {
    background: #e3e3e3 none repeat scroll 0 0;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0.9;
    position: absolute;
    right: 0;
    top: 0;
}
.mor-cnt {
    color: #2e2e2e;
    font-family: Open sans;
    font-size: 48px;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
/*===== Notifications =====*/
.notif {
    float: right;
    margin-right: 30px;
    position: relative;
	margin-top: 5px;
}
.notif > span {
    color: #5d5d5d;
    cursor: pointer;
    font-size: 18px;
    line-height: 55px;
    position: relative;
}
.noti-lst {
    background: #fff none repeat scroll 0 0;
    -webkit-box-shadow: 0 0 13px rgba(39, 39, 39, 0.39);
    -moz-box-shadow: 0 0 13px rgba(39, 39, 39, 0.39);
    -ms-box-shadow: 0 0 13px rgba(39, 39, 39, 0.39);
    -o-box-shadow: 0 0 13px rgba(39, 39, 39, 0.39);
    box-shadow: 0 0 13px rgba(39, 39, 39, 0.39);
    opacity: 0;
    position: absolute;
    right: -70px;
    top: 100%;
    visibility: hidden;
    width: 300px;
    z-index: 88;
}
.notif > span i {
    background: #34bd31 none repeat scroll 0 0;
    color: #fff;
    font-family: Open sans;
    font-size: 10px;
    font-style: normal;
    height: 18px;
    line-height: 18px;
    position: absolute;
    right: -10px;
    text-align: center;
    top: 0;
    width: 18px;
}
.noti-lst::before {
    border-bottom: 9px solid #eaeaea;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    content: "";
    position: absolute;
    right: 70px;
    top: -9px;
}
.noti-tp {
    padding: 10px 20px;
    text-align: center;
	background: #eaeaea;
}
.noti-tp > span {
    color: #333;
    font-family: Open sans;
    font-size: 14px;
	text-transform: capitalize;
}
.noti-bd {
    float: left;
    width: 100%;
}
.noti-bd > ul {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}
.noti-bd > ul > li {
    color: #adadad;
    float: left;
    font-size: 11px;
    margin-bottom: 2px;
    padding: 15px 30px 15px 40px;
    position: relative;
    width: 100%;
}
.noti-bd > ul > li a {
    color: #4a6ea9;
    font-size: inherit;
}
.noti-bd > ul > li a strong {font-size: 12px;}
.noti-bd > ul > li span {
    color: #828282;
    display: block;
    margin-top: 5px;
}
.noti-bd > ul > li.unrd-noti {background: #f6f6f6 none repeat scroll 0 0;}

.noti-bd > ul > li i {
    background: #efefef none repeat scroll 0 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    bottom: 15px;
    color: #959595;
    font-family: Open sans;
    font-size: 8px;
    font-style: normal;
    line-height: 18px;
    padding: 0 12px;
    position: absolute;
    right: 20px;
    text-align: center;
    text-transform: uppercase;
}
.noti-bd > ul > li.unrd-noti i {
    background: #fff none repeat scroll 0 0;
    color: #34bd31;
}
.noti-bd > ul > li:last-child {margin-bottom: 0;}
.noti-bt {
    border-top: 1px solid #f2f2f2;
    float: left;
    padding: 16px;
    text-align: center;
    width: 100%;
}
.noti-bt > a {
    color: #888;
    font-family: Open sans;
    font-size: 12px;
}
.noti-lst.active  {
    opacity: 1;
    visibility: visible;
}
.sidebar {
    float: left;
    width: 100%;
    box-shadow: 0 10px 20px rgba(0,0,0,.15);
}
.sidebar.fixed {top: 60px !important;}
/*===== Notifaction List =====*/
.notif-lst {
    bottom: 100px;
    position: fixed;
    right: 47px;
    width: 435px;
    z-index: 999;
}
.notif-lst > ul {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}
.notif-lst li {
    color: #fff;
    float: left;
    margin-bottom: 2px;
    position: relative;
    width: 100%;
}
.notif-lst li a {
    background: #f97c7c none repeat scroll 0 0;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    color: inherit;
    float: left;
    padding: 20px;
    width: 100%;
}
.notif-lst li a span {
    font-family: Open sans;
    text-decoration: underline;
}
.notif-lst li:last-child {margin-bottom: 0;}
.notif-lst li span.cls-noti {
    color: #fff;
    cursor: pointer;
    font-family: Open sans;
    font-size: 14px;
    position: absolute;
    right: 30px;
    top: 19px;
}
/*===== Notification Redirect Post =====*/
.popup-wrap {
    background: rgba(233, 233, 233, 0.95) none repeat scroll 0 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    visibility: hidden;
    z-index: 2147483647;
}
.popup-wrap.active {
    opacity: 1;
    visibility: visible;
}
.poup-innr {
    left: 50%;
    max-width: 625px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
}

/*===== Link Post =====*/
.popup-wrp2 {
    background: rgba(0, 0, 0, 0.8) none repeat scroll 0 0;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 2147483647;
}
.popup-wrp2.active {
    opacity: 1;
    visibility: visible;
}
.pp-cls {
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
}
.popup-innr {
    background: #fff none repeat scroll 0 0;
    left: 50%;
    max-width: 685px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
}
.popup-innr .user-activity {padding: 35px;}
.ad-pst .lnk {color: #7f7f7f;}
.tgs-edt > li {
    background: #f5e2f5 none repeat scroll 0 0;
    color: #7f7f7f !important;
}
.ad-lnk {
    float: left;
    margin-top: 35px;
    width: 100%;
}
.ad-lnk > form {
    float: left;
    width: 100%;
}
.ad-lnk input {
    border: none;
	background: #e8edf2;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #9d9d9d;
    float: left;
    font-size: 12px;
    height: 38px;
    margin-bottom: 10px;
    padding: 0 30px;
    width: 100%;
}
.ad-lnk button {
    border: 0 none;
    border-radius: 5px;
    color: #fff;
    float: right;
    font-size: 11px;
    height: 33px;
    padding: 0 20px;
}
.pst-edt-btns {
    list-style: outside none none;
    margin-bottom: 0;
	padding: 0;
    position: absolute;
    right: 10px;
	bottom: 100px;
    z-index: 1;
}
.pst-edt-btns > li {
    color: #fff;
    display: inline-block;
    font-size: 14px;
}
.pst-edt-btns > li a,
.pst-edt-btns > li label {
    background: #3f3f3f none repeat scroll 0 0;
    border-radius: 50%;
    color: inherit;
    display: inline-table;
    font-size: inherit;
    line-height: 32px;
    text-align: center;
    width: 32px;
}
.add-img {
    border-top: 1px solid #ececec;
    float: left;
    margin-top: 23px;
    padding-top: 23px;
    width: 100%;
}
.ad-img-lnk {
    background: rgba(184, 184, 184, 0.23) none repeat scroll 0 0;
    min-height: 125px;
    width: 100%;
}
.ad-img-lnk .fileContainer {
    color: transparent;
    cursor: pointer;
    float: left;
    min-height: 125px;
    width: 100%;
}
.ad-img-lnk .fileContainer input {height: 100%;}
.ad-img-lnk .fileContainer::before {
    color: #adadad;
    content: "+";
    font-family: Open sans;
    font-size: 48px;
    font-weight: 400;
    left: 50%;
    position: absolute;
    top: 53%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.add-img > strong {
    color: #aeaeae;
    float: left;
    font-family: Open sans;
    font-size: 12px;
    margin-bottom: 20px;
    width: 100%;
}
/*===== Lt List =====*/
.lt-lst {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #e3e3e3;
    box-shadow: 0px 5px 43px 0px rgba(0, 0, 0, 0.1); 
    left: -180px;
    padding: 10px 0;
    position: absolute;
    top: 90px;
    width: 254px;
    z-index: 1;
	border-radius: 5px;
}
.who-post-detail > p a {position: relative;}
.lt-lst::before {
    border-bottom: 11px solid #fff;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    content: "";
    position: absolute;
    right: 80px;
    top: -10px;
	
}
.lt-lst > span {
    cursor: pointer;
    float: left;
    line-height: 37px;
    padding: 10px 20px;
    width: 100%;
}
.lt-lst > span img {
    float: left;
    margin-right: 15px;
}
.lt-lst > span strong {
    color: #333;
    font-family: Open sans;
    font-size: 14px;
    font-weight: 400;
}
.lt-lst > span strong span {
    color: #adadad;
    font-size: 11px;
    margin-left: 10px;
}
.lt-lst > span:hover strong, 
.lt-lst > span:hover strong span {color: #fff;}


/*===== Footer =====*/
footer {
    background: #ffffff none repeat scroll 0 0;
    bottom: 0;
    -webkit-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -moz-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -ms-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -o-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    left: 0;
    padding: 20px 45px 20px 45px;
    width: 100%;
    z-index: 999;
	margin-top: 30px;
	display: inline-block;
}
footer > .container {
    padding: 0;
    width: auto;
}
footer p {
    color: #919191;
    float: left;
    font-size: 13px;
    margin: 0;
    width: auto;
}
footer p i {color: #ff8696;}
footer ul {
    float: right;
    list-style: outside none none;
    margin: 0;
    padding: 0;
}
footer li a {
    color: #8b8b8b;
    float: left;
    font-size: 13px;
    line-height: 26px;
    padding: 0 18px;
}
footer li{float: left;}

.fileContainer {
    overflow: hidden;
    position: relative;
}
.fileContainer [type=file] {
    cursor: inherit;
    display: block;
    font-size: 999px;
    -webkit-filter: alpha(opacity=0);
    -moz-filter: alpha(opacity=0);
    -ms-filter: alpha(opacity=0);
    -o-filter: alpha(opacity=0);
    filter: alpha(opacity=0);
    min-height: 100%;
    min-width: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
}
/*===== User Mangement =====*/
.usr-pnl {
    float: left;
    margin-top: 150px;
    overflow: hidden;
    width: 100%;
}
.pnl-tl {
    background: #fff none repeat scroll 0 0;
    border-bottom: 1px solid #ede9e9;
    float: left;
    padding: 10px 25px;
    width: 100%;
}
.pnl-tl > h4 {
    color: #333;
    float: left;
    line-height: 30px;
    margin: 0;
    padding-top: 0px;
    text-transform: uppercase;
	font-size: 16px;
}
.crt-btn,
.scrh-grp-btn {
    background: #fff none repeat scroll 0 0;
    float: right;
    font-size: 16px;
    text-align: center;
    width: 20px;
    margin-left: 10px;
	color: #333;
}
.pnl-bdy {
    background: #fafafa none repeat scroll 0 0;
    float: left;
    width: 100%;
	border-radius: 0;
}
.usr-itm {
    background: transparent none repeat scroll 0 0;
    border-bottom: 1px solid #e6e6e6;
    border-radius: 0;
    display: table;
    float: left;
    padding: 41px 125px 41px 65px;
    width: 100%;
}
.usr-itm:last-child {margin-bottom: 0;}
.cmpny-nm {
    font-family: Open sans;
    font-size: 15px;
}
.cmpny-nm > i {
    font-size: 24px;
    margin-right: 15px;
}
.usr-lst {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 30px;
    width: 100%;
}
.usr-lst > li {
    display: table;
    float: left;
    margin-top: 30px;
    width: 100%;
}
.usr-lst > li > * {
    display: table-cell;
    vertical-align: middle;
	margin-top: -20px;
}

.usr-lst-inf > img {
    float: left;
	margin-right: 14px;
}
.usr-lst-inf > h2 {
    font-family: Open sans;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 2px;
    margin-top: 0;
	
}
.usr-lst-inf > i {
    color: #777;
    font-size: 12px;
    font-style: normal;
}
.usr-lst-inf > h2 a {
    color: inherit;
    font-family: inherit;
}
.usr-btns {float: right;}
.usr-btns > a,
.btn1 {
    border: 1px solid;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #fff;
    float: left;
    font-family: Open sans;
    line-height: 34px;
    margin-left: 13px;
    padding: 0 40px;
    text-transform: uppercase;
	font-size: 13px;
}
.usr-btns > a:hover,
.btn1:hover {background: transparent none repeat scroll 0 0;}
.usr-btns > a i,
.btn1 > i {margin-right: 5px;}

/*===== User Group Creater =====*/

.crt-grp {
    display: none;
    float: left;
    padding: 20px 65px 35px;
    width: 100%;
}
.crt-grp > h4 {
    color: #2e2e2e;
    font-size: 15px;
    margin: 0;
}
.crt-grp > form {
    float: left;
    margin-top: 20px;
    padding-left: 35px;
    position: relative;
    width: 100%;
}
.crt-grp > form > i {
    font-size: 24px;
    left: 0;
    position: absolute;
    top: 6px;
}
.crt-grp input {
    background: transparent none repeat scroll 0 0;
    border: 1px solid #c9ced3;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #333;
    float: left;
    font-family: Open sans;
    font-size: 12px;
    height: 38px;
    max-width: 500px;
    padding: 0 30px;
    width: 100%;
}

/*===== Connect Page =====*/
.brd-crmb {
    float: right;
    list-style: outside none none;
    margin-bottom: 0;
    margin-top: 15px;
    padding-left: 0;
}
.brd-crmb > li {
    color: #fff;
    float: left;
    font-family: Open sans;
    margin-left: 18px;
    padding-left: 18px;
    position: relative;
    text-transform: uppercase;
}
.brd-crmb > li::before {
    content: "\f0da";
    font-family: fontawesome;
    font-size: 16px;
    left: 0;
    position: absolute;
}
.brd-crmb > li a {color: rgba(255, 255, 255, 0.7);}
.brd-crmb > li i {font-size: 16px;}
.brd-crmb > li:first-child::before {display: none;}
.usr-cnt {
    background: #fff none repeat scroll 0 0;
    float: left;
    margin-bottom: 10px;
    padding: 40px 50px 40px 30px;
    width: 100%;
	border-radius: 0;
}
.social-btns > span {
    color: #2e2e2e;
    float: left;
    font-family: Open sans;
    font-size: 13px;
    line-height: 30px;
    margin-right: 25px;
}
.social-btns.bg-scl > ul > li > a > i {
    font-family: Open sans;
    font-size: 12px;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    text-transform: uppercase;
    width: auto;
}
.social-btns.bg-scl > ul > li > a > i::before {
    font-family: fontawesome;
    font-size: 19.5px;
    margin-right: 10px;
}
.social-btns.bg-scl > span {line-height: 50px;}
.usr-cnt:last-child {margin-bottom: 0;}
.usr-cnt .social-btns {padding-top: 15px;}

/*===== Reviews =====*/
.rev-pf {
    float: left;
    padding: 35px 40px 35px 60px;
    width: 100%;
	border-bottom: 1px solid #e6e6e6;
	border-radius: 0;
}
.rev-pf:last-child {margin-bottom: 0;}
.rev-img {
    float: left;
    margin-right: 23px;
	border-radius: 100%;
}
.rev-inf {
    display: table;
    width: 89%;
}
.rev-inf > h2 {
    float: left;
    font-size: 13px;
    margin-bottom: 0;
    margin-top: 10px;
}
.rev-tm {
    float: left;
    font-family: Open sans;
    font-size: 13px;
    margin-left: 20px;
    margin-top: 11px;
}
.rev-tm > i {
    font-size: 14px;
    margin-right: 5px;
}
.btns-grp {
    clear: right;
    float: right;
}
.btns-grp > a {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    font-family: Open sans;
    font-size: 12px;
    line-height: 31px;
    margin-right: 5px;
    padding: 0 20px;
    text-transform: uppercase;
}
.btns-grp > a.dflt-btn,
.thm-btn:hover {
    background: #e8edf2 none repeat scroll 0 0;
    color: #555555;
}
.btns-grp > a.dflt-btn:hover {color: #fff;}
.rev-inf > p {
    float: left;
    margin-bottom: 0;
    margin-top: 10px;
    width: 100%;
	font-size: 14px;
}
.rev-mts {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    margin-top: 10px;
    padding-left: 0;
}
.rev-mts > li {
    float: left;
    margin-right: 10px;
}
.rev-mts > li a {color: inherit;}
.rev-pf:nth-last-child(2){border-bottom: 0;}
/*===== Review options =====*/
.rev-opt {
    float: left;
    padding-left: 60px;
    width: 100%;
	background: #fff;
}
.rev-opt > ul {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    padding: 22px 0;
    width: 100%;
}
.rev-opt > ul > li {
    background: #f9f9f9;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #555;
    float: left;
    font-family: Open sans;
    font-size: 13px;
    line-height: 38px;
    margin-bottom: 5px;
    margin-right: 5px;
    position: relative;
    text-transform: uppercase;
}
.rev-opt > ul > li:hover {color: #fff;}
.rev-opt > ul > li a {
    color: inherit;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    padding: 0 25px;
    width: 100%;
}
.pnl-btm{
	float:left;
	width: 100%;
	background: #fff;
	text-align: center;	
}
.pnl-btm > span{
	font-family: Open sans;
	font-size: 13px;
	line-height: 74px;
	text-transform: uppercase;	
}
.rev-opt > ul > li.hs-chld > a::before {
    content: "\f0d7";
    font-family: fontawesome;
    position: absolute;
    right: 20px;
}
.rev-opt > ul > li.hs-chld > a {padding-right: 36px;}
.sb-drp {
    background: #fff none repeat scroll 0 0;
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    border-radius: 0 0 4px 4px;
    -webkit-box-shadow: 0 13px 13px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 13px 13px rgba(0, 0, 0, 0.12);
    -ms-box-shadow: 0 13px 13px rgba(0, 0, 0, 0.12);
    -o-box-shadow: 0 13px 13px rgba(0, 0, 0, 0.12);
    box-shadow: 0 13px 13px rgba(0, 0, 0, 0.12);
    left: 0;
    list-style: outside none none;
    margin-bottom: 0;
    opacity: 0;
    padding: 15px 0;
    position: absolute;
    top: 100%;
    visibility: hidden;
    width: 100%;
    z-index: 2;
}
.sb-drp > li {
    color: #555;
    font-family: Open sans;
    font-size: 10px;
    padding: 5px 0;
}
.sb-drp > li:hover, 
.sb-drp > li:hover .rtng > li {color: #fff;}

.sb-drp > li ul {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    margin-left: 10px;
    padding-left: 0;
    width: auto;
}
.sb-drp > li ul > li {float: left;}
.sb-drp > li ul > li {
    color: #cecece;
    font-size: 10px;
    line-height: initial;
}
.rev-opt > ul > li.hs-chld:hover > ul {
    opacity: 1;
    visibility: visible;
}



/*===== Panel Group =====*/
.popup-innr .usr-pnl {margin-top: 0;}
.popup-innr .usr-pnl .pnl-bdy {
    background: transparent none repeat scroll 0 0;
    padding: 40px 70px 55px;
}
.grp-lsts {
    float: left;
    width: 100%;
}
.grp-lst-inr {
    float: left;
    list-style: outside none none;
    margin-bottom: -10px;
    padding-left: 0;
    width: 100%;
}
.grp-lst-inr > li {
    display: table;
    float: left;
    margin-bottom: 10px;
    width: 100%;
}
.grp-lst-inr > li > * {}
.grp-lst-inr > li img {
    float: left;
    width: 52px;
}
.grp-lst-inr > li h2 {
    display: table;
    font-size: 15px;
    margin: 5px 0 0;
    padding-left: 20px;
    width: 70%;
}
.grp-lst-inr > li h2 a {color: inherit;}
/*===== Group Search =====*/
.grp-frm {
    float: left;
    width: 100%;
}
.grp-frm > form {
    float: left;
    position: relative;
    width: 100%;
}
.grp-frm input {
    background: #f9f9f9 none repeat scroll 0 0;
    border: 0 none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #9b9b9b;
    float: left;
    font-family: Open sans;
    font-size: 12px;
    height: 53px;
    max-width: 100%;
    padding: 0 50px;
    width: 100%;
}
.grp-frm input:focus {font-style: normal;}
.grp-frm button {
    background: transparent none repeat scroll 0 0;
    border: 0 none;
    bottom: 0;
    color: #9b9b9b;
    font-size: 16px;
    padding-right: 30px;
    position: absolute;
    right: 0;
    top: 0;
}
.grp-frm .usr-btns {margin-top: 20px;}
.grp-frm .usr-btns > a {
    font-size: 12px;
    line-height: 40px;
    padding: 0 30px;
    text-transform: initial;
}
.grp-frm .usr-btns > a i {font-size: 14px;}
.grps-lst {
    float: left;
    margin-top: 30px;
    width: 100%;
}
.grps-lst > h4 {
    color: #333;
    font-size: 18px;
    margin-top: 0;
    text-transform: uppercase;
}
.grps-lst > ul {
    display: table;
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}
.grps-lst li {
    display: table-cell;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    vertical-align: middle;
}
.grps-lst li:last-child {
    margin-right: 0;
    padding-right: 0;
}
.grps-lst li::before {
    background: #ebebeb none repeat scroll 0 0;
    content: "";
    height: 16px;
    margin-top: -8px;
    position: absolute;
    right: 0;
    top: 50%;
    width: 1px;
}
.grps-lst li:last-child::before {display: none;}
.grp-itm {
    float: left;
    margin-top: 30px;
    width: 100%;
}
.grp-itm > img {
    float: left;
    margin-right: 15px;
    margin-bottom: 15px;
}
.grp-inf {}
.grp-inf > a {
    font-family: Open sans;
    font-size: 14px;
}
.grp-inf > span {
    color: #777;
    display: block;
}
/*===== Creat Group =====*/
[type="checkbox"]:not(:checked), 
[type="checkbox"]:checked {
    left: -9999px;
    opacity: 0;
    position: absolute;
    visibility: hidden;
}
[type="checkbox"]:not(:checked) + label::before, 
[type="checkbox"]:checked + label::before {
    border: 1px solid #d9d9d9;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    content: "";
    height: 22px;
    left: 0;
    position: absolute;
    top: 7px;
    width: 22px;
}
[type="checkbox"]:not(:checked) + label, 
[type="checkbox"]:checked + label {
    cursor: pointer;
    padding-left: 38px;
    position: relative;
}
[type="checkbox"]:not(:checked) + label::after, 
[type="checkbox"]:checked + label::after {
    background: red none repeat scroll 0 0;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    content: "";
    height: 10px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 13px;
    -webkit-transition: all 0.25s linear 0s;
    -moz-transition: all 0.25s linear 0s;
    -ms-transition: all 0.25s linear 0s;
    -o-transition: all 0.25s linear 0s;
    transition: all 0.25s linear 0s;
    width: 10px;
}
[type="checkbox"]:checked + label::after {opacity: 1;}
.grps-lst.slct-lst li {
    display: initial;
    float: left;
    margin-right: 60px;
    width: 42%;
}
.grps-lst.slct-lst li::before {display: none;}
.nw-grp-frm {
    float: left;
    margin-bottom: 20px;
    margin-top: 35px;
    width: 100%;
}
.nw-grp-frm > h4 {
    color: #333;
    font-size: 15px;
    margin-bottom: 20px;
    text-transform: uppercase;
}
.nw-grp-frm > form {
    float: left;
    width: 100%;
}
.nw-grp-frm input {
    border: none;
	background: #f9f9f9;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #9b9b9b;
    float: left;
    font-size: 12px;
    height: 38px;
    padding: 0 30px;
    width: 100%;
}
.nw-grp-frm input:focus {font-style: normal;}
.grps-lst.slct-lst li:last-child {margin-right: 0;}
/*===== Locations Management =====*/
.cmp-loc {
    border-bottom: 1px solid #e6e6e6;
    border-radius: 0;
    float: left;
    margin-bottom: 15px;
    padding: 40px 40px 45px;
    width: 100%;
}
.cmp-loc:last-child {margin-bottom: 0;}
.cmp-sc1 {
    float: left;
    margin-right: 20px;
    text-align: center;
}
.cmp-thm {
    height: 76px;
    margin-bottom: 8px;
    overflow: hidden;
    position: relative;
    width: 76px;
}

.cmp-sc2 {
    float: left;
    margin-right: 70px;
    width: 220px;
	position:relative;
}
.cmp-sc3 {
    float: left;
    padding-right: 84px;
	position:relative;
}

.cmp-bnr:hover > a, .cmp-bnr:hover:before {
    opacity: 1;
    visibility: visible;
}
.cmp-bnr > a {
    color: #fff;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 10px;
    font-family: Open sans;
    text-transform: uppercase;
    opacity: 0;
    visibility: hidden;
}
.cmp-bnr::before {
    background: rgba(0, 0, 0, 0.7) none repeat scroll 0 0;
    content: "";
    height: 100%;
    right: -100%;
    position: absolute;
    top: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s linear 0s;
}
.cmp-bnr:hover:before {
    right: 0;
}
.pnl-bdy .cmp-loc:last-child{border-bottom: 0;}
.cmp-sc2:before,
.cmp-sc3:before {
	content: "";
	background: #e6e6e6;
	height: 76px;
	position: absolute;
	top: 20px;
	right: -20px;
	width: 1px;	
}
.cmp-sc2 > h2 {cursor: pointer;}
.cmp-sc2 > h2, .cmp-sc3 > h2 {
    color: #2e2e2e;
    font-size: 15px;
    margin-top: 7px;
}
.cmp-sc2 > span, .cmp-sc3 > span {
    color: #777;
    display: block;
    font-size: 13px;
    line-height: 28px;
}
.cmp-sc2 > span i, .cmp-sc3 > span i {
    color: #b1b0b0;
    font-style: normal;
    margin-right: 2px;
}
.cmp-sc2 > span a {color: inherit;}
.cmp-sc4 {float: right;}
.cmp-sc1 > a:hover {background: transparent none repeat scroll 0 0;}
.cmp-scl {padding-left: 11%;}
.cmp-sc3 > span i.fa {font-size: 24px;}
/*.social-btns > ul > li.dsbl > a,
.dsbl > a {cursor: default;}*/
.social-btns > ul > li.dsbl > a i.fa,
.dsbl > a {
    background: #ebebeb none repeat scroll 0 0 !important;
    border-color: #ebebeb !important;
    color: #8d8d8d;
}
/*===== Location Management Edit =====*/
.popup-innr.loc-edt,
.popup-innr.sch-st {background: #f9f9f9 none repeat scroll 0 0;}
.popup-innr.loc-edt .usr-pnl .pnl-bdy,
.popup-innr.sch-st .usr-pnl .pnl-bdy {padding: 20px 20px 40px;}
.loc-edt .cmp-loc {
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    margin-bottom: 2px;
}
.cmp-thm .fileContainer {
    background: rgba(0, 0, 0, 0.7) none repeat scroll 0 0;
    bottom: 0;
    color: #fff;
    font-size: 21px;
    left: 0;
    line-height: 76px;
    position: absolute;
    right: 0;
    top: 0;
    margin-bottom: 0;
}
.cmp-bnr .fileContainer {
    background: rgba(0, 0, 0, 0.7) none repeat scroll 0 0;
    bottom: 0;
    color: #fff;
    font-size: 40px;
    left: 0;
    line-height: 128px;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    margin-bottom: 0;
}
.cmp-bnr {
    overflow: hidden;
    position: relative;
    height: 128px;
    width: 286px;
}
.cmp-bnr img,
.cmp-thm img {width: 100%; border-radius: 5px;}
/*===== Address Form =====*/
.adrs-frm {
    background: #fff none repeat scroll 0 0;
    border-radius: 0 0 5px 5px;
    float: left;
    padding: 60px 45px 85px 60px;
    width: 100%;
}
.adrs-frm > h4 {
    color: #333;
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 0;
}
.adrs-frm > form {
    float: left;
    width: 100%;
}
.adrs-frm > form .row {margin: 0 -3.5px;}
.adrs-frm > form .row div {padding: 0 3.5px;}
.adrs-frm > form input, .adrs-frm > form textarea {
    border: 1px solid #c8cdd2;
    border-radius: 3px;
    color: #9b9b9b;
    float: left;
    font-size: 14px;
    height: 38px;
    margin-bottom: 15px;
    padding: 0 10px 0 30px;
    width: 100%;
}
.adrs-frm > form textarea {
    height: 122px;
    padding-top: 25px;
}
/*===== Change O Radd Business Site =====*/
.pnl-tl > span {
    color: #fff;
    font-family: Open sans;
    font-size: 15px;
}
.pnl-tl > span i {
    display: inline-block;
    margin-right: 50px;
    position: relative;
    z-index: 1;
}
.pnl-tl > span i::before {
    background: #fff none repeat scroll 0 0;
    bottom: -20px;
    -webkit-box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
    -ms-box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
    -o-box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
    content: "";
    left: -10px;
    position: absolute;
    right: -10px;
    top: -15px;
    z-index: -1;
}
/*===== User Management User Creater =====*/
.ad-usr-frm {
    background: #fff none repeat scroll 0 0;
    float: left;
    padding: 50px 60px 80px;
    width: 100%;
}
.ad-usr-frm > form {
    float: left;
    width: 100%;
}
.ad-usr-frm > form h4 {
    color: #333;
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 0;
}
.ad-usr-frm > form input {
    border: 1px solid #e8edf2;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #9b9b9b;
    float: left;
    font-size: 12px;
    height: 38px;
    margin-bottom: 5px;
    padding: 0 30px;
    width: 100%;
}
.ad-usr-frm > form > .row {margin: 0 -5px;}
.ad-usr-frm > form > .row > div {padding: 0 5px;}
.ad-usr-frm > form h5 {
    float: left;
    font-size: 15px;
    margin-bottom: 0;
    margin-top: 40px;
    width: 100%;
}
.tgl-btn {
    float: left;
    margin-top: 20px;
    width: 100%;
}
.tgl-btn > label {
    color: #333;
    float: left;
    font-size: 13px;
    padding: 0;
    text-align: left;
    width: 100%;
}
.tgl-btn .toggle {
    background: transparent none repeat scroll 0 0 !important;
    border-color: #e8edf2 !important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    -ms-box-shadow: none !important;
    -o-box-shadow: none !important;
    box-shadow: none !important;
    display: inline-block;
    height: 38px !important;
    margin-left: 10px;
    margin-top: 5px;
    max-width: 125px;
    width: 100% !important;
}
.tgl-btn .toggle .toggle-handle {
    background: transparent none repeat scroll 0 0;
    border: 0 none;
    display: none;
}
.tgl-btn .toggle-group .toggle-on, 
.tgl-btn .toggle-group .toggle-off {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
    font-family: Open sans;
    font-size: 12px;
    line-height: 38px;
    padding: 0;
    text-transform: uppercase;
    width: 60px;
}
.tgl-btn .toggle-group .toggle-off {
    background: #575757;
    color: #fff;
}
.tgl-btn .toggle-group .btn:focus,
.tgl-btn .toggle:focus {outline: medium none;}
.tgl-btn .toggle > input {
    margin: 0;
    padding: 0;
    width: 0;
}
.tgl-btn .toggle-group .toggle-off:hover {background: #e8edf2 none repeat scroll 0 0;}

.inp-slc .select2-container {width: 100% !important;}
.inp-slc .select2-container .select2-selection--single {
    background: #f9f9f9 none repeat scroll 0 0;
    border: 0 none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    height: 38px;
}
.inp-slc .select2-container .select2-selection__rendered {
    color: #7a7a7a;
    font-size: 12px;
    line-height: 38px;
    padding: 0 30px;
}
.inp-slc .select2-container .select2-selection__arrow {
    bottom: 0;
    height: initial;
    right: 20px;
    top: 0;
}
.inp-slc {
    float: left;
    margin-bottom: 5px;
    width: 100%;
}

.abl-grp {
    float: left;
    margin-top: 30px;
    padding-left: 20px;
    width: 100%;
}
.abl-grp > label {
    color: #333;
    font-size: 13px;
    line-height: 36px;
}
.ad-usr-frm > form button {
    border: 0 none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #fff;
    float: right;
    font-family: Open sans;
    font-size: 10px;
    line-height: 36px;
    margin-top: 70px;
    padding: 0 50px;
    text-transform: uppercase;
}
.select2-container {z-index: 9;}

/*===== Change Time =====*/
.chng-tm {
    float: left;
    margin-top: 50px;
    text-align: center;
    width: 100%;
}
.chng-tm > h4 {
    color: #333333;
    float: left;
    font-size: 18px;
    margin-right: 30px;
}
.tme-pckr {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    float: left;
    overflow: hidden;
    width: 82%;
}
.tme-pckr > ul {
    background: #2c2c2c none repeat scroll 0 0;
    border: 0 none;
    padding: 20px 15% 0px;
    text-align: center;
	
}
.tme-pckr > ul > li {color: #ffffff;}
.tme-pckr > ul li {
    color: #d8d8d8;
    font-family: Open sans;
    font-size: 12px;
    text-transform: uppercase;
}
.tme-pckr > ul li a {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
}
.tme-pckr > ul .owl-nav {
    left: 0;
    position: absolute;
    right: 0;
    top: 50%;
}
.tme-pckr > ul .owl-nav > div {
    color: #ffffff;
    left: 15%;
    position: absolute;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
.tme-pckr > ul .owl-nav > div.owl-next {
    left: auto;
    right: 15%;
}
.tme-pckr > ul .owl-item.center li {
    color: #ffffff;
    font-size: 17px;
}
.tme-pckr .tab-content {
    background: #eee none repeat scroll 0 0;
    float: left;
    padding: 25px 11%;
    width: 100%;
}
.tm-pckr, 
.tm-pckr2 {
    background: #ffffff none repeat scroll 0 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    float: left;
    overflow: hidden;
    text-align: center;
    width: 100%;
}
.tm-pckr > h3, 
.tm-pckr2 > h3 {
    color: #ffffff;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 0;
    padding: 15px;
}
.timr-styl {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding: 20px;
}
.timr-styl > li {
    color: #333333;
    display: table-cell;
    font-family: Open sans;
    font-size: 18px;
    padding: 0 10px;
    position: relative;
    vertical-align: middle;
}
.timr-styl > li::before {
    content: ":";
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
.timr-styl > li > span i {
    color: #aeaeae;
    display: block;
    font-size: 12px;
    font-style: normal;
}
.timr-styl > li > i {
    color: #c1c1c1;
    display: block;
    font-size: 13px;
}
.timr-styl > li > span {
    display: inline-block;
    margin: 15px 0;
}
.timr-styl > li > span.tm-prd {
    font-size: 15px;
    margin: 26px 0;
}
.timr-styl > li:last-child::before {display: none;}
.adrs-frm .sv-btn {
    display: inline-block;
    float: none;
    font-size: 12px;
    line-height: 40px;
    margin-top: 30px;
    padding: 0 50px;
}
/*===== Ticket Page =====*/
.tkt1 {
    background: #f9f9f9;
    float: left;
    padding: 30px 60px 60px;
    width: 100%;
}
.tkt1 > form h5 {
    color: #333;
    float: left;
    font-size: 15px;
    margin: 30px 30px 30px 0;
}
.sv-btn {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    font-family: Open sans;
    font-size: 10px;
    line-height: 34px;
    margin-top: 25px;
    padding: 0 30px;
    text-transform: uppercase;
	float: right;
}
.tkt1 .abl-grp {
    margin-top: 0;
    padding-left: 0;
}
.tkt1 .abl-grp > label {
    color: #333;
    font-size: 13px;
    line-height: 30px;
    margin-bottom: 0;
}
.tkt1 textarea {
    border: none;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
	background: #e8edf2;
    float: left;
    height: 170px;
    padding: 30px;
    width: 100%;
}
.tkt1 button {
    border: 1px solid;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    font-family: Open sans;
    font-size: 10px;
    line-height: 34px;
    margin-top: 10px;
    padding: 0 30px;
    text-transform: uppercase;
}
.tkt1 button:hover {background: transparent none repeat scroll 0 0;}
/*===== Ticket System =====*/
.tckt-itm {
    background: transparent;
    float: left;
    margin-bottom: 20px;
    padding: 35px 45px 60px 60px;
    width: 100%;
	border-bottom: 1px solid #e6e6e6;
	border-radius: 0;
}
.tckt-sndr {
    float: left;
    padding-right: 20px;
    width: 100%;
}

.tckt-sndr.reply {
    margin-bottom: 30px;
    margin-top: 30px;
}
.tckt-sndr.reply .sndr-tckt h2{width: 100%;}
.tckt-sndr > img {
    float: left;
    margin-right: 25px;
	border-radius: 100%;
}
.sndr-tckt {display: table;}
.sndr-tckt h2 {
    font-size: 14px;
    margin-top: 0;
	margin-bottom: 6px;
}
.sndr-tckt > h2 a {color: inherit;}
.sndr-tckt > a {
    float: left;
    font-size: 13px;
	clear: right;
	margin-right: 30px;
}
.sndr-tckt > p {
    float: left;
    line-height: 19px;
    margin-top: 18px;
    width: 100%;
}
.sndr-tckt > textarea {
    border: none;
	background: #e8edf2;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #000;
    float: left;
    height: 65px;
    margin-top: 10px;
    padding: 20px 0 0 30px;
    width: 100%;
	font-size: 13px;
	font-family: Open sans;
}
.sndr-tckt > button {
    border: 1px solid;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    float: left;
    font-family: Open sans;
    font-size: 13px;
    line-height: 30px;
    margin-top: 15px;
    padding: 0 20px;
    text-transform: uppercase;
}
.sndr-tckt > h2 {
    float: left;
    width: auto;
	color: #555;
}
.tckr-dta {
    float: right;
    width: auto;
	margin-top: -7px;
}
.tckt-cmt {
    background: #f9f9f9 none repeat scroll 0 0;
    display: inline-block;
    font-family: Open sans;
    font-size: 13px;
    line-height: 55px;
    padding: 0 40px;
}
.tckt-cmt > span {
    color: #c4c4c4;
    font-size: 17px;
    margin-left: 6px;
    position: relative;
}
.tckt-cmt > span i {
    color: #fff;
    font-family: Open sans;
    font-size: 9px;
    font-style: normal;
    height: 16px;
    line-height: 16px;
    position: absolute;
    right: -5px;
    text-align: center;
    top: -10px;
    width: 16px;
}
.tckr-dta > span {
    color: #fff;
    float: right;
    font-size: 14px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    width: 34px;
}
.tckr-dta .pst-rt > li {font-size: 18px;}
.tckt-cmts {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    margin-top: 20px;
    padding-left: 0;
    width: 100%;
}
.tckt-cmts > li {
    float: left;
    width: 100%;
}
.cmt-itm {
    float: left;
    margin-top: 20px;
    width: 100%;
}
.tckt-cmts ul {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 45px;
    width: 100%;
}
.cmt-itm > img {
    float: left;
    margin-right: 15px;
}
.cmt-inf {display: table;}
.cmt-inf > h3 {
    font-size: 14px;
    margin-bottom: 5px;
    margin-top: 0;
}
.cmt-inf > h3 a {color: inherit;}
.cmt-inf > p {
    line-height: 20px;
    margin-bottom: 0;
}
.tckt-itm:last-child {margin-bottom: 0;}

/*===== Ticketing Accordions =====*/
.tcktng-itm {
    background: #ffffff none repeat scroll 0 0;
    float: left;
    margin-bottom: 20px;
    padding: 35px 50px 35px 70px;
    position: relative;
    width: 100%;
}
.tcktng-itm:last-child {margin-bottom: 0;}
.tcktng-itm > h2 {
    float: left;
    font-size: 16px;
    line-height: 32px;
    margin-bottom: 0;
    margin-right: 5px;
    margin-top: 0;
}
.tcktng-itm > h2 a {color: inherit;}
.snd-inf {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
}
.snd-inf > li {
    float: left;
    font-family: Open sans;
    font-size: 12px;
    line-height: 32px;
    position: relative;
}
.snd-inf > li::before {
    content: "-";
    margin: 0 2px;
}
.snd-inf > li:first-child::before {display: none;}
.cmt-btn {
    color: #ffffff;
    display: inline-block;
    float: left;
    font-size: 12px;
    line-height: 32px;
    margin-left: 60px;
    padding: 0 20px;
}
.cmt-btn > i {
    font-size: 13px;
    margin-right: 5px;
}
.tcktng-itm > p {
    clear: both;
    display: inline-block;
    line-height: 19px;
    margin-bottom: 0;
    margin-top: 20px;
	width: 100%;
}
.cmt-mta {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    margin-top: 20px;
    padding-left: 0;
    width: 100%;
}
.cmt-mta > li {
    float: left;
    font-size: 12px;
    margin-right: 30px;
}
.cmt-mta > li i {margin-right: 2px;}
.cmt-mta > li a {color: inherit;}
.cmt-mta > li:last-child {margin-right: 0;}
.tgl-icn {
    color: #ffffff;
    cursor: pointer;
    font-size: 14px;
    height: 34px;
    line-height: 34px;
    position: absolute;
    right: 50px;
    text-align: center;
    top: 40px;
    width: 34px;
}
.cmt-thrd {
    border-top: 1px solid #f3f3f3;
    display: none;
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    margin-top: 30px;
    padding-left: 70px;
    padding-top: 30px;
    width: 100%;
}
.cmt-thrd > li {
    border-bottom: 1px solid #f3f3f3;
    float: left;
    line-height: initial;
    margin-bottom: 30px;
    padding-bottom: 30px;
    width: 100%;
}
.cmt-prs {
    float: left;
    width: 100%;
}
.cmt-prs .pst-rt{
	margin-top: 12px;	
}
.cmt-prs > img {
    float: left;
    margin-right: 10px;
}
.cmt-dtl {display: table;}
.cmt-dtl > h2 {
    float: left;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 3px;
    margin-right: 10px;
    margin-top: 0;
}
.cmt-dtl > h2 a {color: inherit;}
.cmt-dtl > span {
    font-size: 12px;
}
.cmt-dtl > p {
    float: left;
    width: 100%;
}
.cmt-dtl .pst-rt {
    float: left;
    margin-bottom: 0;
    margin-right: 32px;
}
.cmt-dtl > a {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #ffffff;
    float: left;
    font-family: Open sans;
    font-size: 13px;
    line-height: 30px;
    margin-top: 13px;
    padding: 0 20px;
    text-transform: uppercase;
}
.cmt-thrd > li:last-child {
    border-bottom: 0 none;
    margin-bottom: 0;
    padding-bottom: 0;
}
/*===== Post Preview Page =====*/
.gry-bg-pd {
    margin-top: 30px;
    padding: 10px;
    background: #f5f5f5;
}
.gpl-pst-prvw {
    background: #fefefe none repeat scroll 0 0;
    border: 1px solid #e5e5e5;
    float: left;
    padding: 15px 30px 20px;
    width: 100%;
}
.msg-pst-prvw {
    float: left;
    width: 100%;
    background: #fff;
    padding: 25px;
    border: 1px solid #e5e5e5;
}
.msg-pst-prvw img {
    float: left;
    margin-right: 15px;
}
.msg-pst-dta {
    display: table;
    width: 82%;
}
.msg-pst-dta h2 {
    font-size: 12px;
    color: #212121;
    text-transform: uppercase;
    margin-top: 5px;
    margin-bottom: 3px;
}
.msg-pst-dta h2 a {color: inherit;}
.msg-pst-dta > span {
    font-size: 12px;
    font-family: Open sans;
}
.msg-pst-dta > textarea {
    border: 0 none;
    color: #555;
    float: left;
    font-family: Open sans;
    font-size: 12px;
    height: 90px;
    margin-top: 10px;
    width: 100%;
}
.widget .ad-pst {padding: 25px 40px 10px;}
.add-content .pstng-sdl {
    float: left;
    padding: 0 30px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    line-height: 30px;
    display: inline-block;
    margin-left: 30px;
    color: #fff;
    font-size: 10px;
}
/*===== Chat System =====*/
.chat-active::before {
    background: #f6f8fa none repeat scroll 0 0;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0.8;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2147483647;
}
.chat-active .sidebar {
    position: relative;
    z-index: 2147483647;
}
.chat-system-wrp {
    opacity: 0;
    background: #ffffff none repeat scroll 0 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    bottom: 75px;
    overflow: hidden;
    position: fixed;
    right: 375px;
    width: 360px;
    z-index: 2147483647;
    visibility: hidden;
}
.chat-active .chat-system-wrp {
    opacity: 1;
    visibility: visible;
}
.chat-system-innr {
    float: left;
    width: 100%;
}
.chat-hdr {
    border-bottom: 1px solid #ede9e9;
    float: left;
    padding: 20px 30px 13px 40px;
    position: relative;
    width: 100%;
}
.cht-tl {float: left;}
.cht-tl > h3 {
    color: #ffffff;
    font-size: 15px;
    margin-bottom: 2px;
    margin-top: 0;
    position: relative;
}
.cht-tl .user-status::before {
    height: 13px;
    left: -20px;
    top: 2px;
    width: 13px;
}
.cht-tl > span {
    color: #f1f1f1;
    font-size: 11px;
}
.cht-optns {
    float: right;
    list-style: outside none none;
    margin-bottom: 0;
    margin-top: 30px;
    padding-left: 0;
}
.cht-optns > li {
    color: #ffffff;
    float: left;
    font-size: 16px;
    margin-left: 12px;
}
.cht-optns > li a {
    color: inherit;
    font-size: inherit;
}
.cht-wnd-opt {
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    position: absolute;
    right: 30px;
    top: 10px;
}
.cht-wnd-opt > li {
    color: #cfcfcf;
    float: left;
    font-size: 17px;
    margin-left: 10px;
}
.cht-wnd-opt > li a {
    color: inherit;
    font-size: inherit;
}
.cht-wnd-opt > li a:hover i{
	color: #fff;
}
.cht-bdy {
    float: left;
    padding: 15px 35px 40px;
    width: 100%;
}
.cht-bdy > ul {
    float: left;
    height: 260px;
    list-style: outside none none;
    margin-bottom: 0;
    overflow-y: auto;
    padding-left: 0;
    width: 100%;
}
.cht-bdy > ul > li {
    float: left;
    margin-top: 5px;
    padding-left: 33px;
    position: relative;
    width: 100%;
}
.msg-bx {
    background: #f5f5f5 none repeat scroll 0 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #9b9b9b;
    float: left;
    font-size: 13px;
    padding: 10px 30px;
}
.chat-message.frnd .msg-bx{
	margin-left: 5px;	
}
.chat-message.me .msg-bx{
	margin-right: 5px;	
}
.chat-message.frnd{
	margin-top: 10px;	
}
.cht-bdy > ul > li.me .msg-bx {
    color: #ffffff;
    float: right;
}
.chat-message .sndr-nm {
    color: #d3d3d3;
    font-family: Open sans;
    font-size: 12px;
    left: 0;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
.chat-message .sndr-nm img{
	border-radius: 100%;
}
.cht-bdy > ul > li.me {
    padding-left: 0;
    padding-right: 33px;
}
.cht-bdy > ul > li.me .sndr-nm {
    left: auto;
    right: 0;
}
.cht-inpt-br {
    float: left;
    position: relative;
    width: 100%;
	background: none;
	border: 1px solid #eaeaea;
}
.cht-inpt-br > form {
    float: left;
    width: 100%;
}
.cht-inpt-br > form input {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: 0 none;
    color: #333;
    font-size: 13px;
    height: 50px;
    padding: 0 100px 0 15px;
}
.cht-inpt-br > form button {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: 0 none;
    color: #333;
    height: 100%;
    position: absolute;
    right: 10px;
	top: 0;
}
.cht-opt {
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    position: absolute;
    right: 40px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
.cht-opt > li {
    color: #000;
    float: left;
    font-size: 13px;
    margin-left: 10px;
    opacity: 0.4;
}
.cht-opt > li a {
    color: inherit;
    font-size: inherit;
}
/*===== Inbox =====*/
.chat-msgs {
    min-height: 519px;
    overflow: hidden;
}

.chat-msgs .cht-tl > h3 {
    color: #fff;
    font-size: 16px;
}
.chat-msgs .cht-tl > span {
    color: #fff;
}
.chat-msgs .cht-optns {margin-top: 0;}
.chat-msgs .cht-optns > li {color: #fff;}
.chat-msgs .cht-bdy > ul {height: 200px;}
.chat-msgs .comment-form {
    background: #f8f8f8 none repeat scroll 0 0;
    margin-top: 35px;
}
.chat-msgs .comment-form::before {border-bottom-color: #f8f8f8;}
.chat-msgs .comment-form > form > textarea {background: #ffffff;}
.chat-msgs .comment-form > form > textarea:focus {height: 40px;}
.chat-msgs .comment-form > form {position: relative;}
.chat-msgs .comment-form > form > a {
    color: #d6d6d6;
    position: absolute;
    right: 20px;
    top: 18px;
}
.comment-form > span label {
    cursor: pointer;
    font-weight: 400;
    line-height: inherit;
    margin-bottom: 0;
}
.chat-msgs .comment-form > span {
    line-height: 10px;
    margin-right: 30px;
}

/*===== Event Calendar =====*/
.fc-ltr .fc-basic-view .fc-day-number{
	text-align:left;	
}
.clndr .fc-toolbar {
    display: table;
    margin: 0;
    width: 100%;
	background: #61c2f1;
	border-bottom: 1px solid #fff;
}
.clndr .fc-toolbar button {
    background: rgba(255,255,255,.3);
    border: medium none;
    box-shadow: none;
    color: #ffffff;
    font-family: Open sans;
    font-size: 12px;
    font-weight: 600;
    height: auto;
    line-height: 20px;
    padding: 10px 30px;
    text-shadow: none;
    text-transform: uppercase;
    width: 282px;
	border-radius: 0;
}
.clndr .fc-toolbar h2 {
    color: #ffffff;
    display: inline-block;
    float: none;
    font-size: 20px;
    padding: 6px 0;
    text-transform: uppercase;
    vertical-align: middle;
}
.fc-toolbar .fc-center {
    display: inline-block;
    line-height: 60px;
}
.clndr .fc-day-header {
    background: #eaeaea none repeat scroll 0 0;
    color: #434343;
    font-size: 13px;
    line-height: 40px;
    position: relative;
    text-transform: capitalize;
    z-index: 1;
}
.clndr .fc td, 
.clndr .fc th {
    border: 0 none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
}
.clndr .fc-day-header:before {
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
}
.clndr .fc-day-header:nth-child(2n+2):before{background: rgba(0, 0, 0, 0.05)}
.clndr .fc-day {background:#fff}
.clndr .fc-day:nth-child(2n+1) {background:#f8f8f8}
.clndr .fc-row:nth-child(2n+1) .fc-day{background:#f8f8f8}
.clndr .fc-row:nth-child(2n+1) .fc-day:nth-child(2n+1) {background:#fff}
.clndr .fc-day-number {
    color: #747474;
    font-family: arimo;
    font-size: 14px;
    padding: 20px 30px 10px !important;
}
.clndr .fc-day-number {
    color: #747474;
    font-family: arimo;
    font-size: 14px;
    padding:10px 20px 10px !important;
}
.clndr .fc-content {
    color: #ffffff;
    float: left;
    font-size: 12px;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
}
.clndr .fc-time {
    float: left;
    width: 100%;
}
.clndr .fc-title {
    float: left;
    width: 100%;
}
.clndr .fc-row .fc-content-skeleton td.fc-event-container {padding: 10px;}
.clndr .fc-day-grid-event {
    border: 0 none;
    float: left;
    margin: 0 0 5px;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
}
.clndr .fc-day {
    background: #ffffff none repeat scroll 0 0;
    /*min-height: 365px !important;*/
}
.clndr .fc-unthemed .fc-divider, 
.clndr .fc-unthemed .fc-popover, 
.clndr .fc-unthemed .fc-row, 
.clndr .fc-unthemed tbody, 
.clndr .fc-unthemed td, 
.clndr .fc-unthemed th, 
.clndr .fc-unthemed thead {border: 0 none;}
.clndr a.fc-more {
    background: #000000 none repeat scroll 0 0;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    color: #ffffff;
    display: inline-block;
    font-size: 9px !important;
    font-weight: 700;
    margin: 0;
    padding: 6px 14px;
    text-decoration: none;
    text-transform: uppercase;
}
.clndr .fc-more-cell {padding: 0 10px !important;}
.clndr .fc-row .fc-content-skeleton td, 
.clndr .fc-row .fc-helper-skeleton td {padding: 0 10px;}
.clndr .fc-row .fc-content-skeleton td {
    color: #8d8d8d;
    font-family: Open sans;
    font-size: 14px;
    padding: 0 10px;
}
.clndr .fc-day-grid-event .fc-content {white-space: normal;}
.clndr .fc-basic-view .fc-body .fc-row {
    min-height: 320px;
    height: initial;
}
.clndr .fc-day-grid-container {
    height: auto !important;
    overflow: initial;
}
.clndr .fc td, 
.clndr .fc th {vertical-align: bottom;}
.clndr .fc-view-container table, 
.clndr .fc-view-container table tr, 
.clndr .fc-view-container table tr th, 
.clndr .fc-view-container table tr td {border: 0 none;}
/*===== Image Croper Panel =====*/
.img-crp {
    float: left;
    padding: 35px 0 0;
    width: 100%;
}
.img-crp > h3 {
    color: #333333;
    font-size: 13px;
    margin-bottom: 20px;
    margin-top: 0;
    padding: 0 35px;
    text-transform: uppercase;
}
.crp-itm {
    float: left;
    margin-bottom: 35px;
    padding: 0 35px;
    width: 100%;
}
.crp-btm {
    background: #f5f5f5 none repeat scroll 0 0;
    -webkit-border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
    float: left;
    padding: 10px 35px;
    width: 100%;
}
.skp-crpng {
    border-bottom: 1px solid;
    font-family: Open sans;
    font-size: 11px;
    line-height: 30px;
    text-transform: uppercase;
}
.imageBox {
    cursor: move;
    float: left;
    height: 450px;
    overflow: hidden;
    position: relative;
    width: 100%;
}
.thumbBox {
    bottom: 0;
    -webkit-box-shadow: 0 0 700px 700px rgba(247, 247, 247, 0.9);
    -moz-box-shadow: 0 0 700px 700px rgba(247, 247, 247, 0.9);
    -ms-box-shadow: 0 0 700px 700px rgba(247, 247, 247, 0.9);
    -o-box-shadow: 0 0 700px 700px rgba(247, 247, 247, 0.9);
    box-shadow: 0 0 700px 700px rgba(247, 247, 247, 0.9);
    left: 180px;
    position: absolute;
    right: 180px;
    top: 0;
}
.crp-btm > input#btnCrop {
    background: #800080 none repeat scroll 0 0;
    border: 0 none;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #ffffff;
    float: right;
    font-family: Open sans;
    font-size: 10px;
    line-height: 30px;
    padding: 0 20px;
}
.crp-btm > input#btnZoomIn, 
.crp-btm > input#btnZoomOut {
    background: #ffffff none repeat scroll 0 0;
    border: 1px solid #e3e3e3;
    color: #333333;
    font-family: Open sans;
    font-size: 20px;
    height: 28px;
    line-height: 28px;
    padding: 0;
    text-align: center;
    width: 28px;
}
.cropped > img {padding: 5px;}
.crp-itm .cr-slider-wrap {
    margin-bottom: -62px;
    margin-top: 50px;
    position: relative;
    width: 40%;
    z-index: 1;
}
.crp-itm .cr-slider {
    height: 1px;
    padding: 0;
}
/*===== Post Preview Calendar =====*/
.pst-prvw-clndr {
    float: left;
    padding: 70px 11% 50px;
    width: 100%;
}
.cldr {
    float: left;
    overflow: hidden;
    text-align: center;
    width: 100%;
}
.cldr .jalendar-pages {background: rgba(0, 0, 0, 0) none repeat scroll 0 0;}
.cldr .header {
    background: #454545 none repeat scroll 0 0;
    float: left;
    height: 55px;
    width: 100%;
}
.cldr .header > * {display: inline-block;}
.cldr .header .day-names {
    display: table;
    float: left;
    margin-bottom: -30px;
    width: 100%;
}
.cldr .header a {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    line-height: 55px;
    margin: 0 13%;
}
.cldr .header h1 {
    color: #ffffff;
    font-family: Open sans;
    font-size: 13px;
    font-weight: 400;
    line-height: 55px;
    margin: 0;
}
.day-names > h2 {
    color: #666666;
    display: table-cell;
    font-family: arimo;
    font-size: 11px;
    line-height: 33px;
    text-transform: uppercase;
}
.cldr .days {
    float: left;
    margin-top: 35px;
    width: 100%;
}
.cldr .days .day {
    background: #f6f6f6 none repeat scroll 0 0;
    border: 1px solid #ffffff;
    color: #333333;
    cursor: pointer;
    float: left;
    font-family: Open sans;
    font-size: 12px;
    height: 46px;
    line-height: 46px;
    margin: -1px -1px 0 0;
    width: 14.5%;
    position: relative;
}
.cldr .days .day:hover {z-index: 1;}
.cldr .days .day:nth-child(2n) {background: #fbfbfb none repeat scroll 0 0;}
.cldr .add-event {display: none;}
.cldr .days .day.today,
.cldr .days .day.selected {color: #fff;}
/*.tm-pckr.styl2 {border: 10px solid #fbfbfb;}*/
.tm-pckr.styl2 {
    background: #fbfbfb;
    padding: 10px;
}
.tm-pckr.styl2 .hasWickedpicker {
    border: 0 none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    height: 50px;
    padding: 0 20px;
    text-align: center;
    width: 100%;
}
.tm-pckr.styl2 .timr-styl {
    background: #ffffff none repeat scroll 0 0;
    padding: 45px;
}
.tm-pckr.styl2 > h3 {
    background: #fbfbfb none repeat scroll 0 0;
    color: #454545;
    padding-bottom: 22px;
}
.bst-tm {
    float: left;
    margin-top: 50px;
    width: 100%;
}
.bst-tm > h3 {
    color: #454545;
    float: left;
    font-size: 20px;
    margin-top: 0;
    width: 100%;
}
.bst-tm-lst {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}
.bst-tm-lst > li {
    color: #444444;
    float: left;
    font-family: Open sans;
    font-size: 12px;
    line-height: 15px;
    margin-top: 20px;
    width: 100%;
}
.bst-tm-lst > li span {
    display: inline-block;
    margin: 0 50px;
    width: 20%;
}
.bst-tm-lst > li i {
    color: #8f8f8f;
    float: right;
    font-style: normal;
}
.bst-tm-lst > li strong {
    display: inline-block;
    font-weight: 400;
    width: 20%;
}
.prvw-clndr-btm {
    background: #fbfbfb none repeat scroll 0 0;
    float: left;
    padding: 20px 55px;
    width: 100%;
}
.prvw-clndr-btm > a {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    color: #ffffff;
    float: right;
    font-family: Open sans;
    font-size: 11px;
    line-height: 40px;
    padding: 0 35px;
    text-transform: uppercase;
}
/*===== Calendar Edits =====*/
.scnd-pp .profile-all {
    background: #e8edf2 none repeat scroll 0 0;
    margin-top: 0;
    padding: 10px 60px 40px;
}
.scnd-pp .pst-prvw-clndr {padding: 70px 20% 50px;}
/*===== Edit Profile =====*/
.billing-sec {
    float: left;
    padding: 30px;
    width: 100%;
}
.billing-sec .field {
    float: left;
    margin-bottom: 30px;
}
.billing-sec button {
    border: medium none;    
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #ffffff;
    float: left;
    font-family: Open sans;
    font-size: 13px;
    letter-spacing: 0.25px;
    margin-top: 20px;
    padding: 12px 20px;
    text-decoration: none;
}
.billing-sec .field > label {
    float: left;
    font-family: Open sans;
    font-size: 12px;
    font-weight: normal;
    margin: 0 0 10px;
    width: 100%;
}
.billing-sec .field > label span {color: red;}

.billing-sec .field input {
    border: medium none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    float: left;
    font-size: 12px;
    height: 50px;
    padding: 0 30px;
    width: 100%;
	color: #999;
}
.billing-sec .field > select {
    border: medium none;    
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    border-radius: 40px;
    float: left;
    font-size: 12px;
    height: 50px;
    padding: 0 30px;
    width: 100%;
}
.billing-sec .field > textarea {
    border: medium none;    
    border-radius: 20px;
    float: left;
    min-height: 160px;
    padding: 20px 30px;
    width: 100%;
}
.payment li:last-child {margin: 0;}
.clndr .fc-content > img {
    height: initial;
    margin-bottom: 10px;
    width: 100%;
}
.billing-sec .select2-container--default .select2-selection--single .select2-selection__rendered {
    color: #888888;
    font-size: 12px;
    line-height: 50px;
    padding-left: 30px;
}
.billing-sec .select2-container--default .select2-selection--single {
    border: 0 none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    height: 50px;
}
.billing-sec .select2-container--default .select2-selection--single .select2-selection__arrow {
    bottom: 0;
    height: 100%;
    top: 0;
    width: 60px;
}
.slimScrollBar {
    opacity: 0.1 !important;
    width: 10px !important;
}
.crt-grp-sc {display: none;}
.evnt-icns {
    float: right;
    margin-top: 5px;
}
.evnt-icns > i {
    cursor: pointer;
    color: #fff;
    font-size: 13px;
    margin-left: 5px;
}
.img-crp-pp {
    opacity: 1;
    visibility: visible;
}
.fileContainer {cursor: pointer;}
.pst-edt-btns > li .fileContainer {margin-bottom: 0;}
.noti-bd > ul > li:hover {
    background: #eaeaea none repeat scroll 0 0;
    cursor: pointer;
}
.noti-bd > ul > li:hover i {background: #ffffff none repeat scroll 0 0;}
.clndr .fc-event {background: transparent;}

.who-post-detail > textarea {
    border: 0 none;
    color: #7f7f7f;
    font-family: Open sans;
    font-size: 13px;
    height: 130px;
    line-height: 19px;
    width: 100%;
}
.pst-carousel .pst-frmt > a > img {height: 207px;}



.wickedpicker {
    -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12) !important;
    -moz-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12) !important;
    -ms-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12) !important;
    -o-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12) !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12) !important;
    width: 292px;
    z-index: 2147483647;
}
.tm-pckr .hasWickedpicker, 
.tm-pckr2 .hasWickedpicker {
    border: 0 none;
    float: left;
    padding: 20px;
    text-align: center;
    width: 100%;
}
/*===== FB Post =====*/
.fb-pst-prvw {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #ddd;
    float: left;
    padding: 25px;
    position: relative;
    width: 100%;
}
.fb-sndr-info {
    float: left;
    width: 100%;
}
.fb-sndr-info > img,
.twt-sndr-info > img {
    -webkit-border-radius: 2.85px;
    -moz-border-radius: 2.85px;
    border-radius: 2.85px;
    float: left;
    margin-right: 7px;
}
.fb-sndr-nm {display: table;}
.fb-sndr-nm > h5 {
    color: #333;
    float: left;
    font-size: 13px;
    margin: 0 5px 0 0;
}
.fb-sndr-nm > h5 a {color: inherit;}
.fb-sndr-nm > span {
    color: #444;
    float: left;
    font-family: Open sans;
    font-size: 11px;
}
.fb-pst-shr-inf {
    float: left;
    width: 100%;
}
.fb-pst-shr-inf > i {
    color: #939393;
    float: left;
    font-family: Open sans;
    font-size: 10px;
    font-style: normal;
    margin-right: 20px;
}
.fb-slct-pst-typ {
    float: left;
    position: relative;
}
.fb-slct-pst-typ > span {
    color: #8e99a5;
    font-family: Open sans;
    font-size: 11px;
    padding-right: 15px;
    position: relative;
}
.fb-slct-pst-typ > span i {
    color: #939393;
    margin-right: 5px;
}
.fb-slct-pst-typ > span::before {
    content: "\f0d7";
    font-family: fontawesome;
    position: absolute;
    right: 0;
    top: 0;
}
.fb-slct-pst-typ > ul {
    background: #fff none repeat scroll 0 0;
    list-style: outside none none;
    margin-bottom: 0;
    opacity: 0;
    padding: 6px 15px;
    position: absolute;
    top: 110%;
    visibility: hidden;
    width: 90px;
    z-index: 1;
}
.fb-slct-pst-typ > ul li {
    color: #555;
    font-family: Open sans;
    font-size: 11px;
    margin: 5px 0;
}
.fb-slct-pst-typ > ul li i {margin-right: 5px;}
.fb-slct-pst-typ.active > ul {
    opacity: 1;
    visibility: visible;
}
.fb-pst-dta,
.twt-pst-dta {
    float: left;
    margin-top: 15px;
    width: 100%;
}
.fb-pst-dta > textarea,
.twt-pst-dta > textarea {
    background: transparent;
    border: 0 none;
    color: #555;
    float: left;
    font-family: Open sans;
    font-size: 12px;
    line-height: 17px;
    margin-bottom: 20px;
    padding: 0 20px 0 10px;
    width: 100%;
}
.fb-wrds-lft,
.twt-wrds-lft {
    color: #b2b2b2;
    float: right;
    font-family: Open sans;
    font-size: 11px;
}
.fb-pst-imgs,
.twt-pst-imgs {
    float: left;
    margin-top: 15px;
    width: 100%;
}
.fb-pst-img,
.twt-pst-img {
    float: left;
    margin-bottom: 1px;
    width: 100%;
}
.fb-pst-img a,
.twt-pst-img a {display: block;}
.fb-pst-img img,
.twt-pst-img img {width: 100%;}
.fb-pst-lk-cm {
    border-top: 1px solid #ddd;
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    margin-top: 12px;
    padding-left: 0;
    padding-top: 5px;
    width: 100%;
}
.fb-pst-lk-cm > li {
    color: #808080;
    float: left;
    font-family: Open sans;
    font-size: 11px;
    position: relative;
}
.fb-pst-lk-cm > li::before {
    content: "-";
    margin: 0 20px;
}
.fb-pst-lk-cm > li:first-child::before {display: none;}
.fb-pst-lk-cm > li a {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
}
.fb-pst-lk-cm > li a i {margin-right: 5px;}

/*===== Tweeter Post =====*/
.twt-pst-prvw {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #e5e5e5;
    float: left;
    padding: 25px;
    position: relative;
    width: 100%;
}
.twt-sndr-info {
    float: left;
    width: 100%;
}
.twt-sndr-info > img {
    float: left;
    margin-right: 7px;
}
.twt-sndr-nm {display: table;}
.twt-sndr-nm > h5 {
    color: #333;
    float: left;
    font-size: 13px;
    margin: 6px 5px 0 0;
}
.twt-sndr-nm > h5 a {color: inherit;}
.twt-sndr-nm > span {
    color: #a6a6a6;
    font-family: Open sans;
    font-size: 11px;
}
.twt-sndr-nm > span a {color: inherit;}

.twt-pst-dta {
    margin-top: -10px;
    padding-left: 40px;
}
.twt-pst-dta > textarea {margin-bottom: 0;}
.twt-pst-lk-cm {
    float: left;
    list-style: outside none none;
    margin-bottom: 5px;
    margin-top: 10px;
    padding-left: 0;
    width: 100%;
}
.twt-pst-lk-cm > li {
    color: #b2b2b2;
    float: left;
    font-size: 15px;
    margin-right: 13px;
}
.twt-pst-lk-cm > li a {
    color: inherit;
    font-size: inherit;
}
/*===== Google Plus Post =====*/
.gpl-sndr-info {
    float: left;
    margin-bottom: 20px;
    padding-left: 15px;
    width: 100%;
}
.gpl-sndr-info > img {
    float: left;
    margin-right: 10px;
}
.gpl-sndr-nm > h5 {
    color: #333;
    float: left;
    font-size: 13px;
    margin: 10px 10px 0 0;
}
.gpl-sndr-nm > h5 a {color: inherit;}
.gpl-sndr-nm > span {
    color: #686868;
    display: inline-block;
    font-family: Open sans;
    font-size: 11px;
    margin-top: 8px;
}
.gpl-sndr-nm > span a {color: inherit;}
.gpl-sndr-nm > i {
    color: #a6a6a6;
    float: right;
    font-family: Open sans;
    font-size: 11px;
    font-style: normal;
    margin-top: 8px;
}
.gpl-pst-dta {
    float: left;
    width: 100%;
}
.gpl-pst-dta > textarea {
    background: transparent none repeat scroll 0 0;
    border: 0 none;
    color: #555;
    height: 70px;
    font-family: Open sans;
    font-size: 12px;
    padding-left: 15px;
    width: 100%;
}
.gpl-pst-imgs {
    float: left;
    margin-top: 50px;
    width: 100%;
}
.gpl-crsl {
    float: left;
    width: 100%;
}
.gpl-crsl .owl-nav {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.gpl-crsl .owl-nav > div {
    background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0;
    bottom: 0;
    color: #a6a6a6;
    font-size: 24px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 46px;
}
.gpl-crsl .owl-nav > div.owl-next {right: 0;}
.gpl-crsl .owl-nav > div.owl-prev {left: 0;}
.gpl-crsl .owl-nav > div i {
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, 50%);
    -moz-transform: translate(-50%, 50%);
    -ms-transform: translate(-50%, 50%);
    -o-transform: translate(-50%, 50%);
    transform: translate(-50%, 50%);
}
.gpl-crsl .owl-nav > div:hover {color: #fff;}
.gpl-pst-lk-cm {
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}
.gpl-pst-lk-cm > li {
    color: #757575;
    float: right;
    font-size: 13px;
    margin-left: 7px;
    margin-top: 13px;
    text-align: center;
}
.gpl-pst-lk-cm > li:first-child {
    float: left;
    margin-left: 0;
}
.gpl-pst-lk-cm > li a {
    background: #eee none repeat scroll 0 0;
    color: inherit;
    display: inline-block;
    font-size: inherit;
    line-height: 36px;
    width: 36px;
}
.gpl-pst-lk-cm > li a:hover {color: #fff;}
/*===== BSP Post =====*/
.bsp-pst-prvw {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #e5e5e5;
    float: left;
    padding: 30px;
    width: 100%;
}
.bsp-pst-prvw > img {
    float: left;
    margin-right: 7px;
}
.bsp-pst-info {
    float: left;
    margin-bottom: 20px;
    width: 100%;
}
.bsp-pst-info > img {
    float: left;
    margin-right: 7px;
}
.bsp-pst-info > h2 {
    color: #333;
    display: inline-block;
    font-size: 13px;
    margin: 7px 0 0;
}
.bsp-pst-info > h2 a {color: inherit;}
.tm {
    color: #9b9b9b;
    float: right;
    font-family: Open sans;
    font-size: 11px;
}
.bsp-pst-dta {
    float: left;
    width: 100%;
}
.bsp-pst-dta > textarea {
    background: transparent none repeat scroll 0 0;
    border: 0 none;
    color: #555;
    font-family: Open sans;
    font-size: 12px;
    width: 100%;
}
.bsp-pst-imgs {
    float: left;
    margin-top: 5px;
    width: 100%;
}
.bsp-pst-imgs > .row {margin: 0 -2.5px;}
.bsp-pst-imgs > .row > div {padding: 0 2.5px;}
.bsp-pst-img {margin-top: 5px;}
.bsp-pst-shr-cmt {
    float: left;
    list-style: outside none none;
    margin: 26px 0 0;
    padding-left: 0;
    width: 100%;
}
.bsp-pst-shr-cmt > li {
    color: #9b9b9b;
    float: left;
    font-size: 11px;
    margin-right: 20px;
    margin-top: 5px;
}
.bsp-pst-shr-cmt > li a {
    color: inherit;
    font-size: inherit;
}
.bsp-pst-shr-cmt > li a i {
    border: 1px solid #9b9b9b;
    font-size: 8px;
    height: 15px;
    line-height: 15px;
    margin-right: 5px;
    text-align: center;
    width: 15px;
}
.bsp-pst-shr-cmt > li:last-child a i {
    border: 0 none;
    font-size: 15px;
    height: initial;
    line-height: initial;
    width: initial;
}
/*===== Post Options =====*/
.pst-optns {
    color: #c9c9c9;
    font-size: 18px;
    position: absolute;
    right: 10px;
    top: 10px;
}
.pst-optns > i {
    cursor: pointer;
    height: 20px;
    text-align: center;
    width: 20px;
}
.pst-optns > ul {
    background: #fff none repeat scroll 0 0;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    -o-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    list-style: outside none none;
    margin-bottom: 0;
    opacity: 0;
    padding: 10px 0;
    position: absolute;
    right: 0;
    top: 100%;
    visibility: hidden;
    width: 180px;
    z-index: 9;
}
.pst-optns > ul li {
    float: left;
    font-size: 12px;
    width: 100%;
}
.pst-optns > ul li a {
    float: left;
    font-size: inherit;
    padding: 5px 20px;
    width: 100%;
}
.pst-optns > ul li a:hover {color: #fff;}
.pst-optns.active > ul {
    opacity: 1;
    visibility: visible;
}
.bsp-pst-img img {width: 100%;}


.cls-adjs-btns {
    float: left;
    margin-bottom: 30px;
    width: 100%;
}
.cls-adjs-btns > a {
    background: #333 none repeat scroll 0 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    font-family: Open sans;
    font-size: 12px;
    line-height: 40px;
    padding: 0 30px;
}
.tme-pckr .tab-pane > .row {display: none;}
/*===== Forsquare Post =====*/
.forsq-pst-prvw {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #e5e5e5;
    float: left;
    padding: 30px;
    width: 100%;
    text-align: left;
}
.forsq-pst-info {
    float: left;
    margin-bottom: 30px;
    width: 100%;
}
.forsq-pst-info > img {
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    float: left;
    margin-right: 10px;
}
.forsq-pst-info > h2 {
    color: #000;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
}
.forsq-pst-info > h2 a {color: inherit;}
.forsq-pst-dv {
    float: left;
    width: 100%;
}
.forsq-pst-dv > img {
    float: left;
    margin-right: 25px;
}
.forsq-pst-dta > h4 {
    color: #555;
    font-family: Open sans;
    font-size: 17px;
    margin: 0 0 7px;
}
.forsq-pst-dta > h4 a {color: inherit;}
.forsq-pst-dta > span {
    color: #9b9b9b;
    display: block;
    font-size: 11px;
}
.forsq-pst-dta > textarea {
    background: transparent none repeat scroll 0 0;
    border: 0 none;
    color: #555;
    float: left;
    font-family: Open sans;
    font-size: 12px;
    height: 55px;
    margin-top: 16px;
    width: 100%;
}
.forsq-pst-dta {display: table;}
.forsq-pst-dta > a {
    color: #9b9b9b;
    float: left;
    font-family: Open sans;
    font-size: 11px;
    margin-top: 20px;
}
.forsq-pst-dta > a i {font-size: 17px;}

/*--- right menu style---*/

.right-menu {
    background: #32343c none repeat scroll 0 0;
    height: 100%;
    position: fixed;
    right: -100%;
    top: 0;
    width: 310px;
    z-index: 999;
	transition: all 0.4s linear 0s;
}
.right-menu.active{
	right: 0;	
}
.admin-area {
    padding: 32px 40px;
}
.admin-avatar {
    float: left;
}
.admin-info {
    overflow: hidden;
    padding-left: 13px;
}
.admin-avatar > img {
    border-radius: 100%;
    width: auto;
}
.admin-info > span {
    color: #fff;
    font: 12px "Poppins";
    text-transform: capitalize;
}
.admin-info > h5 {
    color: #fff;
    font: bold 14px "poppins";
    margin-top: 0;
}
.admin-menu {
    float: left;
    list-style: outside none none;
    padding-left: 0;
    width: 100%;
}
.admin-menu > li {
    border-bottom: 2px solid #2f3038;
    display: block;
    line-height: 58px;
    padding: 0 40px;
}
.admin-menu > li a {
    color: #bebebe;
    display: inline-block;
    font: bold 13px "poppins";
    text-transform: uppercase;
    vertical-align: middle;
    width: 100%;
}
.admin-menu > li i {
    display: inline-block;
    margin-right: 13px;
    vertical-align: text-bottom;
}
.admin-menu > li > a span {
    background: #d64848 none repeat scroll 0 0;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    float: right;
    font-size: 11px;
    font-weight: normal;
    padding: 0 4px;
}
/*--- setting dropdown ---*/

.noti-lst.setting > ul {
    float: left;
    list-style: outside none none;
    padding: 0;
    width: 100%;
}
.noti-lst.setting > ul > li {
    border-bottom: 2px solid #f2f2f2;
    line-height: 55px;
    padding: 0 35px;
}
.noti-lst.setting > ul > li a {
    color: #666;
    display: inline-block;
    font: bold 13px "poppins";
    text-transform: uppercase;
    width: 100%;
}
.noti-lst.setting > ul > li a i {
    margin-right: 10px;
}
.noti-lst.setting {
    left: -205px;
    right: initial;
    top: 162%;
}

.noti-lst.setting.active {
    opacity: 1 !important;
	visibility: visible !important;
}
.fc-day-number.fc-other-month{
	opacity: 1;
}
`