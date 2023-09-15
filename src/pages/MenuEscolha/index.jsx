import React, { useEffect } from 'react';
import './MenuEscolha.scss'
import { motion } from "framer-motion"
import background from './../../imgs/bg.png'
import UserDetails from '../../componentes/UserDetails';
import ProdutosSlider from '../../componentes/ProdutosSlider';
import axios from 'axios';

function MenuEscolha() {
    const getData = async () => {
        let data = await axios.get("../data/categorias.json")
                            .then((res) => {return res.data})
                            .catch((err) => {return console.log("Falha ao buscar informações");})
        console.log(data);
    }
    
    useEffect(() => {
      getData()
    }, [])
    


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
                    <ProdutosSlider />
                </div>
            </div>
        </motion.div>
    );
}

export default MenuEscolha;