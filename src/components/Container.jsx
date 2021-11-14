import { useState } from 'react';
import { useEffect } from 'react';
import Ciudad from './Ciudad';


const Container = () => {

    const [clima, setClima] = useState([])

    const [ciudad, setCiudad] = useState()
    const [provincia, setProvincia] = useState()

    const [temperatura, setTemperatura] = useState()
    const [hummedad, setHumedad] = useState()
    const [visibilidad, setVisibilidad] = useState()
    const [presion, setPresion] = useState()
    const [descripcion, setDescripcion] = useState()

    useEffect( () => {
        traeClima()
    },[])
 
    const traeClima = async () => {
        try {
            const api = await fetch('https://ws.smn.gob.ar/map_items/weather');
            const clima = await api.json();
            setClima(clima)

        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        
        <div className="container">
            <div className="row altura_total_datos">

                <div className="subtitulo_elije_localidad"><h3>Elije la localidad:</h3></div>
                <div><br /></div>
                
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="lista">
                        <div className="container" >
                            {clima.map( item => 
                            (
                                <Ciudad 
                                    key = {item._id}
                                    lugar = {item}
                                    setCiudad ={setCiudad}
                                    setProvincia = {setProvincia}
                                    setTemperatura = {setTemperatura}
                                    setHumedad = {setHumedad}
                                    setVisibilidad = {setVisibilidad}
                                    setPresion = {setPresion}
                                    setDescripcion = {setDescripcion}
                                />
                            )
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8">
                    <div className="row container">
                    <div className="subtitulo_datos"><h3>Datos:</h3></div>
                        <div className="datos">
                            <h2 style={{
                                textAlign: 'center', 
                            }}>{ciudad}</h2>
                            <div className="d-flex justify-content-center color_Provincia"><h4>Provincia: {provincia}</h4></div>
                            
                        </div>
                    </div><br />
                    <div className="row container">
                        <div className="datos   ">
                            <div className="row">
                                <div className="col">
                                    <h6>Temperatura: <h3>{temperatura}</h3></h6>
                                </div>
                                <div className="col">
                                    <h6>Humedad: <h3>{hummedad} %</h3></h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>Visibilidad: <h3>{visibilidad} KM</h3></h6>
                                </div>
                                <div className="col">
                                    <h6>Presion: <h3>{presion} hPa</h3></h6>
                                </div>
                            </div>
                            
                        </div>
                    </div><br />
                    <div className="row container">
                    <div className="datos">
                            <div><h6>Descripción:</h6></div>
                            <div className="d-flex justify-content-center color_Provincia"><h3> {descripcion}.</h3></div>
                            
                        </div>
                    
                    </div>
                </div>

            </div>
            
        </div>
    
     );
}
 
export default Container;
