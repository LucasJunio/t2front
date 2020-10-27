import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addQuadrantRequest, readQuadrantRequest, updateQuadrantRequest, deleteQuadrantRequest } from '../../store/modules/quadrant/actions';

import { Local } from './style';

export default function Quadrant() {

    let quadrant = []
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(readQuadrantRequest());    
    }, []);
    
    quadrant = useSelector(state => state.quadrant.quadrant )
    
    const refresh = (() => {
        dispatch(readQuadrantRequest());    
    });

    function addQuadrant(object, resolve) {
        dispatch(addQuadrantRequest(object, () => { refresh(); resolve(); }));
    }
    
    function updateQuadrant(id, object, resolve) {
        dispatch(updateQuadrantRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteQuadrant(id, resolve) {
        dispatch(deleteQuadrantRequest(id, () => { refresh(); resolve(); })); 
    }
        
    return (
        <Local>
            <MaterialTable

                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}
                
                columns={[
                    { title: 'Nome', field: 'name' }                  
                ]}
                data={quadrant}
                title="Quadrante"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['name'].some(field => !newData[field])) return reject()
                        addQuadrant(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['name'].some(field => !newData[field])) return reject()
                            updateQuadrant(oldData.id, newData, resolve);
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteQuadrant(oldData.id, resolve);
                    }),
                }}
            />
        </Local>
    );
}