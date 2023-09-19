import React, {useState, useEffect, useCallback} from 'react';
import './ProdutosSlider.scss'
import axios from 'axios';

function ProdutosSlider({changeView}) {
    /* eslint-disable no-unused-vars */
    const [data, setData] = useState()
    const categoria = 'epi' //useParams()
    const getData = useCallback(async () => {
        let dataDetails = await axios.get("../data/categorias.json")
            .then((res) => {return res.data.data.filter(item => item.code === categoria)})
            .catch((err) => {return console.log("Falha ao buscar informações");})

        setData(dataDetails[0].products)

    }, [categoria])
    
    useEffect(() => {
      getData()
    }, [getData])

  return(
    <div id="produtosContainer">
        {data !== undefined &&(
            data.map((item, index) => (
                <label className='categoria'>
                    <input type="radio" name="epiSwt" id='epiSwt' value={item.name} onChange={changeView}/>
                    <div>
                        <img src={item.image} alt="" cache-control="max-age=2592000"/>
                        <p>{item.name}</p>
                    </div>
                </label>
            ))
        )}

       
        
    </div>
  );
}

export default ProdutosSlider;