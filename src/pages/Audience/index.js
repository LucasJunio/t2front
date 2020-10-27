import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { SingleSelect } from "react-select-material-ui";

import { addAudienceRequest, readAudienceRequest, updateAudienceRequest, deleteAudienceRequest } from '../../store/modules/audience/actions';
import { readOfficeRequest } from '../../store/modules/office/actions';
import { readCompanyRequest } from "../../store/modules/company/actions";

import { Local } from './style';

const initialState = {
    company: null, office: null
};

export default function Audience() {

    const [
        { company, office },
        setState
    ] = useState(initialState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readAudienceRequest());
        dispatch(readOfficeRequest());
        dispatch(readCompanyRequest());
    }, []);

    let audience = useSelector(state => state.audience.audience )
    let offices = useSelector(state => state.office.office )
    let companies = useSelector(state => state.company.company )

    const refresh = (() => {
        dispatch(readAudienceRequest());
    });

    function addAudience(object, resolve) {
        dispatch(addAudienceRequest(object, () => { refresh(); resolve(); }));
    }

    function updateAudience(object, resolve) {
        dispatch(updateAudienceRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteAudience(id, resolve) {
        dispatch(deleteAudienceRequest(id, () => { refresh(); resolve(); }));
    }

    const onChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <Local>
            <MaterialTable

                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}

                data={audience.map(el => ({...el, office: el.Office.name, company: el.Company.name }))}

                title="Público Alvo"

                columns={[
                    { title: 'Nome', field: 'name' },
                    { title: 'Gênero', field: 'gender', lookup: { 1: 'Feminino', 2: 'Masculino' } },
                    { title: 'Idade inicial', field: 'startage', type: 'numeric' },
                    { title: 'Idade Final', field: 'finalage', type: 'numeric' },
                    { title: 'Cargo', field: 'id_office', lookup: offices.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                        editComponent: props => (
                            <SingleSelect
                                value={props.value}
                                placeholder="Selecione um cargo"
                                options={offices.map(el => ({label: el.name, value: el.id}))}
                                onChange={(value) => props.onChange(value)}
                            />
                        )
                    },
                    {
                        title: 'Empresa', field: 'id_company', lookup: companies.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {}),
                        editComponent: props => (
                            <SingleSelect
                                value={props.value}
                                placeholder="Selecione uma empresa"
                                options={companies.map(el => ({label: el.name, value: el.id}))}
                                onChange={(value) => props.onChange(value)}
                            />
                        )
                    }
                ]}

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['name', 'gender', 'startage', 'finalage', 'id_office', 'id_company'].some(field => !newData[field])) return reject()
                        addAudience(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (['name', 'gender', 'startage', 'finalage', 'id_office', 'id_company'].some(field => !newData[field])) return reject()
                        if (['id_office', 'id_company'].some(field => newData[field] == oldData[field])) return reject()
                        if (oldData) {
                            updateAudience(newData, resolve);
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteAudience(oldData.id, resolve);
                    }),
                }}
            />
        </Local>
    );
}
