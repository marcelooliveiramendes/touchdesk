import React from 'react';
import './ReconhecimentoFacial.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import recIcon from '../../icons/reconhecimentoIcon.svg'
// import Webcam from "react-webcam";
import { Link } from 'react-router-dom';

// const WebcamComponent = () => <Webcam />;

  

function ReconhecimentoFacil() {

    // const getCamera = async ()  => {
    //     if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    //         const videoStream = await navigator.mediaDevices.getUserMedia({ video: true })
    //     }

    // }

    // useEffect(() => {
    //   getCamera()
    
    // }, [])
    


    return(
        <motion.div id='reconhecimentoContainer' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
            style={{ backgroundImage: `url(${background})` }}
        >   
            <h2>
                Posicione-se e deixe nossa tecnologia de reconhecimento facial fazer o resto!
            </h2>

            <div id="imgRecFacial">
                <img src={recIcon} alt="" />
            </div>

            <div className="btnActions">
                <Link to='/login' className='btnAcessarMan'>
                    <button>
                        Acessar Manualmente
                    </button>
                </Link>
                <Link to='/home'>
                    <button className='btnVoltar'>
                        Voltar
                    </button>
                </Link>
            </div>

        </motion.div>
    );
}

export default ReconhecimentoFacil;