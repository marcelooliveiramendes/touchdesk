import React from 'react';
import './SolicitacaoEnviada.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
// import { Link } from 'react-router-dom';
import UserDetails from '../../componentes/UserDetails';
import { useNavigate } from "react-router-dom";
import checked from '../../imgs/checked.gif'

function SolicitacaoEnviada() {
    const navigate = useNavigate();

    const cancel = () => {
        navigate('/home-solicitacao');
    }
    const sendSolic = () => {
        navigate('/consulta-solic')
       
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
            <div id="solicitacaoEnviadaContent">
                <img src={checked} alt="" srcset="" />
                <h3>Sua solicitação foi enviada com sucesso!</h3>
                    
            
            </div>

            <div id="btnMenuActions">
                <button onClick={cancel}>Voltar ao início</button>
                <button onClick={sendSolic}>Ver solicitações</button>
            </div>
        </motion.div>
    );
}

export default SolicitacaoEnviada;