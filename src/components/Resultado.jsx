import styled from '@emotion/styled';

const Res = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
`

const Imagen = styled.img`
    display: block;
    width: 150px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }

`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }

`

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
        resultado;
    return (
        <Res>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen crypto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación ultimas 24H: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Res>
    );
};

export default Resultado;
