import React, { useState }  from 'react';
import './Manutencao.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import UserDetails from '../../componentes/UserDetails';
import { useNavigate } from "react-router-dom";
import escritorioIcon from '../../icons/escritorioIcon.svg'
import fabricaIcon from '../../icons/fabricaIcon.svg'
import estacionamentoIcon from '../../icons/estacionamentoIcon.svg'
import areaComumIcon from '../../icons/areaComumIcon.svg'
import armagemIcon from '../../icons/armagemIcon.svg'
import SemEscolhaAtivo from '../../componentes/SemEscolhaAtivo';

function Manutencao() {
    const navigate = useNavigate();
    const [view, setView] = useState('')
    const [dados, setDados] = useState('')

    const cancel = () => {
        navigate('/menu-escolha');
    }
    const sendSolic = () => {
        navigate('/confirmacao-enviada');
    }

    const changeView = () => {
        let view = document.querySelector('input[name="categoriaManutencaoSwt"]:checked').value
        
        if(view === 'escritorio'){
            setView('escritorio')
            setDados(['ADM', "RH", 'Contabilidade', 'Compras', 'Facilities', 'RP', 'Qualidade'])
        } 
        if(view === 'fabrica'){
            setView('fabrica')
            setDados(['Produção', "PCP", 'Expedição', 'Pesquisa', 'Desenvolvimento', 'Qualidade'])
        } 
        if(view === 'estacionamento'){
            setView('fabrica')
            setDados(['Leste', "Oeste", 'Norte', 'Sul'])
        } 
        if(view === 'areaComum'){
            setView('fabrica')
            setDados(['Refeitório', 'Vestiário Masculino', 'Vestiário Feminino', 'Salas de reunião', 'Banheiro Masculino', 'Banheiro Feminino', 'Salas de lazer'])
        } 
        if(view === 'armazem'){
            setView('armazem')
            setDados(['Leste', "Oeste", 'Norte', 'Sul'])
        } 
       
    }


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
                        <input type="radio" name="categoriaManutencaoSwt" id='categoriaManutencaoSwt' value={'escritorio'} onChange={changeView}/>
                        <div >
                            <img src={escritorioIcon} alt="" srcset="" />
                            <span>Escritórios</span>
                        </div>
                    </label>
                    <label className='categoriaFretado'>
                        <input type="radio" name="categoriaManutencaoSwt" id='categoriaManutencaoSwt' value={'fabrica'} onChange={changeView}/>
                        <div >
                            <img src={fabricaIcon} alt="" srcset="" />
                            <span>Fábrica</span>
                        </div>
                    </label>
                    <label className='categoriaFretado'>
                        <input type="radio" name="categoriaManutencaoSwt" id='categoriaManutencaoSwt' value={'estacionamento'} onChange={changeView}/>
                        <div >
                            <img src={estacionamentoIcon} alt="" srcset="" />
                            <span>Estacionamento</span>
                        </div>
                    </label>
                    <label className='categoriaFretado'>
                        <input type="radio" name="categoriaManutencaoSwt" id='categoriaManutencaoSwt' value={'areaComum'} onChange={changeView}/>
                        <div >
                            <img src={areaComumIcon} alt="" srcset="" />
                            <span>Área Comum</span>
                        </div>
                    </label>
                    <label className='categoriaFretado'>
                        <input type="radio" name="categoriaManutencaoSwt" id='categoriaManutencaoSwt' value={'armazem'} onChange={changeView}/>
                        <div >
                            <img src={armagemIcon} alt="" srcset="" />
                            <span>Armazéns</span>
                        </div>
                    </label>
                    
                </div>
                <div id="mainContent">
                    {view === "" &&(<SemEscolhaAtivo />)}
                    {view === "escritorio" &&(<CadastrarSolicitacao dados={dados}/>)}
                    {view === "fabrica" &&(<CadastrarSolicitacao dados={dados}/>)}
                    {view === "estacionamento" &&(<CadastrarSolicitacao dados={dados}/>)}
                    {view === "areaComum" &&(<CadastrarSolicitacao dados={dados}/>)}
                    {view === "armazem" &&(<CadastrarSolicitacao dados={dados}/>)}
                </div>
            </div>
            <div id="btnFretadoActions">
                <button onClick={cancel}>Voltar</button>
                <button onClick={sendSolic}>Enviar</button>
            </div>
        </motion.div>
    );
}


function CadastrarSolicitacao({dados}){
    return(
        <>  
            <p>Selecione o setor: </p>
            <div className='switchContainer'>
                {dados &&(
                    dados.map((item, i) => (
                        <label className='switch'>
                            <input type="radio" name="localOrigemSwt" />
                            <span>{item}</span>
                        </label>

                    ))
                )}
            </div>
            <br />
            <p>Descreva o ocorrido:</p>
           <textarea name="" id="" cols="30" rows="10" placeholder='Digite sua observação...'></textarea>
        </>
    )
}


export default Manutencao;