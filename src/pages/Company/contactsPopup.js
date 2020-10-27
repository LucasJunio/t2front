import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addContactRequest,
    deleteContactRequest,
    readContactRequest,
    updateContactRequest
} from "../../store/modules/contact/actions";
import MaterialTable from "material-table";
import Popup from "reactjs-popup";

const initialState = {};
export default function ContactsPopup(props) {
    const [
        {},
        setState
    ] = useState(initialState);
    const dispatch = useDispatch();
    useEffect(() => {
        if (props.id_company) dispatch(readContactRequest(props.id_company));
    }, []);

    const contacts = useSelector(state => state.contact.contacts)
    console.log(contacts)

    function addContact(object, resolve = () => {
    }) {
        dispatch(addContactRequest({...object, id_company: props.id_company}, () => {
            refresh();
            resolve();
        }));
    }

    function updateContact(object, resolve = () => {
    }) {
        console.log('update contact ', object);
        dispatch(updateContactRequest(object, () => {
            refresh();
            resolve();
        }));
    }

    function deleteContact(id, resolve = () => {
    }) {
        dispatch(deleteContactRequest(id, () => {
            refresh();
            resolve();
        }));
    }

    const refresh = (() => {
        if (props.id_company) dispatch(readContactRequest(props.id_company));
    });

    return (
        <Popup modal open={true} onClose={() => {
            refresh();
            props.closeFn();
        }} overlayStyle={{'overflowY': 'scroll'}}>
            <MaterialTable
                options={{
                    headerStyle: {
                        fontWeight: 'bold',
                        fontSize: '12px',
                        backgroundColor: 'rgb(240, 230, 255)'
                    },
                    searchFieldStyle: {backgroundColor: 'rgb(242, 242, 242)'}
                }}

                columns={[
                    {title: 'Nome', field: 'name'},
                    {title: 'E-mail', field: 'email'},
                    {title: 'Telefone', field: 'telephone'},
                ]}
                data={contacts}
                title="Contatos"
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if (['name', 'email', 'telephone'].some(field => !newData[field])) return reject()
                            addContact(newData, resolve);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if (oldData) {
                                if (['id', 'name', 'email', 'telephone'].some(field => !newData[field])) return reject()
                                updateContact(newData, resolve);
                            }
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            deleteContact(oldData.id, resolve);
                        }),
                }}
            />
        </Popup>
    )
}
