import { FunctionComponent } from "preact";
import { dog } from "../routes/dog.tsx";


const Dog: FunctionComponent<dog> = (props) => {
    const {name, max_height_male, max_height_female, max_weight_male, max_weight_female, good_with_strangers, good_with_children, good_with_other_dogs, image_link} = props;
    return (
        <div class={"cont"}>
            <image src={image_link} class={"ima"}></image>
            <ul class={"lis"}>
                <li>Nombre: {name} </li>
                <li>Altura maxima macho: {max_height_male} </li>
                <li>Altura maxima hembra: {max_height_female} </li>
                <li>Peso maximo macho: {max_weight_male} </li>
                <li>Peso maximo hembra: {max_weight_female} </li>
                <li>Bueno con estraños: {good_with_strangers} </li>
                <li>Bueno con Niños: {good_with_children} </li>
                <li>Bueno con otros Perros: {good_with_other_dogs} </li> 
                <p class={"tit"}>
                    <a  href="/">Volver al inicio</a>
                </p>
            </ul>
           
        </div>
        
    )
}

export default Dog;