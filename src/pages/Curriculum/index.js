import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addFormationRequest, readFormationRequest, updateFormationRequest, deleteFormationRequest } from '../../store/modules/formation/actions';
import { addExtraRequest, readExtraRequest, updateExtraRequest, deleteExtraRequest } from '../../store/modules/extra/actions';
import { addExperienceRequest, readExperienceRequest, updateExperienceRequest, deleteExperienceRequest } from '../../store/modules/experience/actions';

import { Local } from './style';
import {getUser} from "../../store/modules/auth/authLocalStorage";

export default function Curriculum() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readFormationRequest());
        dispatch(readExtraRequest());
        dispatch(readExperienceRequest());
    }, []);

    let formation = useSelector(state => state.formation.formation )
    let extra = useSelector(state => state.extra.extra )
    let experience = useSelector(state => state.experience.experience )

    const refresh = (() => {
        dispatch(readFormationRequest());
        dispatch(readExtraRequest());
        dispatch(readExperienceRequest());
    });

    function addFormation(object, resolve) {
        dispatch(addFormationRequest(object, () => { refresh(); resolve(); }));
    }

    function updateFormation(id, object, resolve) {
        dispatch(updateFormationRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteFormation(id, resolve) {
        dispatch(deleteFormationRequest(id, () => { refresh(); resolve(); }));
    }

    function addExtra(object, resolve) {
        dispatch(addExtraRequest(object, () => { refresh(); resolve(); }));
    }

    function updateExtra(id, object, resolve) {
        dispatch(updateExtraRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteExtra(id, resolve) {
        dispatch(deleteExtraRequest(id, () => { refresh(); resolve(); }));
    }

    function addExperience(object, resolve) {
        dispatch(addExperienceRequest(object, () => { refresh(); resolve(); }));
    }

    function updateExperience(id, object, resolve) {
        dispatch(updateExperienceRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteExperience(id, resolve) {
        dispatch(deleteExperienceRequest(id, () => { refresh(); resolve(); }));
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
                    { title: 'Instituição', field: 'institution'},
                    { title: 'Ano de início', field: 'start_year'},
                    { title: 'Ano de término', field: 'end_year'},
                    { title: 'Descrição', field: 'description'}
                ]}
                data={formation}
                title="Formação"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['institution', 'start_year', 'end_year', 'description'].some(field => !newData[field])) return reject()
                        newData["id_user"] = user.id
                        addFormation(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['institution', 'start_year', 'end_year', 'description'].some(field => !newData[field])) return reject()
                            updateFormation(oldData.id, newData, resolve);
                        } else {
                            resolve();
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteFormation(oldData.id, resolve)
                    }),
                }}
            />

            <MaterialTable

                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}

                columns={[
                    { title: 'Título', field: 'title'},
                    { title: 'Descrição', field: 'description'}
                ]}
                data={extra}
                title="Extra"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['title', 'description'].some(field => !newData[field])) return reject()
                        newData["id_user"] = user.id
                        addExtra(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['title', 'description'].some(field => !newData[field])) return reject()
                            updateExtra(oldData.id, newData, resolve);
                        } else {
                            resolve();
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteExtra(oldData.id, resolve)
                    }),
                }}
            />

            <MaterialTable

                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}

                columns={[
                    { title: 'Cargo', field: 'office'},
                    { title: 'Empresa', field: 'company'},
                    { title: 'Localidade', field: 'locality'},
                    { title: 'Data início', field: 'date_start'},
                    { title: 'Data fim', field: 'date_end'},
                    { title: 'Descrição', field: 'description'},
                ]}
                data={experience}
                title="Experiência"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['office', 'company', 'locality', 'date_start', 'date_end', 'description'].some(field => !newData[field])) return reject()
                        newData["id_user"] = user.id
                        addExperience(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['office', 'company', 'locality', 'date_start', 'date_end', 'description'].some(field => !newData[field])) return reject()
                            updateExperience(oldData.id, newData, resolve);
                        } else {
                            resolve();
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteExperience(oldData.id, resolve)
                    }),
                }}
            />
        </Local>
    );
}
