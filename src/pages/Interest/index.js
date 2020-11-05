import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addUserInterestRequest, readUserInterestRequest, updateUserInterestRequest, deleteUserInterestRequest } from '../../store/modules/userinterest/actions';
import {readInterestRequest} from "../../store/modules/interest/actions";

import { Local } from './style';
import { SingleSelect } from "react-select-material-ui";
import {getUser} from "../../store/modules/auth/authLocalStorage";

export default function Interest() {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(readUserInterestRequest());
        dispatch(readInterestRequest());
    }, []);

    let userinterest = useSelector(state => state.userinterest.userinterest )
    let interests = useSelector(state => state.interest.interest )

    const refresh = (() => {
        dispatch(readUserInterestRequest());
    });

    function addUserInterest(object, resolve) {

        dispatch(addUserInterestRequest(object, () => { refresh(); resolve(); }));
    }
    
    function updateUserInterest(id, object, resolve) {
        dispatch(updateUserInterestRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteUserInterest(id, resolve) {
        dispatch(deleteUserInterestRequest(id, () => { refresh(); resolve(); }));
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
                    {
                        title: 'Interesse', field: 'id_interest',  lookup: interests.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                        editComponent: props => (
                          <SingleSelect
                            value={props.value}
                            placeholder="Selecione um interesse"
                            options={interests.map(el => ({label: el.name, value: el.id}))}
                            onChange={value => props.onChange(value)}
                          />
                        )
                    }
                ]}

                data={userinterest}
                title="Interesse do usuário"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['id_interest'].some(field => !newData[field])) return reject()
                        newData["id_user"] = user.id
                        addUserInterest(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['id_interest'].some(field => !newData[field])) return reject()
                            updateUserInterest(oldData.id, newData, resolve);
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteUserInterest(oldData.id, resolve);
                    }),
                }}
            />
        </Local>
    );
}