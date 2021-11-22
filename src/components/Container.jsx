import { useState } from 'react';
import { useEffect } from 'react';
import Ciudad from './Ciudad';


const Container = () => {

    const [clima, setClima] = useState([])

    let climaOrdenado = []
 
    const [ciudad, setCiudad] = useState()
    const [provincia, setProvincia] = useState()

    const [temperatura, setTemperatura] = useState()
    const [humedad, setHumedad] = useState()
    const [visibilidad, setVisibilidad] = useState()
    const [presion, setPresion] = useState()
    const [descripcion, setDescripcion] = useState()

    

    useEffect( () => {
        traeClima()
        
    },[])

    ordenaClima();
 
    

    function ordenaClima(){

        for(let ciudad of clima){
            climaOrdenado.push(ciudad.name)
        }
        climaOrdenado.sort() 
    }


    const traeClima = async () => {
        try {
            const api = await fetch('https://ws.smn.gob.ar/map_items/weather');
            const clima = await api.json();
            setClima(clima)

        } catch (error) {
            console.log(error);
        }
    }

    
    function mostrarDato(lugar){

        setCiudad(lugar.name)
        setProvincia(lugar.province)

        setTemperatura(lugar.weather.tempDesc)
        setHumedad(lugar.weather.humidity)
        setVisibilidad(lugar.weather.visibility)
        setPresion(lugar.weather.pressure)
        setDescripcion(lugar.weather.description)
        console.log(lugar)
    }


    const formulario = document.querySelector('#formulario');

    
    function cleanCadena(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    

    const filtrar = () =>{

        const texto = cleanCadena(formulario.value.toLowerCase());

        console.log(texto);
        
        for(let ciudad of clima){
            let nombre = cleanCadena(ciudad.name.toLowerCase());
            if(nombre === texto || nombre.indexOf(texto) !== -1){
                console.log(nombre);
                mostrarDato(ciudad);
            }
        }
    }


    const mostrarClima = (tipo) =>{

        return (
            tipo.map( (item, index) =>                
            (
                <Ciudad 
                    key = {index}
                    clima ={clima}
                    nombre = {item}
                    setCiudad ={setCiudad}
                    setProvincia = {setProvincia}
                    setTemperatura = {setTemperatura}
                    setHumedad = {setHumedad}
                    setVisibilidad = {setVisibilidad}
                    setPresion = {setPresion}
                    setDescripcion = {setDescripcion}
                />
            )
        ))
    }

    const mostrarImagen=(estado)=>{

        if(estado === "Despejado") return <img className='img-fluid'src="soleado.gif" alt="" />
        if(estado === "Algo nublado" || estado === "Parcialmente nublado") return <img className='img-fluid'src="algo-nublado.gif" alt="" />
        if(estado === "Cubierto" || estado === "Nublado") return <img className='img-fluid'src="cubierto.gif" alt="" />
        if(estado === "Nublado con lluvia" || estado === "Nublado con precipitación a la vista" || estado === "Nublado con lluvia en la hora anterior") return <img className='img-fluid' src="cubierto-con-lluvia.gif" alt="" />
       
    }


    return ( 

        <div className="container">
            <div className="row altura_total_datos">

                <div className="subtitulo_elije_localidad"><h3>Elije la localidad:</h3></div>
                <div><br /></div>
                
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div >
                        <div className="container" >
                        <label  className="form-label "><h4 className="subtitulos ">Buscador</h4></label><br />
                        </div>
                        <div className='row'>
                            <div className='col-10 col-md-8 col-lg-11'>
                                <input className="caja_buscar" type='text' style={{backgroundColor:"aliceblue",}} id='formulario' placeholder="Escriba su ciudad aquí..."/>

                            </div>
                            <div className='col-2 col-md-4 col-lg-1'>
                                <img className="ciudad_enlace" src="lupa.png" alt="" onClick={filtrar} />
                            </div>
                        </div>
                        
                        <br /><br />
                        <div className="lista">
                            <div className="container" >
                            {
                                mostrarClima(climaOrdenado)     
                            }
                                
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div className=" col-12 col-md-6 col-lg-8 " >
                    <div className="row container centrar">
                    <div className="subtitulos d-flex justify-content-center"><h4>Datos</h4></div>
                        <div className='marco '>
                            <h2 style={{
                                textAlign: 'center',
                            }}>{ciudad}</h2>
                            
                            <div className="d-flex justify-content-center "><h4 style={{
                                textAlign: 'center', 
                            }}>{provincia}.</h4></div>
                            
                        </div>
                    </div><br />
                    <div className="row container centrar">
                    <div className="marco">
                            <div style={{
                                textAlign: 'center', marginTop: '10px', 
                            }}><h6>Descripción:</h6></div>
                            <div className="d-flex justify-content-center"><h3> {descripcion}.</h3></div>
                            
                        </div>
                    
                    </div>
                    <br />
                    <div className=" row container centrar">
                        <div className="col-12 col-md-6 col-lg-6" style={{ paddingBottom:10}}>
                            
                                <div className="marco" style={{
                                textAlign: 'center',
                                paddingTop:5,
                                paddingBottom:5, 
                            }}>
                                    {
                                        mostrarImagen(descripcion)
                                    }
                                </div>
                            
                        </div >
                        
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="marco" style={{
                                    textAlign: 'center',
                                    paddingTop:25,
                                    paddingBottom:25, 
                                }}>

                                <div className="row">
                                    <div className="col" style={{
                                    textAlign: 'center',
                                    paddingTop:25,
                                    paddingBottom:25, 
                                }}>
                                        <h6>Temperatura: </h6><h3>{temperatura}</h3>
                                    </div>
                                    <div className="col" style={{
                                    textAlign: 'center', 
                                    paddingTop:25,
                                    paddingBottom:25,
                                }}>
                                        <h6>Humedad: </h6><h3>{humedad} %</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col" style={{
                                    textAlign: 'center', 
                                    paddingTop:25,
                                    paddingBottom:25,
                                }}>
                                        <h6>Visibilidad: </h6><h3>{visibilidad} KM</h3>
                                    </div>
                                    <div className="col" style={{
                                    textAlign: 'center', 
                                    paddingTop:25,
                                    paddingBottom:25,
                                }}>
                                        <h6>Presion: </h6><h3>{presion} hPa</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
        );
}
 
export default Container;
