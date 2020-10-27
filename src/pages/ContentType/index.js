import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addContentTypeRequest, readContentTypeRequest, updateContentTypeRequest, deleteContentTypeRequest } from '../../store/modules/contenttype/actions';

import { Local } from './style';

export default function ContentType() {

    let contenttype = []
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(readContentTypeRequest());    
    }, []);
    
    contenttype = useSelector(state => state.contenttype.contenttype )
    
    const refresh = (() => {
        dispatch(readContentTypeRequest());    
    });

    function addContentType(object, resolve) {
        dispatch(addContentTypeRequest(object, () => { refresh(); resolve(); }));
    }
    
    function updateContentType(id, object, resolve) {
        dispatch(updateContentTypeRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteContentType(id, resolve) {
        dispatch(deleteContentTypeRequest(id, () => { refresh(); resolve(); })); 
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
                data={contenttype}
                title="Tipo de conteúdo"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['name'].some(field => !newData[field])) return reject()
                        addContentType(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['name'].some(field => !newData[field])) return reject()
                            updateContentType(oldData.id, newData, resolve);
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteContentType(oldData.id, resolve);
                    }),
                }}
            />
        </Local>
    );
}