import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addQuestionRequest, readQuestionRequest, updateQuestionRequest, deleteQuestionRequest } from '../../store/modules/question/actions';

import { Local } from './style';
import {SingleSelect} from "react-select-material-ui";
import {readSkillRequest} from "../../store/modules/skill/actions";

export default function Question() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readQuestionRequest());
        dispatch(readSkillRequest());
    }, []);

    let questions = useSelector(state => state.question.question )
    let skills = useSelector(state => state.skill.skill )

    const refresh = (() => {
        dispatch(readQuestionRequest());
    });

    function addQuestion(object, resolve) {
        console.log('add question ', object);
        dispatch(addQuestionRequest(object, () => { refresh(); resolve(); }));
    }

    function updateQuestion(id, object, resolve) {
        dispatch(updateQuestionRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteQuestion(id, resolve) {
        dispatch(deleteQuestionRequest(id, () => { refresh(); resolve(); }));
    }

    return (
        <Local>
            <MaterialTable

                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}

                columns={[
                    { title: 'Descrição', field: 'description' },
                    { title: 'Tipo', field: 'type', lookup: {1: 'Pergunta', 2: 'Teste' }},
                    { title: 'Habilidade', field: 'id_skill', lookup: skills.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                        editComponent: props => (
                            <SingleSelect
                                placeholder="Selecione uma habilidade"
                                value={props.value}
                                options={skills.map(el => ({label: el.name, value: el.id}))}
                                onChange={props.onChange}
                            />
                        )
                    },
                ]}
                data={questions}
                title="Pergunta"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['id_skill', 'type', 'description'].some(field => !newData[field])) return reject()
                        addQuestion(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (['id_skill', 'type', 'description'].some(field => !newData[field])) return reject()
                        if (['id_skill', 'type'].some(field => newData[field] == oldData[field])) return reject()
                        if (oldData) {
                            updateQuestion(oldData.id, newData, resolve);
                        } else {
                            resolve();
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteQuestion(oldData.id, resolve)
                    }),
                }}
            />
        </Local>
    );
}
