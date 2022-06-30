import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`


const Formulario = () => {

   

    // destructuring para obtener el state y el setState
    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false);

    //! custom hook
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);
    const [ cryptomoneda, SelectCryptomoneda ] = useSelectMonedas('Elige tu Cryptomoneda', cryptos);

    useEffect(() => {

        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD`

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCripto = resultado.Data.map(cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName
                }

                return objeto;

            })

            setCryptos(arrayCripto);
        }
        consultarAPI();

    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        if ([moneda, cryptomoneda].includes('')) {
            setError(true);
            return;
        }
        setError(false);
    }

  return (
    <>
        {error ? <Error>Todos los campos son obligatorios</Error> : null}

        <form onSubmit={handleSubmit}>
            
            <SelectMonedas />
            <SelectCryptomoneda />

            <InputSubmit 
                type="submit" 
                value="Cotizar"
            />

        </form>
    </>
  )
}

export default Formulario
