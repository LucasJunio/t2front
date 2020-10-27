import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import MaterialTable from 'material-table'

import {
    addConquestRequest,
    readConquestRequest,
    updateConquestRequest,
    deleteConquestRequest
} from '../../store/modules/conquest/actions';

import {Local} from './style';

export default function Conquest() {

    let conquest = []

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readConquestRequest());
    }, []);

    conquest = useSelector(state => state.conquest.conquest)

    const refresh = (() => {
        dispatch(readConquestRequest());
    });

    function addConquest(object, resolve) {
        console.log('object', object)
        dispatch(addConquestRequest(object, () => {
            refresh();
            resolve();
        }));
    }

    function updateConquest(id, object, resolve) {
        dispatch(updateConquestRequest(object, () => {
            refresh();
            resolve();
        }));
    }

    function deleteConquest(id, resolve) {
        dispatch(deleteConquestRequest(id, () => {
            refresh();
            resolve();
        }));
    }

    return (
        <Local>
            <MaterialTable

                options={{
                    headerStyle: {fontWeight: 'bold', fontSize: '12px', backgroundColor: 'rgb(240, 230, 255)'},
                    searchFieldStyle: {backgroundColor: 'rgb(242, 242, 242)'}
                }}

                columns={[
                    {title: 'Nome', field: 'name'},
                    {title: 'Tipo', field: 'type_conquest', lookup: {0: 'Medalha', 1: 'Troféu'}},
                    {title: 'Pontuação', field: 'punctuation'}
                ]}
                data={conquest}
                title="Conquista"

                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if (['name', 'type_conquest', 'punctuation'].some(field => !newData[field])) return reject()
                            addConquest(newData, resolve);

                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if (oldData) {
                                if (['name', 'type_conquest', 'punctuation'].some(field => !newData[field])) return reject()
                                updateConquest(oldData.id, newData, resolve);
                            } else {
                                resolve();
                            }
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            deleteConquest(oldData.id, resolve);
                        }),
                }}
            />
        </Local>
    );
}
