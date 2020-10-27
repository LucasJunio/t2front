import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { SingleSelect } from "react-select-material-ui";



import { Local } from './style';
import Popup from "reactjs-popup";
import {
    addQuestionEvaluationRequest, deleteQuestionEvaluationRequest,
    readQuestionEvaluationRequest,
    updateQuestionEvaluationRequest
} from "../../store/modules/questionevaluation/actions";
import { readQuestionRequest } from "../../store/modules/question/actions";

const initialState = {
    description: null
};

export default function QuestionPopup(props) {
    const [
        {
            description
        },
        setState
    ] = useState(initialState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readQuestionRequest());
        dispatch(readQuestionEvaluationRequest(props.id_evaluation));
    }, []);

    let questions = useSelector(state => state.question.question )
    let question_evaluation = useSelector(state => state.questionevaluation.questionevaluation )

    const refresh = (() => {
        dispatch(readQuestionEvaluationRequest(props.id_evaluation));

    });

    function addQuestionEvaluation(object, resolve) {
        dispatch(addQuestionEvaluationRequest(getData(object), () => { refresh(); resolve(); }));
    }

    function updateQuestionEvaluation(id, object, resolve) {
        dispatch(updateQuestionEvaluationRequest(getData(object), () => { refresh(); resolve(); }));
    }

    function deleteQuestionEvaluation(id, resolve) {
        dispatch(deleteQuestionEvaluationRequest(id, () => { refresh(); resolve(); }));
    }

    const getData = formObject => ({...formObject, id_evaluation: props.id_evaluation})

    const getSublevelJson = () => ({description: ''})

    return(
        <div >
            <Popup modal open={true} onClose={() => {
                setState(prevState => ({...prevState, ...getSublevelJson({})}))
                props.closeFn();
            }} overlayStyle={{'overflowY': 'scroll'}}>
                <MaterialTable
                    options={{
                        headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                        searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                    }}

                    columns={[
                        { title: 'Pergunta', field: 'id_question', lookup: questions.reduce((acc, cv) => ({...acc, [cv.id]: cv.description}), {}),
                            editComponent: props => (
                                <SingleSelect
                                    placeholder="Selecione uma pergunta"
                                    value={props.value}
                                    options={questions.map(el => ({label: el.description, value: el.id}))}
                                    onChange={props.onChange}
                                />
                            )
                        },

                    ]}
                    data={question_evaluation}
                    title="Perguntas associadas"

                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                if (['id_question'].some(field => !newData[field])) return reject()
                                addQuestionEvaluation(newData, resolve);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if (oldData) {
                                    if (['id_question'].some(field => !newData[field])) return reject()
                                    if (['id_question'].some(field => newData[field] == oldData[field])) return reject()
                                    updateQuestionEvaluation(oldData.id, newData, resolve);
                                }
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                deleteQuestionEvaluation(oldData.id, resolve);
                            }),
                    }}
                />
            </Popup>
        </div>
    )
}
