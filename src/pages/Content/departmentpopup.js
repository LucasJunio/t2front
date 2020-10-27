import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { SingleSelect } from "react-select-material-ui";



import Popup from "reactjs-popup";
import {readDepartmentRequest} from "../../store/modules/department/actions";
import {
    addContentDepartmentRequest, deleteContentDepartmentRequest,
    readContentDepartmentRequest,
    updateContentDepartmentRequest
} from "../../store/modules/contentdepartment/actions";

const initialState = {
    name: null
};

export default function DepartmentPopup(props) {
    const [
        {
            name
        },
        setState
    ] = useState(initialState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readDepartmentRequest());
        dispatch(readContentDepartmentRequest(props.id_content));
    }, []);

    let departments = useSelector(state => state.department.department )
    let content_departments = useSelector(state => state.contentdepartment.contentdepartment )

    const refresh = (() => {
        dispatch(readContentDepartmentRequest(props.id_content));
    });

    function addContentDepartment(object, resolve) {
        dispatch(addContentDepartmentRequest(getData(object), () => { refresh(); resolve(); }));
    }

    function updateContentDepartment(id, object, resolve) {
        dispatch(updateContentDepartmentRequest(getData(object), () => { refresh(); resolve(); }));
    }

    function deleteContentDepartment(id, resolve) {
        dispatch(deleteContentDepartmentRequest(id, () => { refresh(); resolve(); }));
    }

    const getData = formObject => ({...formObject, id_content: props.id_content})

    const getDepartmentJson = () => ({})

    return(
        <div >
            <Popup modal open={true} onClose={() => {
                setState(prevState => ({...prevState, ...getDepartmentJson({})}))
                props.closeFn();
            }} overlayStyle={{'overflowY': 'scroll'}}>
                <MaterialTable
                    options={{
                        headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                        searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                    }}

                    columns={[
                        { title: 'Departamento', field: 'id_department', lookup: departments.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                            editComponent: props => (
                                <SingleSelect
                                    placeholder="Selecione uma habilidade"
                                    value={props.value}
                                    options={departments.map(el => ({label: el.name, value: el.id}))}
                                    onChange={props.onChange}
                                />
                            )
                        },
                    ]}
                    data={content_departments}
                    title="Filtro de departamentos"

                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                if (['id_department'].some(field => !newData[field])) return reject()
                              addContentDepartment(newData, resolve);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if (['id_department'].some(field => !newData[field])) return reject()
                                if (['id_department'].some(field => newData[field] == oldData[field])) return reject()
                                if (oldData) {
                                    updateContentDepartment(oldData.id, newData, resolve);
                                }
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                deleteContentDepartment(oldData.id, resolve);
                            }),
                    }}
                />
            </Popup>
        </div>
    )
}
