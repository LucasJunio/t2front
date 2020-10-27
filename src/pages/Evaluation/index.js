import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addEvaluationRequest, readEvaluationRequest, updateEvaluationRequest, deleteEvaluationRequest } from '../../store/modules/evaluation/actions';

import { Local } from './style';

import QuestionPopup from './questionpopup';

const initialState = {
    modal_questions_open: false, id: null
};

export default function Evaluation() {

    const [
        { modal_questions_open, id },
        setState
    ] = useState(initialState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readEvaluationRequest());
    }, []);

    let evaluation = useSelector(state => state.evaluation.evaluation )

    const refresh = (() => {
        dispatch(readEvaluationRequest());
    });

    function addEvaluation(object, resolve) {
        dispatch(addEvaluationRequest(object, () => { refresh(); resolve(); }));
    }

    function updateEvaluation(id, object, resolve) {
        dispatch(updateEvaluationRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteEvaluation(id, resolve) {
        dispatch(deleteEvaluationRequest(id, () => { refresh(); resolve(); }));
    }

    const getQuestionEvaluationJson = rowData => ({ id: rowData.id })

    return (
        <Local>
            <MaterialTable

                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}

                columns={[
                    { title: 'Nome', field: 'name' },
                    { title: 'Tipo', field: 'type', lookup: { 0: 'Avaliação Desempenho', 1: 'Avaliação 90°' } },
                    { title: 'Auto-avaliação', field: 'self_evaluation', lookup: { 0: 'SIM', 1: 'NÃO' } },
                    { title: 'Descrição', field: 'description' }
                ]}
                data={evaluation}
                title="Avaliação"

                actions={[
                    {
                        icon: 'reorder',
                        tooltip: 'Editar perguntas',
                        onClick: (event, rowData) => {
                            setState(prevState => ({ ...prevState,...getQuestionEvaluationJson(rowData), modal_questions_open: true }));
                        }
                    }
                ]}

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['name', 'type', 'self_evaluation', 'description'].some(field => !newData[field])) return reject()
                        addEvaluation(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['name', 'type', 'self_evaluation', 'description'].some(field => !newData[field])) return reject()
                            updateEvaluation(oldData.id, newData, resolve);
                        } else {
                            resolve();
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteEvaluation(oldData.id, resolve)
                    }),
                }}
            />

            {(modal_questions_open == true) ? (
                <QuestionPopup
                    modal_open={modal_questions_open}
                    closeFn={() => setState(prevState => ({ ...prevState, modal_questions_open: false }))}
                    id_evaluation={id}
                />
            ): null}

        </Local>
    );
}
