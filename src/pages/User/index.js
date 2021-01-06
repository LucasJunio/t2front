import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addUserRequest, readUserRequest, updateUserRequest, deleteUserRequest } from '../../store/modules/user/actions';

import { Local } from './style';

import JwtPopup from './jwtpopup';

const initialState = {
    modal_open: false, email: null, password: null
};

export default function User() {

    const [
        { email, password, modal_open },
        setState
    ] = useState(initialState);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(readUserRequest());
        dispatch(readUserRequest());
    }, []);

    let user = useSelector(state => state.user.user )

    const refresh = (() => {
        dispatch(readUserRequest());
    });

    function addUser(object, resolve) {

        dispatch(addUserRequest(object, () => { refresh(); resolve(); }));
    }
    
    function updateUser(id, object, resolve) {
        dispatch(updateUserRequest(id, object, () => { refresh(); resolve(); }));
    }

    function deleteUser(id, resolve) {
        dispatch(deleteUserRequest(id, () => { refresh(); resolve(); }));
    }

    const getUserJson = rowData => ({ email: rowData.email, password: rowData.password })


    return (

        <Local>
            <MaterialTable
                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}

                columns={[
                    { title: 'Nome', field: 'name' },
                    { title: 'Password', field: 'password' },
                    { title: 'Email', field: 'email' },
                    { title: 'Telefone', field: 'telephone' },
                    { title: 'CPF', field: 'cpf' },
                ]}

                actions={[
                    {
                        icon: 'fitness_center',
                        tooltip: 'Exibir JWT',
                        onClick: (event, rowData) => {
                            setState(prevState => ({ ...prevState,...getUserJson(rowData), modal_open: true }));
                        }
                    }
                ]}

                data={user}
                title="Usuário"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['name', 'password', 'email', 'telephone', 'cpf'].some(field => !newData[field])) return reject()
                        addUser(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['name', 'password', 'email', 'telephone', 'cpf'].some(field => !newData[field])) return reject()
                            updateUser(oldData._id, newData, resolve);
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteUser(oldData._id, resolve);
                    }),
                }}
            />

            {(modal_open == true)? (
              <JwtPopup
                modal_open={modal_open}
                closeFn={() => setState(prevState => ({ ...prevState, modal_open: false }))}
                email={email}
                password={password}
              />
            ): null}

        </Local>
    );
}