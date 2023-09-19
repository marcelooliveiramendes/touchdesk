import React from 'react';
import './HomeSolicitacao.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import { Link } from 'react-router-dom';
import UserDetails from '../../componentes/UserDetails';
import iniciarSolic from '../../icons/iniciarSolic.svg'
import consultSolic from '../../icons/consultarSolic.svg'
  

function HomeSolicitacao() {

    

    return(
        <motion.div id='loginContainer' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
            style={{ backgroundImage: `url(${background})` }}
        >   
            <UserDetails />

            <div className="loginContent">
              
                <div id="btnActions">
                    <Link to='/menu-escolha'>
                        <img src={iniciarSolic} alt="" srcset="" />
                        <p>Nova Solicitação</p>
                    </Link>
                    <Link to='/consulta-solic'>
                        <img src={consultSolic} alt="" srcset="" />
                        <p>Consulta de Solicitações</p>
                    </Link>
                </div>

            </div>
        </motion.div>
    );
}

export default HomeSolicitacao;