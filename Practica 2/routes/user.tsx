import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Usuario from "../components/Usuario.tsx";
import axios from "npm:axios"

export type Usua =  {
    username: string,
    email: string,
    sex: string,
    address: string
}


export const handler:Handlers = {

    GET: async (_req: Request, ctx: FreshContext<unknown,Usua>) => {

        
        
        const response = await axios.get("https://api.api-ninjas.com/v1/randomuser",{
            method: 'GET',
            headers: {
                'X-Api-Key': 'HHbHa9HXuVq5sqIDnfWIsg==rOoeYLqVDro4ri8y'
            },
        })

        if (!response) {
            throw new Error("Error");
            
        }
   

        return ctx.render(response.data)

    }
}


const page = (props: PageProps<Usua>) => {
    const us= props.data
    return (
        <div class={"com"}>
           
            <Usuario username={us.username} email={us.email} sex={us.sex} address={us.address}></Usuario>
            
       </div>
    )
}


export default page;