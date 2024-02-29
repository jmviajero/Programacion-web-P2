import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Button from "../components/Button.tsx";
import Ciu from "../components/Ciudad.tsx";


export type Ciudad = {
    name:string ,
    latitude: number,
    longitude: number,
    country: string,
    population: number,
}

export const handler:Handlers = {
    GET: async(req:Request, ctx:FreshContext<unknown, Ciudad>) => {
    try {
        const url = new URL(req.url);
        const pais =  url.searchParams.get("ciudad")

        if (!pais) {
            return ctx.render()
        }
        

        const response = await fetch("https://api.api-ninjas.com/v1/city?name=" + pais, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'HHbHa9HXuVq5sqIDnfWIsg==rOoeYLqVDro4ri8y'
            }
        });

        

        const data = await response.json()

        

        const country: Ciudad = {
            name: data[0].name,
            latitude: data[0].latitude,
            longitude: data[0].longitude,
            country: data[0].country,
            population: data[0].population,
        }

        return ctx.render( country )
    } catch (error) {
        return ctx.render()   
    }
        

    }
}


const Page = (props: PageProps<Ciudad>) => {

    /*
*/
    return(

        <div >
            
            <form method="get" action={`/city`} class={"j"} >
                Introduce una ciudad: <input type="text" name="ciudad"/> <Button variant= "Ciudad" >Buscar</Button>
            </form>

             {props.data &&
                <Ciu 
                    name={props.data.name} 
                    latitude={props.data.latitude}
                    longitude={props.data.latitude}
                    population={props.data.population}
                    country={props.data.country}
                ></Ciu>
            }
            
        </div>
    )
}

export default Page