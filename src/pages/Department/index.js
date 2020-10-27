import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addDepartmentRequest, readDepartmentRequest, updateDepartmentRequest, deleteDepartmentRequest } from '../../store/modules/department/actions';

import { Local } from './style';

export default function Department() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readDepartmentRequest());
    }, []);

    let department = useSelector(state => state.department.department )

    const refresh = (() => {
        dispatch(readDepartmentRequest());
    });

    function addDepartment(object, resolve) {
        dispatch(addDepartmentRequest(object, () => { refresh(); resolve(); }));
    }

    function updateDepartment(id, object, resolve) {
        dispatch(updateDepartmentRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteDepartment(id, resolve) {
        dispatch(deleteDepartmentRequest(id, () => { refresh(); resolve(); }));
    }

    return (
        <Local>
            <MaterialTable

                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}

                columns={[
                    { title: 'Nome', field: 'name' }
                ]}
                data={department}
                title="Departamento"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['name'].some(field => !newData[field])) return reject()
                        addDepartment(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['name'].some(field => !newData[field])) return reject()
                            updateDepartment(oldData.id, newData, resolve);
                        } else {
                            resolve();
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteDepartment(oldData.id, resolve)
                    }),
                }}
            />
        </Local>
    );
}
