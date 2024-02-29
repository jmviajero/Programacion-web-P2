import { FunctionComponent } from "preact";
import { Usua } from "../routes/user.tsx";


const Usuario: FunctionComponent<Usua> = (props) => {
    const {username, email, sex, address} = props;
    return (
        <div class={"letra"}>
            <h1 class={"tit"}>Usuario</h1>
            <hr></hr>
            <h5>Nombre: {username}</h5><br></br>
            <h5>Correo: {email}</h5><br></br>
            <h5>Genero: {sex}</h5><br></br>
            <h5>Direccion: {address}</h5><br></br>
            <p class={"tit"}>
                    <a  href="/">Volver al inicio</a>
            </p>
        </div>
        
    )
}

export default Usuario;