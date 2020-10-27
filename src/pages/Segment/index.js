import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addSegmentRequest, readSegmentRequest, updateSegmentRequest, deleteSegmentRequest } from '../../store/modules/segment/actions';

import { Local } from './style';

export default function Segment() {

    let segment = []
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(readSegmentRequest());    
    }, []);
    
    segment = useSelector(state => state.segment.segment )
    
    const refresh = (() => {
        dispatch(readSegmentRequest());    
    });

    function addSegment(object, resolve) {
        dispatch(addSegmentRequest(object, () => { refresh(); resolve(); }));        
    }
    
    function updateSegment(id, object, resolve) {
        dispatch(updateSegmentRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteSegment(id, resolve) {
        dispatch(deleteSegmentRequest(id, () => { refresh(); resolve(); }));         
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
                data={segment}
                title="Segmento"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['name'].some(field => !newData[field])) return reject()
                        addSegment(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['name'].some(field => !newData[field])) return reject()
                            updateSegment(oldData.id, newData, resolve);
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteSegment(oldData.id, resolve);
                    }),
                }}
            />
        </Local>
    );
}