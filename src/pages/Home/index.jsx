import React from 'react';
import './Home.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import homeImg from './../../imgs/homeImg.png'
import reconhecimentoIcon from './../../icons/reconhecimentoIcon.svg'
import anonimoIcon from './../../icons/anonimo.svg'
import { Link } from 'react-router-dom';


function Home() {
  return(
    <motion.div className='homeContainer' 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ ease: "easeOut", duration: 1 }}
        style={{ backgroundImage: `url(${background})` }}
    >
        <img src={homeImg} alt="" srcset="" />
        <div id="homeActions">
            <Link to='/reconhecimento-facial'>
                <button>
                    <img src={reconhecimentoIcon} alt="" srcset="" />
                    <p>Reconhecimento Facial</p>
                </button>

            </Link>
            <Link to="/home-solicitacao">
                <button>
                    <img src={anonimoIcon} alt="" srcset="" />
                    <p>Anônimo</p>
                </button>
            </Link>
        </div>
        <div className="btnActions">
            <Link to='/' className='btnVoltar'>
                <button>
                    Sair
                </button>
            </Link>

        </div>

    </motion.div>
  );
}

export default Home;