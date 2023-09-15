import React, {  useState } from 'react';
import './TelaDescanso.scss';
import telaDescanso1 from '../../imgs/telaDescanso1.png'
import telaDescanso2 from '../../imgs/telaDescanso2.png'
import telaDescanso3 from '../../imgs/telaDescanso3.png'
import logo from '../../imgs/logo.png'
import { Link } from 'react-router-dom';

function TelaDescanso() {
    const [count, setCount] = useState(0)

    setTimeout(() => {
        setCount(count + 1)
        if(count === 2){
            setCount(0)
        }
    }, 8000);
    

    return(
        <div className='telaDescansoContainer'>
            <div id='bgImgDescanso'>
                {count === 0 &&( <img src={telaDescanso1} alt="" srcset="" cache-control="max-age=2592000"  />)}
                {count === 1 &&( <img src={telaDescanso2} alt="" srcset="" cache-control="max-age=2592000" />)}
                {count === 2 &&( <img src={telaDescanso3} alt="" srcset="" cache-control="max-age=2592000" />)}
            </div>
            <div id="telaDescansoConteudo">
                <img src={logo} id='logo'alt="" srcset="" />
                <div id='textosTelaDescanso'>
                    {count === 0 &&(
                        <>
                            <h2>Conecte sua empresa</h2>
                            <p>Com o TouchDesk, os colaboradores conseguem realizar diversos tipos de solicitações e acompanhar o andamento em tempo real.</p>
                        </>
                    )}
                    {count === 1 &&(
                        <>
                            <h2>Melhore seu tempo de resposta </h2>
                            <p>Através da Central do Colaborador, o processo de solicitação se torna extremamente ágil e intuitivo tanto para os usuários quanto para as equipes responsáveis pelo atendimento.</p>
                        </>
                    )}
                    {count === 2 &&(
                        <>
                            <h2>Centralize as informações</h2>
                            <p>Ao centralizarmos as solicitações em um único sistema, todo o processo se torna mais transparente e intuitivo, possibilitando uma geração de indicadores mais eficiente.</p>
                        </>
                    )}

                </div>
                        
                <Link to='/home'>
                    <button>Clique para Iniciar</button>
                </Link>
            </div>
        </div>
    );
}

export default TelaDescanso;