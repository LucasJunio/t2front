import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import MaterialTable from 'material-table'

import {
    addContentRequest,
    readContentRequest,
    updateContentRequest,
    deleteContentRequest
} from '../../store/modules/content/actions';

import {Local} from './style';
import SkillPopup from "./skillpopup";
import DepartmentPopup from "./departmentpopup";
import AudiencePopup from "./audiencepopup";

const initialState = {
    modal_skill_open: false, modal_audience_open: false, modal_department_open: false, id: null
};
export default function Content() {
    const [
        { id, modal_skill_open, modal_audience_open, modal_department_open },
        setState
    ] = useState(initialState);

    let content = []

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readContentRequest());
    }, []);

    content = useSelector(state => state.content.content)

    const refresh = (() => {
        dispatch(readContentRequest());
    });

    function addContent(object, resolve) {
        dispatch(addContentRequest(object, () => {
            refresh();
            resolve();
        }));
    }

    function updateContent(id, object, resolve) {
        dispatch(updateContentRequest(object, () => {
            refresh();
            resolve();
        }));
    }

    function deleteContent(id, resolve) {
        dispatch(deleteContentRequest(id, () => {
            refresh();
            resolve();
        }));
    }
    const getContentSkillsJson = rowData => ({ id: rowData.id })

    return (
        <Local>
            <MaterialTable

                options={{
                    headerStyle: {fontWeight: 'bold', fontSize: '12px', backgroundColor: 'rgb(240, 230, 255)'},
                    filterCellStyle: {fontSize: '45px'},
                    searchFieldStyle: {backgroundColor: 'rgb(242, 242, 242)', fontSize: '15px'}
                }}
                actions={[
                    {
                        icon: 'filter_alt',
                        tooltip: 'Habilidades filtradas',
                        onClick: (event, rowData) => {
                            setState(prevState => ({ ...prevState,...getContentSkillsJson(rowData), modal_skill_open: true }));
                        }
                    },
                    {
                        icon: 'filter_list',
                        tooltip: 'Departamentos filtrados',
                        onClick: (event, rowData) => {
                            setState(prevState => ({ ...prevState,...getContentSkillsJson(rowData), modal_department_open: true }));
                        }
                    },
                    {
                        icon: 'fitness_center',
                        tooltip: 'Público alvos filtrados',
                        onClick: (event, rowData) => {
                            setState(prevState => ({ ...prevState,...getContentSkillsJson(rowData), modal_audience_open: true }));
                        }
                    }
                ]}

                columns={[
                    {title: 'Nome', field: 'title'},
                    {title: 'Tipo de conteúdo', field: 'type', lookup: {0: 'Dica', 1: 'Conteúdo'}},
                    {title: 'Descrição', field: 'description'},
                    {title: 'Observação', field: 'note'},
                    {title: 'Status moderação', field: 'status', lookup: {0: 'Ativo', 1: 'Inativo'}},
                ]}
                data={content}
                title="Conteúdo"

                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if (['title', 'type', 'description', 'note', 'status'].some(field => !newData[field])) return reject()
                            addContent(newData, resolve);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if (['title', 'type', 'description', 'note', 'status'].some(field => !newData[field])) return reject()
                            if (oldData) {
                                updateContent(oldData.id, newData, resolve);
                            }
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            deleteContent(oldData.id, resolve)
                        }),
                }}
            />
            {(modal_skill_open == true)? (
                <SkillPopup
                    closeFn={() => setState(prevState => ({ ...prevState, modal_skill_open: false }))}
                    id_content={id}
                />
            ): null}
            {(modal_department_open == true)? (
                <DepartmentPopup
                    closeFn={() => setState(prevState => ({ ...prevState, modal_department_open: false }))}
                    id_content={id}
                />
            ): null}
            {(modal_audience_open == true)? (
                <AudiencePopup
                    closeFn={() => setState(prevState => ({ ...prevState, modal_audience_open: false }))}
                    id_content={id}
                />
            ): null}

        </Local>
    );
}
