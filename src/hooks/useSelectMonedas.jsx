import React from 'react';
import styled from '@emotion/styled';



const Label = styled.label`
    color: #fff;
`;



const useSelectMonedas = (label, opciones) => {
    const SelecMonedas = () => (
        <>
            <Label>{label}</Label>
            <select>
                <option value="">Seleccione</option>
                {opciones.map(opcion => (
                    <option 
                        key={opcion.id} 
                        value={opcion.id}>

                        {opcion.name}
                        
                    </option>
                ))}
            </select>
        </>
    );

    return [SelecMonedas];
};

export default useSelectMonedas;
