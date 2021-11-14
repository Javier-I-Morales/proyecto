

const Ciudad = ({lugar, setCiudad, setProvincia, setTemperatura, setHumedad, setVisibilidad, setPresion, setDescripcion}) => {

    function mostrarDato1(lugar){

        setCiudad(lugar.name)
        setProvincia(lugar.province)

        setTemperatura(lugar.weather.tempDesc)
        setHumedad(lugar.weather.humidity)
        setVisibilidad(lugar.weather.visibility)
        setPresion(lugar.weather.pressure)
        setDescripcion(lugar.weather.description)
        console.log(lugar)
    }

    return ( 
        <div className="list-group-item ">
            <h5  className=" ciudad_enlace" onClick={()=>{mostrarDato1(lugar)}}>{lugar.name}</h5>
        </div>
     );
}
 
export default Ciudad;