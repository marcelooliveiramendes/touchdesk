import React, { useEffect, useState } from 'react';
import './Confirmacao.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import UserDetails from '../../componentes/UserDetails';
import { useNavigate } from "react-router-dom";
import cadastrarImg from '../../icons/rota.svg'

function ConfirmacaoRota() {
    const navigate = useNavigate();
    const [data, setData] = useState()

    useEffect(() => {
        let dados = JSON.parse(localStorage.getItem('createRoute'))

        if(dados !== undefined) {
            setData(dados)
        }
    }, [])

    const cancel = () => {
        navigate('/menu-escolha');
    }
    const sendSolic = () => {
        debugger
    
        try{
            let localOrigem = data.localOrigem
            let localDestino = data.localDestino
            let horaIda = data.horaIda
            let horaVolta = data.horaVolta
    
            const minimo = 10000000;
            const maximo = 90000000;
            const numeroAleatorio = parseInt(Math.random() * (maximo - minimo) + minimo);
            const usuarioJSON = localStorage.getItem('solicitacoes');
            let usuarioObjeto;
            if(usuarioJSON !== ''){
                usuarioObjeto = JSON.parse(usuarioJSON);      
            } 
            let infos = {
                'id': numeroAleatorio,
                'tipoSolic': 'Fretado',
                'obs': '',
                'data': getDate(),
                'tipo': 'fretado',
                'info': {
                    'localOrigem': localOrigem,
                    'localDestino': localDestino,
                    'horaIda': horaIda,
                    'horaVolta': horaVolta
                }
            }
            if(usuarioObjeto !== undefined){
                localStorage.setItem('solicitacoes', JSON.stringify([...usuarioObjeto, infos]));
            } else {
                localStorage.setItem('solicitacoes', JSON.stringify([infos]));
            }
            
            localStorage.removeItem('createRoute');
            window.location.href = '/confirmacao-enviada';
        }catch{
            console.log('Falha ao criar rota!');
        }
    }

    return(
        <motion.div id='confirmacaoContainer' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
            style={{ backgroundImage: `url(${background})` }}
        >   
            <UserDetails />
            <div id="confirmacaoContent">
                <h3>Detalhes da solicitação:</h3>
                <div id="confirmacaoDetails">
                    <div className="details">
                        <p>Item</p>
                        <div className='itemDetailPreview'>
                            <img src={cadastrarImg} alt=""   />
                            <p>Cadastrar rota</p>
                        </div>
                        <br />
                        <p>Origem</p>
                        <div className="itemDetail">
                            {data && <p>{data.localOrigem}</p>}
                        </div>
                        <br />
                        <p>Destino</p>
                        <div className="itemDetail">
                            {data && <p>{data.localDestino}</p>}
                        </div>
                        <br />
                        <p>Hora Origem</p>
                        <div className="itemDetail">
                            {data && <p>{data.horaIda}</p>}
                        </div>
                        <br />
                        <p>Hora Destino</p>
                        <div className="itemDetail">
                            {data && <p>{data.horaVolta}</p>}
                        </div>

                    </div>
                    <div className="detailsObs">
                        <p>Observações</p>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Observações'></textarea>
                    

                    </div>
                </div>
            
            </div>

            <div id="btnMenuActions">
                <button onClick={cancel}>Voltar</button>
                <button onClick={sendSolic}>Enviar</button>
            </div>
        </motion.div>
    );
}

export default ConfirmacaoRota;


const getDate = () => {
    var dataAtual = new Date();

    var dia = String(dataAtual.getDate()).padStart(2, '0');
    var mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Mês é base 0, então somamos 1.
    var ano = dataAtual.getFullYear();

    var hora = String(dataAtual.getHours()).padStart(2, '0');
    var minutos = String(dataAtual.getMinutes()).padStart(2, '0');

    var dataHoraFormatada = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minutos
    return dataHoraFormatada
}