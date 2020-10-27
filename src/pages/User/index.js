import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import MaterialTable from 'material-table'
import TextField from '@material-ui/core/TextField';

import {SingleSelect} from "react-select-material-ui";

import {addUserRequest, readUserRequest, updateUserRequest, deleteUserRequest} from '../../store/modules/user/actions';
import {readOfficeRequest} from '../../store/modules/office/actions';

import {Local} from './style';
import {readCompanyRequest} from "../../store/modules/company/actions";

export default function User() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readUserRequest());
        dispatch(readOfficeRequest());
        dispatch(readCompanyRequest());
    }, []);

    let user = useSelector(state => state.user.user)
    let offices = useSelector(state => state.office.office)
    let companies = useSelector(state => state.company.company)

    const refresh = (() => {
        dispatch(readUserRequest());
    });

    function addUser(object, resolve) {
        dispatch(addUserRequest(object, () => {
            refresh();
            resolve();
        }));
    }

    function updateUser(id, object, resolve) {
        dispatch(updateUserRequest(object, () => {
            refresh();
            resolve();
        }));
    }

    function deleteUser(id, resolve) {
        dispatch(deleteUserRequest(id, () => {
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
                data={user}
                title="Usuário"

                columns={[
                    {title: 'Nome', field: 'name'},
                    {
                        title: 'Senha', field: 'password',
                        editComponent: props => (
                            <TextField
                                type="password"
                                value={props.value}
                                onChange={e => props.onChange(e.target.value)}
                            />)
                    },
                    {title: 'Email', field: 'email'},
                    {title: 'Tipo', field: 'type', lookup: {0: 'Comum', 1: 'Gerente', 2: 'Administrador'}},
                    {
                        title: 'Empresa',
                        field: 'id_company',
                        lookup: companies.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                        editComponent: props => (
                            <SingleSelect
                                value={props.value}
                                placeholder="Selecione uma empresa"
                                options={companies.map(el => ({label: el.name, value: el.id}))}
                                onChange={value => props.onChange(value)}
                            />
                        )
                    },
                    {
                        title: 'Cargo',
                        field: 'id_office',
                        lookup: offices.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                        editComponent: props => (
                            <SingleSelect
                                value={props.value}
                                placeholder="Selecione um cargo"
                                options={offices.map(el => ({label: el.name, value: el.id}))}
                                onChange={value => props.onChange(value)}
                            />
                        )
                    },
                    {title: 'Gênero', field: 'gender', lookup: {0: 'Feminino', 1: 'Masculino'}},
                    {title: 'Data de nascimento', field: 'birth'}
                ]}

                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if (['name', 'password', 'email', 'type', 'id_company', 'id_office', 'gender', 'birth'].some(field => !newData[field])) return reject()
                            addUser(newData, resolve);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if (oldData) {
                                if (['name', 'password', 'email', 'type', 'id_company', 'id_office', 'gender', 'birth'].some(field => !newData[field])) return reject()
                                if (['id_company', 'id_office'].some(field => newData[field] == oldData[field])) return reject()
                                updateUser(oldData.id, newData, resolve);
                            }
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            deleteUser(oldData.id, resolve);
                        }),
                }}
            />
        </Local>
    );
}
