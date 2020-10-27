import styled from 'styled-components';

export const Local = styled.div`
    
    height:0px;

    z-index: 0;
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
	margin-top: 30px;
    display: inline-block;
    position: absolute;    

    footer {
    background: #fff;
    float: left;
    padding: 75px 0;
    width: 100%;
    position: relative;
}



    footer::before {
        background: rgba(0, 0, 0, 0) linear-gradient(to left, #ffffff 0%, #993399 50%, #ffffff 90%) repeat scroll 0 0;
        content: "";
        height: 5px;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }

    footer .logo {
        margin-bottom: 15px;
        width: 100%;
    }

    .ti-map-alt {
        display: inline-block;
        margin-right: 10px;
        vertical-align: sub;
        width: 20px;
    }

    .foot-logo {
    display: inline-block;
    width: 100%;
}

.foot-logo > p {
    color: #545454;
}

.bottombar {
    background: #f6f6f6;
    float: left;
    padding: 20px 0;
    width: 100%;
}



footer .logo {
    margin-bottom: 15px;
    width: 100%;
}


    .location > li i {
        margin-right: 10px;
        color: #4b4b4b;
    }

    .location > li p {
        display: inline-block;
        font-size: 14px;
        vertical-align: top;
        width: 88%;
        margin-bottom: 0;
        color: #545454;
    }

    
    .list-style > li {
        display: inline-block;
        font-size: 14px;
        margin-bottom: 12px;
        text-transform: capitalize;
        width: 100%;
    }

    .list-style > li:last-child {
        margin-bottom: 0;
    }

    .list-style > li > i {
        margin-right: 15px;
    }

    .list-style > li a {
        position: relative;
    }

    footer .widget-title h4::before {
    bottom: -6px;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 20%;
    }

    .widget {
    float: left;
    width: 100%;
}
    footer .widget-title {
        background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    }

        
    .colla-apps {
        float: left;
        list-style: outside none none;
        padding-left: 0;
        width: 100%;
    }

    .colla-apps > li {
        display: inline-block;
        width: 100%;
    }

    .colla-apps > li a {
        border: 1px solid #5d6371;
        border-radius: 5px;
        display: inline-block;
        font-size: 16px;
        margin-bottom: 15px;
        padding: 5px 0;
        text-align: center;
        text-transform: capitalize;
        width: 100%;
        transition: all 0.2s linear 0s;
    }

    .colla-apps > li:last-child a {
        margin-bottom: 0;
    }

    .colla-apps > li a:hover {
        color: #fff;
    }

    .colla-apps > li a i {
        margin-right: 12px;
    }


`