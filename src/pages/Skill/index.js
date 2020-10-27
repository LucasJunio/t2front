import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addSkillRequest, readSkillRequest, updateSkillRequest, deleteSkillRequest } from '../../store/modules/skill/actions';

import { Local } from './style';
import SublevelPopup from './sublevelpopup';

const initialState = {
    modal_sublevels_open: false, id: null
};

export default function Skill() {

    const [
        { modal_sublevels_open, id },
        setState
    ] = useState(initialState);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(readSkillRequest()); 
    }, []);

    let skill = useSelector(state => state.skill.skill )
    
    const refresh = (() => {
        dispatch(readSkillRequest());    
    });

    function addSkill(object, resolve) {
        dispatch(addSkillRequest(object, () => { refresh(); resolve(); }));
    }
    
    function updateSkill(id, object, resolve) {
        dispatch(updateSkillRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteSkill(id, resolve) {
        dispatch(deleteSkillRequest(id, () => { refresh(); resolve(); }));         
    }

    const getSublevelSkillsJson = rowData => ({ id: rowData.id })

    return (
        <Local>
            <MaterialTable

                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}
                
                columns={[
                    { title: 'Nome', field: 'name' },         
                    { title: 'Descrição', field: 'description' }
                ]}

                data={skill}
                title="Competência"

                actions={[
                    {
                        icon: 'reorder',
                        tooltip: 'Editar habilidades',
                        onClick: (event, rowData) => {
                            console.log(rowData, ' rowData');
                            setState(prevState => ({ ...prevState,...getSublevelSkillsJson(rowData), modal_sublevels_open: true }));
                        }
                    }
                ]}

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['name', 'description'].some(field => !newData[field])) return reject()
                        addSkill(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['name', 'description'].some(field => !newData[field])) return reject()
                            updateSkill(oldData.id, newData, resolve);
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteSkill(oldData.id, resolve);
                    }),
                }}
            />

            {(modal_sublevels_open == true) ? (
                <SublevelPopup
                    modal_open={modal_sublevels_open}
                    closeFn={() => setState(prevState => ({ ...prevState, modal_sublevels_open: false }))}
                    id_skill={id}
                />
            ): null}

        </Local>
    );
}