import React, { useEffect, useState } from 'react';
import './ConsultaSolicitacoes.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
// import { Link } from 'react-router-dom';
import UserDetails from '../../componentes/UserDetails';
import { Link } from 'react-router-dom';
  

function ConsultaSolicitacoes() {
    const [data, setData] = useState()

    const getData = () => {
        let dataContent = localStorage.getItem('solicitacoes')
        setData(JSON.parse(dataContent));
        console.log(JSON.parse(dataContent))
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <motion.div id='consultaContainer' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
            style={{ backgroundImage: `url(${background})` }}
        >   
            <UserDetails /> 
            <div id='tableList'>
                <table>
                    <thead>
                        <tr>
                            <td>Tipo</td>
                            <td>Data</td>
                            <td>Status</td>
                            <td>N° da Sol.</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&(data.map((item, i) => (
                            <React.Fragment key={i}>
                                <br />
                                <tr >
                                    <td><div>{item.tipoSolic}</div></td>
                                    <td><div>{item.data}</div></td>
                                    <td><div>Em análise</div></td>
                                    <td><div>{item.id}</div></td>
                                    <td>
                                        <div>
                                            <Link className='btnConsultSolic' to={'/consulta-solic/'+ item.id}>
                                                Acessar
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </React.Fragment>
                        )))}
                        
                    </tbody>
                </table>

            </div>

            <Link to="/home-solicitacao" id="btnVoltarConsulta">
                <button>Voltar</button>
            </Link>
        </motion.div>
    );
}

export default ConsultaSolicitacoes;