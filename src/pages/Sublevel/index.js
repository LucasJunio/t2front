import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'
import { SingleSelect } from "react-select-material-ui";

import { addSublevelRequest, readSublevelRequest, updateSublevelRequest, deleteSublevelRequest } from '../../store/modules/sublevel/actions';
import { readQuadrantRequest } from '../../store/modules/quadrant/actions';
import { readSublevelSkillRequest } from '../../store/modules/sublevelskill/actions';
import { Local } from './style';


export default function Sublevel() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readSublevelRequest());
        dispatch(readQuadrantRequest());
    }, []);

    let sublevel = useSelector(state => state.sublevel.sublevel )
    let quadrants = useSelector(state => state.quadrant.quadrant )

    const refresh = (() => {
        dispatch(readSublevelRequest());

    });
    function addSublevel(object, resolve) {
        dispatch(addSublevelRequest(object, () => { refresh(); resolve(); }));

    }
    function updateSublevel(id, object, resolve) {
        dispatch(updateSublevelRequest(object, () => { refresh(); resolve(); }));

    }
    function deleteSublevel(id, resolve) {
        dispatch(deleteSublevelRequest(id, () => { refresh(); resolve(); }));

    }

    return (
        <Local>
            <MaterialTable

                options={{
                    headerStyle:{ fontWeight:'bold', fontSize:'12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}

                columns={[
                    { title: 'Nome', field: 'name' },
                    { title: 'Quadrante', field: 'id_quadrant',  lookup: quadrants.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                        editComponent: props => (
                            <SingleSelect
                                value={props.value}
                                placeholder="Selecione um quadrante"
                                options={quadrants.map(el => ({label: el.name, value: el.id}))}
                                onChange={value => props.onChange(value)}
                            />
                        )
                    }
                ]}
                data={sublevel}
                title="Subnível"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['name', 'id_quadrant'].some(field => !newData[field])) return reject()
                        addSublevel(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['name', 'id_quadrant'].some(field => !newData[field])) return reject()
                            if (['id_quadrant'].some(field => newData[field] == oldData[field])) return reject()
                            updateSublevel(oldData.id, newData, resolve);
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteSublevel(oldData.id, resolve);
                    }),
                }}
            />
        </Local>
    );
}


