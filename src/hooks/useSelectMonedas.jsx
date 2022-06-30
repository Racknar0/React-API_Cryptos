import React from 'react';
import styled from '@emotion/styled';



const Label = styled.label`
    color: #fff;
`;



const useSelectMonedas = (label) => {
    const SelecMonedas = () => (
        <>
            <Label>{label}</Label>
        </>
    );

    return [SelecMonedas];
};

export default useSelectMonedas;
