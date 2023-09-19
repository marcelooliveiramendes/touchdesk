import React, { useEffect, useState, useCallback} from 'react';
import './FormularioEscolha.scss'
import axios from 'axios';

function FormularioEscolha({epi}) {
    let motivo = ['Desgaste', 'Danos Acidentais', 'Perda', 'Tamanho Incorreto', 'Defeito', 'Outro']
    /* eslint-disable no-unused-vars */
    const [data, setData] = useState()
    

    const getData =useCallback( async () => {
    
        let dataDetails = await axios.get("../data/categorias.json")
            .then((res) => {return res.data.data[0].products.filter(item => item.name === epi)})
            .catch((err) => {return console.log("Falha ao buscar informações");})

        setData(dataDetails[0])
        console.log(dataDetails[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[epi])
    
    useEffect(() => {
      getData()
    }, [getData])
    
  return (
    <div>
        <form action="" id="formDetailsOrder">
            {data !== undefined &&(
                <>
                    <input type="hidden" name="nome_epi" id="nome_epi" value={data.name}/>
                    <input type="hidden" name="foto_epi" id="foto_epi" value={data.image}/>
                </>
            )}
            {data !== undefined &&(
                data.size !== undefined &&(
                    <>
                        <p>Selecione o tamanho: </p>
                        <div className='switchContainer'>
                            {data.size.map((item, i) => (
                                    <label className='switch' key={i}>
                                        <input type="radio" name="sizeSwt" value={item}/>
                                        <span>{item}</span>
                                    </label>
            
                            ))}
                        </div>
                    </>

                )         
            )}
            <br />
            {data !== undefined &&(
                data.models !== undefined &&(
                    <>
                        <p>Selecione o tamanho: </p>
                        <div className='switchContainer'>
                            {data.models.map((item, i) => (
                                <label className='switch' key={i + 2}>
                                    <input type="radio" name="modelSwt" value={item}/>
                                    <span>{item}</span>
                                </label>

                            ))}
                        </div>
                    </>

                )         
            )}
            <br />
            {data !== undefined &&(
                data.colors !== undefined &&(
                    <>
                        <p>Selecione a cor: </p>
                        <div className='switchContainer'>
                            {data.colors.map((item, i) => (
                                <label className='switch' key={i + 2}>
                                    <input type="radio" name="colorsSwt"  value={item}/>
                                    <span>{item}</span>
                                </label>

                            ))}
                        </div>
                    </>
                )         
            )}
            <br />
            <p>Selecione o motivo da solicitação: </p>
            <div className='switchContainer'>
                {motivo &&(
                    motivo.map((item, i) => (
                        <label className='switchMtv' key={i}>
                            <input type="radio" name="motivoSwt" value={item} />
                            <span>{item}</span>
                        </label>

                    ))
                )}

            </div>
        </form>
    </div>
  );
}

export default FormularioEscolha;