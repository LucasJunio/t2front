import styled from 'styled-components';

export const Local = styled.div`

    right: 30px;   
    position:absolute;
    left: 240px;
    top:80px;
    bottom: 50px;
    overflow-y:auto;




    /* bottom logout */
.btn-logout {
position: absolute;
width: 25px;
left: 5px;
top: 1px;
font-size: 0.8em;
color: white;
border: 1px solid #e2e2e2;
background-color: rgb(91, 42, 137);
border-radius: 20px/50px;
text-decoration: none;
cursor: pointer;
transition: all 0.3s ease-out;
}
.btn-logout:hover {
background: white;
color: black;
}



/*--- checkout page ---*/

.checkout-meta > h4,
.checkout-total > h4 {
    font-size: 20px;
    letter-spacing: 0.5px;
    margin-bottom: 22px;
    text-transform: uppercase;
}

.c-form input[type="checkbox"] {
    margin-right: 12px;
    width: auto;
}

.c-form label {
    color: #858585;
    font-size: 13px;
}

.c-form label a {
    color: #5898f0;
    -webkit-text-decoration: underline;
    -moz-text-decoration: underline;
    -ms-text-decoration: underline;
    -o-text-decoration: underline;
    text-decoration: underline;
}

.c-form {
    float: left;
    width: 100%;
    padding: 0 10px;
}

.c-form input,
.c-form textarea {
    background: #f9f9f9 none repeat scroll 0 0;
    border: medium none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    color: #666;
    display: inline-block;
    font-size: 12px;
    letter-spacing: 0.3px;
    padding: 16px 30px;
    width: 100%;
}

.c-form > .row > div {
    padding: 5px;
}

.c-form input.submit,
.c-form button.submit {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-top: 20px;
    padding-left: 43px;
    padding-right: 43px;
    width: auto;
}

.c-form button.submit {
    border: medium none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    display: inline-block;
    font-size: 12px;
    letter-spacing: 0.1px;
    padding-bottom: 15px;
    padding-top: 15px;
    text-transform: uppercase;
}

.c-form input.submit:hover,
.c-form button.submit:hover {
    background: #333;
}

button.submit-checkout {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    margin-top: 30px;
    padding: 10px 30px;
    border: none;
    color: #fff;
}

.checkout-total {
    display: inline-block;
    width: 100%;
}

.total-box {
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #eaeaea;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    display: inline-block;
    padding: 30px;
    width: 100%;
    margin-top: 5px;
}

.total-box > ul {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}

.total-box > ul > li {
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
}

.total-box > ul > li span {
    float: right;
}

.total-box > ul > li.final-total {
    border-top: 1px solid #d6d6d6;
    font-weight: 500;
    margin-top: 10px;
    padding-top: 20px;
    text-transform: uppercase;
}

.payment-method .form-radio > .radio {
    width: 100%;
}

.payment-method {
    display: inline-block;
    margin-top: 20px;
    width: 100%;
}

.additional {
    display: inline-block;
    margin-top: 30px;
    width: 100%;
}

.additional > h4 {
    display: inline-block;
    font-size: 18px;
    margin-bottom: 15px;
    width: 100%;
}











`
