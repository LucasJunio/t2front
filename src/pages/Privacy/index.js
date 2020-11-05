import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addPrivacyRequest, readPrivacyRequest, updatePrivacyRequest, deletePrivacyRequest } from '../../store/modules/privacy/actions';

import { Local } from './style';
import {getUser} from "../../store/modules/auth/authLocalStorage";

export default function Privacy() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readPrivacyRequest());
    }, []);

    let privacy = useSelector(state => state.privacy.privacy )

    const refresh = (() => {
        dispatch(readPrivacyRequest());
    });

    function addPrivacy(object, resolve) {
        dispatch(addPrivacyRequest(object, () => { refresh(); resolve(); }));
    }

    function updatePrivacy(id, object, resolve) {
        dispatch(updatePrivacyRequest(object, () => { refresh(); resolve(); }));
    }

    function deletePrivacy(id, resolve) {
        dispatch(deletePrivacyRequest(id, () => { refresh(); resolve(); }));
    }

    let user = getUser()

    return (
        <Local>
            <MaterialTable

                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}

                columns={[
                    { title: 'Conquistas', field: 'conquests', lookup: { 0: 'ATIVO', 1: 'DESATIVADO'} },
                    { title: 'Conexões', field: 'connections', lookup: { 0: 'ATIVO', 1: 'DESATIVADO'} },
                    { title: 'Competências', field: 'skill', lookup: { 0: 'ATIVO', 1: 'DESATIVADO'} },
                    { title: 'Currículo', field: 'curriculum', lookup: { 0: 'ATIVO', 1: 'DESATIVADO'} },
                    { title: 'Dica', field: 'tip', lookup: { 0: 'ATIVO', 1: 'DESATIVADO'} },
                ]}
                data={privacy}
                title="Privacidade"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['conquests', 'connections', 'skill', 'curriculum', 'tip'].some(field => !newData[field])) return reject()
                        newData["id_user"] = user.id
                        addPrivacy(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['conquests', 'connections', 'skill', 'curriculum', 'tip'].some(field => !newData[field])) return reject()
                            updatePrivacy(oldData.id, newData, resolve);
                        } else {
                            resolve();
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deletePrivacy(oldData.id, resolve)
                    }),
                }}
            />
        </Local>
    );
}
