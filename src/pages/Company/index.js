import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SingleSelect} from "react-select-material-ui";

import MaterialTable from 'material-table'

import {
    addCompanyRequest,
    readCompanyRequest,
    updateCompanyRequest,
    deleteCompanyRequest
} from '../../store/modules/company/actions';
import {foreignSegmentRequest} from '../../store/modules/segment/actions';
import {readUserRequest} from '../../store/modules/user/actions';
import {foreignContentTypeRequest} from '../../store/modules/contenttype/actions';

import Popup from "reactjs-popup";


import {Local} from './style';
import ContactsPopup from "./contactsPopup";
import SkillPopup from "../Office/skillpopup";

const initialState = {
    id: null, name: "", state_registration: null, cpf: '', cnpj: null, moderation: false, id_user: null,
    id_segment: null, contact_name: "", contact_email: "", id_address: null,
    country: null, cep: null, state: null, number: null, public_place: null, city: null, neighborhood: null,
    modal_open: false, modal_contact_open: false
};

export default function Company() {

    const [
        {
            id, name, state_registration, cpf, cnpj, moderation, id_user, id_address, id_segment, contact_name, contact_email,
            cep, country, state, number, public_place, city, neighborhood, modal_open, modal_contact_open
        },
        setState,
    ] = useState(initialState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readCompanyRequest());
        dispatch(foreignSegmentRequest());
        dispatch(readUserRequest());
        dispatch(foreignContentTypeRequest());
    }, []);

    const company = useSelector(state => state.company.company)
    const users = useSelector(state => state.user.user) // todo change to return only the possible managers
    const segments = useSelector(state => state.segment.foreignSegment)
    const contenttypes = useSelector(state => state.contenttype.foreignContentType)

    const refresh = (() => {
        dispatch(readCompanyRequest());
    });

    const getPopUpData = () => ({
        id, name, state_registration, cpf, cnpj, moderation, id_user, id_segment, id_address,
        Address: {id: id_address, cep, country, state, number, public_place, city, neighborhood}
    })

    const getCompanyJson = (rowData = {Address: {}}) => ({
        name: rowData.name,
        id: rowData.id || null,
        state_registration: rowData.state_registration,
        cpf: rowData.cpf,
        cnpj: rowData.cnpj,
        moderation: rowData.moderation,
        id_user: rowData.id_user,
        id_segment: rowData.id_segment,
        id_address: rowData.Address.id,
        cep: rowData.Address.cep,
        country: rowData.Address.country,
        state: rowData.Address.state,
        number: rowData.Address.number,
        public_place: rowData.Address.public_place,
        city: rowData.Address.city,
        neighborhood: rowData.Address.neighborhood
    })

    function onSubmitCompanyPopup(e) {
        const company = getPopUpData()
        if (company.id) updateCompany(company)
        else addCompany(company)
    }

    function addCompany(object) {
        dispatch(addCompanyRequest(object, () => refresh()));
    }

    function updateCompany(object, resolve = () => {
    }) {
        dispatch(updateCompanyRequest(object, () => {
            refresh();
            resolve();
        }));
    }

    function deleteCompany(id, resolve) {
        dispatch(deleteCompanyRequest(id, () => {
            refresh();
            resolve();
        }));
    }

    const onChangeEvent = e => {
        e.preventDefault();
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const onChange = (name, value) => {
        setState(prevState => ({...prevState, [name]: value}));
    };

    const companyPopUp = ({trigger, open, onClose}) => {
        return <Popup modal trigger={trigger} open={open} onClose={onClose}
                      overlayStyle={{'overflowY': 'scroll'}} contentStyle={{'padding': '0px 20px'}}>
            <div class="p-4">
                <form onSubmit={e => e.preventDefault()} class="c-form text-left">
                    <h3>Dados da empresa</h3>
                    <div class="row">
                        <div className="form-group col-12">
                            <label htmlFor="name">Segmento</label>
                            <SingleSelect
                                placeholder="Selecione uma habilidade"
                                value={id_segment}
                                options={segments.map(el => ({label: el.name, value: el.id}))}
                                onChange={value => onChange('id_segment', value)}
                            />
                        </div>
                        <div class="form-group col-12">
                            <label htmlFor="name">Razão Social</label>
                            <input type="text" placeholder="Razão Social" value={name} name="name"
                                   onChange={onChangeEvent} required="required"/>
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label htmlFor="state_registration">Registro Estadual</label>
                            <input type="number" placeholder="Registro Estadual"
                                   value={state_registration} name="state_registration"
                                   onChange={onChangeEvent}/>
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label htmlFor="cpf">CPF</label>
                            <input type="number" placeholder="CPF" value={cpf} name="cpf"
                                   onChange={onChangeEvent}/>
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label htmlFor="cnpj">CNPJ</label>
                            <input type="number" placeholder="CNPJ" value={cnpj} name="cnpj"
                                   onChange={onChangeEvent}/>
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label htmlFor="contact_name">Contato</label>
                            <input type="text" placeholder="Contato" value={contact_name}
                                   name="contact_name" onChange={onChangeEvent}/>
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label htmlFor="contact_email">E-mail</label>
                            <input type="text" placeholder="e-mail" value={contact_email}
                                   name="contact_email" onChange={onChangeEvent}/>
                        </div>
                        <div class="form-check col-12">
                            <input type="checkbox" placeholder="Moderação" value={moderation} checked={moderation}
                                   id="moderation" class="form-check-input"
                                   name="moderation" onChange={() => onChange('moderation', !moderation)}/>
                            <label htmlFor="moderation" class="form-check-label">Moderação</label>
                        </div>
                    </div>
                    <hr/>
                    <h3>Gerente da UpTome</h3>
                    <div class="row">
                        <div className="form-group col-12">
                            <label htmlFor="id_user">Gerente da UpTome</label>
                            <input type="hidden" value="id_user" required="required"/>
                            <SingleSelect
                                placeholder="Selecione um gerente"
                                value={id_user} required="required"
                                options={users.map(el => ({label: el.name, value: el.id}))}
                                onChange={value => onChange('id_user', value)}
                            />
                        </div>
                    </div>
                    <h3>Endereço</h3>
                    <div class="row">
                        <div className="form-group col-md-4">
                            <label htmlFor="cep">CEP</label>
                            <input type="text" name={'cep'} value={cep} id="cep" onChange={onChangeEvent}
                                   required="required"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="country">País</label>
                            <input type="text" name={'country'} value={country} id="country" onChange={onChangeEvent}
                                   required="required"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="state">Estado</label>
                            <input type="text" name={'state'} value={state} id="state" onChange={onChangeEvent}
                                   required="required"/>
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="public_place">Logradouro</label>
                            <input type="text" name={'public_place'} id="public_place" value={public_place}
                                   onChange={onChangeEvent}
                                   placeholder="Rua ... | Av. ..." required="required"/>
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="public_place">Perto de</label>
                            <input type="text" name={'neighborhood'} id="neighborhood" value={neighborhood}
                                   onChange={onChangeEvent}
                                   placeholder="Mercado..." required="required"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="number">Número</label>
                            <input type="text" name={'number'} value={number} id="number" onChange={onChangeEvent}
                                   required="required"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="city">Cidade</label>
                            <input type="text" name={'city'} id="city" value={city} onChange={onChangeEvent}
                                   required="required"/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-outline-primary pull-right" onClick={onSubmitCompanyPopup}>
                        <span>Salvar</span></button>
                    &nbsp;
                </form>
            </div>
        </Popup>
    }

    return (
        <Local>
            <MaterialTable
                options={{
                    headerStyle: {fontWeight: 'bold', fontSize: '12px', backgroundColor: 'rgb(240, 230, 255)'},
                    searchFieldStyle: {backgroundColor: 'rgb(242, 242, 242)'}
                }}

                icons={{
                    Add: props => companyPopUp({trigger: <button className="btn-logout">+</button>}),
                }}

                actions={[{
                    icon: 'edit',
                    tooltip: 'Editar',
                    onClick: (event, rowData) => {
                        setState(prevState => ({...prevState, ...getCompanyJson(rowData), modal_open: true}));
                    }
                }, {
                    icon: 'contact_phone',
                    tooltip: 'Editar Contatos',
                    onClick: (event, rowData) => {
                        setState(prevState => ({
                            ...prevState,
                            id: rowData.id,
                            modal_contact_open: true
                        }));
                    }
                }]}

                columns={[
                    {title: 'Nome', field: 'name'},
                    {title: 'Reg. Est', field: 'state_registration'},
                    {title: 'CPF', field: 'cpf'},
                    {title: 'CNPJ', field: 'cnpj'},
                    {title: 'Moderação', field: 'moderation', lookup: {true: 'ATIVA', false: 'DESATIVADA'}},
                    {
                        title: 'Gerente',
                        field: 'id_user',
                        lookup: users.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {})
                    },
                    {
                        title: 'Segmento',
                        field: 'id_segment',
                        lookup: segments.reduce((acc, cv) => ({...acc, [cv.id]: cv.name}), {})
                    }
                ]}

                data={company}
                title="Empresa"

                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if (!newData.department) return reject();
                            // addCompany(getData(newData), resolve);
                        }),
                    // onRowUpdate: (newData, oldData) =>
                    //     new Promise(resolve => {
                    //         if (oldData) {
                    //             // updateCompany(getData(newData), resolve);
                    //         }
                    //     }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            deleteCompany(oldData.id, resolve);
                        }),
                }}
            />
            {(modal_open == true) ? (
                companyPopUp({
                    open: modal_open,
                    onClose: () => setState(prevState => ({...prevState, ...getCompanyJson(), modal_open: false}))
                })
            ) : null}
            {(modal_contact_open == true) ? (
                <ContactsPopup
                    modal_open={modal_contact_open}
                    closeFn={() => setState(prevState => ({...prevState, id: null, modal_contact_open: false}))}
                    id_company={id}
                />
            ) : null}

        </Local>
    );
}
