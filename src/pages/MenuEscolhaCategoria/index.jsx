import React, {useState} from 'react';
import './MenuEscolhaCategoria.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import UserDetails from '../../componentes/UserDetails';
import CategoriasSlider from '../../componentes/CategoriasSlider';
import SemEscolhaAtivo from '../../componentes/SemEscolhaAtivo';
import { Link, useNavigate } from 'react-router-dom';

function MenuEscolhaCategoria() {
    const navigate = useNavigate();

    const [view, setView] = useState('')
    const [dados, setDados] = useState('')

    const changeView = () => {
        let view = document.querySelector('input[name="categoriaSwt"]:checked').value
        
        switch(view){
            case 'cestaBasica':
                setView('cestaBasica')
                setDados('Observações sobre a cesta básica')
                document.querySelector('#tipo_categoria').value = 'Cesta Básica'
                break;
            case 'valeTransporte':
                setView('valeTransporte')
                setDados('Observações sobre o vale transporte')
                document.querySelector('#tipo_categoria').value = 'Vale Transporte'
                break;
            case 'convenio':
                setView('convenio')
                setDados('Observações sobre o convênio')
                document.querySelector('#tipo_categoria').value = 'Vale Transporte'
                break;
            case 'convenioFarma':
                setView('convenioFarma')
                setDados('Observações sobre o convênio farmacêutico')
                document.querySelector('#tipo_categoria').value = 'Convênio Farmacêutico'
                break;
            case 'pagamento':
                setView('pagamento')
                setDados('Observações sobre o pagamento')
                document.querySelector('#tipo_categoria').value = 'Pagamento'
                break;
            case 'contaBancaria':
                setView('contaBancaria')
                setDados('Observações sobre a conta bancária')
                document.querySelector('#tipo_categoria').value = 'Conta Bancária'
                break;
            case 'holerite':
                setView('holerite')
                setDados('Observações sobre o holerite')
                document.querySelector('#tipo_categoria').value = 'Holerite'
                break;
            case 'premiacao':
                setView('premiacao')
                setDados('Observações sobre a premiação')
                document.querySelector('#tipo_categoria').value = 'Premiação'
                break;
            case 'ferias':
                setView('ferias')
                setDados('Observações sobre as férias')
                document.querySelector('#tipo_categoria').value = 'Férias'
                break;
            case 'parcerias':
                setView('parcerias')
                setDados('Observações sobre as parcerias')
                document.querySelector('#tipo_categoria').value = 'Parcerias'
                break;
            case 'refeicao':
                setView('refeicao')
                setDados('Observações sobre a refeição')
                document.querySelector('#tipo_categoria').value = 'Refeição'
                break
            case 'pontoCracha':
                setView('pontoCracha')
                setDados('Observações sobre o ponto ou crachá')
                document.querySelector('#tipo_categoria').value = 'Ponto ou Crachá'
                break
            case 'convenioOdonto':
                setView('convenioOdonto')
                setDados('Observações sobre o convênio odontológico')
                document.querySelector('#tipo_categoria').value = 'Convênio Odontológico'
                break
            case 'gestao':
                setView('gestao')
                setDados('Observações sobre a gestão')
                document.querySelector('#tipo_categoria').value = 'Gestão'
                break
            case 'outro':
                setView('outro')
                setDados('Observações sobre outro assunto')
                document.querySelector('#tipo_categoria').value = 'Outro'
                break;
            default:
                setView('')
                break


        }
    }
    
    const cancel = () => {
        navigate('/home-solicitacao');
    }

    const sendSolic = () => {
        debugger
        try{
            const minimo = 10000000;
            const maximo = 90000000;
            const numeroAleatorio = parseInt(Math.random() * (maximo - minimo) + minimo);
            const usuarioJSON = localStorage.getItem('solicitacoes');
            let usuarioObjeto;
            if(usuarioJSON !== ''){
                usuarioObjeto = JSON.parse(usuarioJSON);      
            } 
            let infos = {
                'id': numeroAleatorio,
                'tipoSolic': document.querySelector('#tipo_categoria').value,
                'obs': document.querySelector('#txt_obs').value,
                'data': getDate(),
                'tipo': 'simple'
            }
            if(usuarioObjeto !== undefined){
                localStorage.setItem('solicitacoes', JSON.stringify([...usuarioObjeto, infos]));
            } else {
                localStorage.setItem('solicitacoes', JSON.stringify([infos]));
            }

            navigate('/confirmacao-enviada');
        }catch{
            console.log('Falha ao salvar');
        }
    }

    const getDate = () => {
        var dataAtual = new Date();

        var dia = String(dataAtual.getDate()).padStart(2, '0');
        var mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Mês é base 0, então somamos 1.
        var ano = dataAtual.getFullYear();

        var hora = String(dataAtual.getHours()).padStart(2, '0');
        var minutos = String(dataAtual.getMinutes()).padStart(2, '0');

        var dataHoraFormatada = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minutos
        return dataHoraFormatada
    }

    return(
        <motion.div id='menuContainer' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
            style={{ backgroundImage: `url(${background})` }}
        >   
            <UserDetails />
            <input type="hidden" name="tipo_categoria" id="tipo_categoria" />
            <div id="menuContent">
                <div id="sidebar">
                    <CategoriasSlider changeView={changeView}/>
                </div>
                <div id="mainContent">
                    {view === '' && <SemEscolhaAtivo />}
                    {view === 'cestaBasica' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'valeTransporte' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'convenio' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'convenioFarma' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'pagamento' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'contaBancaria' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'holerite' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'premiacao' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'ferias' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'parcerias' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'refeicao' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'pontoCracha' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'convenioOdonto' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'gestao' && <SolicitacaoDetalhes dados={dados}/>}
                    {view === 'outro' && <SolicitacaoDetalhes dados={dados}/>}
                </div>
            </div>
            <div id="categoriaBtnVoltar">
                {view === '' &&(
                    <Link to='/home-solicitacao' className='btnCategoriasVoltar'>
                        <button>Voltar</button>
                    </Link>
                )}
                {view !== '' &&(
                    <>
                        <button onClick={cancel}>Voltar</button>
                        <button onClick={sendSolic}>Enviar</button>
                    </>
                )}
            </div>
        </motion.div>
    );
}

const SolicitacaoDetalhes = ({dados}) => {
    return(
        <>
            <p>Descreva sobre a solicitação:</p>
            <textarea name="txt_obs" id="txt_obs" cols="30" rows="10" placeholder={dados}></textarea>
            
        </>
    )
}



export default MenuEscolhaCategoria;