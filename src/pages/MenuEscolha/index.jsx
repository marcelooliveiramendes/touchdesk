import React, { useState } from 'react';
import './MenuEscolha.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import UserDetails from '../../componentes/UserDetails';
import ProdutosSlider from '../../componentes/ProdutosSlider';
import FormularioEscolha from '../../componentes/FormularioEscolha';
import { useNavigate } from "react-router-dom";
import SemEscolhaAtivo from '../../componentes/SemEscolhaAtivo';

function MenuEscolha() {
    const [epi, setEpi] = useState('')

    const navigate = useNavigate();

    const cancel = () => {
        navigate('/menu-escolha');
        document.querySelector('#tipo_epi').value = ''
    }
    const sendSolic = () => {
        debugger
        
        try{
            let size, model, color, motivo

            if(document.querySelector('input[name="sizeSwt"]:checked') !== null){
                size = document.querySelector('input[name="sizeSwt"]:checked').value
            }
            if(document.querySelector('input[name="modelSwt"]:checked') !== null){
                model = document.querySelector('input[name="modelSwt"]:checked').value
            }
            if(document.querySelector('input[name="colorsSwt"]:checked') !== null){
                color = document.querySelector('input[name="colorsSwt"]:checked').value
            }
            if(document.querySelector('input[name="motivoSwt"]:checked') !== null){
                motivo = document.querySelector('input[name="motivoSwt"]:checked').value
            }
            let name = document.querySelector('#nome_epi').value
            let image = document.querySelector('#foto_epi').value
    
            let infos = {
                'name': name,
                'image': image
            }
            if(size !== undefined){
                infos = {
                    ...infos,
                    'size': size
                }
            }
            if(model !== undefined){
                infos = {
                    ...infos,
                    'model': model
                }
            }
            if(color !== undefined){
                infos = {
                    ...infos,
                    'color': color
                }
            }
            if(motivo !== undefined){
                infos = {
                    ...infos,
                    'motivo': motivo
                }
            }
          
            localStorage.setItem('createEPI', JSON.stringify(infos));
            
            navigate('/confirmacao');
        }catch{
            console.log('Falha ao criar EPI!');
        }
        
    }
    
    const changeView = () => {
        let view = document.querySelector('input[name="epiSwt"]:checked').value
        setEpi(view)
        document.querySelector('#tipo_epi').value = view
        console.log(view)
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
            <div id="menuContent">
                <div id="sidebar">
                    <ProdutosSlider changeView={changeView}/>
                </div>
                <div id="mainContent">
                    <input type="hidden" name="tipo_epi" id="tipo_epi"/>
                    {epi === '' && <SemEscolhaAtivo />}
                    {epi !== '' && <FormularioEscolha epi={epi}/>}
                </div>
            </div>
            <div id="btnMenuActions">
                <button onClick={cancel}>Voltar</button>
                <button onClick={sendSolic}>Enviar</button>
            </div>
        </motion.div>
    );
}


export default MenuEscolha;