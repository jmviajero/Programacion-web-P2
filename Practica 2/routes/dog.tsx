import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Button from "../components/Button.tsx";
import Dog from "../components/Perro.tsx";


export type dog = {
    name:string,
    max_height_male: number,
    max_height_female: number,
    max_weight_male: number,
    max_weight_female: number,
    good_with_strangers: number,
    good_with_children: number,
    good_with_other_dogs: number,
    image_link: string
}

export const handler:Handlers = {
    GET: async(req:Request, ctx:FreshContext<unknown, dog>) => {
        try {
            const url = new URL(req.url);
        const p =  url.searchParams.get("Perro")

        if (!p) {  
            return  ctx.render();
        }
        

        const response = await fetch("https://api.api-ninjas.com/v1/dogs?name=" + p, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'HHbHa9HXuVq5sqIDnfWIsg==rOoeYLqVDro4ri8y'
            }
        });

        

        const data = await response.json()

        if (!data) {
            return  ctx.render();
        }        

        const Per: dog = {
            name: data[0].name,
            max_height_male: data[0].max_height_male,
            max_height_female: data[0].max_height_female,
            max_weight_male: data[0].max_weight_male,
            max_weight_female: data[0].max_weight_female,
            good_with_strangers: data[0].good_with_strangers,
            good_with_children: data[0].good_with_children,
            good_with_other_dogs: data[0].good_with_other_dogs,
            image_link: data[0].image_link
        }

        return ctx.render( Per )


    } catch (error) {
        return  ctx.render();
        }
    }    
}


const Page = (props: PageProps<dog>) => {

    const p = props.data
    
    return(
        <div >
            <form method="get" action={`/dog`} class={"j"} >
                Introduce una raza de Perro: <input type="text" name="Perro"/> <Button variant= "Perro" >Buscar</Button>
            </form>

            <br></br>

             { p &&
                <Dog
                name={p.name}
                max_height_male={p.max_height_male}
                max_height_female={p.max_height_female}
                max_weight_male={p.max_weight_male}
                max_weight_female={p.max_weight_female}
                good_with_strangers={p.good_with_strangers}
                good_with_children={p.good_with_children}
                good_with_other_dogs={p.good_with_other_dogs}
                image_link={p.image_link}
            ></Dog>
            } 
            
        </div>
    )
}

export default Page