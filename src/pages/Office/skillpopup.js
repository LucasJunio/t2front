import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import MaterialTable from 'material-table'

import {SingleSelect, TagsSelect} from "react-select-material-ui";


import {Local} from './style';
import Popup from "reactjs-popup";
import {TextField} from '@material-ui/core';
import {readSkillRequest} from "../../store/modules/skill/actions";
import {
    addOfficeSkillRequest, deleteOfficeSkillRequest,
    readOfficeSkillRequest,
    updateOfficeSkillRequest
} from "../../store/modules/officeskill/actions";

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
        dispatch(readOfficeSkillRequest(props.id_office));
    }, []);

    let skills = useSelector(state => state.skill.skill)
    let office_skills = useSelector(state => state.officeskill.officeskill)

    const refresh = (() => {
        dispatch(readOfficeSkillRequest(props.id_office));
    });

    function addOfficeSkill(object, resolve) {
        dispatch(addOfficeSkillRequest(getData(object), () => {
            refresh();
            resolve();
        }));
    }

    function updateOfficeSkill(id, object, resolve) {
        dispatch(updateOfficeSkillRequest(getData(object), () => {
            refresh();
            resolve();
        }));
    }

    function deleteOfficeSkill(id, resolve) {
        dispatch(deleteOfficeSkillRequest(id, () => {
            refresh();
            resolve();
        }));
    }

    const getData = formObject => ({...formObject, id_office: props.id_office})

    const getSkillJson = () => ({name: ''})

    return (
        <div>
            <Popup modal open={true} onClose={() => {
                setState(prevState => ({...prevState, ...getSkillJson({})}))
                props.closeFn();
            }} overlayStyle={{'overflowY': 'scroll'}}>
                <MaterialTable
                    options={{
                        headerStyle: {fontWeight: 'bold', fontSize: '12px', backgroundColor: 'rgb(240, 230, 255)'},
                        searchFieldStyle: {backgroundColor: 'rgb(242, 242, 242)'}
                    }}

                    columns={[
                        {
                            title: 'Competência',
                            field: 'id_skill',
                            lookup: skills.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                            editComponent: props => (
                                <SingleSelect
                                    placeholder="Selecione uma competência"
                                    value={props.value}
                                    options={skills.map(el => ({label: el.name, value: el.id}))}
                                    onChange={props.onChange}
                                />
                            )
                        },
                        {title: 'Nota esperada', field: 'expected_value'}
                    ]}
                    data={office_skills}
                    title="Competências associadas"

                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                if (['id_skill'].some(field => !newData[field])) return reject()
                                addOfficeSkill(newData, resolve);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if (['id_skill'].some(field => !newData[field])) return reject()
                                if (['id_skill'].some(field => newData[field] == oldData[field])) return reject()
                                if (oldData) {
                                    updateOfficeSkill(oldData.id, newData, resolve);
                                }
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                deleteOfficeSkill(oldData.id, resolve);
                            }),
                    }}
                />
            </Popup>
        </div>
    )
}
