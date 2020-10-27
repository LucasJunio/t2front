import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { SingleSelect } from "react-select-material-ui";



import Popup from "reactjs-popup";
import {readAudienceRequest} from "../../store/modules/audience/actions";
import {
    addContentAudienceRequest, deleteContentAudienceRequest,
    readContentAudienceRequest,
    updateContentAudienceRequest
} from "../../store/modules/contentaudience/actions";

const initialState = {
    name: null
};

export default function AudiencePopup(props) {
    const [
        {
            name
        },
        setState
    ] = useState(initialState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readAudienceRequest());
        dispatch(readContentAudienceRequest(props.id_content));
    }, []);

    let audiences = useSelector(state => state.audience.audience )
    let content_audiences = useSelector(state => state.contentaudience.contentaudience )

    const refresh = (() => {
        dispatch(readContentAudienceRequest(props.id_content));
    });

    function addContentAudience(object, resolve) {
        dispatch(addContentAudienceRequest(getData(object), () => { refresh(); resolve(); }));
    }

    function updateContentAudience(id, object, resolve) {
        dispatch(updateContentAudienceRequest(getData(object), () => { refresh(); resolve(); }));
    }

    function deleteContentAudience(id, resolve) {
        dispatch(deleteContentAudienceRequest(id, () => { refresh(); resolve(); }));
    }

    const getData = formObject => ({...formObject, id_content: props.id_content})

    const getAudienceJson = () => ({})

    return(
        <div >
            <Popup modal open={true} onClose={() => {
                setState(prevState => ({...prevState, ...getAudienceJson({})}))
                props.closeFn();
            }} overlayStyle={{'overflowY': 'scroll'}}>
                <MaterialTable
                    options={{
                        headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                        searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                    }}

                    columns={[
                        { title: 'Departamento', field: 'id_audience', lookup: audiences.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                            editComponent: props => (
                                <SingleSelect
                                    placeholder="Selecione uma habilidade"
                                    value={props.value}
                                    options={audiences.map(el => ({label: el.name, value: el.id}))}
                                    onChange={props.onChange}
                                />
                            )
                        },
                    ]}
                    data={content_audiences}
                    title="Filtro de Público alvos"

                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                if (['id_audience'].some(field => !newData[field])) return reject()
                              addContentAudience(newData, resolve);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if (['id_audience'].some(field => !newData[field])) return reject()
                                if (['id_audience'].some(field => newData[field] == oldData[field])) return reject()
                                if (oldData) {
                                    updateContentAudience(oldData.id, newData, resolve);
                                }
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                deleteContentAudience(oldData.id, resolve);
                            }),
                    }}
                />
            </Popup>
        </div>
    )
}
