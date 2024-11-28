import { useState } from "react"
import styles from './Imc.module.css'

const Imc = () => {

    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    const calculaImc = () => {
        const imc = peso / (altura * altura)
        const resultado = imc * 10000

        if(resultado < 16){
            return (
                <p>{resultado.toFixed(2)}<br /> Você está com baixo peso grau 3.</p>
            )
        }else if(resultado > 16 && resultado < 16.99){
            return (
                <p>{resultado.toFixed(2)}<br /> Você está com baixo peso grau 2.</p>
            )
        }else if(resultado > 17 && resultado < 18.49){
            return (
                <p>{resultado.toFixed(2)}<br /> Você está com baixo peso grau 1.</p>
            )
        }else if(resultado > 18.50 && resultado < 24.99){
            return (
                <p>{resultado.toFixed(2)}<br /> Você está com baixo peso ideal.</p>
            )
        }else if (resultado > 25 && resultado < 29.99) {
            return (
                <p>{resultado.toFixed(2)}<br /> Você está com sobrepeso.</p>
            )
        } else if (resultado > 30 && resultado < 34.99) {
            return (
                <>
                    <p>{resultado.toFixed(2)}<br /> Você está com obesidade grau 1.</p>
                </>
            )
        }else if(resultado > 35 && resultado < 39.99){
            return (
                <p>{resultado.toFixed(2)}<br /> Você está com obesidade grau 2.</p>
            )
        }else if(resultado > 40){
            return (
                <p>{resultado.toFixed(2)}<br /> Você está obesidade grau 3.</p>
            )
        }

    }

    return (
        <>
            <div className="container">
                <h1>CÁLCULO IMC</h1><br />
                <p>Insira seu peso e altura...</p> <br />

                <label className={styles.titulo} htmlFor="">Informe sua altura:</label>
                <input className={styles.campo} type="number" name="" id="" placeholder='Ex: 170' onChange={evento => setAltura(parseInt(evento.target.value))} /><br />
                <label htmlFor="">Informe seu peso:</label>
                <input className={styles.campo} type="number" name="" id="" placeholder='80' onChange={evento => setPeso(parseInt(evento.target.value))} /><br />

                <h1>{calculaImc()}</h1>
            </div>
        </>
    )
}

export default Imc