import React, {useState, useEffect, useCallback} from 'react';
import './ProdutosSlider.scss'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ProdutosSlider() {
    const [data, setData] = useState()
    const {categoria} = useParams()

    console.log(categoria);

    const getData = useCallback(async () => {
        let dataDetails = await axios.get("../data/categorias.json")
            .then((res) => {return res.data.data.filter(item => item.code === categoria)})
            .catch((err) => {return console.log("Falha ao buscar informações");})

        setData(dataDetails[0].products)
        console.log(dataDetails[0]);

    }, [categoria])
    
    useEffect(() => {
      getData()
    }, [getData])

  return(
    <div id="produtosContainer">
        {data !== undefined &&(
            data.map((item, index) => (
                <Link to={`/menu-escolha/${item.code}`} key={index}>
                    <div className='card'>
                        <img src={item.image} alt=""  />
                        <p>{item.name}</p>
                    </div>
                </Link>
            ))
        )}

       
        
    </div>
  );
}

export default ProdutosSlider;