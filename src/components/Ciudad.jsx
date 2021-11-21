


const Ciudad = ({clima, nombre, setCiudad, setProvincia, setTemperatura, setHumedad, setVisibilidad, setPresion, setDescripcion}) => {

    

    function mostrarDato(){

        let lugar = []

        lugar = clima.filter( c => c.name === nombre)

        setCiudad(lugar[0].name)
        setProvincia(lugar[0].province)
        
        setTemperatura(lugar[0].weather.tempDesc)
        setHumedad(lugar[0].weather.humidity)
        setVisibilidad(lugar[0].weather.visibility)
        setPresion(lugar[0].weather.pressure)
        setDescripcion(lugar[0].weather.description)
        console.log(lugar)
    }

    return ( 
        <div className="list-group-item ">
            <h5  className=" ciudad_enlace" onClick={()=>{mostrarDato()}}>{nombre}</h5>
        </div>
     );
}
 
export default Ciudad;