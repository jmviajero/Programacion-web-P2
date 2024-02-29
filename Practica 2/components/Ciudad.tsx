import { FunctionComponent } from "preact";
import { Ciudad } from "../routes/city.tsx";


const Ciu: FunctionComponent<Ciudad> = (props) => {
    const {name, latitude, longitude, population, country} = props;
    return (
        <div class={"com2"}>
            <h1 class={"tit"}>{name}</h1>
            <hr></hr>
            <h5>Latitude: {latitude}</h5><br></br>
            <h5>Longitude: {longitude}</h5><br></br>
            <h5>Population: {population}</h5><br></br>
            <h5>Pais: {country}</h5><br></br>
            <p class={"tit"}>
                <a  href="/">Volver al inicio</a>
            </p>
            
        </div>
        
    )
}

export default Ciu;