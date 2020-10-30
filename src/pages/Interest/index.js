import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addInterestRequest, readInterestRequest, updateInterestRequest, deleteInterestRequest } from '../../store/modules/interest/actions';

import { Local } from './style';



export default function Interest() {

    let interest = []
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(readInterestRequest());    
    }, []);
    
    interest = useSelector(state => state.interest.interest )
    
    const refresh = (() => {
        dispatch(readInterestRequest());    
    });

    function addInterest(object, resolve) {
        dispatch(addInterestRequest(object, () => { refresh(); resolve(); }));
    }
    
    function updateInterest(id, object, resolve) {
        dispatch(updateInterestRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteInterest(id, resolve) {
        dispatch(deleteInterestRequest(id, () => { refresh(); resolve(); })); 
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
                data={interest}
                title="Interesse"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['name'].some(field => !newData[field])) return reject()
                        addInterest(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['name'].some(field => !newData[field])) return reject()
                            updateInterest(oldData.id, newData, resolve);
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteInterest(oldData.id, resolve);
                    }),
                }}
            />
        </Local>
    );
}