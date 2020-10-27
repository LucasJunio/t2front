import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { SingleSelect } from "react-select-material-ui";



import Popup from "reactjs-popup";
import {readSkillRequest} from "../../store/modules/skill/actions";
import {
    addContentSkillRequest, deleteContentSkillRequest,
    readContentSkillRequest,
    updateContentSkillRequest
} from "../../store/modules/contentskill/actions";

const initialState = {
    name: null
};

export default function SkillPopup(props) {
    const [
        {
            name
        },
        setState
    ] = useState(initialState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readSkillRequest());
        dispatch(readContentSkillRequest(props.id_content));
    }, []);

    let skills = useSelector(state => state.skill.skill )
    let content_skills = useSelector(state => state.contentskill.contentskill )

    const refresh = (() => {
        dispatch(readContentSkillRequest(props.id_content));
    });

    function addContentSkill(object, resolve) {
        dispatch(addContentSkillRequest(getData(object), () => { refresh(); resolve(); }));
    }

    function updateContentSkill(id, object, resolve) {
        dispatch(updateContentSkillRequest(getData(object), () => { refresh(); resolve(); }));
    }

    function deleteContentSkill(id, resolve) {
        dispatch(deleteContentSkillRequest(id, () => { refresh(); resolve(); }));
    }

    const getData = formObject => ({...formObject, id_content: props.id_content})

    const getSkillJson = () => ({name: ''})

    return(
        <div >
            <Popup modal open={true} onClose={() => {
                setState(prevState => ({...prevState, ...getSkillJson({})}))
                props.closeFn();
            }} overlayStyle={{'overflowY': 'scroll'}}>
                <MaterialTable
                    options={{
                        headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                        searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                    }}

                    columns={[
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
                        { title: 'Nível da habilidade', field: 'skill_level' }
                    ]}
                    data={content_skills}
                    title="Filtro de habilidades"

                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                if (['id_skill', 'skill_level'].some(field => !newData[field])) return reject()
                              addContentSkill(newData, resolve);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if (['id_skill', 'skill_level'].some(field => !newData[field])) return reject()
                                if (['id_skill'].some(field => newData[field] == oldData[field])) return reject()
                                if (oldData) {
                                    updateContentSkill(oldData.id, newData, resolve);
                                }
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                deleteContentSkill(oldData.id, resolve);
                            }),
                    }}
                />
            </Popup>
        </div>
    )
}
