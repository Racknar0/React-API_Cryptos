import styled from '@emotion/styled';

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
        resultado;
    return (
        <div>
            <p>El precio es de: <span>{PRICE}</span></p>
            <p>Precio más alto del día: <span>{HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span>{LOWDAY}</span></p>
            <p>Variación ultimas 24H: <span>{CHANGEPCT24HOUR}</span></p>
            <p>Ultima actualización: <span>{LASTUPDATE}</span></p>
        </div>
    );
};

export default Resultado;
