import React, {useState, useEffect, useCallback} from 'react';
import './CategoriasSlider.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';

function CategoriasSlider() {
    const [data, setData] = useState()

    const getData = useCallback(async () => {
        await axios.get("../data/categorias.json")
            .then((res) => {return setData(res.data.data)})
            .catch((err) => {return console.log("Falha ao buscar informações");})
    }, [])
    
    useEffect(() => {
      getData()
    }, [getData])

    return(
        <div id="categoriasContainer">
            {data &&(
                data.map((item, index) => (
                    <Link to={`/menu-escolha/${item.code}`} key={index}>
                        <div className='card'>
                            <img src={'./../../icons/solicEPI.svg'} alt=""  />
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
}


export default CategoriasSlider;