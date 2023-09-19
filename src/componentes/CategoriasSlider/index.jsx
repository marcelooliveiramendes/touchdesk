import React from 'react';
import './CategoriasSlider.scss'
import { Link } from 'react-router-dom';
// import axios from 'axios';
import epiImg from '../../icons/solicEPI.svg'
import manutencaoImg from '../../icons/manutencao.svg'
import fretadoImg from '../../icons/fretado.svg'
import cestaBasica from '../../icons/cestaBasica.svg'
import valeTransporte from '../../icons/valeTransporte.svg'
import convenioImg from '../../icons/convenio.svg'
import convenioFarma from '../../icons/convenioFarma.svg'
import pagamento from '../../icons/pagamento.svg'
import contaBancaria from '../../icons/contaBancaria.svg'
import holerite from '../../icons/holerite.svg'
import premiacao from '../../icons/premiacao.svg'
import ferias from '../../icons/ferias.svg'
import parcerias from '../../icons/parcerias.svg'
import refeicao from '../../icons/refeicao.svg'
import pontoCracha from '../../icons/pontoCracha.svg'
import gestao from '../../icons/gestao.svg'
import outro from '../../icons/outro.svg'

function CategoriasSlider({changeView}) {
    
    return(
        <div id="categoriasContainer">
        
            <Link to={ '/menu-escolha/epi'}>
                <div className='card'>
                    <img src={epiImg} alt=""  />
                    <p>EPI</p>
                </div>
            </Link>
            <Link to={`/menu-escolha/fretado`}>
                <div className='card'>
                    <img src={fretadoImg} alt=""  />
                    <p>Fretado</p>
                </div>
            </Link>
            <Link to={'/menu-escolha/manutencao'}>
                <div className='card'>
                    <img src={manutencaoImg} alt=""  />
                    <p>Manutenção</p>
                </div>
            </Link>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'cestaBasica'} onChange={changeView}/>
                <div>
                    <img src={cestaBasica} alt="" srcset="" />
                    <span>Cesta básica</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'valeTransporte'} onChange={changeView}/>
                <div>
                    <img src={valeTransporte} alt="" srcset="" />
                    <span>Vale transporte</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'convenio'} onChange={changeView}/>
                <div>
                    <img src={convenioImg} alt="" srcset="" />
                    <span>Convênio médico</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'convenioFarma'} onChange={changeView}/>
                <div>
                    <img src={convenioFarma} alt="" srcset="" />
                    <span>Convênio farmacêutico </span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'pagamento'} onChange={changeView}/>
                <div>
                    <img src={pagamento} alt="" srcset="" />
                    <span>Pagamento</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'contaBancaria'} onChange={changeView}/>
                <div>
                    <img src={contaBancaria} alt="" srcset="" />
                    <span>Conta bancária</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'holerite'} onChange={changeView}/>
                <div>
                    <img src={holerite} alt="" srcset="" />
                    <span>Holerite</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'premiacao'} onChange={changeView}/>
                <div>
                    <img src={premiacao} alt="" srcset="" />
                    <span>Premiação</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'ferias'} onChange={changeView}/>
                <div>
                    <img src={ferias} alt="" srcset="" />
                    <span>Férias</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'parcerias'} onChange={changeView}/>
                <div>
                    <img src={parcerias} alt="" srcset="" />
                    <span>Parcerias</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'refeicao'} onChange={changeView}/>
                <div>
                    <img src={refeicao} alt="" srcset="" />
                    <span>Refeição</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'pontoCracha'} onChange={changeView}/>
                <div>
                    <img src={pontoCracha} alt="" srcset="" />
                    <span>Ponto e Crachá</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'convenioOdonto'} onChange={changeView}/>
                <div>
                    <img src={convenioFarma} alt="" srcset="" />
                    <span>Convênio Odonto</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'gestao'} onChange={changeView}/>
                <div>
                    <img src={gestao} alt="" srcset="" />
                    <span>Gestão</span>
                </div>
            </label>
            <label className='categoria'>
                <input type="radio" name="categoriaSwt" id='categoriaSwt' value={'outro'} onChange={changeView}/>
                <div>
                    <img src={outro} alt="" srcset="" />
                    <span>Outro</span>
                </div>
            </label>
        </div>
    );
}


export default CategoriasSlider;