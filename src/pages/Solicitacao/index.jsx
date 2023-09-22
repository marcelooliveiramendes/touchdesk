import React, {useState, useEffect} from 'react';
import './Solicitacao.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import UserDetails from '../../componentes/UserDetails';
import rota from '../../icons/rota.svg'
import { useNavigate, useParams } from "react-router-dom";

function Solicitacao() {
    const navigate = useNavigate();
    const {id} = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        debugger
        let dados = JSON.parse(localStorage.getItem('solicitacoes')).filter((item) => item.id === parseInt(id) )

        if(dados !== undefined) {
            setData(dados[0])
        }
    }, [id])

    const cancel = () => {
        navigate('/consulta-solic');
    }
    

    return(
        <motion.div id='solicitacaoContainer' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
            style={{ backgroundImage: `url(${background})` }}
        >   
            <UserDetails />
            <div id="confirmacaoContent">
                {data !== undefined && (
                    <>
                        {data.tipo === 'epi' && <EPI data={data} />}
                        {data.tipo === "fretado" && <Fretado data={data} />}
                        {data.tipo === "manutencao" && <Manutencao data={data} />}
                        
                    </>
                )}
            
            </div>

            <div id="btnMenuActions">
                <button onClick={cancel}>Voltar</button>
            </div>
        </motion.div>
    );
}

export default Solicitacao;

const EPI = ({data}) => {
    return(
        <div id="confirmacaoContent">
            <h3>Detalhes da solicitação:</h3>
            {data !== undefined &&(
                <div id="confirmacaoDetails">
                    <div className="details">
                        <p>Item</p>
                        <div className='itemDetailPreview'>
                            <img src={data.info.image} alt="" />
                            <p>{data.info.name}</p>
                        </div>
                        <br />
                        {data.info.size !== undefined &&(
                            <>
                                <p>Tamanho</p>
                                <div className="itemDetail">
                                    {data.info.size}
                                </div>
                            </>
                        )}
                        <br />
                        {data.info.model !== undefined &&(
                            <>
                                <p>Modelo</p>
                                <div className="itemDetail">
                                    {data.info.model}
                                </div>
                            </>
                        )}
                        {data.info.color !== undefined &&(
                            <>
                                <p>Cor</p>
                                <div className="itemDetail">
                                    {data.info.color}
                                </div>
                            </>
                        )}
                        <br />
                        {data.info.motivo !== undefined &&(
                            <>
                                <p>Motivo</p>
                                <div className="itemDetail">
                                    {data.info.motivo}
                                </div>
                            </>
                        )}
                    </div>
                    {data.obs !== undefined&&(
                        <div className="detailsObs">
                            <p>Observações</p>
                            <textarea name="txt_obs" id="txt_obs" cols="30" rows="10" placeholder='Observações' readonly='true' value={data.obs}></textarea>
                        </div>
                    )}
                </div>
            )}

        </div>
    )
}
const Fretado = ({data}) => {
    
    return(
        <div id="confirmacaoContent">
            <h3>Detalhes da solicitação:</h3>
            {data !== undefined &&(
                <div id="confirmacaoDetails">
                    <div className="details">
                        {/* <p>Item</p>
                        <div className='itemDetailPreview'>
                            <img src={rota} alt="" />
                            <p>{data.info.name}</p>
                        </div>
                        <br /> */}
                        {data.info.localOrigem !== undefined &&(
                            <>
                                <p>Origem</p>
                                <div className="itemDetail">
                                    {data.info.localOrigem}
                                </div>
                            </>
                        )}
                        <br />
                        {data.info.localDestino !== undefined &&(
                            <>
                                <p>Destino</p>
                                <div className="itemDetail">
                                    {data.info.localDestino}
                                </div>
                            </>
                        )}
                        {data.info.horaIda !== undefined &&(
                            <>
                                <p>Hora Ida</p>
                                <div className="itemDetail">
                                    {data.info.horaIda}
                                </div>
                            </>
                        )}
                        <br />
                        {data.info.horaVolta !== undefined &&(
                            <>
                                <p>Hora Volta</p>
                                <div className="itemDetail">
                                    {data.info.horaVolta}
                                </div>
                            </>
                        )}
                    </div>
                    {data.obs !== undefined&&(
                        <div className="detailsObs">
                            <p>Observações</p>
                            <textarea name="txt_obs" id="txt_obs" cols="30" rows="10" placeholder='Observações' readonly='true' value={data.obs}></textarea>
                        </div>
                    )}
                </div>
            )}

        </div>
    )
}
const Manutencao = ({data}) => {
    

    return(
        <div id="confirmacaoContent">
            <h3>Detalhes da solicitação:</h3>
            {data !== undefined &&(
                <div id="simpleSolic">
                    <div id="solic-info">
                        <div>
                            <h3>Área</h3>
                            <p>{data.info.setor}</p>
                        </div>
                    </div>
                    {data.obs !== undefined&&(
                        <div className="detailsObs">
                            <p>Observações</p>
                            <textarea name="txt_obs" id="txt_obs" cols="30" rows="10" placeholder='Observações' readonly='true' value={data.info.obs}></textarea>
                        </div>
                    )}
                </div>
            )}

        </div>
    )
}
