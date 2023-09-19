import React, {useState, useEffect} from 'react';
import './Confirmacao.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import UserDetails from '../../componentes/UserDetails';
import { useNavigate } from "react-router-dom";

function Confirmacao() {
    const navigate = useNavigate();
    const [data, setData] = useState()

    useEffect(() => {
        let dados = JSON.parse(localStorage.getItem('createEPI'))

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
            let size, model, color, motivo, obs

            
            obs = document.querySelector('#txt_obs').value
            let info = {
                'name': data.name,
                'image': data.image,
            }

            if(data.size !== undefined){
                size = data.size
                info = {
                    ...info,
                    'size': size
                }
            }
            if(data.model !== undefined){
                model = data.model
                info = {
                    ...info,
                    'model': model
                }
            }
            if(data.color !== undefined){
                color = data.color
                info = {
                    ...info,
                    'color': color
                }
            }
            if(data.motivo !== undefined){
                motivo = data.motivo
                info = {
                    ...info,
                    'motivo': motivo
                }
            }

    
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
                'tipoSolic': 'EPI',
                'obs': obs,
                'data': getDate(),
                'tipo': 'epi',
                'info': info
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
                {data !== undefined &&(
                    <div id="confirmacaoDetails">
                        <div className="details">
                            <p>Item</p>
                            <div className='itemDetailPreview'>
                                <img src={data.image} alt="" srcset="" />
                                <p>{data.name}</p>
                            </div>
                            <br />
                            {data.size !== undefined &&(
                                <>
                                    <p>Tamanho</p>
                                    <div className="itemDetail">
                                        {data.size}
                                    </div>
                                </>
                            )}
                            <br />
                            {data.model !== undefined &&(
                                <>
                                    <p>Modelo</p>
                                    <div className="itemDetail">
                                        {data.model}
                                    </div>
                                </>
                            )}
                            {data.color !== undefined &&(
                                <>
                                    <p>Cor</p>
                                    <div className="itemDetail">
                                        {data.color}
                                    </div>
                                </>
                            )}
                            <br />
                            {data.motivo !== undefined &&(
                                <>
                                    <p>Motivo</p>
                                    <div className="itemDetail">
                                        {data.motivo}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="detailsObs">
                            <p>Observações</p>
                            <textarea name="txt_obs" id="txt_obs" cols="30" rows="10" placeholder='Observações'></textarea>
                        

                        </div>
                    </div>
                )}
            
            </div>

            <div id="btnMenuActions">
                <button onClick={cancel}>Voltar</button>
                <button onClick={sendSolic}>Enviar</button>
            </div>
        </motion.div>
    );
}

export default Confirmacao;

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