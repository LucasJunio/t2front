import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { SingleSelect } from "react-select-material-ui";

import { addOfficeRequest, readOfficeRequest, updateOfficeRequest, deleteOfficeRequest } from '../../store/modules/office/actions';
import {readDepartmentRequest} from '../../store/modules/department/actions';

import { Local } from './style';
import SkillPopup from './skillpopup';

const initialState = {
    modal_open: false, id: null
};

export default function Office() {

    const [
        { id, modal_open },
        setState
      ] = useState(initialState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readOfficeRequest());
        dispatch(readDepartmentRequest());
    }, []);

    let office = useSelector(state => state.office.office )
    let departments = useSelector(state => state.department.department )

    const refresh = (() => {
        dispatch(readOfficeRequest());
    });

    function addOffice(object, resolve) {

        dispatch(addOfficeRequest(object, () => { refresh(); resolve(); }));
    }

    function updateOffice(id, object, resolve) {
        dispatch(updateOfficeRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteOffice(id, resolve) {
        dispatch(deleteOfficeRequest(id, () => { refresh(); resolve(); }));
    }

    const getOfficeSkillsJson = rowData => ({ id: rowData.id })

    return (
        <Local>
            <MaterialTable
                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240,230,255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}
                data={office}
                title="Cargo"

                columns={[
                    { title: 'Nome', field: 'name' },
                    {
                        title: 'Departamento', field: 'id_department',  lookup: departments.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                        editComponent: props => (
                            <SingleSelect
                                value={props.value}
                                placeholder="Selecione um departamento"
                                options={departments.map(el => ({label: el.name, value: el.id}))}
                                onChange={value => props.onChange(value)}
                            />
                        )
                    },
                ]}

                actions={[
                    {
                        icon: 'fitness_center',
                        tooltip: 'Editar habilidades',
                        onClick: (event, rowData) => {
                            setState(prevState => ({ ...prevState,...getOfficeSkillsJson(rowData), modal_open: true }));
                        }
                    }
                ]}

                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if (['name', 'id_department'].some(field => !newData[field])) return reject()
                            addOffice(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if (['name', 'id_department'].some(field => !newData[field])) return reject()
                            if (['id_department'].some(field => newData[field] == oldData[field])) return reject()
                            if (oldData) {
                                updateOffice(oldData.id, newData, resolve);
                            }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteOffice(oldData.id, resolve);
                    }),
                }}
            />

            {(modal_open == true)? (
                <SkillPopup
                    modal_open={modal_open}
                    closeFn={() => setState(prevState => ({ ...prevState, modal_open: false }))}
                    id_office={id}
                />
            ): null}

        </Local>
    );
}
