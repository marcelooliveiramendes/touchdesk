import React from 'react';
import './Login.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import { Link } from 'react-router-dom';
import UserDetails from '../../componentes/UserDetails';
  

function Login() {

    

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
                <h2>Login</h2>

                <label htmlFor="">Número da matrícula</label>
                <input type="tel" name="txt_numMatricula" id="txt_numMatricula" inputMode="numeric" pattern="[0-9]*" />

                <label htmlFor="">Senha</label>
                <input type="password" name="txt_password" id="txt_password" />

                <div id="btnActionsLogin">
                    <Link to="/home">
                        <button id='btnVoltar'>Voltar</button>
                    </Link>
                    <Link to="/home-solicitacao">
                        <button id='btnContinuar'>Próximo</button>
                    </Link>
                </div>

            </div>
        </motion.div>
    );
}

export default Login;