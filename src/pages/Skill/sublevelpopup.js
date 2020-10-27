import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { SingleSelect } from "react-select-material-ui";



import { Local } from './style';
import Popup from "reactjs-popup";
import {
    addSublevelSkillRequest, deleteSublevelSkillRequest,
    readSublevelSkillRequest,
    updateSublevelSkillRequest
} from "../../store/modules/sublevelskill/actions";
import { readSublevelRequest } from "../../store/modules/sublevel/actions";

const initialState = {
    name: null
};

export default function SublevelPopup(props) {
    const [
        {
            name
        },
        setState
    ] = useState(initialState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readSublevelRequest());
        dispatch(readSublevelSkillRequest(props.id_skill));
    }, []);

    let sublevels = useSelector(state => state.sublevel.sublevel )
    let sublevel_skills = useSelector(state => state.sublevelskill.sublevelskill )

    const refresh = (() => {
        dispatch(readSublevelSkillRequest(props.id_skill));

    });

    function addSublevelSkill(object, resolve) {
        dispatch(addSublevelSkillRequest(getData(object), () => { refresh(); resolve(); }));
    }

    function updateSublevelSkill(id, object, resolve) {
        dispatch(updateSublevelSkillRequest(getData(object), () => { refresh(); resolve(); }));
    }

    function deleteSublevelSkill(id, resolve) {
        dispatch(deleteSublevelSkillRequest(id, () => { refresh(); resolve(); }));
    }

    const getData = formObject => ({...formObject, id_skill: props.id_skill})

    const getSublevelJson = () => ({name: ''})

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
                        { title: 'Subnível', field: 'id_sublevel', lookup: sublevels.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                            editComponent: props => (
                                <SingleSelect
                                    placeholder="Selecione um subnível"
                                    value={props.value}
                                    options={sublevels.map(el => ({label: el.name, value: el.id}))}
                                    onChange={props.onChange}
                                />
                            )
                        },

                    ]}
                    data={sublevel_skills}
                    title="Subníveis associados"

                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                if (['id_sublevel'].some(field => !newData[field])) return reject()
                                addSublevelSkill(newData, resolve);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if (oldData) {
                                    if (['id_sublevel'].some(field => !newData[field])) return reject()
                                    if (['id_sublevel'].some(field => newData[field] == oldData[field])) return reject()
                                    updateSublevelSkill(oldData.id, newData, resolve);
                                }
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                deleteSublevelSkill(oldData.id, resolve);
                            }),
                    }}
                />
            </Popup>
        </div>
    )
}
