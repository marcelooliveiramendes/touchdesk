import React, { useEffect, useState }  from 'react';
import './Fretado.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import UserDetails from '../../componentes/UserDetails';
import { useNavigate } from "react-router-dom";
import cadastrarImg from '../../icons/rota.svg'
import fretadoImg from '../../icons/fretado.svg'
import SemEscolhaAtivo from '../../componentes/SemEscolhaAtivo';

function Fretado() {
    const navigate = useNavigate();
    const [view, setView] = useState('')
    const [showBtn, setShowBtn] = useState(false)

    const cancel = () => {
        navigate('/menu-escolha');
    }

    const changeView = () => {
        let view = document.querySelector('input[name="categoriaSwtFretado"]:checked').value
        
        if(view === 'cadastrar'){
            setView('cadastrar')
        } 
        if(view === 'alterar'){
            setView('alterar')
            
        }
    }

    const verifyInfo = () => {
        let localOrigem = '', localDestino = '', horaIda = '', horaVolta = ''

        if( document.querySelector('input[name="localOrigemSwt"]:checked') !== null){
            localOrigem = document.querySelector('input[name="localOrigemSwt"]:checked').value
        }
        if( document.querySelector('input[name="localDestinoSwt"]:checked') !== null){
            localDestino = document.querySelector('input[name="localDestinoSwt"]:checked').value
        }
        if( document.querySelector('input[name="horaIdaSwt"]:checked') !== null){
            horaIda = document.querySelector('input[name="horaIdaSwt"]:checked').value
        }
        if( document.querySelector('input[name="horaVoltaSwt"]:checked') !== null){
            horaVolta = document.querySelector('input[name="horaVoltaSwt"]:checked').value
        }
        
        if(localOrigem !== '' && localDestino !== '' && horaIda !== '' && horaVolta !== ''){
            setShowBtn(true)
        } else {
            setShowBtn(false)

        }
    }

    const createRoute = () => {
        debugger
        
        try{
            let localOrigem = document.querySelector('input[name="localOrigemSwt"]:checked').value
            let localDestino = document.querySelector('input[name="localDestinoSwt"]:checked').value
            let horaIda = document.querySelector('input[name="horaIdaSwt"]:checked').value
            let horaVolta = document.querySelector('input[name="horaVoltaSwt"]:checked').value
    
            let infos = {
                'localOrigem': localOrigem,
                'localDestino': localDestino,
                'horaIda': horaIda,
                'horaVolta': horaVolta
            }
          
            localStorage.setItem('createRoute', JSON.stringify(infos));
            
            navigate('/confirmacao-rota');
        }catch{
            console.log('Falha ao criar rota!');
        }

    }
    
    useEffect(() => {
        
    })


    return(
        <motion.div id='fretadoContainer' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
            style={{ backgroundImage: `url(${background})` }}
        >   
            <UserDetails />
            <div id="fretadoContent">
                <div id="sidebar">
                    <label className='categoriaFretado'>
                        <input type="radio" name="categoriaSwtFretado" id='categoriaSwtFretado' value={'cadastrar'} onChange={changeView}/>
                        <div >
                            <img src={cadastrarImg} alt="" />
                            <span>Cadastrar rota</span>
                        </div>
                    </label>
                    <label className='categoriaFretado'>
                        <input type="radio" name="categoriaSwtFretado" id='categoriaSwtFretado' value={'alterar'} onChange={changeView}/>
                        <div>
                            <img src={fretadoImg} alt="" />
                            <span>Visualizar rotas</span>
                        </div>
                    </label>
                </div>
                <div id="mainContent">
                    {view === "" &&(<SemEscolhaAtivo />)}
                    {view === "cadastrar" &&(<CadastrarRota onchange={verifyInfo}/>)}
                    {view === "alterar" &&(<div>Sem Rotas Cadastrada</div>)}
                </div>
            </div>
            <div id="btnFretadoActions">
                <button onClick={cancel}>Voltar</button>
                {showBtn && <button onClick={createRoute}>Enviar</button>}
                
            </div>
        </motion.div>
    );
}

const rotas = ['Londrina', 'Curitiba', 'Maringá', 'Ponta Grossa', 'Cascavel']
const destino = ['S. J. Pinhais', 'Foz do Iguaçu', 'Paranaguá', 'Apucarana', 'Colombo']
const horaIda = ['7h00', '8h00', '9h00', '10h00', '11h00']
const horaVolta = ['17h00', '18h00', '19h00', '20h00', '21h00']

function CadastrarRota({onchange}){
    return(
        <>  
            <p>Selecione o local de origem: </p>
            <div className='switchContainer'>
                {rotas &&(
                    rotas.map((item, i) => (
                        <label className='switch' key={i}>
                            <input type="radio" onChange={onchange} name="localOrigemSwt"  value={item}/>
                            <span>{item}</span>
                        </label>

                    ))
                )}
            </div>
            <br />
            <p>Selecione o local de destino:</p>
            <div className='switchContainer'>
                {destino &&(
                    destino.map((item, i) => (
                        <label className='switch' key={i}>
                            <input type="radio" onChange={onchange} name="localDestinoSwt" value={item}/>
                            <span>{item}</span>
                        </label>

                    ))
                )}
            </div>
            <br />
            <p>Selecione o horário de ida:</p>
            <div className='switchContainer'>
                {horaIda &&(
                    horaIda.map((item, i) => (
                        <label className='switch' key={i}>
                            <input type="radio" onChange={onchange} name="horaIdaSwt" value={item}/>
                            <span>{item}</span>
                        </label>

                    ))
                )}
            </div>
            <br />
            <p>Selecione o horário de volta:</p>
            <div className='switchContainer'>
                {horaVolta &&(
                    horaVolta.map((item, i) => (
                        <label className='switch' key={i}>
                            <input type="radio" onChange={onchange} name="horaVoltaSwt" value={item}/>
                            <span>{item}</span>
                        </label>

                    ))
                )}
            </div>
        </>
    )
}


export default Fretado;


