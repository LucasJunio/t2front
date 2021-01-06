import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import MaterialTable from 'material-table'

import Popup from "reactjs-popup";
import { returnJwtRequest } from "../../store/modules/user/actions";

export default function JwtPopup(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(returnJwtRequest(props.email, props.password));
    }, []);

    let token = useSelector(state => state.user.token)

    return (
        <div>
            <Popup modal open={true} onClose={() => {
                props.closeFn();
            }} overlayStyle={{'overflowY': 'scroll'}}>
                <MaterialTable
                    options={{
                        headerStyle: {fontWeight: 'bold', fontSize: '12px', backgroundColor: 'rgb(240, 230, 255)'},
                        searchFieldStyle: {backgroundColor: 'rgb(242, 242, 242)'}
                    }}

                    columns={[
                        { title: 'Token JWT', field: 'token' },
                    ]}
                    data={token}
                    title="JWT do usuário Selecionado"

                />
            </Popup>
        </div>
    )
}
