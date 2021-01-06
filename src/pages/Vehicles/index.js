import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaterialTable from 'material-table'

import { addVehiclesRequest, readVehiclesRequest, updateVehiclesRequest, deleteVehiclesRequest } from '../../store/modules/vehicles/actions';

import { Local } from './style';
import { SingleSelect } from "react-select-material-ui";

export default function Vehicles() {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(readVehiclesRequest());
        dispatch(readVehiclesRequest());
    }, []);

    let vehicles = useSelector(state => state.vehicles.vehicles )

    const refresh = (() => {
        dispatch(readVehiclesRequest());
    });

    function addVehicles(object, resolve) {

        dispatch(addVehiclesRequest(object, () => { refresh(); resolve(); }));
    }
    
    function updateVehicles(id, object, resolve) {
        dispatch(updateVehiclesRequest(object, () => { refresh(); resolve(); }));
    }

    function deleteVehicles(id, resolve) {
        dispatch(deleteVehiclesRequest(id, () => { refresh(); resolve(); }));
    }


    return (

        <Local>
            <MaterialTable
                options={{
                    headerStyle:{ fontWeight: 'bold', fontSize: '12px', backgroundColor:'rgb(240, 230, 255)' },
                    searchFieldStyle:{ backgroundColor:'rgb(242, 242, 242)' }
                }}

                columns={[
                    { title: 'Placa', field: 'placa' },
                    { title: 'Chassi', field: 'chassi' },
                    { title: 'Renavam', field: 'renavam' },
                    { title: 'Modelo', field: 'modelo' },
                    { title: 'Marca', field: 'marca' },
                    { title: 'Ano', field: 'ano' },
                ]}

                data={vehicles}
                title="Veículos do usuário"

                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (['placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano'].some(field => !newData[field])) return reject()
                        addVehicles(newData, resolve);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (oldData) {
                            if (['placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano'].some(field => !newData[field])) return reject()
                            updateVehicles(oldData.id, newData, resolve);
                        }
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        deleteVehicles(oldData.id, resolve);
                    }),
                }}
            />
        </Local>
    );
}